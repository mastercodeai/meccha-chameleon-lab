import type { D1Database } from '@cloudflare/workers-types';

declare global {
  interface CloudflareEnv {
    DB?: D1Database;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ASSETS_R2?: any;
  }
}

// Cache the import to avoid repeated dynamic imports
let _cfContext: typeof import('@opennextjs/cloudflare') | null = null;

export async function getDB(): Promise<D1Database> {
  if (!_cfContext) {
    _cfContext = await import('@opennextjs/cloudflare');
  }
  const { env } = _cfContext.getCloudflareContext();
  
  if (!env.DB) {
    throw new Error('D1 binding "DB" not found. Check wrangler.jsonc d1_databases config.');
  }
  return env.DB;
}
