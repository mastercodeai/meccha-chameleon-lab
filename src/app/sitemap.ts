import { MetadataRoute } from 'next';
import { getMaps, getGameConfig } from '@/lib/data';

export const dynamic = 'force-static';

const config = getGameConfig();
const baseUrl = config.seo.baseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const mapsList = getMaps();

  const staticRoutes = config.routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: (route.path === '/' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: parseFloat(route.priority),
  }));

  const mapRoutes = mapsList.map((map) => ({
    url: `${baseUrl}/maps/${map.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...mapRoutes];
}