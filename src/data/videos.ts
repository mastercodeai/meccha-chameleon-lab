export interface VideoData {
  id: string;
  title: string;
  channel: string;
  views: string;
  duration: string;
  category: "beginner" | "painting" | "advanced" | "maps" | "entertainment";
  keyTopics: string[];
  description: string;
  url: string;
}

export const videos: VideoData[] = [
  {
    id: "beginner-guide-ditech",
    title: "Meccha Chameleon Game Complete Beginner Guide (Painting Mechanics and Gameplay)",
    channel: "Ditech Gaming",
    views: "95K",
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
    url: "https://www.youtube.com/watch?v=Meccha+Chameleon+Game+Complete+Beginner+Guide",
  },
  {
    id: "painting-tricks-lpflea",
    title: "Meccha Chameleon Painting Tricks NOBODY Is Sharing",
    channel: "LPFlea",
    views: "85K",
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
    url: "https://www.youtube.com/watch?v=Meccha+Chameleon+Painting+Tricks+NOBODY+Is+Sharing",
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
    url: "https://www.youtube.com/watch?v=5+MUST+HAVE+PAINTING+TIPS+Meccha+Chameleon",
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
    url: "https://www.youtube.com/watch?v=MECCHA+CHAMELEON+10+Advanced+Tips",
  },
  {
    id: "how-to-hide-pro",
    title: "How to Hide Like a PRO in Meccha Chameleon",
    channel: "Various",
    views: "2.3K",
    duration: "Short",
    category: "advanced",
    keyTopics: [
      "Pro hiding techniques",
      "Spot selection",
      "Paint accuracy",
    ],
    description:
      "Short-form tips on professional-level hiding techniques — spot selection, paint precision, and reading the environment like a pro.",
    url: "https://www.youtube.com/watch?v=How+to+Hide+Like+A+PRO+Meccha+Chameleon",
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
      "Lesser-known hiding locations",
      "Osaka color palettes",
      "Vertical hiding spots",
    ],
    description:
      "Map-specific deep dive into Osaka — lesser-known hiding spots, optimal color palettes for the Japanese-themed environment, and vertical hiding strategies.",
    url: "https://www.youtube.com/watch?v=Nobody+Knows+These+Osaka+Spots",
  },
  {
    id: "yogscast-custom-maps",
    title: "We become works of art in Meccha Chameleon's custom maps!",
    channel: "The Yogscast",
    views: "56K",
    duration: "18:00",
    category: "entertainment",
    keyTopics: [
      "Workshop custom maps",
      "Creative painting examples",
      "Multiplayer gameplay",
    ],
    description:
      "The Yogscast explores Workshop custom maps with creative painting and hilarious hiding attempts. Great for seeing the game's creative potential in action.",
    url: "https://www.youtube.com/watch?v=Yogscast+Meccha+Chameleon+custom+maps",
  },
  {
    id: "color-matching-jp",
    title: "Meccha Chameleon Paint Tutorial",
    channel: "JfourmesPlays",
    views: "763",
    duration: "5:04",
    category: "painting",
    keyTopics: [
      "Step-by-step painting walkthrough",
      "Tool overview",
      "Brush size adjustment",
      "How to blend colors",
    ],
    description:
      "Clear 5-minute tutorial walking through the complete painting workflow — from tools to brush size to blending techniques. Good visual walkthrough.",
    url: "https://www.youtube.com/watch?v=Meccha+Chameleon+Paint+Tutorial+JfourmesPlays",
  },
];

export function getVideosByCategory(
  category: VideoData["category"]
): VideoData[] {
  return videos.filter((v) => v.category === category);
}
