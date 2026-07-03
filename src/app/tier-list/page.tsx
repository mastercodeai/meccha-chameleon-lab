import Link from "next/link";
import type { Metadata } from "next";
import { maps } from "@/data/maps";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Tier List — Best Maps Ranked (2026)",
  description:
    "MECCHA CHAMELEON map tier list: all 7 official maps ranked from S-tier to C-tier. Find out which maps have the best hiding spots for hiders.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/tier-list",
  },
  keywords: [
    "meccha chameleon tier list",
    "best maps meccha chameleon",
    "meccha chameleon map ranking",
  ],
};

const sections = [
  { id: "s-tier", title: "S Tier — Best Maps" },
  { id: "a-tier", title: "A Tier — Great Maps" },
  { id: "b-tier", title: "B Tier — Good Maps" },
  { id: "c-tier", title: "C Tier — Niche Maps" },
  { id: "faq", title: "FAQ" },
];

const tierData = [
  {
    tier: "S" as const,
    id: "s-tier",
    label: "S Tier — Best Maps",
    color: "bg-yellow-500",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-400",
    glowClass: "shadow-[0_0_12px_rgba(234,179,8,0.3)]",
    maps: [
      {
        slug: "backrooms",
        reason:
          "The Backrooms is the most popular map in MECCHA CHAMELEON for good reason. Its endless yellow hallways, office spaces, and random objects provide unmatched hiding variety. Whether you're blending into wallpaper, pretending to be a piece of trash, or squeezing behind vending machines, the possibilities are endless.",
      },
      {
        slug: "osaka",
        reason:
          "Osaka is a massive Japanese-themed map with tons of unique hiding spots across shops, alleyways, and open areas. The sheer size and environmental variety make it one of the best maps for creative hiders. Elevated positions and narrow passages give skilled players plenty of room to outplay seekers.",
      },
    ],
  },
  {
    tier: "A" as const,
    id: "a-tier",
    label: "A Tier — Great Maps",
    color: "bg-green-500",
    borderColor: "border-green-500",
    textColor: "text-green-400",
    glowClass: "shadow-[0_0_12px_rgba(34,197,94,0.3)]",
    maps: [
      {
        slug: "hide-and-seek-mansion",
        reason:
          "The classic Hide-and-Seek Mansion features a ballroom, library, storage closet, and many small rooms — perfect for hide-and-seek gameplay. With 10 designated hiding spots, it offers the most variety of any map. The familiar mansion setting makes it intuitive for new players while still offering depth for veterans.",
      },
      {
        slug: "sugar-land",
        reason:
          "Sugar Land's candy-themed environment is a paint lover's dream. The colorful gumdrop gardens, cake areas, and gingerbread houses create fantastic paint combo opportunities. The vibrant colors make it easier to find matching surfaces, giving hiders a real advantage.",
      },
    ],
  },
  {
    tier: "B" as const,
    id: "b-tier",
    label: "B Tier — Good Maps",
    color: "bg-blue-500",
    borderColor: "border-blue-500",
    textColor: "text-blue-400",
    glowClass: "shadow-[0_0_12px_rgba(59,130,246,0.3)]",
    maps: [
      {
        slug: "penguin-hotel",
        reason:
          "Penguin Hotel's multi-floor layout with a ballroom, play room, and hallways offers a unique hiding experience. It's especially good for beginners thanks to its straightforward room layout. The penguin decorations add charm, though the hiding spots are a bit more predictable than top-tier maps.",
      },
      {
        slug: "indoor-country",
        reason:
          "Indoor Country features farm equipment, hay bales, and pumpkin patches in an indoor countryside setting. The open spaces can be tricky for hiders since there's less cover to work with. However, creative players can use the farm-themed props to blend in effectively.",
      },
    ],
  },
  {
    tier: "C" as const,
    id: "c-tier",
    label: "C Tier — Niche Maps",
    color: "bg-gray-500",
    borderColor: "border-gray-500",
    textColor: "text-gray-400",
    glowClass: "shadow-[0_0_12px_rgba(107,114,128,0.3)]",
    maps: [
      {
        slug: "sewer",
        reason:
          "The Sewer is the smallest map in MECCHA CHAMELEON, making it the hardest for hiders. Low visibility and tight tunnels mean seekers can cover the area quickly. While the pipes and lockers offer some hiding spots, experienced seekers will check them all in no time. Best suited for quick, intense matches.",
      },
    ],
  },
];

const faqItems = [
  {
    q: "What is the best map in MECCHA CHAMELEON?",
    a: "The Backrooms is widely considered the best map thanks to its huge variety of hiding spots, from yellow wallpaper to office furniture to random trash. Osaka is a close second with its massive size and diverse environments.",
  },
  {
    q: "What is the hardest map for hiders?",
    a: "The Sewer is the hardest map for hiders. It's the smallest map, so seekers can cover it quickly. Low visibility cuts both ways — while it's harder to see, there are fewer spots to hide in the first place.",
  },
  {
    q: "Which map is best for beginners?",
    a: "Penguin Hotel and Hide-and-Seek Mansion are both great for beginners. Penguin Hotel has a straightforward layout with clear rooms, while Mansion offers the most hiding spots (10) giving new players more options.",
  },
  {
    q: "How many maps are in MECCHA CHAMELEON?",
    a: "There are 7 official maps: Backrooms, Osaka, Hide-and-Seek Mansion, Sugar Land, Penguin Hotel, Indoor Country, and Sewer. The game also supports Workshop maps on Steam.",
  },
  {
    q: "What makes a map S-tier?",
    a: "S-tier maps have the best combination of hiding variety, map size, and creative opportunities. They offer many unique spots, diverse environments, and give skilled hiders the most room to outplay seekers.",
  },
];

export default function TierListPage() {
  const getMapData = (slug: string) => maps.find((m) => m.slug === slug)!;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Tier List", url: "https://mecchachameleonlab.com/tier-list" },
        ]}
      />
      <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar TOC */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-[100px] bg-surface border border-outline-variant rounded-lg p-4">
              <h3 className="font-label-caps text-label-caps text-on-surface mb-4 uppercase">
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors py-1 px-2 rounded hover:bg-primary/5"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="flex-1 max-w-3xl">
            <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-4">
              MECCHA CHAMELEON Tier List
            </h1>
            <p className="font-body-main text-body-main text-on-surface-variant mb-8 max-w-2xl">
              All 7 official maps ranked from S-tier to C-tier based on hiding
              variety, map size, and overall fun for hiders. Updated for 2026.
            </p>

            {/* Tier Sections */}
            {tierData.map((tier) => (
              <section key={tier.id} id={tier.id} className="mb-stack-lg">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
                  {tier.label}
                </h2>
                <div className="space-y-6">
                  {tier.maps.map((entry) => {
                    const map = getMapData(entry.slug);
                    return (
                      <div
                        key={map.slug}
                        className={`bg-surface border border-outline-variant rounded-lg overflow-hidden ${tier.glowClass}`}
                      >
                        <div className="flex flex-col sm:flex-row">
                          {/* Map Image */}
                          <Link
                            href={`/maps/${map.slug}`}
                            className="sm:w-64 shrink-0"
                          >
                            <img
                              src={map.image}
                              alt={`${map.name} map preview`}
                              className="w-full h-48 sm:h-full object-cover hover:brightness-110 transition-all"
                              loading="lazy"
                            />
                          </Link>

                          {/* Map Info */}
                          <div className="flex-1 p-5">
                            <div className="flex items-center gap-3 mb-3">
                              <span
                                className={`${tier.color} text-white font-label-caps text-label-caps px-3 py-1 rounded font-bold`}
                              >
                                {tier.tier}
                              </span>
                              <Link
                                href={`/maps/${map.slug}`}
                                className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors"
                              >
                                {map.name}
                              </Link>
                            </div>

                            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
                              {entry.reason}
                            </p>

                            <div className="flex flex-wrap gap-4 items-center">
                              <div className="flex items-center gap-2">
                                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                                  Spots:
                                </span>
                                <span className="font-body-sm text-body-sm text-primary font-semibold">
                                  {map.spots}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                                  Difficulty:
                                </span>
                                <span className="font-body-sm text-body-sm text-on-surface">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <span
                                      key={i}
                                      className={
                                        i < map.difficulty
                                          ? "text-primary"
                                          : "text-on-surface-variant/30"
                                      }
                                    >
                                      ★
                                    </span>
                                  ))}
                                </span>
                              </div>
                              <Link
                                href={`/maps/${map.slug}`}
                                className="ml-auto font-label-caps text-label-caps text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                              >
                                VIEW FULL MAP →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}

            {/* FAQ Section */}
            <section id="faq" className="mb-stack-lg">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-outline-variant rounded-lg p-5"
                  >
                    <h3 className="font-label-caps text-label-caps text-on-surface mb-2">
                      {item.q}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
              <Link
                href="/maps"
                className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all"
              >
                BROWSE ALL MAPS
              </Link>
              <Link
                href="/guides/beginner"
                className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
              >
                BEGINNER GUIDE
              </Link>
              <Link
                href="/guides/hider"
                className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all"
              >
                HIDER GUIDE
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
