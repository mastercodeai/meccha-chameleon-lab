import Link from "next/link";
import { BreadcrumbSchema, ArticleSchema, FAQSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import { relatedGuides } from "@/data/relatedGuides";
import Comments from "@/components/Comments";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "basic", title: "Basic Mode" },
  { id: "infection", title: "Infection Mode" },
  { id: "double", title: "Double Mode" },
  { id: "lobby-settings", title: "Lobby Settings Guide" },
  { id: "comparison", title: "Mode Comparison" },
  { id: "faq", title: "FAQ" },
];

const lobbySettings = [
  {
    style: "Beginner",
    players: "2–4",
    roundTime: "4 min",
    mode: "Basic",
    notes: "Small lobby, longer time to learn maps and painting. Great for first sessions.",
  },
  {
    style: "Casual",
    players: "4–8",
    roundTime: "3 min",
    mode: "Basic or Infection",
    notes: "Standard party settings. Fun for friend groups and random lobbies alike.",
  },
  {
    style: "Competitive",
    players: "6–10",
    roundTime: "2 min",
    mode: "Double",
    notes: "Shorter rounds force fast decisions. Clone mind games reward experienced players.",
  },
  {
    style: "Streamer / Event",
    players: "8–10",
    roundTime: "3 min",
    mode: "Infection",
    notes: "Infection creates dramatic moments as the seeker team grows. Great for viewers.",
  },
];

const modeComparison = [
  { feature: "Team Roles", basic: "Fixed hiders vs seekers", infection: "Hiders convert to seekers", double: "Fixed, with clones" },
  { feature: "Clone Mechanic", basic: "No", infection: "No", double: "Yes — place decoy clones" },
  { feature: "Best Lobby Size", basic: "2–6 players", infection: "4–10 players", double: "4–8 players" },
  { feature: "Difficulty", basic: "Beginner-friendly", infection: "Medium", double: "Advanced" },
  { feature: "Round Pacing", basic: "Steady hide-and-seek", infection: "Escalating tension", double: "Mind games from start" },
  { feature: "End Condition", basic: "Time runs out or all found", infection: "All hiders found or time", double: "Time runs out or all found" },
];

export default function GameModesPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
          { name: "Game Modes", url: "https://mecchachameleonlab.com/guides/game-modes" },
        ]}
      />
      <ArticleSchema
        title="MECCHA CHAMELEON Game Modes — Basic, Infection & Double Explained"
        description="Complete guide to all MECCHA CHAMELEON game modes: Basic hide-and-seek, Infection, and Double mode. Plus lobby settings and recommended configurations."
        url="https://mecchachameleonlab.com/guides/game-modes"
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
            Game Modes Guide
          </h1>

          <p className="font-body-main text-body-main text-on-surface-variant mb-6">
            MECCHA CHAMELEON features three distinct game modes, each offering a unique twist on the hide-and-seek formula. Whether you&apos;re a newcomer looking for straightforward fun or a veteran craving mind games, there&apos;s a mode for every play style. This guide breaks down how each mode works and helps you pick the right settings for your lobby.
          </p>

          {/* Overview */}
          <section id="overview" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Overview</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              MECCHA CHAMELEON is a multiplayer hide-and-seek game for 2–10 players on Steam ($5.99). The core concept is simple: hiders paint themselves to blend into the environment while seekers hunt them down. The three game modes — <strong>Basic</strong>, <strong>Infection</strong>, and <strong>Double</strong> — each change how rounds play out, how teams interact, and what strategies are viable.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant">
              All three modes are available from the lobby screen. The host selects the mode before starting the match. The game ships with 7 official maps, and the Steam Workshop offers over 600 community-created maps that work with every mode.
            </p>
          </section>

          {/* Basic Mode */}
          <section id="basic" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Basic Mode</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Basic mode is the standard MECCHA CHAMELEON experience and the best starting point for new players. Two teams — hiders and seekers — compete in a classic hide-and-seek round.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">How It Works</h3>
            <ul className="font-body-main text-body-main text-on-surface-variant space-y-2 mb-4 list-disc list-inside">
              <li><strong>Hiders</strong> get a preparation phase to explore the map, pick an object, paint themselves to match, and find a hiding spot.</li>
              <li><strong>Seekers</strong> wait during preparation, then are released to search the map.</li>
              <li>The round ends when all hiders are found or the timer runs out.</li>
              <li>Teams swap roles each round so everyone gets to play both sides.</li>
            </ul>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Strategy Tips</h3>
            <p className="font-body-main text-body-main text-on-surface-variant">
              In Basic mode, patience is key. Find a strong hiding spot first, then paint to match. Avoid moving once the seeker is nearby. Use the 3D eyedropper to grab the exact color of surrounding surfaces for the best camouflage.
            </p>
          </section>

          {/* Infection Mode */}
          <section id="infection" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Infection Mode</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Infection mode flips the script by converting found hiders into seekers. As the round progresses, the seeker team grows and the remaining hiders face increasing pressure.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">How It Works</h3>
            <ul className="font-body-main text-body-main text-on-surface-variant space-y-2 mb-4 list-disc list-inside">
              <li>The round starts with one or two seekers and the rest as hiders.</li>
              <li>When a seeker finds and tags a hider, that hider joins the seeker team.</li>
              <li>The game ends when all hiders are found or the timer runs out.</li>
              <li>Hiders who survive until the end earn bonus points.</li>
            </ul>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Why It&apos;s Popular</h3>
            <p className="font-body-main text-body-main text-on-surface-variant">
              Infection mode creates escalating tension. Early in the round, hiders feel safe — but as more players convert to seekers, the map shrinks dramatically. The last hider standing becomes a thrilling chase. This mode is especially fun for streamers and larger lobbies (6–10 players).
            </p>
          </section>

          {/* Double Mode */}
          <section id="double" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Double Mode</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Double mode introduces clones — decoy copies of your character that you can scatter around the map. Seekers must figure out which painted figures are real players and which are fakes.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">How It Works</h3>
            <ul className="font-body-main text-body-main text-on-surface-variant space-y-2 mb-4 list-disc list-inside">
              <li>Hiders can create <strong>clones</strong> — stationary copies of their painted character.</li>
              <li>Clones appear identical to a real player from the seeker&apos;s perspective.</li>
              <li>Seekers must carefully inspect each figure to determine if it&apos;s a real hider or a clone.</li>
              <li>Strategic clone placement can waste the seeker&apos;s time and create openings for hiders to relocate.</li>
            </ul>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Advanced Mind Games</h3>
            <p className="font-body-main text-body-main text-on-surface-variant">
              Double mode rewards creative play. Place clones in obvious spots to draw seeker attention, or hide your real character among a cluster of clones. Experienced players use clones to control the seeker&apos;s path through the map. This mode is best for 4–8 players who already understand the paint system.
            </p>
          </section>

          {/* Lobby Settings Guide */}
          <section id="lobby-settings" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Lobby Settings Guide</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              The host can customize lobby settings to match the group&apos;s experience level and preferred play style. Here are recommended configurations:
            </p>
            <div className="space-y-4">
              {lobbySettings.map((setting) => (
                <div key={setting.style} className="bg-surface border border-outline-variant rounded-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-2">{setting.style}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      <span className="text-primary font-semibold">Players:</span> {setting.players}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      <span className="text-primary font-semibold">Round Time:</span> {setting.roundTime}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      <span className="text-primary font-semibold">Mode:</span> {setting.mode}
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{setting.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mode Comparison */}
          <section id="comparison" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Mode Comparison</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Quick reference to help you choose the right mode:
            </p>
            <div className="space-y-3">
              {modeComparison.map((row) => (
                <div key={row.feature} className="bg-surface border border-outline-variant rounded-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-primary mb-2">{row.feature}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      <span className="text-on-surface font-semibold">Basic:</span> {row.basic}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      <span className="text-on-surface font-semibold">Infection:</span> {row.infection}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      <span className="text-on-surface font-semibold">Double:</span> {row.double}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Frequently Asked Questions
            </h2>
            <FAQSchema
              items={[
                { q: "What's the best game mode for beginners?", a: "Basic mode is best for beginners. It's the standard hide-and-seek experience with clear rules and no extra mechanics to learn." },
                { q: "How does Infection mode work?", a: "In Infection mode, when a seeker finds a hider, that hider joins the seeker team. The game ends when all hiders are found or time runs out." },
                { q: "Can I change game modes mid-match?", a: "No, the game mode is selected in the lobby before the match starts. You need to create a new lobby to switch modes." },
                { q: "What's the most popular game mode?", a: "Basic mode is the most popular for casual play. Double mode is popular for experienced players who enjoy the clone mechanics and mind games." },
              ]}
            />
            {/* Visual FAQ cards */}
            <div className="space-y-4 mt-4">
              {[
                { q: "What's the best game mode for beginners?", a: "Basic mode is best for beginners. It's the standard hide-and-seek experience with clear rules and no extra mechanics to learn." },
                { q: "How does Infection mode work?", a: "In Infection mode, when a seeker finds a hider, that hider joins the seeker team. The game ends when all hiders are found or time runs out." },
                { q: "Can I change game modes mid-match?", a: "No, the game mode is selected in the lobby before the match starts. You need to create a new lobby to switch modes." },
                { q: "What's the most popular game mode?", a: "Basic mode is the most popular for casual play. Double mode is popular for experienced players who enjoy the clone mechanics and mind games." },
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
            <Link href="/maps" className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all">
              BROWSE MAPS
            </Link>
            <Link href="/guides/beginner" className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all">
              BEGINNER GUIDE
            </Link>
            <Link href="/guides/mechanics" className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all">
              GAME MECHANICS
            </Link>
          </div>
        </article>
      </div>

      <RelatedPages
        pages={relatedGuides["game-modes"]}
        nextSteps={[
          { label: "LEARN MECHANICS", title: "Game Mechanics", description: "Deep dive into paint, clones, and scoring", href: "/guides/mechanics", icon: "⚙️" },
          { label: "HIDER PATH", title: "Master Hiding", description: "Camouflage and positioning strategies", href: "/guides/hider", icon: "🎨" },
          { label: "SEEKER PATH", title: "Hunt Better", description: "Learn to find hiders fast", href: "/guides/seeker", icon: "🔍" },
        ]}
      />

      <Comments slug="guides/game-modes" />
    </main>
  );
}
