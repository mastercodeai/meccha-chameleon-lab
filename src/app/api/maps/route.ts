import type { NextRequest } from "next/server";
import type { MapRow, MapResponse, ApiResponse } from "@/lib/types";
import { toImageUrl } from "@/lib/types";
import { getDB } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const db = await getDB();
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    const { results } = await db
      .prepare("SELECT * FROM maps ORDER BY sort_order ASC LIMIT ? OFFSET ?")
      .bind(limit, offset)
      .all<MapRow>();

    const data: MapResponse[] = results.map((m) => ({
      slug: m.slug,
      name: m.name,
      description: m.description,
      spotsCount: m.spots_count,
      difficulty: m.difficulty,
      color: m.color,
      imageUrl: toImageUrl(m.image_key),
    }));

    return Response.json({ success: true, data } satisfies ApiResponse<MapResponse[]>);
  } catch (error) {
    console.error("GET /api/maps error:", error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
