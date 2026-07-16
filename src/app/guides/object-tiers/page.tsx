import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import { relatedGuides } from "@/data/relatedGuides";
import Comments from "@/components/Comments";
import GuideSeries from "@/components/GuideSeries";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Object Tier List — Best Objects to Disguise As",
  description:
    "Complete object tier list for MECCHA CHAMELEON: ranked from S-tier to C-tier. Learn which objects are the best to disguise as for maximum survival.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/object-tiers",
  },
  keywords: [
    "meccha chameleon best objects",
    "meccha chameleon object tier list",
    "what to disguise as meccha chameleon",
  ],
  openGraph: {
    title:
      "MECCHA CHAMELEON Object Tier List — Best Objects to Disguise As",
    description:
      "Complete object tier list for MECCHA CHAMELEON: ranked from S-tier to C-tier. Learn which objects are the best to disguise as for maximum survival.",
    url: "https://mecchachameleonlab.com/guides/object-tiers",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MECCHA CHAMELEON Object Tier List — Best Objects to Disguise As",
    description:
      "Complete object tier list for MECCHA CHAMELEON: ranked from S-tier to C-tier. Learn which objects are the best to disguise as for maximum survival.",
  },
};

const sections = [
  { id: "how-selection-works", title: "How Object Selection Works" },
  { id: "s-tier", title: "S-Tier Objects (Best)" },
  { id: "a-tier", title: "A-Tier Objects (Great)" },
  { id: "b-tier", title: "B-Tier Objects (Situational)" },
  { id: "c-tier", title: "C-Tier Objects (Avoid)" },
  { id: "size-matters", title: "Size Matters" },
  { id: "environment-matching", title: "Environment Matching" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function ObjectTiersPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
          {
            name: "Object Tier List",
            url: "https://mecchachameleonlab.com/guides/object-tiers",
          },
        ]}
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
            Object Tier List
          </h1>

          <GuideSeries
            parentTitle="Hider Guide"
            parentHref="/guides/hider"
            seriesTitle="Hider Guide Series"
            pages={[
              { title: "Hider Guide", href: "/guides/hider", icon: "🎨" },
              { title: "Paint Guide", href: "/guides/paint", icon: "🎨" },
              { title: "Object Combos", href: "/guides/combos", icon: "🧩" },
              { title: "Object Tier List", href: "/guides/object-tiers", icon: "📊", current: true },
            ]}
          />

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <p className="font-body-sm text-body-sm text-yellow-200">
              ⚠️ <strong>Note:</strong> Ratings are based on community experience and player feedback. Actual effectiveness may vary by lobby and playstyle.
            </p>
          </div>

          {/* How Object Selection Works */}
          <section id="how-selection-works" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              How Object Selection Works
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              In MECCHA CHAMELEON, your survival as a Hider depends on three
              critical factors when choosing which object to become:{" "}
              <span className="text-primary font-semibold">size</span>,{" "}
              <span className="text-primary font-semibold">shape</span>, and{" "}
              <span className="text-primary font-semibold">
                environment matching
              </span>
              . The best objects are small enough to avoid suspicion, shaped
              simply enough to replicate with paint, and common enough that
              Seekers won&apos;t give them a second glance.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant">
              This tier list ranks every common object type based on how
              effective it is for blending in across all maps. Objects are
              ranked by versatility — S-tier objects work almost everywhere,
              while C-tier objects should be avoided unless you&apos;re going
              for a risky play. For painting tips, check the{" "}
              <Link
                href="/guides/hider"
                className="text-primary hover:underline"
              >
                Hider Guide
              </Link>
              .
            </p>
          </section>

          {/* S-Tier */}
          <section id="s-tier" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              S-Tier Objects (Best)
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              These are the undisputed best objects to disguise as. They appear
              on nearly every map, look natural in most environments, and have
              a low profile that won&apos;t draw attention.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Small Trash Cans",
                  desc: "Found absolutely everywhere — offices, streets, hallways, warehouses. A small trash can is the most universal disguise in the game. Their simple cylindrical shape is easy to replicate with paint, and Seekers rarely inspect them individually.",
                  tier: "S",
                },
                {
                  name: "Office Chairs",
                  desc: "Common in most indoor maps, especially office and residential settings. Chairs are part of the visual clutter that Seekers learn to ignore. The wheeled base and seat shape are straightforward to paint.",
                  tier: "S",
                },
                {
                  name: "Potted Plants",
                  desc: "Natural decoration found in lobbies, offices, homes, and outdoor areas. Potted plants are never suspicious — they exist purely for aesthetics, so Seekers have no reason to scrutinize them closely.",
                  tier: "S",
                },
                {
                  name: "Cardboard Boxes",
                  desc: "The classic hiding spot. Cardboard boxes have a universal, small footprint and appear in storage rooms, shipping areas, warehouses, and even offices. Their simple rectangular shape is one of the easiest to replicate.",
                  tier: "S",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-surface border border-primary/30 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-primary text-on-primary font-label-caps text-label-caps px-3 py-1 rounded">
                      {item.tier}
                    </span>
                    <h3 className="font-headline-md text-on-surface">
                      {item.name}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* A-Tier */}
          <section id="a-tier" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              A-Tier Objects (Great)
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Excellent choices that work well on specific map types. They may
              not be as universally applicable as S-tier, but when the
              environment fits, they&apos;re nearly unbeatable.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Barrels",
                  desc: "A staple on industrial, urban, and warehouse maps. Barrels have a distinctive cylindrical shape that&apos;s easy to replicate, and they naturally cluster together — hiding among a group of barrels is extremely effective.",
                  tier: "A",
                },
                {
                  name: "Vending Machines",
                  desc: "Taller than most disguises, but extremely common in schools, offices, malls, and transit areas. A vending machine placed against a wall draws zero attention. The key is matching the specific design of nearby machines.",
                  tier: "A",
                },
                {
                  name: "Fire Hydrants",
                  desc: "Small and low-profile on outdoor maps. Fire hydrants are a classic urban prop that Seekers walk past constantly. Their compact size makes them easy to paint, though they only work on outdoor/street maps.",
                  tier: "A",
                },
                {
                  name: "Luggage / Suitcases",
                  desc: "Perfect for hotel, airport, and residential maps. Luggage blends naturally into travel-themed environments. The varied shapes and colors of suitcases give you creative freedom with your paint job.",
                  tier: "A",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-surface border border-green-400/20 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-green-600 text-white font-label-caps text-label-caps px-3 py-1 rounded">
                      {item.tier}
                    </span>
                    <h3 className="font-headline-md text-on-surface">
                      {item.name}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* B-Tier */}
          <section id="b-tier" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              B-Tier Objects (Situational)
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              These objects can work, but only in the right context. Using them
              on the wrong map or in the wrong area will get you caught
              instantly. Check the{" "}
              <Link href="/maps" className="text-primary hover:underline">
                map pages
              </Link>{" "}
              to know which environments support these disguises.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Traffic Cones",
                  desc: "Only effective on outdoor and construction maps. A traffic cone sitting in the middle of an office hallway is an instant giveaway. On the right map, though, their bright orange color actually helps — Seekers associate them with the environment, not players.",
                  tier: "B",
                },
                {
                  name: "Mannequins",
                  desc: "Only found in clothing stores, malls, and specific indoor rooms. A mannequin in a warehouse is suspicious, but in a retail setting it&apos;s perfect. The humanoid shape can actually work in your favor — Seekers expect them in certain locations.",
                  tier: "B",
                },
                {
                  name: "Musical Instruments",
                  desc: "Limited to music rooms, studios, theaters, and living rooms. Guitars, drums, and pianos only exist in specific areas. If you can find the right room, these make for creative and unexpected disguises.",
                  tier: "B",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-surface border border-yellow-500/20 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-yellow-600 text-white font-label-caps text-label-caps px-3 py-1 rounded">
                      {item.tier}
                    </span>
                    <h3 className="font-headline-md text-on-surface">
                      {item.name}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* C-Tier */}
          <section id="c-tier" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              C-Tier Objects (Avoid)
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              These are the worst objects to disguise as. They draw attention,
              are hard to replicate accurately, or simply don&apos;t belong
              anywhere on most maps.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Giant Objects",
                  desc: "Anything oversized — giant teddy bears, oversized statues, massive furniture. These are too suspicious. Seekers will always investigate large objects because they stand out visually and are easy to check from across the room.",
                  tier: "C",
                },
                {
                  name: "Rare / Unique Objects",
                  desc: "One-of-a-kind items like a trophy case centerpiece, a vintage clock, or a specific painting. If there&apos;s only one of something on the map, Seekers will immediately notice a duplicate. Never disguise as something that should be unique.",
                  tier: "C",
                },
                {
                  name: "Moving Objects",
                  desc: "Fans, swinging pendulums, or anything with animation. You can&apos;t replicate the movement with paint, and a static version of a moving object breaks immersion instantly. Seekers will spot the difference immediately.",
                  tier: "C",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-surface border border-red-500/20 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-600 text-white font-label-caps text-label-caps px-3 py-1 rounded">
                      {item.tier}
                    </span>
                    <h3 className="font-headline-md text-on-surface">
                      {item.name}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Size Matters */}
          <section id="size-matters" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Size Matters
            </h2>
            <div className="bg-surface border border-primary/30 rounded-lg p-6 mb-4">
              <p className="font-body-main text-body-main text-on-surface">
                When it comes to object disguises, smaller is almost always
                better. A small trash can, a fire hydrant, or a cardboard box
                occupies a small visual footprint — Seekers scan over them
                without a second thought.
              </p>
            </div>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Large objects like bookshelves, refrigerators, or entertainment
              centers are tempting because they hide more of your body, but
              they backfire for two reasons:
            </p>
            <div className="space-y-4">
              {[
                {
                  tip: "They draw the eye",
                  desc: "Large objects take up more visual space, meaning Seekers are more likely to notice something off — a slight color mismatch, an odd shadow, or a missing detail.",
                },
                {
                  tip: "They're easier to inspect",
                  desc: "Seekers naturally walk up to large objects to check them. A small object on a shelf gets a passing glance; a large cabinet gets a full inspection.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4"
                >
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">
                    {item.tip}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-body-main text-body-main text-on-surface-variant mt-4">
              Stick to small and medium objects. Your goal isn&apos;t to hide
              your entire body — it&apos;s to look like something a Seeker
              wouldn&apos;t think twice about.
            </p>
          </section>

          {/* Environment Matching */}
          <section id="environment-matching" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Environment Matching
            </h2>
            <div className="bg-surface-container-high border border-primary/30 rounded-lg p-6 mb-4">
              <h3 className="font-label-caps text-label-caps text-primary mb-3 uppercase">
                The #1 Rule
              </h3>
              <p className="font-body-main text-body-main text-on-surface">
                Your object <span className="font-bold">must belong</span>{" "}
                where you place it. A traffic cone in a living room is
                suspicious. A potted plant in a parking lot is suspicious.
                Context is everything.
              </p>
            </div>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Before you commit to a disguise, ask yourself:{" "}
              <em>&quot;Would this object naturally exist in this exact
              spot?&quot;</em> If the answer is no, find a different object or
              a different location.
            </p>
            <div className="space-y-4">
              {[
                {
                  tip: "Study the map before the round starts",
                  desc: "Use the prep time to memorize what objects exist and where. Note clusters of similar objects — disguising as the 5th barrel in a row is far more effective than being the only barrel in a hallway.",
                },
                {
                  tip: "Match the style, not just the type",
                  desc: "An office chair in an industrial warehouse looks wrong even though it&apos;s a chair. Pay attention to the design language of each area — modern vs. rustic, clean vs. worn.",
                },
                {
                  tip: "Avoid empty spaces",
                  desc: "If a shelf has items on the left side but is empty on the right, don&apos;t place yourself on the empty side. Seekers notice when something appears where nothing was before.",
                },
                {
                  tip: "Check your surroundings from Seeker angles",
                  desc: "View your hiding spot from doorways, hallways, and common patrol paths. What looks perfect from your perspective might be obvious from a Seeker&apos;s vantage point.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4"
                >
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">
                    {item.tip}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-body-main text-body-main text-on-surface-variant mt-4">
              For map-specific strategies and to learn which objects populate
              each environment, browse the{" "}
              <Link href="/maps" className="text-primary hover:underline">
                full map list
              </Link>
              . You can also read the{" "}
              <Link
                href="/guides/tips"
                className="text-primary hover:underline"
              >
                general tips guide
              </Link>{" "}
              for more advanced strategies.
            </p>
          </section>

          <section id="faq" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Frequently Asked Questions
            </h2>
            <FAQSchema
              items={[
                { q: "What makes an object S-tier in MECCHA CHAMELEON?", a: "S-tier objects are universally common across maps, have a simple shape that's easy to replicate with paint, and are small enough to avoid suspicion. Examples include small trash cans, office chairs, potted plants, and cardboard boxes." },
                { q: "What are the worst objects to disguise as?", a: "Avoid giant or oversized objects, rare or unique items that should only exist once on the map, and anything with animation like fans or swinging pendulums. These draw immediate attention from Seekers who know the map layout." },
                { q: "Does object size matter for hiding?", a: "Yes, smaller is almost always better. Large objects draw the eye and are easier for Seekers to inspect up close. Small objects occupy a small visual footprint and Seekers scan over them without a second thought. Stick to small and medium objects for the best survival rate." },
              ]}
            />
            {/* Visual FAQ cards */}
            <div className="space-y-4 mt-4">
              {[
                { q: "What makes an object S-tier in MECCHA CHAMELEON?", a: "S-tier objects are universally common across maps, have a simple shape that's easy to replicate with paint, and are small enough to avoid suspicion. Examples include small trash cans, office chairs, potted plants, and cardboard boxes." },
                { q: "What are the worst objects to disguise as?", a: "Avoid giant or oversized objects, rare or unique items that should only exist once on the map, and anything with animation like fans or swinging pendulums. These draw immediate attention from Seekers who know the map layout." },
                { q: "Does object size matter for hiding?", a: "Yes, smaller is almost always better. Large objects draw the eye and are easier for Seekers to inspect up close. Small objects occupy a small visual footprint and Seekers scan over them without a second thought. Stick to small and medium objects for the best survival rate." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border border-outline-variant rounded-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-2">{item.q}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.a}</p>
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
              BROWSE MAPS
            </Link>
            <Link
              href="/guides/hider"
              className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
            >
              HIDER GUIDE
            </Link>
            <Link
              href="/guides/tips"
              className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all"
            >
              TIPS & TRICKS
            </Link>
          </div>
        </article>
      </div>

      <RelatedPages
        pages={relatedGuides["object-tiers"]}
        nextSteps={[
          { label: "HIDER PATH", title: "Master Hiding", description: "Deep dive into camouflage, painting, and positioning", href: "/guides/hider", icon: "🎨" },
          { label: "SEEKER PATH", title: "Hunt Better", description: "Learn to read the environment and catch hiders", href: "/guides/seeker", icon: "🔍" },
          { label: "SOCIAL PLAY", title: "Play With Friends", description: "Set up the perfect lobby for your group", href: "/guides/tips", icon: "🎮" },
        ]}
      />

      <Comments slug="guides/object-tiers" />
    </main>
  );
}
