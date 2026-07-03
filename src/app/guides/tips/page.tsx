import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 50 Tips & Tricks | MECCHA CHAMELEON Lab",
  description: "Master MECCHA CHAMELEON with 50 essential tips for hiders, seekers, painters, and map experts. Level up your gameplay today.",
};

const sections = [
  { id: "general", title: "General Tips" },
  { id: "hider", title: "Hider Tips" },
  { id: "seeker", title: "Seeker Tips" },
  { id: "paint", title: "Paint Tips" },
  { id: "map", title: "Map Tips" },
];

const tips: Record<string, { title: string; desc: string }[]> = {
  general: [
    { title: "Learn the maps in Custom mode", desc: "Spend time in Custom mode exploring every corner of each map before jumping into ranked play." },
    { title: "Watch experienced streamers", desc: "Twitch and YouTube are full of top players. Observe their strategies, hiding spots, and paint techniques." },
    { title: "Communicate with your team", desc: "Use the emote system to share intel. A quick ping can save a teammate." },
    { title: "Stay calm under pressure", desc: "Panicking leads to sloppy paint or bad positioning. Take a breath and think strategically." },
    { title: "Adapt to the lobby", desc: "Every lobby plays differently. Adjust your strategy based on how aggressive or passive the other team is." },
    { title: "Play both roles equally", desc: "Understanding seeker tactics makes you a better hider, and vice versa. Rotate roles often." },
    { title: "Use headphones", desc: "Sound cues like footsteps and paint spraying can reveal enemy positions before you see them." },
    { title: "Don't chase the score", desc: "Focus on survival and teamwork rather than individual stats. Wins come from coordination." },
    { title: "Learn from every loss", desc: "After each round, think about what went wrong. Were you spotted? Why? Use losses to improve." },
    { title: "Warm up before serious play", desc: "Spend 5-10 minutes in a casual match to get your aim and awareness dialed in." },
  ],
  hider: [
    { title: "Find your spot BEFORE painting", desc: "Locate the perfect hiding spot first, then paint yourself to match. Painting first wastes time." },
    { title: "Stand completely still", desc: "Movement is the #1 way hiders get caught. Once painted, freeze in place." },
    { title: "Think like furniture", desc: "Hide where objects naturally exist. A player-shaped blob in the middle of a hallway looks suspicious." },
    { title: "Use the environment", desc: "Corn plants, barrels, shelves — these provide natural cover and break up your silhouette." },
    { title: "Avoid popular spots", desc: "The same corner behind the couch is checked every round. Find creative alternatives." },
    { title: "Blend edges, not just centers", desc: "Pay attention to where your body meets the background. Hard edges stand out." },
    { title: "Consider your shadow", desc: "Shadows can either help or betray you. Position so your shadow blends with the environment." },
    { title: "Don't hide near other hiders", desc: "If one of you gets caught, the seeker will search the entire area. Spread out." },
    { title: "Fake being an object", desc: "Some hiders position themselves to look like chairs, plants, or decorations." },
    { title: "Stay in the game mentally", desc: "Even while hiding, track the seeker's position. Be ready to relocate if needed." },
  ],
  seeker: [
    { title: "Scan methodically", desc: "Don't randomly wander. Move through the map section by section and check every surface." },
    { title: "Look for color mismatches", desc: "Even skilled painters can't perfectly match every angle. Scan for slight color differences." },
    { title: "Check paint streaks", desc: "Freshly painted surfaces may have visible brush strokes or uneven coverage." },
    { title: "Listen for sound cues", desc: "Breathing, footsteps, or paint sounds can reveal a hider's general location." },
    { title: "Team up to cover ground", desc: "Split the map with your partner. Two seekers can check twice as many spots." },
    { title: "Use emotes strategically", desc: "Signal to teammates when you spot someone. Coordination wins rounds." },
    { title: "Check vertical spaces", desc: "Many players forget to look up. Shelves, ledges, and rooftops are prime hiding spots." },
    { title: "Rush at the start", desc: "Hiders need time to paint. An aggressive early rush can catch players before they blend in." },
    { title: "Re-check cleared areas", desc: "Hiders sometimes relocate. If you cleared a room 30 seconds ago, check again." },
    { title: "Trust your instincts", desc: "If something looks off, investigate. Your brain notices mismatches even when you can't articulate why." },
  ],
  paint: [
    { title: "Use the 3D eyedropper", desc: "Right-click on the surface you're hiding against to grab the exact color. Don't eyeball it." },
    { title: "Match texture, not just color", desc: "A smooth green blob on a textured brick wall sticks out. Vary your brush patterns." },
    { title: "Consider lighting angles", desc: "Colors look different depending on light direction. Paint while facing the same way seekers will look." },
    { title: "Use multiple colors", desc: "Real surfaces have variation. Layer similar tones for a more natural look." },
    { title: "Adjust brush size", desc: "Use small brushes for detail work and large brushes for base coats. Vary your brush size." },
    { title: "Paint your edges carefully", desc: "The silhouette edges are what seekers notice first. Blend edges into the background." },
    { title: "Don't over-paint", desc: "Too many layers create visible texture. Keep it clean and precise." },
    { title: "Use dark colors in shadows", desc: "If you're hiding in a dark area, go darker than you think. Shadows amplify color." },
    { title: "Test your paint at distance", desc: "Walk 10-15 meters away and check if you blend. What looks good up close may fail at range." },
    { title: "Save color presets", desc: "If you find colors that work well on a map, remember them for future rounds." },
  ],
  map: [
    { title: "Learn every map's layout", desc: "Know the rooms, corridors, and spawn points. Map knowledge separates good players from great ones." },
    { title: "Identify high-traffic areas", desc: "Seekers naturally patrol main paths. Avoid hiding near these routes." },
    { title: "Find the best corners", desc: "Every map has a few hidden corners that most players overlook. Memorize them." },
    { title: "Use map-specific tricks", desc: "Some maps have unique features like breakable walls or secret rooms. Learn them." },
    { title: "Know the escape routes", desc: "Always have a backup plan. If you're found, know where to run." },
    { title: "Control the center", desc: "Seekers who control the center of the map can rotate to any area quickly." },
    { title: "Check dead ends", desc: "Hiders love dead ends because they feel safe. Always sweep these areas." },
    { title: "Use verticality", desc: "Many maps have multiple floors. Hiders rarely expect seekers to check upper levels first." },
    { title: "Time your rotations", desc: "Don't rotate too early or too late. Seekers develop patterns you can predict." },
    { title: "Study new maps immediately", desc: "When a new map drops, play it in Custom mode ASAP. Early knowledge is a massive advantage." },
  ],
};

export default function TipsGuidePage() {
  let globalIndex = 0;

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
            Top 50 Tips & Tricks
          </h1>

          {sections.map((section) => {
            const sectionTips = tips[section.id];
            return (
              <section key={section.id} id={section.id} className="mb-stack-lg">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-6">{section.title}</h2>
                <ol className="space-y-4">
                  {sectionTips.map((tip, i) => {
                    globalIndex++;
                    const number = sections
                      .slice(0, sections.indexOf(section))
                      .reduce((acc, s) => acc + tips[s.id].length, 0) + i + 1;
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary font-label-caps text-label-caps mt-0.5 shrink-0 w-6 text-right">
                          {number}.
                        </span>
                        <div className="flex-1">
                          <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{tip.title}</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">{tip.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            );
          })}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
            <Link href="/maps" className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all">
              BROWSE MAPS
            </Link>
            <Link href="/guides/beginner" className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all">
              BEGINNER GUIDE
            </Link>
            <Link href="/guides/controls" className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all">
              CONTROLS GUIDE
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
