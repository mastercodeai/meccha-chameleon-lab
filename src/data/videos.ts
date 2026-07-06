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
    id: "best-spot-every-map-flipbros",
    title: "THE BEST HIDING SPOT IN EVERY MAP! | Meccha Chameleon Guide",
    channel: "FlipBros",
    views: "14K",
    duration: "3:49",
    category: "maps",
    keyTopics: [
      "Hide and Seek Mansion best spot",
      "Sewers best spot",
      "Backrooms best spot",
      "Indoor Country best spot",
      "Penguin Hotel best spot",
    ],
    description:
      "Quick-fire guide covering the single best hiding spot on every official map. Mansion, Sewers, Backrooms, Indoor Country, and Penguin Hotel — each with a painting walkthrough.",
    videoId: "tiwvQyc2a8k",
  },
  {
    id: "viral-tiktok-spots",
    title: "Trying BEST VIRAL TikTok Hiding Spots in Meccha Chameleon!",
    channel: "Shorty",
    views: "890K",
    duration: "34:09",
    category: "maps",
    keyTopics: [
      "Mansion viral spots",
      "Penguin Hotel viral spots",
      "Sugar Land viral spots",
      "Sewers viral spots",
      "Backrooms viral spots",
    ],
    description:
      "Testing the most viral TikTok hiding spots across 5 maps — Mansion, Penguin Hotel, Sugar Land, Sewers, and Backrooms. Full painting walkthrough for each spot with honest verdicts on what actually works.",
    videoId: "3Wdx0JD8Ttw",
  },
  {
    id: "secret-spots-maps",
    title: "I Found SECRET Hiding Spots in MECCHA CHAMELEON",
    channel: "KreekCraft",
    views: "2.1M",
    duration: "30:16",
    category: "maps",
    keyTopics: [
      "Hidden spots most players miss",
      "Multi-map walkthrough",
      "Advanced camouflage techniques",
      "Paint blending tricks",
    ],
    description:
      "Deep exploration of secret hiding spots across multiple maps that most players don't know about. Shows the painting process step by step and explains why each spot works so well.",
    videoId: "KnFtN02_eYA",
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
