import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop — Best Maps & Mods",
  description: "Browse 489 community-created Workshop maps for MECCHA CHAMELEON. Find the best custom maps with ratings and subscribe links.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/workshop",
  },
};

export default function WorkshopPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <div className="text-center mb-stack-lg">
        <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase">
          Workshop
        </h1>
        <p className="font-body-main text-body-main text-on-surface-variant mt-4">
          489 community maps and mods. Find your next favorite custom map.
        </p>
        <a
          href="https://steamcommunity.com/app/4704690/workshop/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps rounded shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all"
        >
          BROWSE ON STEAM
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Top Workshop Maps */}
      <div className="mb-stack-lg">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-6 uppercase">Most Popular Maps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Minecraft", author: "Skolas", rank: 1 },
            { name: "ART GALLERY", author: "Popunia", rank: 2 },
            { name: "Simpsons Family House", author: "Nico", rank: 3 },
            { name: "Swimming Pool", author: "Popunia", rank: 4 },
            { name: "Bikini Bottom", author: "GewoonKerin", rank: 5 },
            { name: "Meeting Room", author: "acid_fox", rank: 6 },
            { name: "Police Station", author: "RareKiwi", rank: 7 },
            { name: "Peak Airport", author: "RT", rank: 8 },
            { name: "The Market", author: "Tunep", rank: 9 },
          ].map((item) => (
            <div
              key={item.rank}
              className="bg-surface border border-outline-variant rounded-lg p-5 glow-hover transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">#{item.rank}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-base text-on-surface">{item.name}</h3>
                  <p className="text-xs text-on-surface-variant">by {item.author}</p>
                </div>
              </div>
              <a
                href="https://steamcommunity.com/app/4704690/workshop/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-container transition-colors font-label-caps"
              >
                Subscribe on Steam
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="bg-surface border border-outline-variant rounded-lg p-8 text-center">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Full Workshop Database Coming Soon</h2>
        <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl mx-auto">
          We&apos;re building a searchable database of all 489 Workshop items with ratings, subscriber counts, and detailed descriptions. In the meantime, browse the full collection on Steam Workshop.
        </p>
      </div>
    </main>
  );
}
