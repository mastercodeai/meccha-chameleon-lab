import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import Comments from "@/components/Comments";

export const metadata: Metadata = {
  title:
    "MECCHA CHAMELEON Seeker Counter Guide — How to Find Every Hider",
  description:
    "Master the seeker role in MECCHA CHAMELEON. Learn how to find every hider with proven search patterns and counter strategies.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/seeker-counters",
  },
  openGraph: {
    title:
      "MECCHA CHAMELEON Seeker Counter Guide — How to Find Every Hider | MECCHA CHAMELEON Lab",
    description:
      "Master the seeker role in MECCHA CHAMELEON. Learn how to find every hider with proven search patterns and counter strategies.",
    url: "https://mecchachameleonlab.com/guides/seeker-counters",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MECCHA CHAMELEON Seeker Counter Guide — How to Find Every Hider | MECCHA CHAMELEON Lab",
    description:
      "Master the seeker role in MECCHA CHAMELEON. Learn how to find every hider with proven search patterns and counter strategies.",
  },
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "search-patterns", title: "Search Patterns" },
  { id: "room-by-room", title: "Room-by-Room Strategy" },
  { id: "paint-detection", title: "Paint Detection" },
  { id: "common-spots", title: "Common Hider Spots to Check" },
  { id: "advanced-techniques", title: "Advanced Techniques" },
  { id: "map-tips", title: "Map-Specific Tips" },
  { id: "seeker-vs-hider", title: "Seeker vs Hider Mindset" },
  { id: "faq", title: "FAQ" },
];

export default function SeekerCountersPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides/beginner" },
          { name: "Seeker Counters", url: "https://mecchachameleonlab.com/guides/seeker-counters" },
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
            Seeker Counter Guide — How to Find Every Hider
          </h1>

          <section id="overview" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Overview
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Playing Seeker in MECCHA CHAMELEON requires a completely different
              skillset than hiding. You need sharp observation, systematic
              thinking, and the ability to spot subtle visual anomalies that
              betray a hider&apos;s position.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant">
              This guide covers proven counter strategies, search patterns, and
              advanced techniques that will help you find even the most
              well-disguised hiders. Master these methods and you&apos;ll dominate
              every round as Seeker.
            </p>
          </section>

          <section id="search-patterns" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Search Patterns
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Random searching is inefficient. Use these structured patterns to
              cover the map methodically and ensure no area is missed.
            </p>
            <div className="space-y-4">
              {[
                {
                  pattern: "Sweep Method",
                  desc: "Start from one edge of the map and move in a straight line to the other side. Scan every object as you pass. This guarantees full coverage and prevents you from re-checking the same areas.",
                },
                {
                  pattern: "Spiral Search",
                  desc: "Begin at the center of the map and work outward in expanding circles. This prioritizes the most common hiding areas near the middle and gradually covers the periphery.",
                },
                {
                  pattern: "Zone Split",
                  desc: "Divide the map into quadrants and clear each one completely before moving to the next. This is especially effective on larger maps where you might lose track of where you've checked.",
                },
                {
                  pattern: "High-Traffic First",
                  desc: "Target the most popular hiding spots first — corners, closets, behind desks, and near spawn points. Many hiders are caught in the first 30 seconds with this approach.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border-l-4 border-primary rounded-r-lg p-4"
                >
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">
                    {item.pattern}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="room-by-room" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Room-by-Room Strategy
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              When entering any room, follow this systematic approach to clear
              it efficiently:
            </p>
            <div className="bg-surface-container-high border border-outline-variant rounded-lg p-6 mb-4">
              <h3 className="font-label-caps text-label-caps text-primary mb-3 uppercase">
                Room Clearing Checklist
              </h3>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  1. Scan the doorway and immediate surroundings for out-of-place
                  objects
                </li>
                <li>
                  2. Check corners and behind large furniture — these are the #1
                  hiding spots
                </li>
                <li>
                  3. Look at shelves, ledges, and elevated surfaces for objects
                  that don&apos;t belong
                </li>
                <li>
                  4. Inspect color consistency — mismatched paint on walls or
                  objects signals a hider
                </li>
                <li>
                  5. Check under desks, tables, and behind curtains for partially
                  hidden players
                </li>
                <li>
                  6. Look for duplicate objects — two identical items side by side
                  is suspicious
                </li>
              </ul>
            </div>
            <p className="font-body-main text-body-main text-on-surface-variant">
              Always enter rooms from different angles on repeat visits. Hiders
              position themselves based on where they expect the Seeker to look —
              changing your entry point catches those off-guard.
            </p>
          </section>

          <section id="paint-detection" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Paint Detection
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Paint quality is the biggest weakness in any hider&apos;s disguise.
              Train your eye to spot these telltale signs:
            </p>
            <div className="space-y-4">
              {[
                {
                  sign: "Color Mismatch",
                  desc: "Even a slight difference in hue or saturation is visible against a consistent surface. Look for objects or wall sections that don't quite match their surroundings.",
                },
                {
                  sign: "Edge Bleeding",
                  desc: "Where a hider's paint meets the real surface, there's often a visible border or color transition. Sharp, unnatural edges are a dead giveaway.",
                },
                {
                  sign: "Lighting Inconsistencies",
                  desc: "Painted surfaces react differently to light than real textures. If an object's shading looks flat or doesn't match the ambient lighting, it's likely a hider.",
                },
                {
                  sign: "Texture Flatness",
                  desc: "Real surfaces have micro-detail — scratches, grain, dirt. Painted hiders often look too smooth or uniform. Flat, featureless areas in a detailed environment stand out.",
                },
                {
                  sign: "Chipped Paint",
                  desc: "When hiders take damage, their paint may degrade and expose their original colors. Scanning for patches of unnatural brightness near suspected objects can reveal damaged hiders.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border-l-4 border-primary rounded-r-lg p-4"
                >
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">
                    {item.sign}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="common-spots" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Common Hider Spots to Check
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Experienced hiders are creative, but most players gravitate toward
              the same locations. Always check these spots early:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Behind doors when they open",
                "Inside closets and cabinets",
                "Under desks and tables",
                "In dark corners of rooms",
                "On top of shelves and ledges",
                "Among clusters of similar objects",
                "Behind large furniture pieces",
                "Near map edges and boundaries",
                "In shadowed alcoves",
                "Beside columns and pillars",
              ].map((spot, i) => (
                <div
                  key={i}
                  className="bg-surface border border-outline-variant rounded-lg p-3 flex items-center gap-2"
                >
                  <span className="text-primary font-label-caps text-label-caps shrink-0">
                    ✓
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {spot}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section id="advanced-techniques" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Advanced Techniques
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Once you&apos;ve mastered the basics, these advanced strategies will
              help you catch even the best hiders:
            </p>
            <div className="space-y-4">
              {[
                {
                  technique: "The Double-Back",
                  desc: "Leave a room, wait a few seconds, then return. Hiders often start repositioning when they think you've moved on. Coming back catches them mid-motion.",
                },
                {
                  technique: "Audio Cue Tracking",
                  desc: "Listen for subtle sounds — footsteps, paint spraying, or object collision. Sound travels through walls and can pinpoint a hider's exact location before you even see them.",
                },
                {
                  technique: "Peripheral Vision Scans",
                  desc: "Don't focus too hard on any one spot. Use your peripheral vision to detect movement. Hiders that fidget or slightly shift position will trigger your motion detection instinct.",
                },
                {
                  technique: "Fake Exit",
                  desc: "Walk toward the exit of an area, then quickly spin around. Hiders who think you're leaving often relax and move — exposing themselves in the process.",
                },
                {
                  technique: "Damage Baiting",
                  desc: "If you suspect a spot but aren't sure, testing interactions with objects in the area may reveal inconsistencies. Pay attention to how objects respond compared to real props.",
                },
                {
                  technique: "Pattern Memory",
                  desc: "Memorize the default state of each room at the start of the round. Any deviation — extra objects, missing items, color changes — indicates hider interference.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border-l-4 border-primary rounded-r-lg p-4"
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

          <section id="map-tips" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Map-Specific Seeker Strategies
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Each of the 7 official maps has unique geometry, lighting, and
              hiding hotspots. Here's how to approach each one as Seeker:
            </p>
            <div className="space-y-6">
              {[
                {
                  map: "Backrooms",
                  color: "#DAA520",
                  tips: [
                    "The sickly yellow wallpaper makes color mismatches obvious. Scan for anything too saturated or too dark against the off-yellow surfaces.",
                    "Check under tables and inside chair piles — hiders love these spots but their shapes often give them away.",
                    "The broken highway section has police cars. Scan vehicle outlines for human shapes.",
                    "Vending machines have distinct colors. If something near them doesn't match, investigate.",
                    "Fluorescent lighting washes out colors — hiders who didn't desaturate will glow against the walls.",
                  ],
                },
                {
                  map: "Hide-and-Seek Mansion",
                  color: "#8B4513",
                  tips: [
                    "The Mansion has 10 known spots. Systematically check each room instead of wandering randomly.",
                    "Laundry baskets are S-tier hiding spots. Check every basket and shelf carefully.",
                    "Gold trim and velvet curtains are hard to match perfectly. Look for slight color differences near fabric surfaces.",
                    "The globe room has a suitcase under stacked tables — a very popular spot for experienced hiders.",
                    "Furniture randomization (v2.2.0) changes layout each round. Don't rely on memorized positions.",
                  ],
                },
                {
                  map: "Indoor Country",
                  color: "#228B22",
                  tips: [
                    "This is the easiest map for seekers (difficulty 2/5). Natural environments have fewer hiding spots.",
                    "Check behind hay bales and inside farm equipment — hiders often tuck into tight spaces.",
                    "The balloon center has bright colors that are hard to match. Look for miscolored objects near balloons.",
                    "Cow corners are popular but the black/white pattern is hard to replicate. Look for solid-color imposters.",
                    "Use the open sightlines to your advantage — this map has fewer corners than others.",
                  ],
                },
                {
                  map: "Osaka",
                  color: "#FF69B4",
                  tips: [
                    "The Osaka rework changed many hiding spots. Old knowledge may be outdated — explore thoroughly.",
                    "Narrow alleyways force hiders into predictable positions. Sweep both sides systematically.",
                    "Neon signs create color distortion. If something near a sign looks off, it might be a hider who sampled wrong.",
                    "Check elevated positions — many hiders climb to rooftops thinking seekers won't look up.",
                    "Open areas seem safe but hiders can flatten against walls. Check wall edges carefully.",
                  ],
                },
                {
                  map: "Penguin Hotel",
                  color: "#4169E1",
                  tips: [
                    "White marble floors make dark-colored hiders stand out. Scan for anything that isn't white or light blue.",
                    "The ballroom is large and open — use sightlines to spot hiders who thought they were hidden.",
                    "Check behind penguin decorations — their irregular shapes create natural hiding pockets.",
                    "Hallways are choke points. If you're patient, hiders will eventually move and reveal themselves.",
                    "The play room has colorful toys that are hard to match. Look for slightly-off colors in that area.",
                  ],
                },
                {
                  map: "Sewer",
                  color: "#556B2F",
                  tips: [
                    "The Sewer's low visibility works against you too. Move slowly and scan methodically.",
                    "v2.2.1 added random elements — the layout has slight variations each round.",
                    "Flooded sections reflect light differently. If a surface's color doesn't match the reflection pattern, investigate.",
                    "Gas zones have a green tint that affects color perception. Hiders who sampled from gas areas will look slightly off.",
                    "Check inside lockers — a popular spot but tight space means hiders can't adjust their pose well.",
                  ],
                },
                {
                  map: "Sugar Land",
                  color: "#FF1493",
                  tips: [
                    "This map's bright colors make it easy to spot hiders who used generic paint. Look for flat, untextured surfaces.",
                    "Gumdrop gardens are popular hiding spots. Check each gumdrop cluster for human-shaped irregularities.",
                    "Candy house interiors are often overlooked. Sweep inside each house systematically.",
                    "The locker area near the cake zone is a common spot — check every locker.",
                    "Gingerbread houses have door openings. Hiders often hide inside and paint themselves brown.",
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border border-outline-variant rounded-lg overflow-hidden"
                >
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-outline-variant">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <h3 className="font-label-caps text-label-caps text-on-surface">
                      {item.map}
                    </h3>
                    <Link
                      href={`/maps/${item.map.toLowerCase().replace(/\s+/g, "-").replace("hide-and-seek-mansion", "hide-and-seek-mansion")}`}
                      className="ml-auto text-xs text-primary hover:underline"
                    >
                      Full map guide →
                    </Link>
                  </div>
                  <ul className="p-4 space-y-2">
                    {item.tips.map((tip, j) => (
                      <li
                        key={j}
                        className="font-body-sm text-body-sm text-on-surface-variant flex items-start gap-2"
                      >
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="seeker-vs-hider" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Seeker vs Hider Mindset
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              The biggest mistake new Seekers make is thinking like a Hider.
              These two roles require opposite approaches:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface border border-outline-variant rounded-lg p-5">
                <h3 className="font-label-caps text-label-caps text-red-400 mb-3">
                  ❌ HIDER MINDSET (wrong for Seeker)
                </h3>
                <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                  <li>• Looking for good hiding spots</li>
                  <li>• Appreciating the scenery</li>
                  <li>• Moving slowly and carefully</li>
                  <li>• Focusing on one area</li>
                  <li>• Trusting your first impression</li>
                </ul>
              </div>
              <div className="bg-surface border border-primary/50 rounded-lg p-5">
                <h3 className="font-label-caps text-label-caps text-primary mb-3">
                  ✅ SEEKER MINDSET (what works)
                </h3>
                <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                  <li>• Scanning for anomalies and mismatches</li>
                  <li>• Questioning every object's color/shape</li>
                  <li>• Moving at medium speed for better scanning</li>
                  <li>• Covering the entire map systematically</li>
                  <li>• Double-checking areas you've already cleared</li>
                </ul>
              </div>
            </div>
            <p className="font-body-main text-body-main text-on-surface-variant mt-4">
              The best Seekers develop a "sixth sense" for visual anomalies.
              After enough rounds, your brain automatically flags objects that
              don't belong. This skill comes from practice — the more maps you
              play, the faster you spot disguised hiders.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Frequently Asked Questions
            </h2>
            <FAQSchema
              items={[
                {
                  q: "How do I find hiders in MECCHA CHAMELEON?",
                  a: "Use systematic search patterns (sweep, spiral, or zone split), check common hiding spots first (corners, closets, under furniture), and train your eye to spot color mismatches, texture flatness, and lighting inconsistencies in painted surfaces.",
                },
                {
                  q: "What's the best search pattern for Seekers?",
                  a: "The Sweep Method is the most reliable — start from one edge and move in a straight line to the other side, scanning every object as you pass. This guarantees full coverage. For smaller rooms, use the High-Traffic First approach and check popular spots immediately.",
                },
                {
                  q: "How can I tell if an object is a painted hider?",
                  a: "Look for five signs: color mismatch with surroundings, edge bleeding where paint meets real surfaces, lighting inconsistencies (painted surfaces react differently to light), texture flatness (real surfaces have micro-detail), and chipped paint that exposes original colors.",
                },
                {
                  q: "Which map is easiest for Seekers?",
                  a: "Indoor Country is the easiest map for Seekers (difficulty 2/5). The natural environments have fewer hiding spots, open sightlines, and the bright balloon center makes color mismatches obvious.",
                },
                {
                  q: "Which map is hardest for Seekers?",
                  a: "Backrooms and Sewer are the hardest for Seekers (both difficulty 4/5). Backrooms has sickly yellow wallpaper that makes subtle mismatches hard to spot, while Sewer's low visibility works against both hiders and seekers.",
                },
                {
                  q: "Should I listen for audio cues as Seeker?",
                  a: "Yes. Paint spraying sounds, footsteps, and object collisions can pinpoint a hider's location before you see them. Sound travels through walls, so audio cues are especially useful in enclosed maps like Sewer and Backrooms.",
                },
              ]}
            />
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
              href="/guides/seeker"
              className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
            >
              SEEKER GUIDE
            </Link>
            <Link
              href="/guides/beginner-mistakes"
              className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all"
            >
              BEGINNER MISTAKES
            </Link>
          </div>
        </article>
      </div>

      <RelatedPages
        pages={[
          { title: "Seeker Guide", description: "Sharpen your detection skills and hunt like a pro.", href: "/guides/seeker", icon: "🔍" },
          { title: "Hider Guide", description: "Become an invisible master of disguise.", href: "/guides/hider", icon: "🎨" },
          { title: "Tips & Tricks", description: "50 essential tips for hiders, seekers, painters, and map experts.", href: "/guides/tips", icon: "💡" },
        ]}
      />

      <Comments slug="guides/seeker-counters" />
    </main>
  );
}
