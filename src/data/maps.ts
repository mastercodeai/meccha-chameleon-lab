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
    slug: "living-room",
    name: "Living Room",
    description: "A cozy living space with plenty of furniture to blend into. Couches, shelves, and decorations offer diverse hiding opportunities.",
    spots: 15,
    difficulty: 2,
    color: "#8B7355",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=450&fit=crop",
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    description: "A busy kitchen with counters, appliances, and cookware. White surfaces make painting easier but standing out is risky.",
    spots: 12,
    difficulty: 3,
    color: "#E8E8E8",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=450&fit=crop",
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    description: "Tight spaces with tiles and fixtures. Limited hiding spots but creative painting can make you nearly invisible.",
    spots: 10,
    difficulty: 4,
    color: "#87CEEB",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=450&fit=crop",
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    description: "A bedroom with bed, wardrobe, and decorations. Soft surfaces and varied colors create unique camouflage challenges.",
    spots: 14,
    difficulty: 2,
    color: "#DEB887",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=450&fit=crop",
  },
  {
    slug: "garage",
    name: "Garage",
    description: "A cluttered garage with tools, boxes, and vehicles. Industrial surfaces and dark corners favor skilled hiders.",
    spots: 11,
    difficulty: 3,
    color: "#696969",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=450&fit=crop",
  },
  {
    slug: "sewer",
    name: "Sewer",
    description: "Dark underground tunnels with pipes and grates. Low visibility makes both hiding and seeking challenging.",
    spots: 13,
    difficulty: 5,
    color: "#556B2F",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&h=450&fit=crop",
  },
  {
    slug: "the-backrooms",
    name: "The Backrooms",
    description: "An endless maze of yellow rooms and buzzing lights. The surreal environment creates unpredictable hiding dynamics.",
    spots: 16,
    difficulty: 4,
    color: "#DAA520",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=450&fit=crop",
  },
];

export function getMapBySlug(slug: string): MapData | undefined {
  return maps.find((m) => m.slug === slug);
}
