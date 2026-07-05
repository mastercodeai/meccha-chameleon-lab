import type { Metadata } from "next";
import Link from "next/link";
import { workshopMaps } from "@/data/workshop";

export const metadata: Metadata = {
  title: "Workshop Maps — Best Community Maps for MECCHA CHAMELEON",
  description:
    "Discover the best community-created Workshop maps for MECCHA CHAMELEON. Curated list of top-rated maps with descriptions, difficulty notes, and direct Steam links.",
  keywords: [
    "meccha chameleon workshop",
    "meccha chameleon custom maps",
    "meccha chameleon community maps",
    "meccha chameleon workshop maps",
    "meccha chameleon best maps",
    "steam workshop meccha chameleon",
  ],
  alternates: {
    canonical: "https://mecchachameleonlab.com/workshop",
  },
};

const categoryLabels: Record<string, { label: string; color: string; icon: string }> = {
  popular: { label: "Top Rated", color: "bg-yellow-500/20 text-yellow-400", icon: "⭐" },
  trending: { label: "Trending", color: "bg-green-500/20 text-green-400", icon: "🔥" },
  crossover: { label: "Crossover", color: "bg-purple-500/20 text-purple-400", icon: "🎮" },
  creative: { label: "Creative", color: "bg-pink-500/20 text-pink-400", icon: "🎨" },
};

const categories = ["popular", "trending", "crossover", "creative"] as const;

export default function WorkshopPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-4">
        Workshop Maps
      </h1>
      <p className="font-body-main text-body-main text-on-surface-variant mb-4 max-w-2xl">
        MECCHA CHAMELEON has a thriving Workshop community with hundreds of custom maps.
        Here are some of the best ones we&apos;ve found — curated from the Steam Workshop.
      </p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
        Total Workshop maps: <span className="text-primary font-semibold">521+</span> and growing
      </p>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {categories.map((cat) => {
          const info = categoryLabels[cat];
          const count = workshopMaps.filter((m) => m.category === cat).length;
          return (
            <div
              key={cat}
              className="bg-surface border border-outline-variant rounded-lg p-4 text-center"
            >
              <div className="text-2xl mb-1">{info.icon}</div>
              <div className="font-headline-sm text-headline-sm text-on-surface">{count}</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                {info.label}
              </div>
            </div>
          );
        })}
      </div>

      {categories.map((cat) => {
        const info = categoryLabels[cat];
        const maps = workshopMaps.filter((m) => m.category === cat);
        if (maps.length === 0) return null;
        return (
          <section key={cat} className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
              <span>{info.icon}</span>
              {info.label} Maps
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {maps.map((map) => (
                <div
                  key={map.name}
                  className="bg-surface border border-outline-variant rounded-lg p-5 hover:border-primary/30 transition-colors flex flex-col"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-body-main text-body-main text-on-surface font-semibold">
                      {map.name}
                    </h3>
                    <span className={`font-label-caps text-label-caps px-2 py-0.5 rounded shrink-0 ${info.color}`}>
                      {info.label}
                    </span>
                  </div>

                  <p className="font-body-sm text-sm text-primary mb-2">
                    by {map.author}
                  </p>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">
                    {map.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {map.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-body-sm text-xs bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={map.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-primary/80 transition-colors"
                  >
                    VIEW ON STEAM WORKSHOP →
                  </a>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <div className="bg-surface border border-outline-variant rounded-lg p-6 mt-stack-lg">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
          How to Install Workshop Maps
        </h3>
        <ol className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
          <li className="flex items-start gap-2">
            <span className="text-primary font-semibold">1.</span>
            <span>Visit the Steam Workshop page for MECCHA CHAMELEON</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-semibold">2.</span>
            <span>Find a map you like and click &quot;Subscribe&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-semibold">3.</span>
            <span>The map will automatically download when you launch the game</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-semibold">4.</span>
            <span>In-game, create a server and select the Workshop map from the map list</span>
          </li>
        </ol>
        <a
          href="https://steamcommunity.com/app/4704690/workshop/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-gradient-to-r from-primary to-green-400 text-on-primary font-label-caps text-label-caps px-6 py-3 rounded text-center hover:brightness-110 transition-all"
        >
          BROWSE ALL WORKSHOP MAPS
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
        <Link
          href="/maps"
          className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
        >
          OFFICIAL MAPS
        </Link>
        <Link
          href="/guides/beginner"
          className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all"
        >
          BEGINNER GUIDE
        </Link>
      </div>
    </main>
  );
}
