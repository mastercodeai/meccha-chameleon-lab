export interface RelatedGuide {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const relatedGuides: Record<string, RelatedGuide[]> = {
  beginner: [
    { title: "Hider Guide", description: "Master hiding techniques and camouflage", href: "/guides/hider", icon: "🎨" },
    { title: "Seeker Guide", description: "Learn how to find every hider", href: "/guides/seeker", icon: "🔍" },
    { title: "Tips & Tricks", description: "50 pro strategies to win more rounds", href: "/guides/tips", icon: "💡" },
    { title: "Common Mistakes", description: "Avoid the 10 most common beginner errors", href: "/guides/beginner-mistakes", icon: "⚠️" },
  ],
  hider: [
    { title: "Seeker Guide", description: "Know your enemy — understand seeker tactics", href: "/guides/seeker", icon: "🔍" },
    { title: "Paint Guide", description: "Best colors for every surface and map", href: "/guides/paint", icon: "🎨" },
    { title: "Object Combos", description: "Best hiding combinations by map", href: "/guides/combos", icon: "🧩" },
    { title: "Map Guides", description: "Hiding spots for every official map", href: "/maps", icon: "🗺️" },
  ],
  seeker: [
    { title: "Hider Guide", description: "Think like a hider to catch them faster", href: "/guides/hider", icon: "🎨" },
    { title: "Seeker Counters", description: "Advanced tactics to outplay any hider", href: "/guides/seeker-counters", icon: "🎯" },
    { title: "Tips & Tricks", description: "50 pro strategies for both roles", href: "/guides/tips", icon: "💡" },
    { title: "Map Guides", description: "Learn every map's hiding hotspots", href: "/maps", icon: "🗺️" },
  ],
  tips: [
    { title: "Beginner Guide", description: "New? Start here first", href: "/guides/beginner", icon: "📖" },
    { title: "Hider Guide", description: "Deep dive into hiding strategies", href: "/guides/hider", icon: "🎨" },
    { title: "Seeker Guide", description: "Deep dive into seeker strategies", href: "/guides/seeker", icon: "🔍" },
    { title: "Controls Guide", description: "Optimize your keyboard & controller setup", href: "/guides/controls", icon: "🎮" },
  ],
  paint: [
    { title: "Hider Guide", description: "Full hiding strategy including painting", href: "/guides/hider", icon: "🎨" },
    { title: "Object Tiers", description: "Best and worst objects to imitate", href: "/guides/object-tiers", icon: "📊" },
    { title: "Object Combos", description: "Best hiding combinations by map", href: "/guides/combos", icon: "🧩" },
    { title: "Map Guides", description: "Color references for every map", href: "/maps", icon: "🗺️" },
  ],
  controls: [
    { title: "Beginner Guide", description: "Learn the basics before optimizing controls", href: "/guides/beginner", icon: "📖" },
    { title: "Tips & Tricks", description: "Pro strategies that require good controls", href: "/guides/tips", icon: "💡" },
    { title: "Object Combos", description: "Advanced combos need precise controls", href: "/guides/combos", icon: "🧩" },
    { title: "Settings Guide", description: "Optimize your game settings", href: "/settings", icon: "⚙️" },
  ],
  combos: [
    { title: "Controls Guide", description: "Optimize controls for combo execution", href: "/guides/controls", icon: "🎮" },
    { title: "Hider Guide", description: "Full hiding strategy beyond combos", href: "/guides/hider", icon: "🎨" },
    { title: "Object Tiers", description: "Which objects work best in combos", href: "/guides/object-tiers", icon: "📊" },
    { title: "Map Guides", description: "Map-specific combo opportunities", href: "/maps", icon: "🗺️" },
  ],
  "object-tiers": [
    { title: "Object Combos", description: "Combine top-tier objects for best results", href: "/guides/combos", icon: "🧩" },
    { title: "Hider Guide", description: "How to use object selection strategically", href: "/guides/hider", icon: "🎨" },
    { title: "Paint Guide", description: "Match colors to your chosen object", href: "/guides/paint", icon: "🎨" },
    { title: "Map Guides", description: "Best objects per map", href: "/maps", icon: "🗺️" },
  ],
  "seeker-counters": [
    { title: "Seeker Guide", description: "Core seeker strategies and patterns", href: "/guides/seeker", icon: "🔍" },
    { title: "Hider Guide", description: "Understand what you're countering", href: "/guides/hider", icon: "🎨" },
    { title: "Map Guides", description: "Map-specific counter strategies", href: "/maps", icon: "🗺️" },
    { title: "Tips & Tricks", description: "More advanced strategies", href: "/guides/tips", icon: "💡" },
  ],
  "beginner-mistakes": [
    { title: "Beginner Guide", description: "The correct way to play from the start", href: "/guides/beginner", icon: "📖" },
    { title: "Tips & Tricks", description: "Pro strategies to replace bad habits", href: "/guides/tips", icon: "💡" },
    { title: "Hider Guide", description: "Stop making hiding mistakes", href: "/guides/hider", icon: "🎨" },
    { title: "Seeker Guide", description: "Stop making seeker mistakes", href: "/guides/seeker", icon: "🔍" },
  ],
  "easter-eggs": [
    { title: "Map Guides", description: "Explore every map in detail", href: "/maps", icon: "🗺️" },
    { title: "Beginner Guide", description: "Start playing before exploring secrets", href: "/guides/beginner", icon: "📖" },
    { title: "Gallery", description: "Screenshots and media from the game", href: "/gallery", icon: "📸" },
    { title: "Workshop Maps", description: "Discover 600+ community maps", href: "/workshop", icon: "🔧" },
  ],
  videos: [
    { title: "Beginner Guide", description: "Written guide for beginners", href: "/guides/beginner", icon: "📖" },
    { title: "Hider Guide", description: "Deep dive hiding strategies", href: "/guides/hider", icon: "🎨" },
    { title: "Seeker Guide", description: "Deep dive seeker strategies", href: "/guides/seeker", icon: "🔍" },
    { title: "Map Guides", description: "Visual map breakdowns", href: "/maps", icon: "🗺️" },
  ],
};
