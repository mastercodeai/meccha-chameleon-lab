import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beginner Guide — How to Play",
  description: "Everything you need to know before your first round of MECCHA CHAMELEON. Rules, controls, painting tips, and common mistakes.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/beginner",
  },
};

const sections = [
  { id: "what-is", title: "What is MECCHA CHAMELEON?" },
  { id: "rules", title: "Rules" },
  { id: "painting", title: "How Painting Works" },
  { id: "hider-tips", title: "Hider Tips" },
  { id: "seeker-tips", title: "Seeker Tips" },
  { id: "controls", title: "Controls" },
  { id: "mistakes", title: "Common Mistakes" },
];

export default function BeginnerGuidePage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar TOC */}
        <aside className="lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-[100px] bg-surface border border-outline-variant rounded-lg p-4">
            <h3 className="font-label-caps text-label-caps text-on-surface mb-4 uppercase">Table of Contents</h3>
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
          <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-8">
            Beginner Guide
          </h1>

          <section id="what-is" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">What is MECCHA CHAMELEON?</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              MECCHA CHAMELEON is a casual PvP hide-and-seek game where you paint your body to blend into the environment. Released on June 9, 2026, it has already sold over 5 million copies and received 44,000+ Steam reviews.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant">
              The game features multiple maps, each with unique environments and hiding opportunities. Players split into two teams: Hiders and Seekers.
            </p>
          </section>

          <section id="rules" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Rules</h2>
            <div className="bg-surface border border-primary/30 rounded-lg p-6 mb-4">
              <p className="font-body-main text-body-main text-on-surface">
                The rules are simple. Split into the <span className="text-primary font-semibold">Seeker team</span> and the <span className="text-secondary font-semibold">Hider team</span>. The Seekers win if they find everyone within the time limit. The Hiders win if at least one player survives.
              </p>
            </div>
            <ul className="space-y-2 font-body-main text-body-main text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                2-10 players recommended per match
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Matches can be public or private
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Streamers can easily host viewer participation games
              </li>
            </ul>
          </section>

          <section id="painting" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">How Painting Works</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              The core mechanic of MECCHA CHAMELEON is painting. As a Hider, you start with a pure white body and must paint yourself to match the environment — like a real chameleon.
            </p>
            <div className="bg-surface-container-high border border-outline-variant rounded-lg p-6">
              <h3 className="font-label-caps text-label-caps text-primary mb-3 uppercase">Key Painting Tips</h3>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>• Use the 3D eyedropper to pick exact colors from surfaces</li>
                <li>• Match the surface texture, not just the color</li>
                <li>• Consider lighting — shadows change how colors appear</li>
                <li>• Metallic and roughness sliders can help match surface finishes</li>
              </ul>
            </div>
          </section>

          <section id="hider-tips" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Hider Tips</h2>
            <div className="space-y-4">
              {[
                { tip: "Pick your spot BEFORE painting", desc: "Find a good hiding location first, then match your paint to that specific surface." },
                { tip: "Stand still", desc: "Movement catches the Seeker's eye. Once you're painted, stay perfectly still." },
                { tip: "Use shadows", desc: "Dark areas are more forgiving — small color mismatches are harder to spot in shadows." },
                { tip: "Think like furniture", desc: "The best spots are where objects naturally exist. Don't hide in open spaces." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="seeker-tips" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Seeker Tips</h2>
            <div className="space-y-4">
              {[
                { tip: "Look for color mismatches", desc: "Even the best painters can't perfectly match every surface. Look for slight color differences." },
                { tip: "Check common spots", desc: "Experienced players tend to use the same hiding spots. Learn the maps." },
                { tip: "Use the emote system", desc: "Emotes can help you communicate with teammates and coordinate searches." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-secondary rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="controls" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Controls</h2>
            <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Action</th>
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Key</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-body-sm text-on-surface">
                  {[
                    ["Move", "WASD"],
                    ["Look", "Mouse"],
                    ["Paint", "Left Click"],
                    ["Eyedropper", "Right Click"],
                    ["Emote", "E"],
                    ["Jump", "Space"],
                  ].map(([action, key]) => (
                    <tr key={action} className="border-b border-outline-variant/50">
                      <td className="p-4">{action}</td>
                      <td className="p-4 text-primary font-label-caps">{key}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="mistakes" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Common Mistakes</h2>
            <div className="space-y-4">
              {[
                { mistake: "Painting before finding a spot", desc: "You'll waste time repainting when you move. Find your spot first." },
                { mistake: "Hiding in obvious places", desc: "The middle of a room or an open floor is the first place seekers check." },
                { mistake: "Moving after the round starts", desc: "Once you're in position, freeze. Movement is the #1 way to get caught." },
                { mistake: "Ignoring the timer", desc: "If you're a Seeker, manage your time. Don't spend too long on one area." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-error rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-error mb-1">⚠ {item.mistake}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
            <Link href="/maps" className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all">
              BROWSE MAPS
            </Link>
            <Link href="/guides/hider" className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all">
              HIDER GUIDE
            </Link>
            <Link href="/guides/seeker" className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all">
              SEEKER GUIDE
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
