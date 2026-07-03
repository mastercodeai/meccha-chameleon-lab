import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    // Reject path traversal attempts
    if (path.some(seg => seg === '..' || seg === '.' || seg === '')) {
      return new NextResponse('Invalid path', { status: 400 });
    }
    const key = path.join('/');
    
    // Get Cloudflare context
    const { env } = getCloudflareContext();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bucket = (env as any).ASSETS_R2;
    
    if (!bucket) {
      return new NextResponse('R2 bucket not available', { status: 500 });
    }
    
    // Get object from R2
    const object = await bucket.get(key);
    
    if (!object) {
      return new NextResponse('Not found', { status: 404 });
    }
    
    // Return the object with appropriate headers
    const headers = new Headers();
    // Infer MIME from extension if R2 has no contentType
    const ext = key.split('.').pop()?.toLowerCase();
    const mimeMap: Record<string, string> = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', svg: 'image/svg+xml', gif: 'image/gif', ico: 'image/x-icon' };
    headers.set('Content-Type', object.httpMetadata?.contentType || mimeMap[ext || ''] || 'application/octet-stream');
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    headers.set('Access-Control-Allow-Origin', '*');
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new NextResponse(object.body as any, { headers });
  } catch (error) {
    console.error('R2 proxy error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
