import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/Schema";

const guides = [
  {
    title: "Beginner Guide",
    description: "How to play, basic strategies, and everything you need to win your first rounds.",
    href: "/guides/beginner",
    icon: "📖",
    tag: "Start Here",
  },
  {
    title: "Hider Guide",
    description: "Painting techniques, object selection, positioning, and advanced hiding strategies.",
    href: "/guides/hider",
    icon: "🎨",
    tag: "Essential",
  },
  {
    title: "Seeker Guide",
    description: "Search patterns, reading the environment, team coordination, and hunting tactics.",
    href: "/guides/seeker",
    icon: "🔍",
    tag: "Essential",
  },
  {
    title: "Paint Guide",
    description: "Best colors for every surface, map-specific palettes, and advanced painting techniques.",
    href: "/guides/paint",
    icon: "🎨",
    tag: "Hider",
  },
  {
    title: "Tips & Tricks",
    description: "50 pro strategies covering both hider and seeker roles.",
    href: "/guides/tips",
    icon: "💡",
    tag: "All Levels",
  },
  {
    title: "Object Combos",
    description: "Best paint + object hiding combinations for each map.",
    href: "/guides/combos",
    icon: "🧩",
    tag: "Advanced",
  },
  {
    title: "Object Tier List",
    description: "Ranked list of the best and worst objects to disguise as.",
    href: "/guides/object-tiers",
    icon: "📊",
    tag: "Reference",
  },
  {
    title: "Seeker Counters",
    description: "Advanced tactics to outplay the seeker and survive longer.",
    href: "/guides/seeker-counters",
    icon: "🎯",
    tag: "Advanced",
  },
  {
    title: "Controls Guide",
    description: "Keyboard, mouse, and controller setup for optimal gameplay.",
    href: "/guides/controls",
    icon: "🎮",
    tag: "Setup",
  },
  {
    title: "Common Mistakes",
    description: "10 errors new players make and how to fix them.",
    href: "/guides/beginner-mistakes",
    icon: "⚠️",
    tag: "Beginner",
  },
  {
    title: "Easter Eggs & Secrets",
    description: "Hidden rooms, secret objects, developer references, and community discoveries.",
    href: "/guides/easter-eggs",
    icon: "🥚",
    tag: "Fun",
  },
  {
    title: "Video Tutorials",
    description: "Curated video guides for visual learners.",
    href: "/guides/videos",
    icon: "🎬",
    tag: "Visual",
  },
  {
    title: "Game Modes",
    description: "Basic, Infection, and Double mode explained. Plus lobby settings for every play style.",
    href: "/guides/game-modes",
    icon: "🎮",
    tag: "Essential",
  },
  {
    title: "Game Mechanics",
    description: "How the paint system, clones, taunts, and scoring actually work under the hood.",
    href: "/guides/mechanics",
    icon: "⚙️",
    tag: "Deep Dive",
  },
  {
    title: "Workshop Maps",
    description: "600+ custom maps, how to subscribe, best picks, and creating your own.",
    href: "/guides/workshop",
    icon: "🔧",
    tag: "Community",
  },
];

export default function GuidesPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
        ]}
      />

      <div className="mb-stack-lg">
        <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface mb-4">
          MECCHA CHAMELEON Guides
        </h1>
        <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl">
          Everything you need to master MECCHA CHAMELEON. Start with the beginner guide, or jump
          into the specific topic you want to improve on.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group bg-surface border border-outline-variant rounded-lg p-6 hover:border-primary/50 hover:scale-[1.02] transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">{guide.icon}</span>
              <span className="font-label-caps text-label-caps text-primary/70 bg-primary/10 px-2 py-1 rounded">
                {guide.tag}
              </span>
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mb-2">
              {guide.title}
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}