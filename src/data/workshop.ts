export interface WorkshopMapData {
  name: string;
  author: string;
  category: "popular" | "trending" | "crossover" | "creative";
  description: string;
  tags: string[];
  url: string;
}

export const workshopMaps: WorkshopMapData[] = [
  // Best rated in past 3 months
  {
    name: "ART GALLERY",
    author: "Popunia",
    category: "popular",
    description: "A detailed art gallery space with paintings, sculptures, and varied room layouts. Multiple color palettes across different exhibition halls make it a great training ground for color matching.",
    tags: ["art", "indoor", "colorful", "detailed"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3494410953",
  },
  {
    name: "Meccha Museum",
    author: "TeddyBearJosh",
    category: "popular",
    description: "A museum-themed map with exhibits, display cases, and grand halls. The mix of stone floors, wooden frames, and glass displays offers diverse material-matching challenges.",
    tags: ["museum", "indoor", "stone", "wood", "glass"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3497749918",
  },
  {
    name: "Meeting Room",
    author: "acid_fox",
    category: "popular",
    description: "A compact office meeting room with conference table, chairs, whiteboard, and modern decor. Great for quick rounds with its small size and neutral color palette.",
    tags: ["office", "small", "modern", "neutral"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3495598498",
  },
  {
    name: "Peak Airport",
    author: "RT",
    category: "popular",
    description: "A realistic airport terminal with check-in counters, waiting areas, luggage carousels, and gates. Large open spaces mixed with detailed seating areas.",
    tags: ["airport", "large", "modern", "gray", "open"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3495290498",
  },
  {
    name: "Viking Dining",
    author: "RareKiwi",
    category: "popular",
    description: "A Viking-themed dining hall with long wooden tables, stone walls, torch lighting, and rustic decor. Rich warm browns and stone grays dominate the palette.",
    tags: ["viking", "medieval", "wood", "stone", "warm"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3494772116",
  },
  {
    name: "Police Station",
    author: "RareKiwi",
    category: "popular",
    description: "A detailed police station with holding cells, offices, evidence rooms, and reception areas. Mix of institutional grays, blues, and wood tones.",
    tags: ["police", "indoor", "institutional", "gray", "blue"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3494772116",
  },
  {
    name: "Minecraft",
    author: "Skolas",
    category: "crossover",
    description: "A Minecraft-themed map recreated in Meccha Chameleon. Blocky terrain, pixel textures, and iconic Minecraft biomes provide a unique color-matching challenge.",
    tags: ["minecraft", "crossover", "blocky", "pixel"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3494410953",
  },
  {
    name: "Welcome to 2Fort",
    author: "ttvMinyYamori",
    category: "crossover",
    description: "Recreation of the iconic TF2 2Fort map. The bridge, sewers, and intelligence room offer varied environments with distinct color palettes.",
    tags: ["tf2", "crossover", "bridge", "sewer"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3497749918",
  },
  // Trending this week
  {
    name: "Suburb House",
    author: "RareKiwi",
    category: "trending",
    description: "A suburban house with living room, kitchen, bedrooms, garage, and backyard. Everyday household colors and textures make it relatable and fun.",
    tags: ["house", "suburban", "indoor", "everyday"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3495598498",
  },
  {
    name: "MegaMall - SuperMarket",
    author: "Ghost",
    category: "trending",
    description: "A massive shopping mall and supermarket with aisles, checkout counters, food courts, and storefronts. Bright commercial lighting and colorful product shelves.",
    tags: ["mall", "shopping", "large", "colorful", "commercial"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3495290498",
  },
  {
    name: "Delfino Plaza (Super Mario Sunshine)",
    author: "xanderrock98",
    category: "crossover",
    description: "Recreation of Delfino Plaza from Super Mario Sunshine. Tropical colors, Italian architecture, and bright seaside vibes.",
    tags: ["mario", "crossover", "tropical", "colorful"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3494772116",
  },
  {
    name: "Bazaar - Skyward Sword",
    author: "RayStormThunder",
    category: "crossover",
    description: "The bazaar area from The Legend of Zelda: Skyward Sword. Wooden stalls, fabric awnings, and fantasy-themed merchandise.",
    tags: ["zelda", "crossover", "fantasy", "wood", "fabric"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3494410953",
  },
  {
    name: "Suburban Dreams",
    author: "Shabaubi",
    category: "trending",
    description: "A dreamy suburban neighborhood with multiple houses, streets, and outdoor areas. Great for practicing outdoor color matching.",
    tags: ["suburban", "outdoor", "houses", "streets"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3497749918",
  },
  {
    name: "Little Office (Updated)",
    author: "Nuggs",
    category: "trending",
    description: "A compact office space with desks, computers, filing cabinets, and break room. Neutral office colors with occasional pops of plant green.",
    tags: ["office", "small", "modern", "neutral", "compact"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3495598498",
  },
  {
    name: "Kaufmo's Room - The Amazing Digital Circus",
    author: "aDivineDragoness",
    category: "crossover",
    description: "Recreation of Kaufmo's room from The Amazing Digital Circus. Cartoon-like colors and surreal proportions create a unique painting challenge.",
    tags: ["digital-circus", "crossover", "cartoon", "colorful"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3495290498",
  },
  {
    name: "Mini Skyrim - Dragonsreach",
    author: "RobertMod",
    category: "crossover",
    description: "A miniature version of Dragonsreach from Skyrim. Stone halls, wooden beams, and Nordic architecture with warm firelight.",
    tags: ["skyrim", "crossover", "nordic", "stone", "wood"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3494772116",
  },
  {
    name: "Meccha Olympus",
    author: "YelizarSkik",
    category: "creative",
    description: "A Greek mythology-themed map with marble columns, temples, and mythological decor. White marble and gold accents dominate.",
    tags: ["greek", "mythology", "marble", "white", "gold"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3494410953",
  },
  {
    name: "Minecraft Village",
    author: "Vamirio",
    category: "crossover",
    description: "A Minecraft village recreated with blocky aesthetics. Dirt paths, wooden houses, crop fields, and villagers.",
    tags: ["minecraft", "crossover", "village", "blocky"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3497749918",
  },
  {
    name: "Lofi Girl Room",
    author: "simon",
    category: "creative",
    description: "The iconic Lofi Girl study room. Warm ambient lighting, books, plants, and cozy interior. A relaxing map with a cohesive warm color palette.",
    tags: ["lofi", "cozy", "warm", "indoor", "aesthetic"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3495598498",
  },
  {
    name: "Tokyo 2059",
    author: "TeddyBRB",
    category: "creative",
    description: "A cyberpunk Tokyo setting with neon signs, futuristic buildings, and dark alleyways. Neon pinks, blues, and dark grays create a dramatic palette.",
    tags: ["cyberpunk", "tokyo", "neon", "futuristic", "dark"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3495290498",
  },
  {
    name: "Comet Observatory (Super Mario Galaxy)",
    author: "toent",
    category: "crossover",
    description: "Recreation of the Comet Observatory from Super Mario Galaxy. Starry skies, cosmic decor, and colorful planet-themed areas.",
    tags: ["mario", "crossover", "space", "cosmic", "colorful"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3494772116",
  },
];

export function getWorkshopByCategory(
  category: WorkshopMapData["category"]
): WorkshopMapData[] {
  return workshopMaps.filter((m) => m.category === category);
}
