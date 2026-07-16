import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, ArticleSchema, FAQSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import { relatedGuides } from "@/data/relatedGuides";
import Comments from "@/components/Comments";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Hider Guide — Best Hiding Spots & Strategies (2026)",
  description: "Master the Hider role in MECCHA CHAMELEON. Best hiding spots on all 7 maps, painting techniques, object selection tips, and advanced blending strategies to never get caught.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/hider",
  },
  openGraph: {
    title: "MECCHA CHAMELEON Hider Guide — Best Hiding Spots & Strategies (2026)",
    description: "Master the Hider role in MECCHA CHAMELEON. Best hiding spots on all 7 maps, painting techniques, object selection tips, and advanced blending strategies to never get caught.",
    url: "https://mecchachameleonlab.com/guides/hider",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MECCHA CHAMELEON Hider Guide — Best Hiding Spots & Strategies (2026)",
    description: "Master the Hider role in MECCHA CHAMELEON. Best hiding spots on all 7 maps, painting techniques, object selection tips, and advanced blending strategies to never get caught.",
  },
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "painting-deep-dive", title: "Painting Deep Dive" },
  { id: "clone-mechanics", title: "Clone Mechanics" },
  { id: "forced-taunt", title: "Surviving Forced Taunts" },
  { id: "light-shadow", title: "Using Light and Shadow" },
  { id: "core-strategies", title: "Core Strategies" },
  { id: "painting-techniques", title: "Best Painting Techniques" },
  { id: "map-tips", title: "Map-Specific Tips" },
  { id: "advanced-hiding", title: "Advanced Hiding" },
  { id: "mistakes", title: "Common Mistakes" },
  { id: "faq", title: "FAQ" },
];
export default function HiderGuidePage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
          { name: "Hider Guide", url: "https://mecchachameleonlab.com/guides/hider" },
        ]}
      />
      <ArticleSchema
        title="Hider Guide — Master the Art of Blending"
        description="Become an invisible master of disguise. Learn advanced painting techniques, positioning strategies, and map-specific hiding spots to dominate as a Hider in MECCHA CHAMELEON."
        url="https://mecchachameleonlab.com/guides/hider"
        datePublished="2026-06-15"
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
            Hider Guide
          </h1>

          <section id="overview" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Overview</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Before diving in, make sure you understand the <Link href="/guides/paint" className="text-primary hover:underline">paint guide</Link> for color matching and review the <Link href="/maps" className="text-primary hover:underline">map breakdowns</Link> for your favorite arena.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              As a Hider in MECCHA CHAMELEON, your goal is simple: become invisible. You start each round with a blank white body and must paint yourself to perfectly blend into the environment before the Seekers begin their search.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant">
              The role demands patience, creativity, and a sharp eye for color. A great Hider doesn&apos;t just find a good spot — they become part of the map itself. This guide will take you from basic survival to mastering the art of camouflage.
            </p>
          </section>

          <section id="painting-deep-dive" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Painting Deep Dive</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Painting is the single most important skill a Hider can develop. Going beyond basic color matching — understanding how tools work, when to use them, and how to prioritize your paint time — separates a good Hider from an untouchable one. This section breaks down every painting tool and technique in detail.
            </p>
            <div className="space-y-4">
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Eyedropper Mastery</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Right-clicking a surface with the eyedropper doesn&apos;t just grab the color — it also captures roughness and metallic values, giving you a complete material match in one click. This is critical because two surfaces can share the same color but look completely different if one is glossy and the other is matte. Always sample from the exact surface you plan to stand against, not a similar-looking surface nearby. Even a few in-game meters of distance can mean different lighting conditions and subtle color shifts. Pro tip: sample multiple points on the surface and blend between them for a more natural look, since real surfaces are rarely one uniform shade.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Brush Size Strategy</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Your brush size directly impacts both speed and quality. Use a large brush for your initial base coat — it covers the torso and limbs quickly and establishes your primary color. Then switch to a small brush for edges, seams, and fine details like fingers or facial features. The scroll wheel adjusts brush size on the fly, so you can switch between large and small without opening any menus. A common mistake is using a medium brush for everything: it&apos;s too slow for large areas and too imprecise for details. Train yourself to constantly adjust — large strokes, then small refinements — and you&apos;ll cut your paint time in half.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Paint Order</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  The order you paint your body matters when time is tight. Always start with your head — it&apos;s the most visible part of your character and the first thing Seekers scan. A mismatched head sticks out instantly, even if the rest of your body is perfectly camouflaged. Next, paint your torso, which is the largest visible surface. Finally, cover your limbs. If time runs out before you finish, at least your head and body will blend in. Seekers rarely examine hands and feet closely unless they&apos;re already suspicious. This priority order ensures you look passable even under time pressure.
                </p>
              </div>
            </div>
          </section>

          <section id="clone-mechanics" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Clone Mechanics</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Clones are one of the Hider&apos;s most powerful — and most underused — tools. A clone is a static copy of your character that you can place anywhere in the map. Clones inherit your current paint job at the moment of creation, making them look identical to you. Understanding how and when to use clones can turn a losing round into a victory.
            </p>
            <div className="space-y-4">
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Creating Effective Clones</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  To create a clone, activate the clone ability and place it in the world. The clone takes a snapshot of your current paint, so make sure you&apos;re fully painted before deploying. Place clones in spots where an object would naturally exist — a clone floating in the middle of a hallway screams fake. Position them on shelves, against walls, or in corners where Seekers would expect to find a hider.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Using Clones as Decoys</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  The primary use of clones is as decoys. Place a clone in an obvious hiding spot — like a dark corner or behind a door — and hide somewhere completely different. When a Seeker finds and tags the clone, they&apos;ll often assume they&apos;ve found you and waste time searching nearby. This buys you precious seconds, especially in the final moments of a round. Place clones in high-traffic areas to maximize the chance they&apos;re discovered before you are.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Clone Strategies in Double Mode</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  In Double mode, clone placement becomes even more strategic. Since multiple hiders are active, Seekers expect to find several players. Scatter your clones across different areas of the map to spread the Seekers thin. Coordinate with teammates — if one player&apos;s clone is found in the east, hide your own clone in the west to force Seekers to cover the entire map. The more ground Seekers have to check, the longer everyone survives.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Clone Timing and Placement</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Deploy clones after you&apos;ve finished painting but before the hunting phase begins. This ensures they match your final paint job. Avoid placing all clones in a cluster — spread them across at least two distinct zones. A Seeker who finds two clones right next to each other will immediately know both are fake and search harder for the real you. One clone near your real position and one far away creates maximum confusion.
                </p>
              </div>
            </div>
          </section>

          <section id="forced-taunt" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Surviving Forced Taunts</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Forced taunts are a game mechanic designed to prevent Hiders from camping indefinitely. Periodically, the game will trigger a taunt animation on your character, briefly revealing your position with a visual and audio cue. This is one of the most dangerous moments for any Hider — but with the right strategies, you can survive even when the game forces you to give away your spot.
            </p>
            <div className="space-y-4">
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Preemptive Repositioning</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  If you notice the taunt timer approaching, quietly move to a nearby spot that looks similar to where you were. When the taunt triggers, Seekers will rush to your old position and find nothing. The key is moving to a surface with the same color palette so you don&apos;t need to repaint. This requires knowing the map well enough to identify nearby alternative spots in advance.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Using Taunts as Bait</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Turn the forced reveal into a weapon. Position yourself in a misleading area before the taunt triggers — like a dead-end room or a spot far from your clone. When Seekers see your taunt indicator, they&apos;ll rush to that location. After they arrive and don&apos;t find you (because you&apos;ve already moved), they&apos;ll waste even more time searching the surrounding area. Meanwhile, you&apos;re hiding peacefully across the map.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Paint During the Animation</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  The taunt animation lasts only a couple of seconds, but if you&apos;re quick, you can adjust your paint while it plays. If the taunt reveals you&apos;re slightly off-color from your surroundings, use those brief moments to touch up your paint so that when the animation ends and you freeze again, you&apos;re better camouflaged than before. This turns a disadvantage into an opportunity for improvement.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Accept and Prepare to Run</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Sometimes there&apos;s nothing you can do — the taunt catches you in a bad spot with no escape route. In these moments, accept the reveal and mentally prepare your escape route. Know which direction you&apos;ll sprint if a Seeker spots you. Having a pre-planned escape path — even just knowing which corner to turn — gives you a massive advantage over panicking and running blindly. Surviving one forced reveal can be the difference between winning and losing the round.
                </p>
              </div>
            </div>
          </section>

          <section id="light-shadow" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Using Light and Shadow</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Lighting is one of the most overlooked factors in successful hiding. Two identical paint jobs can look perfect or terrible depending on where you position yourself relative to light sources. Understanding how light interacts with your camouflage gives you an edge that most players never consider.
            </p>
            <div className="space-y-4">
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">High-Contrast vs Low-Contrast Areas</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  High-contrast areas — where bright light meets deep shadow — are risky hiding spots because small color differences become glaringly obvious. A slight mismatch that&apos;s invisible in uniform lighting will stand out dramatically at the edge of a shadow. Low-contrast areas with even, diffused light are far more forgiving. Seek uniform lighting zones when choosing your spot, and avoid hiding right at the boundary between light and shadow.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Light Direction and Visibility</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  The direction light hits your character affects how visible you are. If light hits you from the front, it washes out your paint and makes you easier to spot. Light from behind creates a silhouette effect. The ideal position is light coming from the same direction as the surface you&apos;re blending with — this ensures your highlights and shadows match the environment naturally. Pay attention to where windows, lamps, and overhead lights are placed on each map.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Dark Corners vs Well-Lit Spots</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Dark corners are the classic hiding spot for a reason — shadows hide imperfections in your paint job. But experienced Seekers know this and check dark areas first. Well-lit spots, on the other hand, are often ignored because Seekers assume no one would hide in plain sight. If your paint is near-perfect, a well-lit spot with excellent camouflage can be safer than a dark corner with mediocre paint. Match your hiding strategy to the quality of your camouflage.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Map-Specific Lighting Differences</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Every map in MECCHA CHAMELEON has unique lighting setups. Some maps feature dramatic overhead lighting that creates strong shadows, while others have soft ambient lighting that&apos;s even throughout. Spend time in each map during practice mode studying the light sources. Notice which areas are consistently bright and which are always in shadow. This knowledge lets you pick the best hiding spots before the round even starts, giving you a head start over Hiders who are figuring out the lighting on the fly.
                </p>
              </div>
            </div>
          </section>

          <section id="core-strategies" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Core Strategies</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Every successful Hider follows a few fundamental principles. Master these before moving on to advanced techniques.
            </p>
            <div className="space-y-4">
              {[
                { tip: "Choose your spot before painting", desc: "Always scout the map and pick your final position first. Painting before positioning wastes precious time and forces you to repaint when you move." },
                { tip: "Match the surface, not just the color", desc: "A perfect color match on the wrong surface type still looks off. Pay attention to roughness, metallic finishes, and texture patterns — not just hue." },
                { tip: "Embrace the freeze", desc: "Once you're in position, stop all movement. Even the slightest twitch can catch a Seeker's eye. Go completely still and wait." },
                { tip: "Think like a prop", desc: "The best Hiders don't hide — they disguise. Place yourself where an object would naturally exist. A person-shaped blob in the middle of a hallway is suspicious. A vase-shaped figure on a shelf is genius." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="painting-techniques" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Best Painting Techniques</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Painting is your most important skill as a Hider. These techniques will help you achieve seamless camouflage every round.
            </p>
            <div className="bg-surface-container-high border border-outline-variant rounded-lg p-6 mb-4">
              <h3 className="font-label-caps text-label-caps text-primary mb-3 uppercase">Essential Painting Workflow</h3>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>1. Stand directly against the surface you want to blend with</li>
                <li>2. Use the 3D eyedropper to sample colors from multiple angles</li>
                <li>3. Paint large areas first with base colors, then add detail</li>
                <li>4. Step back and view yourself from common Seeker angles</li>
                <li>5. Fine-tune with secondary colors to break up your silhouette</li>
              </ul>
            </div>
            <div className="space-y-4">
              {[
                { tip: "Use the eyedropper liberally", desc: "Don't eyeball colors. The 3D eyedropper picks exact values including lighting — always use it for the most accurate match." },
                { tip: "Break up your silhouette", desc: "A single solid color screams 'player'. Use multiple shades, add edge details, and paint patterns that match the surrounding surface." },
                { tip: "Account for lighting and shadows", desc: "Colors look different under direct light vs. shadow. Sample from the exact spot you'll occupy, including the lighting conditions there." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="map-tips" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Map-Specific Tips</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Each map in MECCHA CHAMELEON has unique environments and hiding opportunities. Knowing the terrain gives you a massive advantage.
            </p>
            <div className="space-y-4">
              {[
                { tip: "Learn the color palettes", desc: "Every map has dominant color themes. Before the round starts, memorize the primary colors so you can quickly adapt your paint scheme." },
                { tip: "Identify high-traffic zones", desc: "Know where Seekers are most likely to walk first. Avoid hiding near spawn points, objective areas, or narrow choke points." },
                { tip: "Use verticality", desc: "Most players hide at eye level. Look up — ledges, shelves, and elevated platforms are often overlooked by Seekers scanning horizontally." },
                { tip: "Exploit dark corners and alcoves", desc: "Shadowed areas are forgiving. Small color mismatches are nearly invisible in dim lighting, giving you a wider margin of error." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="advanced-hiding" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Advanced Hiding</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Once you've mastered the basics, these advanced techniques will make you nearly impossible to find.
            </p>
            <div className="space-y-4">
              {[
                { tip: "The decoy strategy", desc: "Paint yourself to look like a common object — a chair, a box, a potted plant. Seekers walk past hundreds of props without checking each one." },
                { tip: "Edge hiding", desc: "Position yourself at the boundary between two different colored surfaces. Paint each half of your body to match the respective side for a split-camouflage effect." },
                { tip: "The slow reposition", desc: "If a Seeker is getting close, slowly inch away while they're looking in another direction. Never sprint — the movement will give you away instantly." },
                { tip: "Psychological misdirection", desc: "Hide near obvious decoy spots. When Seekers find a badly-hidden player nearby, they often assume the area is clear and move on." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="mistakes" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Common Mistakes</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Avoid these frequent errors that get Hiders caught every round.
            </p>
            <div className="space-y-4">
              {[
                { mistake: "Painting before positioning", desc: "You'll waste time and paint moving to your spot. Always find your hiding location first, then paint to match." },
                { mistake: "Hiding in the open", desc: "The middle of a room, center of a hallway, or an empty floor is the first place Seekers look. Use corners, edges, and cluttered areas." },
                { mistake: "Ignoring your silhouette", desc: "Even with perfect colors, a human-shaped outline is recognizable. Break up your outline by matching edges to nearby objects." },
                { mistake: "Moving when a Seeker is nearby", desc: "Movement is the #1 way to get caught. If a Seeker is close, freeze completely — even if your paint isn't perfect." },
                { mistake: "Using only one color", desc: "Flat single-color paint looks unnatural. Real surfaces have variation, dirt, scratches, and color shifts. Add detail to sell the illusion." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-error rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-error mb-1">⚠ {item.mistake}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What\u2019s the best object to hide as in MECCHA CHAMELEON?", a: "Small, common objects work best. Avoid anything that looks out of place. The best disguise is one that blends with the specific surface you\u2019re standing against." },
                { q: "Should I move during the hiding phase?", a: "Minimize movement. Find your spot, paint yourself, and stay still. Even small movements can catch a seeker\u2019s eye due to animation differences between players and static objects." },
                { q: "How do I use the eyedropper tool?", a: "Right-click on any surface to sample its color, roughness, and metallic values. This gives you the exact match needed to blend in. Sample from the surface directly behind your hiding spot for best results." },
                { q: "What are clones used for?", a: "Clones are decoy copies of your character. Place them as distractions to waste the seeker\u2019s time, or use them to confuse the seeker about your real position during the hunting phase." },
                { q: "How do I paint fast enough in time?", a: "Use a large brush for base coverage, paint head and torso first (most visible), and use the eyedropper before painting to avoid wrong colors. With practice, full-body painting takes under 10 seconds." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-green-500 rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.q}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
          <FAQSchema
            items={[
              { q: "What\u2019s the best object to hide as in MECCHA CHAMELEON?", a: "Small, common objects work best. Avoid anything that looks out of place. The best disguise is one that blends with the specific surface you\u2019re standing against." },
              { q: "Should I move during the hiding phase?", a: "Minimize movement. Find your spot, paint yourself, and stay still. Even small movements can catch a seeker\u2019s eye due to animation differences between players and static objects." },
              { q: "How do I use the eyedropper tool?", a: "Right-click on any surface to sample its color, roughness, and metallic values. This gives you the exact match needed to blend in. Sample from the surface directly behind your hiding spot for best results." },
              { q: "What are clones used for?", a: "Clones are decoy copies of your character. Place them as distractions to waste the seeker\u2019s time, or use them to confuse the seeker about your real position during the hunting phase." },
              { q: "How do I paint fast enough in time?", a: "Use a large brush for base coverage, paint head and torso first (most visible), and use the eyedropper before painting to avoid wrong colors. With practice, full-body painting takes under 10 seconds." },
            ]}
          />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
            <Link href="/maps" className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all">
              BROWSE MAPS
            </Link>
            <Link href="/guides/beginner" className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all">
              BEGINNER GUIDE
            </Link>
            <Link href="/guides/seeker" className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all">
              SEEKER GUIDE
            </Link>
          </div>

          {/* Deep Dive Section */}
          <section className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Deep Dive: Master Every Aspect of Hiding
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-6">
              Want to go deeper? These specialized guides cover every hiding technique in detail.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/guides/paint" className="group bg-surface border border-outline-variant rounded-lg p-5 hover:border-primary/50 transition-all">
                <span className="text-2xl mb-2 block">🎨</span>
                <h3 className="font-label-caps text-label-caps text-on-surface group-hover:text-primary transition-colors mb-2">Paint Guide</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Best colors for every surface and map. Master the eyedropper, color mixing, and surface matching.</p>
              </Link>
              <Link href="/guides/combos" className="group bg-surface border border-outline-variant rounded-lg p-5 hover:border-primary/50 transition-all">
                <span className="text-2xl mb-2 block">🧩</span>
                <h3 className="font-label-caps text-label-caps text-on-surface group-hover:text-primary transition-colors mb-2">Object Combos</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Best paint + object combinations for each map. Tested combos that fool even experienced seekers.</p>
              </Link>
              <Link href="/guides/object-tiers" className="group bg-surface border border-outline-variant rounded-lg p-5 hover:border-primary/50 transition-all">
                <span className="text-2xl mb-2 block">📊</span>
                <h3 className="font-label-caps text-label-caps text-on-surface group-hover:text-primary transition-colors mb-2">Object Tier List</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Ranked list of every object. Know which disguises work and which will get you caught instantly.</p>
              </Link>
            </div>
          </section>
        </article>
      </div>

      <RelatedPages
        pages={relatedGuides["hider"]}
        nextSteps={[
          { label: "HIDER PATH", title: "Master Hiding", description: "Deep dive into camouflage, painting, and positioning", href: "/guides/hider", icon: "🎨" },
          { label: "SEEKER PATH", title: "Hunt Better", description: "Learn to read the environment and catch hiders", href: "/guides/seeker", icon: "🔍" },
          { label: "SOCIAL PLAY", title: "Play With Friends", description: "Set up the perfect lobby for your group", href: "/guides/tips", icon: "🎮" },
        ]}
      />

      <Comments slug="guides/hider" />
    </main>
  );
}
