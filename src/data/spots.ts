export interface SpotData {
  id: number;
  name: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  bestFor: "Hider" | "Seeker" | "Both";
  image: string;
}

// Backrooms Spots (from IGN guide)
export const backroomsSpots: SpotData[] = [
  {
    id: 1,
    name: "Chair Cluster",
    description: "A cluster of living chairs, ladders, and drawers. Use shadows to your advantage for better camouflage.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/backrooms-chairs.jpg",
  },
  {
    id: 2,
    name: "Trash Corners",
    description: "Several corners with trash thrown against the wall. Wiggle your way into these spots and blend in with the trash.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/backrooms-trash.jpg",
  },
  {
    id: 3,
    name: "Office Space",
    description: "Multiple office space corners can be tricky to fit in, but a Chameleon can hide here. Tough for Hunters to pick them out.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/backrooms-office.jpg",
  },
  {
    id: 4,
    name: "Birthday Party Hallway",
    description: "A hallway with several cakes and balloons. Hide as a balloon or use the chairs to your advantage.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/backrooms-birthday.jpg",
  },
  {
    id: 5,
    name: "Broken Highway",
    description: "Hide under police car lights or alongside vehicles. There's also a small space behind the broken road.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/backrooms-police.jpg",
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
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/mansion-ballroom.jpg",
  },
  {
    id: 2,
    name: "Study Library",
    description: "Full study library with plenty of chairs, bookcases, and objects. Rely on shadows to provide protection and play with colors!",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/mansion-study.jpg",
  },
  {
    id: 3,
    name: "Study Corner",
    description: "A small corner in the study with a chair. Try hiding underneath the chair or against the side of the bookshelves.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/mansion-corner.jpg",
  },
  {
    id: 4,
    name: "Storage Room",
    description: "Next to a trash area, offering plenty of loose objects for you to hide behind.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/mansion-storage.jpg",
  },
  {
    id: 5,
    name: "Vase Room",
    description: "Try hiding between the vases and the dark wall on the left. You can completely avoid being found here!",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/mansion-room.jpg",
  },
];

// Indoor Country Spots
export const indoorCountrySpots: SpotData[] = [
  {
    id: 1,
    name: "Cow Corner",
    description: "Corner with cow decorations and farm equipment. Match the brown and white colors.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/country-cow.jpg",
  },
  {
    id: 2,
    name: "Horse Stables",
    description: "Area with horse figures and hay. Blend in with the wooden structures.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/country-horses.jpg",
  },
  {
    id: 3,
    name: "Pumpkin Patch",
    description: "Pumpkin decoration area with good cover. Orange and green colors work well here.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/country-pumpkin.jpg",
  },
  {
    id: 4,
    name: "Hay Bales",
    description: "Stacks of hay bales providing natural camouflage. Perfect for yellow and brown chameleons.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/country-hay.jpg",
  },
  {
    id: 5,
    name: "Balloon Center",
    description: "Center area with colorful balloons. Match the balloon colors for perfect hiding.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/country-balloons.jpg",
  },
];

// Osaka Spots
export const osakaSpots: SpotData[] = [
  {
    id: 1,
    name: "Open Area",
    description: "Main open area with various objects to blend into. Use the scattered items for cover.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/osaka-open.jpg",
  },
  {
    id: 2,
    name: "Elevated Position",
    description: "Above ground level - harder to reach but provides good view for seekers.",
    difficulty: "HARD",
    bestFor: "Seeker",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/osaka-above.jpg",
  },
  {
    id: 3,
    name: "Shop District",
    description: "Area with multiple shops and market stalls. Blend in with the colorful displays.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/osaka-shops.jpg",
  },
  {
    id: 4,
    name: "Trash Area",
    description: "Trash piles providing natural cover. Perfect for darker colored chameleons.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/osaka-trash.jpg",
  },
  {
    id: 5,
    name: "Alleyway",
    description: "Narrow alleyways between buildings. Shadows provide excellent hiding spots.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/osaka-alley.jpg",
  },
];

// Penguin Hotel Spots
export const penguinHotelSpots: SpotData[] = [
  {
    id: 1,
    name: "Hotel Ballroom",
    description: "Grand ballroom with penguin decorations. Match the blue and white color scheme.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/penguin-ballroom.jpg",
  },
  {
    id: 2,
    name: "Second Floor",
    description: "Upper floor with balcony overlooking lobby. Great vantage point for seekers.",
    difficulty: "MEDIUM",
    bestFor: "Seeker",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/penguin-floor.jpg",
  },
  {
    id: 3,
    name: "Play Room",
    description: "Children play room with toys and games. Colorful environment for hiding.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/penguin-play.jpg",
  },
  {
    id: 4,
    name: "Bedroom",
    description: "Hotel bedroom with furniture. Match the bedding and curtain colors.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/penguin-bedroom.jpg",
  },
  {
    id: 5,
    name: "Hallway",
    description: "Hotel corridors connecting rooms. Use the wall patterns and shadows.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/penguin-hallway.jpg",
  },
];

// Sewer Spots
export const sewerSpots: SpotData[] = [
  {
    id: 1,
    name: "Central Hub",
    description: "Main sewer junction with pipes. Match the metal and concrete surfaces.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/sewer-center.jpg",
  },
  {
    id: 2,
    name: "Party Area",
    description: "Unexpected party setup in the sewers. Colorful decorations provide cover.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/sewer-party.jpg",
  },
  {
    id: 3,
    name: "Locker Room",
    description: "Area with maintenance lockers. Match the metal locker surfaces.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/sewer-locker.jpg",
  },
  {
    id: 4,
    name: "Flooded Section",
    description: "Partially flooded area - careful positioning needed. Water reflections can help.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/sewer-flood.jpg",
  },
  {
    id: 5,
    name: "Gas Zone",
    description: "Area with gas pipes and valves. Match the industrial colors and textures.",
    difficulty: "HARD",
    bestFor: "Seeker",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/sewer-gas.jpg",
  },
];

// Sugar Land Spots
export const sugarLandSpots: SpotData[] = [
  {
    id: 1,
    name: "Candy Houses",
    description: "Houses made of candy - colorful hiding spots. Match the frosting colors.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/candy-houses.jpg",
  },
  {
    id: 2,
    name: "Gumdrop Garden",
    description: "Garden with large gumdrops to hide behind. Bright colors work best.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/candy-gumdrops.jpg",
  },
  {
    id: 3,
    name: "Candy Locker",
    description: "Candy themed lockers. Match the sweet-themed surfaces.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/candy-locker.jpg",
  },
  {
    id: 4,
    name: "Cake Area",
    description: "Area with large cakes - hide behind frosting and decorations.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/candy-cake.jpg",
  },
  {
    id: 5,
    name: "Gingerbread Houses",
    description: "Gingerbread houses providing structural cover. Brown and white colors work well.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps/candy-gingerbread.jpg",
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
