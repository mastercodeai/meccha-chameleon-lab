import { NextRequest, NextResponse } from 'next/server';
import { getDB } from '@/lib/db';

// Rate limiting: in-memory store (resets on worker restart, good enough)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

function hashIP(ip: string): string {
  // Simple hash for IP anonymization
  let hash = 0;
  const str = ip + (process.env.IP_SALT || 'mc-comments');
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return 'ip_' + Math.abs(hash).toString(36);
}

function sanitizeText(text: string): string {
  return text
    .replace(/[<>]/g, '')  // strip angle brackets
    .replace(/\s+/g, ' ')  // collapse whitespace
    .trim();
}

function isValidUrl(str: string): boolean {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

// GET /api/comments?slug=maps/backrooms&cursor=0&limit=20
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const cursor = parseInt(searchParams.get('cursor') || '0', 10);
    const limit = Math.min(parseInt(searchParams.get('limit') || '20', 10), 50);

    if (!slug) {
      return NextResponse.json({ error: 'slug is required' }, { status: 400 });
    }

    const db = await getDB();

    const { results } = await db.prepare(
      `SELECT id, page_slug, nickname, email, website, content, created_at
       FROM comments
       WHERE page_slug = ? AND is_deleted = 0
       ORDER BY created_at DESC
       LIMIT ? OFFSET ?`
    ).bind(slug, limit, cursor).all();

    // Get total count
    const countResult = await db.prepare(
      `SELECT COUNT(*) as total FROM comments WHERE page_slug = ? AND is_deleted = 0`
    ).bind(slug).first() as { total: number } | null;

    return NextResponse.json({
      comments: results,
      total: countResult?.total || 0,
      cursor: cursor + limit,
    });
  } catch (error) {
    console.error('GET /api/comments error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/comments
export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || 'unknown';

    // Rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many comments. Please wait a moment.' }, { status: 429 });
    }

    const body = await request.json();
    const { slug, nickname, email, website, content, turnstileToken } = body;

    // Validate required fields
    if (!slug || typeof slug !== 'string') {
      return NextResponse.json({ error: 'Page slug is required' }, { status: 400 });
    }
    if (!nickname || typeof nickname !== 'string') {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!content || typeof content !== 'string') {
      return NextResponse.json({ error: 'Comment is required' }, { status: 400 });
    }

    // Sanitize
    const cleanNickname = sanitizeText(nickname);
    const cleanContent = sanitizeText(content);
    const cleanEmail = email ? sanitizeText(email) : null;
    const cleanWebsite = website ? sanitizeText(website) : null;

    // Validate lengths
    if (cleanNickname.length < 2 || cleanNickname.length > 20) {
      return NextResponse.json({ error: 'Name must be 2-20 characters' }, { status: 400 });
    }
    if (cleanContent.length < 1 || cleanContent.length > 500) {
      return NextResponse.json({ error: 'Comment must be 1-500 characters' }, { status: 400 });
    }

    // Validate email format if provided
    if (cleanEmail && cleanEmail.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanEmail)) {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
      }
    }

    // Validate website format if provided
    if (cleanWebsite && cleanWebsite.length > 0) {
      if (!isValidUrl(cleanWebsite)) {
        return NextResponse.json({ error: 'Invalid website URL' }, { status: 400 });
      }
    }

    // Verify Turnstile (if secret is configured)
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      if (!turnstileToken) {
        return NextResponse.json({ error: 'Verification required' }, { status: 400 });
      }

      const formData = new FormData();
      formData.append('secret', turnstileSecret);
      formData.append('response', turnstileToken);
      formData.append('remoteip', ip);

      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData,
      });
      const turnstileData = await turnstileRes.json() as { success: boolean };

      if (!turnstileData.success) {
        return NextResponse.json({ error: 'Verification failed' }, { status: 403 });
      }
    }

    // Content filter: block pure URLs
    if (/^https?:\/\//.test(cleanContent)) {
      return NextResponse.json({ error: 'Comments must contain more than just a URL' }, { status: 400 });
    }

    // Insert
    const db = await getDB();
    const ipHash = hashIP(ip);

    await db.prepare(
      `INSERT INTO comments (page_slug, nickname, email, website, content, ip_hash)
       VALUES (?, ?, ?, ?, ?, ?)`
    ).bind(slug, cleanNickname, cleanEmail, cleanWebsite, cleanContent, ipHash).run();

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('POST /api/comments error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
