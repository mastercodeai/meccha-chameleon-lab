export interface VideoData {
  id: string;
  title: string;
  channel: string;
  views: string;
  duration: string;
  category: "beginner" | "painting" | "advanced" | "maps" | "entertainment";
  keyTopics: string[];
  description: string;
  videoId: string;
}

export const videos: VideoData[] = [
  {
    id: "beginner-guide-ditech",
    title: "Meccha Chameleon Game Complete Beginner Guide (Painting Mechanics and Gameplay)",
    channel: "Ditech Gaming",
    views: "96K",
    duration: "9:35",
    category: "beginner",
    keyTopics: [
      "Basic painting mechanics",
      "How the 3D Eyedropper works",
      "Hider vs Seeker fundamentals",
      "Server creation",
      "Pose system",
    ],
    description:
      "Comprehensive beginner guide covering everything new players need to know — from painting mechanics to gameplay basics. Covers the 3D Eyedropper, brush tools, and essential hiding strategies.",
    videoId: "OwrQrvNRHoY",
  },
  {
    id: "painting-tricks-lpflea",
    title: "Meccha Chameleon Painting Tricks NOBODY Is Sharing",
    channel: "LPFlea",
    views: "86K",
    duration: "19:00",
    category: "painting",
    keyTopics: [
      "Why you keep getting found",
      "How to paint FAST (brush trick)",
      "Saturation & Value explained",
      "Blocking in your disguise",
      "The 'Illusion' trick",
      "Countering shadows",
      "Metallic & Roughness quick note",
      "How scoring actually works",
    ],
    description:
      "Deep-dive into painting techniques most players don't know. Covers brush speed tricks, color theory for camouflage, and how the game's scoring system actually evaluates your paint job.",
    videoId: "h7aoHAgUtbE",
  },
  {
    id: "5-painting-tips-flipbros",
    title: "5 MUST HAVE PAINTING TIPS YOU NEED | Meccha Chameleon Guide",
    channel: "FlipBros",
    views: "53K",
    duration: "1:54",
    category: "painting",
    keyTopics: [
      "Roughness and Metallicness sliders",
      "X-Ray Rendering",
      "Move mouse fast to make dots",
      "Alternate way to pick color",
      "Color Profiles",
    ],
    description:
      "Quick-fire 5 essential painting tips — roughness/metallic sliders, X-Ray rendering for hard-to-reach areas, dot technique, and color profiles. Under 2 minutes.",
    videoId: "C_1Kedecd_A",
  },
  {
    id: "10-advanced-tips-glc",
    title: "MECCHA CHAMELEON - 10 Advanced Tips You NEED to Know",
    channel: "Game Launch Central",
    views: "57K",
    duration: "11:32",
    category: "advanced",
    keyTopics: [
      "Advanced hiding strategies",
      "Map-specific techniques",
      "Color matching under lighting",
      "Seeker psychology",
      "Movement optimization",
    ],
    description:
      "10 advanced tips for experienced players looking to level up. Covers map-specific strategies, lighting-aware color matching, and understanding seeker behavior patterns.",
    videoId: "1_p9HKjNqnk",
  },
  {
    id: "osaka-spots-lpflea",
    title: "Nobody Knows These Osaka Spots Yet… (Meccha Chameleon)",
    channel: "LPFlea",
    views: "14K",
    duration: "20:00",
    category: "maps",
    keyTopics: [
      "Osaka map-specific spots",
      "Under the Win-Win Sign trick",
      "AC Unit eye-level trick",
      "Truck painting walkthrough",
      "Octopus spot",
      "Pole + Brick blend",
    ],
    description:
      "Map-specific deep dive into the reworked Osaka — 5 lesser-known hiding spots with full painting walkthroughs. Includes what NOT to do and where seekers look first.",
    videoId: "cGXHr5aMcCw",
  },
  {
    id: "yogscast-custom-maps",
    title: "We become works of art in Meccha Chameleon's custom maps!",
    channel: "The Yogscast",
    views: "57K",
    duration: "18:00",
    category: "entertainment",
    keyTopics: [
      "Workshop custom maps",
      "Creative painting examples",
      "Multiplayer gameplay",
    ],
    description:
      "The Yogscast explores Workshop custom maps with creative painting and hilarious hiding attempts. Great for seeing the game's creative potential in action.",
    videoId: "_QkGn6GVqSo",
  },
  {
    id: "paint-tutorial-jfourmes",
    title: "How To Paint In MECCHA CHAMELEON - Tutorial",
    channel: "JfourmesPlays",
    views: "790",
    duration: "5:04",
    category: "painting",
    keyTopics: [
      "Step-by-step painting walkthrough",
      "Tool overview",
      "Brush size adjustment",
      "How to blend colors",
    ],
    description:
      "Clear 5-minute tutorial walking through the complete painting workflow — from tools to brush size to blending techniques. Good visual walkthrough for beginners.",
    videoId: "qOcwoaNtQrI",
  },
];

export function getVideosByCategory(
  category: VideoData["category"]
): VideoData[] {
  return videos.filter((v) => v.category === category);
}
