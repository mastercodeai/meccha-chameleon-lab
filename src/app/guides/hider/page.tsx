import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import Comments from "@/components/Comments";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Hider Guide — Best Hiding Spots & Strategies (2026)",
  description: "Master the Hider role in MECCHA CHAMELEON. Best hiding spots on all 7 maps, painting techniques, object selection tips, and advanced blending strategies to never get caught.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/hider",
  },
  openGraph: {
    title: "MECCHA CHAMELEON Hider Guide — Best Hiding Spots & Strategies (2026) | MECCHA CHAMELEON Lab",
    description: "Master the Hider role in MECCHA CHAMELEON. Best hiding spots on all 7 maps, painting techniques, object selection tips, and advanced blending strategies to never get caught.",
    url: "https://mecchachameleonlab.com/guides/hider",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MECCHA CHAMELEON Hider Guide — Best Hiding Spots & Strategies (2026) | MECCHA CHAMELEON Lab",
    description: "Master the Hider role in MECCHA CHAMELEON. Best hiding spots on all 7 maps, painting techniques, object selection tips, and advanced blending strategies to never get caught.",
  },
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "core-strategies", title: "Core Strategies" },
  { id: "painting-techniques", title: "Best Painting Techniques" },
  { id: "map-tips", title: "Map-Specific Tips" },
  { id: "advanced-hiding", title: "Advanced Hiding" },
  { id: "mistakes", title: "Common Mistakes" },
];

export default function HiderGuidePage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides/beginner" },
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
              As a Hider in MECCHA CHAMELEON, your goal is simple: become invisible. You start each round with a blank white body and must paint yourself to perfectly blend into the environment before the Seekers begin their search.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant">
              The role demands patience, creativity, and a sharp eye for color. A great Hider doesn&apos;t just find a good spot — they become part of the map itself. This guide will take you from basic survival to mastering the art of camouflage.
            </p>
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
        </article>
      </div>

      <RelatedPages
        pages={[
          { title: "Seeker Guide", description: "Sharpen your detection skills and hunt like a pro.", href: "/guides/seeker", icon: "🔍" },
          { title: "Paint Guide", description: "Best color combinations for every surface type.", href: "/guides/paint", icon: "🎨" },
          { title: "Tips & Tricks", description: "50 essential tips for hiders, seekers, painters, and map experts.", href: "/guides/tips", icon: "💡" },
        ]}
      />

      <Comments slug="guides/hider" />
    </main>
  );
}
