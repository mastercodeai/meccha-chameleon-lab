import type { D1Database } from '@cloudflare/workers-types';

declare global {
  interface CloudflareEnv {
    DB?: D1Database;
  }
}

export async function getDB(): Promise<D1Database> {
  const { getCloudflareContext } = await import('@opennextjs/cloudflare');
  const { env } = getCloudflareContext();
  
  if (!env.DB) {
    throw new Error('D1 binding "DB" not found. Check wrangler.jsonc d1_databases config.');
  }
  return env.DB;
}
