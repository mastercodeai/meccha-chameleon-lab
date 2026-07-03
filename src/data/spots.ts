export interface SpotData {
  id: number;
  name: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  bestFor: "Hider" | "Seeker" | "Both";
}

// Lobby Spots
export const lobbySpots: SpotData[] = [
  {
    id: 1,
    name: "Behind the Coat Rack",
    description: "Stand still behind the coat rack and match the color of the hanging coats. Dark browns and blacks work best.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "Under the Wooden Table",
    description: "Crouch under the large wooden dining table. Paint yourself to match the dark wood grain.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "Beside the Pillar",
    description: "Stand flush against the white decorative pillar. Match the pillar color exactly for best camouflage.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 4,
    name: "Corner by the Storage Cabinet",
    description: "Squeeze into the corner next to the multi-drawer cabinet. The shadow helps hide color mismatches.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
];

// Farm Spots
export const farmSpots: SpotData[] = [
  {
    id: 1,
    name: "Among the Hay Bales",
    description: "Hide between the stacked hay bales. Paint yourself golden-yellow to match the straw color.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "Inside the Red Barn",
    description: "Stand against the barn walls. Match the red paint of the barn door with the white X design.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "Behind the Picket Fence",
    description: "Crouch behind the white picket fence. Paint yourself white to blend with the fence posts.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 4,
    name: "Near the Hot Air Balloon",
    description: "Stand near the base of the hot air balloon. Match the blue and white stripes of the balloon fabric.",
    difficulty: "HARD",
    bestFor: "Hider",
  },
];

// Hallway Spots
export const hallwaySpots: SpotData[] = [
  {
    id: 1,
    name: "Blend with the Wallpaper",
    description: "Stand against the green patterned wallpaper and match the floral design. Requires precise color matching.",
    difficulty: "HARD",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "Next to the Painting",
    description: "Stand beside the gold-framed painting on the wall. Match the dark green background of the wall.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "On the Stairs",
    description: "Crouch on the staircase steps. Paint yourself to match the stair carpet or wood color.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
];

// Walk-in Freezer Spots
export const freezerSpots: SpotData[] = [
  {
    id: 1,
    name: "Behind the Metal Shelves",
    description: "Hide behind the black metal shelving units. Dark paint helps you disappear in the shadows.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "Among the Meat Cuts",
    description: "Stand near the hanging meat on the shelves. Match the reddish-brown color of the meat surfaces.",
    difficulty: "HARD",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "Next to the Gas Tanks",
    description: "Crouch beside the silver-gray gas tanks. Metallic paint with low roughness works best.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
];

// Laundry Room Spots
export const laundrySpots: SpotData[] = [
  {
    id: 1,
    name: "On the Clothesline",
    description: "Hang among the colorful clothes on the line. Match the color of adjacent garments.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "In the Fabric Stacks",
    description: "Bury yourself in the stacks of blue, yellow, and white fabrics on the table.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "Behind the Staircase",
    description: "Hide under the wooden staircase. The dark shadows provide natural camouflage.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
];

// Helper function to get spots by map slug
export function getSpotsByMapSlug(slug: string): SpotData[] {
  const spotsMap: Record<string, SpotData[]> = {
    "lobby": lobbySpots,
    "farm": farmSpots,
    "hallway": hallwaySpots,
    "walk-in-freezer": freezerSpots,
    "laundry-room": laundrySpots,
  };
  return spotsMap[slug] || [];
}
