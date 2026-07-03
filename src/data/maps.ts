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
    slug: "backrooms",
    name: "Backrooms",
    description: "A homage to the Backrooms games with off-yellow wallpaper, office spaces, random objects, and plenty of trash. Multiple areas to explore including birthday party hallway and broken highway.",
    spots: 8,
    difficulty: 3,
    color: "#DAA520",
    image: "/screenshots/screenshot-1.jpg",
  },
  {
    slug: "hide-and-seek-mansion",
    name: "Hide-and-Seek Mansion",
    description: "A hectic location with a fancy party ballroom, study library, storage closet, and plenty of small rooms. Easy to get lost and use to your advantage!",
    spots: 10,
    difficulty: 2,
    color: "#8B7355",
    image: "/screenshots/screenshot-2.jpg",
  },
  {
    slug: "indoor-country",
    name: "Indoor Country",
    description: "An indoor countryside setting with various rooms and hiding spots. Features unique environmental elements for creative camouflage.",
    spots: 8,
    difficulty: 3,
    color: "#556B2F",
    image: "/screenshots/screenshot-3.jpg",
  },
  {
    slug: "osaka",
    name: "Osaka",
    description: "A Japanese-themed map with unique cultural elements and architecture. Offers diverse hiding opportunities in traditional and modern settings.",
    spots: 9,
    difficulty: 4,
    color: "#DDA0DD",
    image: "/screenshots/screenshot-4.jpg",
  },
  {
    slug: "penguin-hotel",
    name: "Penguin Hotel",
    description: "A hotel-themed map with penguin decorations and various rooms. Features lobbies, corridors, and guest rooms for hiding.",
    spots: 8,
    difficulty: 2,
    color: "#87CEEB",
    image: "/screenshots/screenshot-5.jpg",
  },
  {
    slug: "sewer",
    name: "Sewer",
    description: "Dark underground tunnels with pipes and grates. Low visibility makes both hiding and seeking challenging.",
    spots: 7,
    difficulty: 5,
    color: "#556B2F",
    image: "/screenshots/screenshot-1.jpg",
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    description: "A sweet-themed map with candy and dessert elements. Colorful environment offers unique camouflage opportunities.",
    spots: 8,
    difficulty: 3,
    color: "#FFB6C1",
    image: "/screenshots/screenshot-2.jpg",
  },
];

export function getMapBySlug(slug: string): MapData | undefined {
  return maps.find((m) => m.slug === slug);
}
