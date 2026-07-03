export interface MapData {
  slug: string;
  name: string;
  description: string;
  spots: number;
  difficulty: number; // 1-5
  color: string;
  image: string;
}

export const maps: MapData[] = [
  {
    slug: "lobby",
    name: "Lobby",
    description: "The default starting map with a warm indoor大厅. Wooden furniture, coat racks, and decorative pillars provide diverse hiding spots.",
    spots: 12,
    difficulty: 2,
    color: "#DEB887",
    image: "/screenshots/screenshot-4.jpg",
  },
  {
    slug: "farm",
    name: "Farm",
    description: "An outdoor farm setting with hay bales, a red barn, picket fences, and even a hot air balloon. Wide open spaces and scattered objects.",
    spots: 14,
    difficulty: 3,
    color: "#8B7355",
    image: "/screenshots/screenshot-2.jpg",
  },
  {
    slug: "hallway",
    name: "Hallway",
    description: "A corridor with green patterned wallpaper, paintings, and stairs. Tight spaces require precise painting to blend in.",
    spots: 10,
    difficulty: 4,
    color: "#556B2F",
    image: "/screenshots/screenshot-1.jpg",
  },
  {
    slug: "walk-in-freezer",
    name: "Walk-in Freezer",
    description: "A cold storage room with metal shelves, meat cuts, and gas tanks. Low lighting and industrial surfaces create challenging hiding spots.",
    spots: 11,
    difficulty: 4,
    color: "#87CEEB",
    image: "/screenshots/screenshot-3.jpg",
  },
  {
    slug: "laundry-room",
    name: "Laundry Room",
    description: "A colorful room with clotheslines, fabric stacks, and washing equipment. The variety of colors makes painting both easier and trickier.",
    spots: 13,
    difficulty: 3,
    color: "#DDA0DD",
    image: "/screenshots/screenshot-5.jpg",
  },
];

export function getMapBySlug(slug: string): MapData | undefined {
  return maps.find((m) => m.slug === slug);
}
