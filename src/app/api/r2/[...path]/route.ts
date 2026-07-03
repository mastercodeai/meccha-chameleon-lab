import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    const key = path.join('/');
    
    // Get R2 bucket
    const env = (globalThis as any).__env || {};
    const bucket = env.ASSETS_R2;
    
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
    headers.set('Content-Type', object.httpMetadata?.contentType || 'image/jpeg');
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    headers.set('Access-Control-Allow-Origin', '*');
    
    return new NextResponse(object.body, { headers });
  } catch (error) {
    console.error('R2 proxy error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
