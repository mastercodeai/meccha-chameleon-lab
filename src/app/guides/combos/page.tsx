import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import { relatedGuides } from "@/data/relatedGuides";
import Comments from "@/components/Comments";
import GuideSeries from "@/components/GuideSeries";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Combo Guide — Best Paint + Object Combos",
  description:
    "Master every disguise combination in MECCHA CHAMELEON. Best paint + object combos for each map with screenshots and strategies.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/combos",
  },
  openGraph: {
    title: "MECCHA CHAMELEON Combo Guide — Best Paint + Object Combos",
    description: "Master every disguise combination in MECCHA CHAMELEON. Best paint + object combos for each map with screenshots and strategies.",
    url: "https://mecchachameleonlab.com/guides/combos",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MECCHA CHAMELEON Combo Guide — Best Paint + Object Combos",
    description: "Master every disguise combination in MECCHA CHAMELEON. Best paint + object combos for each map with screenshots and strategies.",
  },
  keywords: [
    "meccha chameleon combos",
    "best disguise meccha chameleon",
    "meccha chameleon paint combos",
  ],
};

const sections = [
  { id: "how-combos-work", title: "How Combos Work" },
  { id: "universal-combos", title: "Universal Combos" },
  { id: "per-map-combos", title: "Per-Map Best Combos" },
  { id: "advanced-techniques", title: "Advanced Techniques" },
  { id: "common-mistakes", title: "Common Mistakes" },
];

const mapCombos = [
  {
    map: "Backrooms",
    slug: "backrooms",
    paint: "Yellow / Tan",
    objects: "Office chairs, trash cans, filing cabinets",
    desc: "The Backrooms are drenched in sickly yellow fluorescent light. Yellow and tan paint on office chairs, trash cans, and filing cabinets makes you nearly invisible against the stained wallpaper and worn carpet. Desaturate your yellow slightly — the fluorescent lighting washes everything out.",
    tip: "Sample the wallpaper near the ceiling for the most accurate yellow-brown blend.",
  },
  {
    map: "Hide-and-Seek Mansion",
    slug: "hide-and-seek-mansion",
    paint: "Brown / Dark Walnut",
    objects: "Wooden furniture, bookcases, dining chairs",
    desc: "Rich wooden furniture and dark bookcases dominate the Mansion. Brown and walnut-toned paint on chairs, table legs, and bookcase shelves lets you vanish into the elegant interior. The library section is especially forgiving for brown-painted objects.",
    tip: "Match the shadow side of furniture — seekers scan bright areas first.",
  },
  {
    map: "Indoor Country",
    slug: "indoor-country",
    paint: "Green / Earth Tones",
    objects: "Plants, farming equipment, hay bales",
    desc: "Green foliage, hay bales, and farming tools create a natural palette. Green paint on plant pots, garden tools, and hay bale stacks blends seamlessly. Use darker greens near the ground and lighter greens near windows where sunlight hits.",
    tip: "The pumpkin patch area has excellent natural cover with orange-brown tones.",
  },
  {
    map: "Osaka",
    slug: "osaka",
    paint: "Red / Orange",
    objects: "Vending machines, street signs, shop awnings",
    desc: "Neon signs, vending machines, and vibrant shop fronts set the tone. Red and orange paint on vending machines, street signs, and awnings works perfectly. The busy visual environment makes color-matched objects harder to notice even at close range.",
    tip: "Vending machines with red/orange paint have the highest survival rate on Osaka.",
  },
  {
    map: "Penguin Hotel",
    slug: "penguin-hotel",
    paint: "White / Light Blue",
    objects: "Ice sculptures, hotel furniture, penguin decorations",
    desc: "White marble floors, ice sculptures, and hotel furniture dominate. White and light blue paint on ice sculptures, lobby furniture, and penguin statues creates excellent camouflage. The ballroom's white decor is especially forgiving.",
    tip: "The penguin statues are small enough to hide behind but large enough to blend into.",
  },
  {
    map: "Sewer",
    slug: "sewer",
    paint: "Gray / Dark Green",
    objects: "Pipes, barrels, metal grates",
    desc: "Muted grays, dark greens, and rusty metal define the Sewer. Gray-green paint on pipes, barrels, and metal grates makes you disappear into the damp, low-lit tunnels. Add a slight orange-brown tint for rusted sections.",
    tip: "Low visibility in the Sewer is your ally — slightly off-color paint still works here.",
  },
  {
    map: "Sugar Land",
    slug: "sugar-land",
    paint: "Pink / Pastel",
    objects: "Candy objects, lollipops, gumdrop gardens",
    desc: "A candy wonderland of pinks, pastels, and bright sweets. Pink and pastel paint on lollipops, candy canes, and gumdrop objects blends perfectly. The gingerbread houses and cake areas offer rich hiding opportunities with warm brown accents.",
    tip: "Pastel pink is the single best color for Sugar Land — it matches almost everything.",
  },
];

export default function ComboGuidePage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
          { name: "Combo Guide", url: "https://mecchachameleonlab.com/guides/combos" },
        ]}
      />
      <ArticleSchema
        title="MECCHA CHAMELEON Combo Guide — Best Paint + Object Combos"
        description="Master every disguise combination in MECCHA CHAMELEON. Best paint + object combos for each map with screenshots and strategies."
        url="https://mecchachameleonlab.com/guides/combos"
        datePublished="2026-06-15"
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar TOC */}
        <aside className="lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-[100px] bg-surface border border-outline-variant rounded-lg p-4">
            <h3 className="font-label-caps text-label-caps text-on-surface mb-4 uppercase">
              Table of Contents
            </h3>
            <nav aria-label="Table of Contents" className="flex flex-col gap-1">
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
          <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-8">
            MECCHA CHAMELEON Combo Guide — Best Paint + Object Combos
          </h1>

          <GuideSeries
            parentTitle="Hider Guide"
            parentHref="/guides/hider"
            seriesTitle="Hider Guide Series"
            pages={[
              { title: "Hider Guide", href: "/guides/hider", icon: "🎨" },
              { title: "Paint Guide", href: "/guides/paint", icon: "🎨" },
              { title: "Object Combos", href: "/guides/combos", icon: "🧩", current: true },
              { title: "Object Tier List", href: "/guides/object-tiers", icon: "📊" },
            ]}
          />

          {/* How Combos Work */}
          <section id="how-combos-work" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              How Combos Work
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              A "combo" in MECCHA CHAMELEON is the pairing of your{" "}
              <span className="text-primary font-semibold">paint color</span> with the{" "}
              <span className="text-primary font-semibold">object you disguise as</span>.
              The best players don't just pick any object — they match their paint to a
              specific prop on the map, then position themselves near identical objects to
              create confusion.
            </p>
            <div className="bg-surface-container-high border border-outline-variant rounded-lg p-6 mb-4">
              <h3 className="font-label-caps text-label-caps text-primary mb-3 uppercase">
                The Combo Formula
              </h3>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">1.</span>
                  Pick an object type that appears multiple times on the map
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">2.</span>
                  Use the 3D Eyedropper to sample the exact color of that object
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">3.</span>
                  Paint your body with that color — include roughness and metallic values
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">4.</span>
                  Disguise as that object and position yourself among identical copies
                </li>
              </ul>
            </div>
            <div className="bg-surface border border-primary/30 rounded-lg p-6">
              <h3 className="font-label-caps text-label-caps text-primary mb-3 uppercase">
                Why Combos Beat Random Hiding
              </h3>
              <p className="font-body-main text-body-main text-on-surface-variant">
                A seeker scanning a room mentally filters out objects that "belong." When
                your paint perfectly matches the object you're disguised as, and that object
                type appears multiple times in the room, the seeker has to check{" "}
                <span className="text-primary font-semibold">every instance</span> — not
                just you. This multiplies your survival odds with every matching object nearby.
              </p>
            </div>
          </section>

          {/* Universal Combos */}
          <section id="universal-combos" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Universal Combos
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Some MECCHA CHAMELEON combos work on nearly every map regardless of theme.
              These are your go-to fallbacks when you don't have time to prepare
              map-specific paint.
            </p>
            <div className="space-y-4">
              {[
                {
                  combo: "Dark Paint on Dark Objects",
                  desc: "Black or very dark gray paint on chairs, bins, and shadows. Works on every map because every environment has dark corners and dark furniture. The lack of detail at low brightness makes color mismatches nearly impossible to spot.",
                  rating: "S-Tier",
                },
                {
                  combo: "Medium Gray on Generic Props",
                  desc: "A neutral medium gray on tables, counters, and shelving units. Gray is the most common ambient color across all maps. It won't be perfect anywhere, but it's never terrible either.",
                  rating: "A-Tier",
                },
                {
                  combo: "Brown on Wooden Objects",
                  desc: "Warm brown paint on any wooden furniture — tables, chairs, shelves, crates. Wood appears on nearly every map in some form. Use the eyedropper to grab the exact brown from the nearest wooden surface.",
                  rating: "A-Tier",
                },
                {
                  combo: "White on Light Objects",
                  desc: "White or off-white paint on light-colored furniture, appliances, or decorative objects. Works especially well on maps with marble, tile, or modern decor. Avoid pure white — use a slightly warm or cool tint.",
                  rating: "B-Tier",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border-l-4 border-primary rounded-r-lg p-4"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-label-caps text-label-caps text-on-surface">
                      {item.combo}
                    </h3>
                    <span className="font-body-sm text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {item.rating}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Per-Map Best Combos */}
          <section id="per-map-combos" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Per-Map Best Combos
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Each map in MECCHA CHAMELEON has a unique palette and set of props. Here
              are the best paint + object combos for every map. Master these and you'll be
              nearly impossible to find.
            </p>
            <div className="space-y-6">
              {mapCombos.map((item) => (
                <div
                  key={item.slug}
                  className="bg-surface border border-outline-variant rounded-lg p-6"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-label-caps text-label-caps text-on-surface">
                      {item.map}
                    </h3>
                    <span className="font-body-sm text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {item.paint}
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant/70 mb-2 uppercase">
                    Best Objects: {item.objects}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
                    {item.desc}
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded p-3">
                    <p className="font-body-sm text-xs text-primary">
                      💡 {item.tip}
                    </p>
                  </div>
                  <Link
                    href={`/maps/${item.slug}`}
                    className="inline-block mt-3 font-body-sm text-sm text-primary hover:underline transition-colors"
                  >
                    View full {item.map} map guide →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Advanced Techniques */}
          <section id="advanced-techniques" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Advanced Techniques
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Once you've nailed the basic combos, these advanced MECCHA CHAMELEON
              techniques will push your disguise game to the next level.
            </p>
            <div className="space-y-4">
              {[
                {
                  technique: "Timing Your Paint",
                  desc: "Don't paint at the start of the round when seekers are watching the spawn area. Move to your hiding spot first, then paint once you're in position. Some players paint mid-transit in cover — this takes practice but saves precious seconds.",
                },
                {
                  technique: "Re-Painting Mid-Round",
                  desc: "If you suspect a seeker has spotted your color, quickly re-paint to a different shade. Switching from brown to a slightly lighter or darker brown can throw off a seeker who's scanning for your original color. This is especially effective in long rounds.",
                },
                {
                  technique: "Object Cluster Strategy",
                  desc: "Find a cluster of identical objects (3+ of the same prop), paint to match, and disguise as one of them. The seeker has to check each one individually. Even if they find one, they may assume it was the only chameleon and move on.",
                },
                {
                  technique: "Lighting Zone Matching",
                  desc: "Sample paint colors from the exact lighting zone where you'll hide. A color that matches in bright light will look wrong in shadow and vice versa. Walk to your hiding spot, sample there, then paint. This accounts for ambient and direct lighting differences.",
                },
                {
                  technique: "Bait and Switch",
                  desc: "Deliberately place a slightly off-color decoy object near your perfectly matched one. Seekers often stop looking once they find the 'obvious' chameleon. This works best when you have a teammate willing to sacrifice themselves.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border-l-4 border-secondary rounded-r-lg p-4"
                >
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">
                    {item.technique}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section id="common-mistakes" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Common Mistakes
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Avoid these combo mistakes that get chameleons caught every round.
            </p>
            <div className="space-y-4">
              {[
                {
                  mistake: "Wrong Color for the Surface",
                  desc: "Painting brown on a white tile object, or white on a dark metal prop. The color-object mismatch is the easiest tell for seekers. Always sample from the exact object type you'll disguise as — not just the general area.",
                },
                {
                  mistake: "Choosing Oversized Objects",
                  desc: "Disguising as the largest object in the room draws immediate attention. Seekers instinctively notice 'new' large objects. Pick medium or small props that blend into the background clutter.",
                },
                {
                  mistake: "Ignoring Object Placement",
                  desc: "A perfectly painted chair in the middle of an open hallway is suspicious regardless of color match. Objects belong against walls, under desks, or in corners. Position yourself where that prop type would naturally appear.",
                },
                {
                  mistake: "Using a Unique Object",
                  desc: "If there's only one of a specific object type on the map, a seeker who knows the map will immediately notice the extra. Always pick objects that have multiple instances so you blend into the crowd.",
                },
                {
                  mistake: "Painting Too Late",
                  desc: "Waiting until a seeker is already nearby to start painting. The painting animation and color change are visible to everyone. Paint early, paint in cover, and re-sample if you move to a new area.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border-l-4 border-error rounded-r-lg p-4"
                >
                  <h3 className="font-label-caps text-label-caps text-error mb-1">
                    ⚠ {item.mistake}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links / Related Guides */}
          <div className="bg-surface border border-outline-variant rounded-lg p-6 mb-stack-lg">
            <h3 className="font-label-caps text-label-caps text-on-surface mb-4 uppercase">
              Related Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/paint"
                className="flex items-center gap-2 font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors py-2 px-3 rounded hover:bg-primary/5"
              >
                <span className="text-primary">→</span> Paint Guide — Best Color
                Combinations
              </Link>
              <Link
                href="/guides/hider"
                className="flex items-center gap-2 font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors py-2 px-3 rounded hover:bg-primary/5"
              >
                <span className="text-primary">→</span> Hider Guide — Survival
                Strategies
              </Link>
              <Link
                href="/guides/beginner"
                className="flex items-center gap-2 font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors py-2 px-3 rounded hover:bg-primary/5"
              >
                <span className="text-primary">→</span> Beginner Guide — Getting
                Started
              </Link>
              <Link
                href="/guides/tips"
                className="flex items-center gap-2 font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors py-2 px-3 rounded hover:bg-primary/5"
              >
                <span className="text-primary">→</span> Tips &amp; Tricks
              </Link>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
            <Link
              href="/maps"
              className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all"
            >
              BROWSE ALL MAPS
            </Link>
            <Link
              href="/guides/paint"
              className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
            >
              PAINT GUIDE
            </Link>
          </div>
        </article>
      </div>

      <RelatedPages
        pages={relatedGuides["combos"]}
        nextSteps={[
          { label: "HIDER PATH", title: "Master Hiding", description: "Deep dive into camouflage, painting, and positioning", href: "/guides/hider", icon: "🎨" },
          { label: "SEEKER PATH", title: "Hunt Better", description: "Learn to read the environment and catch hiders", href: "/guides/seeker", icon: "🔍" },
          { label: "SOCIAL PLAY", title: "Play With Friends", description: "Set up the perfect lobby for your group", href: "/guides/tips", icon: "🎮" },
        ]}
      />

      <Comments slug="guides/combos" />
    </main>
  );
}
