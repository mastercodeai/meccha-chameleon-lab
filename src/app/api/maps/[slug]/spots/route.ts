import type { NextRequest } from "next/server";
import type { SpotRow, SpotResponse } from "@/lib/types";
import { toImageUrl } from "@/lib/types";
import { getDB } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const db = await getDB();
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const difficulty = searchParams.get("difficulty");
    const bestFor = searchParams.get("bestFor");

    // Whitelist validation
    const VALID_DIFFICULTIES = ["EASY", "MEDIUM", "HARD"];
    const VALID_BEST_FOR = ["Hider", "Seeker"];
    if (difficulty && !VALID_DIFFICULTIES.includes(difficulty.toUpperCase())) {
      return Response.json({ success: false, error: "Invalid difficulty" }, { status: 400 });
    }
    if (bestFor && !VALID_BEST_FOR.includes(bestFor)) {
      return Response.json({ success: false, error: "Invalid bestFor" }, { status: 400 });
    }

    let query = "SELECT * FROM spots WHERE map_slug = ?";
    const bindings: (string | number)[] = [slug];

    if (difficulty) {
      query += " AND difficulty = ?";
      bindings.push(difficulty.toUpperCase());
    }
    if (bestFor) {
      query += " AND best_for = ?";
      bindings.push(bestFor);
    }
    query += " ORDER BY sort_order ASC";

    const { results } = await db
      .prepare(query)
      .bind(...bindings)
      .all<SpotRow>();

    const data: SpotResponse[] = results.map((s) => ({
      id: s.id,
      name: s.name,
      description: s.description,
      difficulty: s.difficulty,
      bestFor: s.best_for,
      imageUrl: toImageUrl(s.image_key),
    }));

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("GET /api/maps/[slug]/spots error:", error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
