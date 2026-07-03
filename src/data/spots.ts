export interface SpotData {
  id: number;
  name: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  bestFor: "Hider" | "Seeker" | "Both";
}

// Backrooms Spots (from IGN guide)
export const backroomsSpots: SpotData[] = [
  {
    id: 1,
    name: "Living Chairs Cluster",
    description: "Hide among the cluster of living chairs, ladders, and drawers. Use the shadows to your advantage for better camouflage.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "Trash Corners",
    description: "Several corners with trash thrown against the wall. Wiggle your way into these spots and blend in with the trash.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "Office Space Corners",
    description: "Multiple office space corners can be tricky to fit in, but a Chameleon can hide here. Tough for Hunters to pick them out.",
    difficulty: "HARD",
    bestFor: "Hider",
  },
  {
    id: 4,
    name: "Birthday Party Hallway",
    description: "A hallway with several cakes and balloons. Hide as a balloon or use the chairs to your advantage.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 5,
    name: "Broken Highway & Police Cars",
    description: "Hide under police car lights or alongside vehicles. There's also a small space behind the broken road.",
    difficulty: "HARD",
    bestFor: "Hider",
  },
  {
    id: 6,
    name: "Vending Machine",
    description: "Disguise yourself using the vending machine - but be careful to watch your angles!",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
];

// Hide-and-Seek Mansion Spots (from IGN guide)
export const mansionSpots: SpotData[] = [
  {
    id: 1,
    name: "Main Ballroom",
    description: "Look like a balloon, hide in the corners, on the ceiling, or underneath any of the chairs. A hectic location for Hunters to search through.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "Study Library",
    description: "Full study library with plenty of chairs, bookcases, and objects. Rely on shadows to provide protection and play with colors!",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "Study Corner Chair",
    description: "A small corner in the study with a chair. Try hiding underneath the chair or against the side of the bookshelves.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 4,
    name: "Storage Room",
    description: "Next to a trash area, offering plenty of loose objects for you to hide behind.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 5,
    name: "Vase Room",
    description: "Try hiding between the vases and the dark wall on the left. You can completely avoid being found here!",
    difficulty: "HARD",
    bestFor: "Hider",
  },
];

// Indoor Country Spots
export const indoorCountrySpots: SpotData[] = [
  {
    id: 1,
    name: "Farm Equipment",
    description: "Hide among the farm equipment and tools. Match the color of wooden surfaces and metal objects.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "Country Furniture",
    description: "Blend in with country-style furniture and decorations. Use natural colors and textures.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "Window Areas",
    description: "Stand near windows and match the curtain colors or window frame textures.",
    difficulty: "HARD",
    bestFor: "Hider",
  },
];

// Osaka Spots
export const osakaSpots: SpotData[] = [
  {
    id: 1,
    name: "Traditional Elements",
    description: "Hide among traditional Japanese elements like screens, lanterns, and wooden structures.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "Modern Areas",
    description: "Blend in with modern Osaka architecture and urban elements.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "Neon Signs",
    description: "Match the colorful neon signs and advertisements for creative camouflage.",
    difficulty: "HARD",
    bestFor: "Hider",
  },
];

// Penguin Hotel Spots
export const penguinHotelSpots: SpotData[] = [
  {
    id: 1,
    name: "Hotel Lobby",
    description: "Hide in the hotel lobby among furniture and decorations. Match the lobby's color scheme.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "Guest Corridors",
    description: "Blend in with corridor walls and doors. Use shadows and door frames for cover.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "Penguin Decorations",
    description: "Hide near penguin-themed decorations and match their colors and shapes.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
];

// Sewer Spots
export const sewerSpots: SpotData[] = [
  {
    id: 1,
    name: "Pipe Junctions",
    description: "Hide at pipe junctions and match the metal surfaces. Low visibility helps with camouflage.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "Dark Tunnels",
    description: "Use the darkness of the tunnels to your advantage. Dark paint is essential here.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "Grate Areas",
    description: "Hide near grates and drainage areas. Match the concrete and metal textures.",
    difficulty: "HARD",
    bestFor: "Hider",
  },
];

// Sugar Land Spots
export const sugarLandSpots: SpotData[] = [
  {
    id: 1,
    name: "Candy Elements",
    description: "Hide among candy and dessert elements. Match the colorful and sweet-themed surfaces.",
    difficulty: "EASY",
    bestFor: "Hider",
  },
  {
    id: 2,
    name: "Sugar Structures",
    description: "Blend in with sugar-themed structures and decorations. Use bright colors for camouflage.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
  },
  {
    id: 3,
    name: "Sweet Surfaces",
    description: "Match the textures of cookies, frosting, and other sweet surfaces for perfect camouflage.",
    difficulty: "HARD",
    bestFor: "Hider",
  },
];

// Helper function to get spots by map slug
export function getSpotsByMapSlug(slug: string): SpotData[] {
  const spotsMap: Record<string, SpotData[]> = {
    "backrooms": backroomsSpots,
    "hide-and-seek-mansion": mansionSpots,
    "indoor-country": indoorCountrySpots,
    "osaka": osakaSpots,
    "penguin-hotel": penguinHotelSpots,
    "sewer": sewerSpots,
    "sugar-land": sugarLandSpots,
  };
  return spotsMap[slug] || [];
}
