import Link from "next/link";
import { BreadcrumbSchema, ArticleSchema, FAQSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import { relatedGuides } from "@/data/relatedGuides";
import Comments from "@/components/Comments";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "paint-system", title: "Paint System" },
  { id: "clone-system", title: "Clone System" },
  { id: "taunt-system", title: "Taunt System" },
  { id: "scoring", title: "Scoring System" },
  { id: "camera", title: "Camera System" },
  { id: "faq", title: "FAQ" },
];

export default function MechanicsPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
          { name: "Mechanics", url: "https://mecchachameleonlab.com/guides/mechanics" },
        ]}
      />
      <ArticleSchema
        title="MECCHA CHAMELEON Mechanics — Paint System, Clones & Scoring Explained"
        description="Deep dive into MECCHA CHAMELEON game mechanics: how the paint system works, clone mechanics, scoring system, taunts, and camera controls."
        url="https://mecchachameleonlab.com/guides/mechanics"
        datePublished="2026-07-16"
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar TOC */}
        <aside className="lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-[100px] bg-surface border border-outline-variant rounded-lg p-4">
            <h3 className="font-label-caps text-label-caps text-on-surface mb-4 uppercase">Table of Contents</h3>
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
            Game Mechanics Guide
          </h1>

          <p className="font-body-main text-body-main text-on-surface-variant mb-6">
            Understanding MECCHA CHAMELEON&apos;s core mechanics is the key to winning consistently. This guide covers the paint system, clone mechanics, taunt system, scoring, and camera controls in detail.
          </p>

          {/* Overview */}
          <section id="overview" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Overview</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              MECCHA CHAMELEON is a multiplayer hide-and-seek game (2–10 players, $5.99 on Steam) where hiders disguise themselves by painting their bodies to blend into the environment. Seekers must spot the disguised players before time runs out. The game features 7 official maps and over 600 Workshop maps.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant">
              The mechanics below are what make MECCHA CHAMELEON more than a simple hide-and-seek game. Mastering paint, clones, taunts, and scoring separates casual players from top competitors.
            </p>
          </section>

          {/* Paint System */}
          <section id="paint-system" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Paint System</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              The paint system is the heart of MECCHA CHAMELEON. Hiders can paint their entire body to match surrounding surfaces, making them nearly invisible to seekers.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">3D Eyedropper</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              The eyedropper tool lets you sample colors directly from any surface in the environment. Right-click on the wall, floor, or object you want to match, and the game copies the exact color values to your paint brush. This is far more accurate than trying to pick colors by eye from the palette.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Brush System</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              You can adjust brush size for different levels of detail. Use large brushes for base coats on broad areas, and small brushes for edges and fine details. Varying your brush strokes also helps avoid the telltale uniform look that gives away painted players.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Roughness &amp; Metallic Sliders</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Beyond color, the paint system includes roughness and metallic sliders. Roughness controls how matte or shiny your surface appears. Metallic adjusts whether your body looks like metal or a standard material. Matching these values to the surface you&apos;re hiding against is just as important as matching the color.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Visibility Scoring</h3>
            <p className="font-body-main text-body-main text-on-surface-variant">
              The game calculates a visibility score by comparing your painted body against the surrounding environment at the vertex level. The closer your color, roughness, and metallic values match the surface, the lower your visibility score. A low score means you&apos;re harder for seekers to spot.
            </p>
          </section>

          {/* Clone System */}
          <section id="clone-system" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Clone System</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Clones are available in Double mode and are one of the game&apos;s most strategic mechanics. They let hiders create decoy copies of themselves to confuse seekers.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Creating Clones</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              After painting yourself, you can place clones around the map. Each clone is a stationary copy of your painted character that looks identical to a real player from the seeker&apos;s perspective. Clones inherit your current paint job, so make sure you&apos;re painted well before placing them.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Controlling Clones</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Clones cannot move or perform actions. They stand perfectly still, which can be both an advantage (no fidgeting to give them away) and a disadvantage (experienced seekers know real players sometimes shift slightly). Place clones in natural standing positions to make them more convincing.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Strategic Uses</h3>
            <ul className="font-body-main text-body-main text-on-surface-variant space-y-2 list-disc list-inside">
              <li><strong>Bait spots:</strong> Place clones in obvious hiding spots to waste the seeker&apos;s time checking them.</li>
              <li><strong>Cluster strategy:</strong> Hide your real character among a group of clones so the seeker has to check each one.</li>
              <li><strong>Distraction:</strong> Place clones far from your real position to draw seekers away from your actual hiding spot.</li>
              <li><strong>Corridor blockers:</strong> Place clones in doorways or narrow passages to create uncertainty about whether a path has been checked.</li>
            </ul>
          </section>

          {/* Taunt System */}
          <section id="taunt-system" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Taunt System</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Taunts are audio cues that add tension and strategy to the game. They can reveal your position — or be used to mislead seekers.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Forced Taunts</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              At certain intervals, the game forces hiders to emit a taunt sound automatically. This prevents hiders from hiding in one spot indefinitely without any risk. The timing of forced taunts is predictable, so both hiders and seekers can plan around them.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Voluntary Taunts</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Players can also trigger taunts manually. While this might seem like a disadvantage, skilled players use voluntary taunts to bait seekers into checking a wrong location, or to taunt from a position they&apos;ve already vacated.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Taunt Timing Strategy</h3>
            <p className="font-body-main text-body-main text-on-surface-variant">
              Pay attention to when taunts fire. As a hider, prepare to stay still and blend in during taunt windows. As a seeker, listen carefully and use taunt sounds to narrow down the hider&apos;s general area before searching.
            </p>
          </section>

          {/* Scoring System */}
          <section id="scoring" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Scoring System</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Points determine the winner across multiple rounds. Understanding how scoring works helps you prioritize survival over risky plays.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Hider Points</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Hiders earn points based on how long they survive. The longer you stay hidden, the more points you accumulate. Hiders who survive the entire round earn maximum points plus a survival bonus.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Seeker Points</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Seekers earn points for each hider they find. Bonus points are awarded for finding hiders quickly — the faster you locate someone, the higher the bonus. Seekers who clear all hiders before time runs out get a completion bonus.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Missed Point Ranking</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              At the end of each round, the game shows a &quot;missed points&quot; ranking that highlights how close seekers were to finding hiders they missed. This feedback helps players improve their search patterns and hiding strategies.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Round Scoring</h3>
            <p className="font-body-main text-body-main text-on-surface-variant">
              Scores accumulate across all rounds in a match. The player with the most points at the end wins. This means consistency matters — one great round isn&apos;t enough if you underperform in others.
            </p>
          </section>

          {/* Camera System */}
          <section id="camera" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Camera System</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              MECCHA CHAMELEON uses different camera modes depending on whether you&apos;re alive, eliminated, or spectating.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">First Person (Active Player)</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              While alive, you play in first person. Hiders see from their character&apos;s perspective, which helps them judge how their paint looks from the seeker&apos;s viewpoint. Seekers also use first person to scan the environment.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Free Camera (After Elimination)</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              When a hider is found and eliminated, they switch to a free camera mode. This lets you fly around the map freely and watch the remaining players. It&apos;s a great way to learn map layouts and observe how other players hide.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Spectator Mode</h3>
            <p className="font-body-main text-body-main text-on-surface-variant">
              Spectator mode uses the same free camera as elimination but applies to players who join mid-match or are observing. Important: while you can see other players&apos; positions in spectator mode, communicating that information to living teammates is considered unsportsmanlike and ruins the game for everyone.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Frequently Asked Questions
            </h2>
            <FAQSchema
              items={[
                { q: "How does the paint visibility score work?", a: "The game compares your painted body against the surrounding environment at the vertex level. The closer your color, roughness, and metallic values match the surface, the lower your visibility score." },
                { q: "What are clones in MECCHA CHAMELEON?", a: "Clones are decoy copies of your character that you can place around the map. They look like painted players and can confuse seekers into checking false positions." },
                { q: "How does the scoring system work?", a: "Hiders earn points based on how long they survive. The longer you stay hidden, the more points you get. Seekers earn points for each hider they find. Bonus points are awarded for finding hiders quickly." },
                { q: "Can I see other players after I'm eliminated?", a: "Yes, eliminated players enter spectator mode with a free camera. You can fly around the map and observe the remaining players, but you cannot communicate positions to living teammates." },
              ]}
            />
            {/* Visual FAQ cards */}
            <div className="space-y-4 mt-4">
              {[
                { q: "How does the paint visibility score work?", a: "The game compares your painted body against the surrounding environment at the vertex level. The closer your color, roughness, and metallic values match the surface, the lower your visibility score." },
                { q: "What are clones in MECCHA CHAMELEON?", a: "Clones are decoy copies of your character that you can place around the map. They look like painted players and can confuse seekers into checking false positions." },
                { q: "How does the scoring system work?", a: "Hiders earn points based on how long they survive. The longer you stay hidden, the more points you get. Seekers earn points for each hider they find. Bonus points are awarded for finding hiders quickly." },
                { q: "Can I see other players after I'm eliminated?", a: "Yes, eliminated players enter spectator mode with a free camera. You can fly around the map and observe the remaining players, but you cannot communicate positions to living teammates." },
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
            <Link href="/guides/paint" className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all">
              PAINT GUIDE
            </Link>
            <Link href="/guides/game-modes" className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all">
              GAME MODES
            </Link>
            <Link href="/maps" className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all">
              BROWSE MAPS
            </Link>
          </div>
        </article>
      </div>

      <RelatedPages
        pages={relatedGuides["mechanics"]}
        nextSteps={[
          { label: "PAINT DEEP DIVE", title: "Paint Guide", description: "Best colors and techniques for every surface", href: "/guides/paint", icon: "🎨" },
          { label: "HIDER PATH", title: "Master Hiding", description: "Use mechanics to become invisible", href: "/guides/hider", icon: "🫥" },
          { label: "GAME MODES", title: "All Game Modes", description: "Basic, Infection, and Double explained", href: "/guides/game-modes", icon: "🎮" },
        ]}
      />

      <Comments slug="guides/mechanics" />
    </main>
  );
}
