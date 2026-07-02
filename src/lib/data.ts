import mapsData from '@/data/maps.json';
import spotsData from '@/data/spots.json';
import paintData from '@/data/paint-guide.json';
import configData from '@/data/game.config.json';

// Types
export interface GameConfig {
  game: {
    name: string;
    slug: string;
    steamAppId: string;
    developer: string;
    genre: string;
    price: string;
    releaseDate: string;
    lastUpdated: string;
  };
  stats: {
    totalReviews: number;
    positiveReviews: number;
    rating: string;
    platform: string;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    baseUrl: string;
    primaryKeywords: string[];
    secondaryKeywords: string[];
    themeColor: string;
  };
  routes: { path: string; title: string; priority: string }[];
  socials: Record<string, string>;
}

export interface MapItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  difficulty: string;
  bestFor: string;
  spotCount: number;
  youtubeSource: string;
}

export interface Spot {
  id: string;
  mapId: string;
  name: string;
  slug: string;
  difficulty: string;
  description: string;
  paintAdvice: string;
  poseTips: string;
  effectiveness: number;
  youtubeSource: string;
  youtubeTimestamp: string;
}

export interface ColorInfo {
  hex: string;
  name: string;
  use: string;
}

export interface ColorPalette {
  id: string;
  mapId: string;
  name: string;
  colors: ColorInfo[];
}

// Data access
const config = configData as GameConfig;
const maps = (mapsData as { maps: MapItem[] }).maps;
const spots = (spotsData as { spots: Spot[] }).spots;
const palettes = (paintData as { colorPalettes: ColorPalette[] }).colorPalettes;

export function getGameConfig(): GameConfig {
  return config;
}

export function getMaps(): MapItem[] {
  return maps;
}

export function getMapBySlug(slug: string): MapItem | undefined {
  return maps.find((m) => m.slug === slug);
}

export function getSpotsByMap(mapId: string): Spot[] {
  return spots.filter((s) => s.mapId === mapId);
}

export function getSpotBySlug(slug: string): Spot | undefined {
  return spots.find((s) => s.slug === slug);
}

export function getAllSpots(): Spot[] {
  return spots;
}

export function getColorPalettes(): ColorPalette[] {
  return palettes;
}

export function getPaletteByMap(mapId: string): ColorPalette | undefined {
  return palettes.find((p) => p.mapId === mapId);
}

export function getTopSpots(limit: number = 5): Spot[] {
  return [...spots].sort((a, b) => b.effectiveness - a.effectiveness).slice(0, limit);
}
