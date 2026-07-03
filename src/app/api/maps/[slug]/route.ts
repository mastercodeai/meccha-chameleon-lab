import type { NextRequest } from "next/server";
import type { MapRow, MapResponse, SpotRow, SpotResponse } from "@/lib/types";
import { toImageUrl } from "@/lib/types";
import { getDB } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const db = await getDB();
    const { slug } = await params;

    const map = await db
      .prepare("SELECT * FROM maps WHERE slug = ?")
      .bind(slug)
      .first<MapRow>();

    if (!map) {
      return Response.json(
        { success: false, error: "Map not found" },
        { status: 404 }
      );
    }

    const { results: spotRows } = await db
      .prepare("SELECT * FROM spots WHERE map_slug = ? ORDER BY sort_order ASC")
      .bind(slug)
      .all<SpotRow>();

    const spots: SpotResponse[] = spotRows.map((s) => ({
      id: s.id,
      name: s.name,
      description: s.description,
      difficulty: s.difficulty,
      bestFor: s.best_for,
      imageUrl: toImageUrl(s.image_key),
    }));

    const mapData: MapResponse & { spots: SpotResponse[] } = {
      slug: map.slug,
      name: map.name,
      description: map.description,
      spotsCount: map.spots_count,
      difficulty: map.difficulty,
      color: map.color,
      imageUrl: toImageUrl(map.image_key),
      spots,
    };

    return Response.json({ success: true, data: mapData });
  } catch (error) {
    console.error("GET /api/maps/[slug] error:", error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
