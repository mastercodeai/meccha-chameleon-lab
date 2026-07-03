// D1 Database types
export interface MapRow {
  id: number;
  slug: string;
  name: string;
  description: string;
  spots_count: number;
  difficulty: number;
  color: string;
  image_key: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface SpotRow {
  id: number;
  map_slug: string;
  name: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  best_for: "Hider" | "Seeker" | "Both";
  image_key: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

// API response types
export interface MapResponse {
  slug: string;
  name: string;
  description: string;
  spotsCount: number;
  difficulty: number;
  color: string;
  imageUrl: string;
}

export interface SpotResponse {
  id: number;
  name: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  bestFor: "Hider" | "Seeker" | "Both";
  imageUrl: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// R2 public base URL
export const R2_PUBLIC_BASE = "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev";

export function toImageUrl(key: string): string {
  return `${R2_PUBLIC_BASE}/${key}`;
}
