import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import { relatedGuides } from "@/data/relatedGuides";
import Comments from "@/components/Comments";
import GuideSeries from "@/components/GuideSeries";

export const metadata: Metadata = {
  title: "Paint Guide — Best Color Combinations",
  description: "Master the art of painting in MECCHA CHAMELEON. Learn color matching, surface-specific techniques, map palettes, and advanced tricks to become invisible.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/paint",
  },
  openGraph: {
    title: "Paint Guide — Best Colors for Every Map (2026)",
    description: "Master the art of painting in MECCHA CHAMELEON. Learn color matching, surface-specific techniques, map palettes, and advanced tricks to become invisible.",
    url: "https://mecchachameleonlab.com/guides/paint",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paint Guide — Best Colors for Every Map (2026)",
    description: "Master the art of painting in MECCHA CHAMELEON. Learn color matching, surface-specific techniques, map palettes, and advanced tricks to become invisible.",
  },
};

const sections = [
  { id: "how-paint-works", title: "How Paint Works" },
  { id: "surface-types", title: "Surface Types" },
  { id: "map-colors", title: "Map-Specific Colors" },
  { id: "advanced-techniques", title: "Advanced Techniques" },
  { id: "common-mistakes", title: "Common Color Mistakes" },
];

export default function PaintGuidePage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
          { name: "Paint Guide", url: "https://mecchachameleonlab.com/guides/paint" },
        ]}
      />
      <ArticleSchema
        title="Paint Guide — Best Color Combinations"
        description="Master the art of painting in MECCHA CHAMELEON. Learn color matching, surface-specific techniques, map palettes, and advanced tricks to become invisible."
        url="https://mecchachameleonlab.com/guides/paint"
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
            Paint Guide — Best Color Combinations
          </h1>

          <GuideSeries
            parentTitle="Hider Guide"
            parentHref="/guides/hider"
            seriesTitle="Hider Guide Series"
            pages={[
              { title: "Hider Guide", href: "/guides/hider", icon: "🎨" },
              { title: "Paint Guide", href: "/guides/paint", icon: "🎨", current: true },
              { title: "Object Combos", href: "/guides/combos", icon: "🧩" },
              { title: "Object Tier List", href: "/guides/object-tiers", icon: "📊" },
            ]}
          />

          {/* How Paint Works */}
          <section id="how-paint-works" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">How Paint Works</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Painting is the core survival skill in MECCHA CHAMELEON. Your goal is to make yourself indistinguishable from the environment. Every surface in the game has a unique color, texture, and finish — and you need to match all three.
            </p>
            <div className="bg-surface-container-high border border-outline-variant rounded-lg p-6 mb-4">
              <h3 className="font-label-caps text-label-caps text-primary mb-3 uppercase">The 3D Eyedropper</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
                The 3D Eyedropper is your most important tool. Right-click on any surface to sample its exact color and material properties. This grabs not just the base color but also the roughness and metallic values.
              </p>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Right-click a surface to sample its color
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  The sampled color includes lighting context from that spot
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Sample multiple spots on the same surface — colors vary
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Re-sample if you move to a different area with different lighting
                </li>
              </ul>
            </div>
            <div className="bg-surface border border-primary/30 rounded-lg p-6">
              <h3 className="font-label-caps text-label-caps text-primary mb-3 uppercase">Color Matching Basics</h3>
              <p className="font-body-main text-body-main text-on-surface-variant">
                Don't just match the hue — match the <span className="text-primary font-semibold">value</span> (brightness) and <span className="text-primary font-semibold">saturation</span> (intensity) too. A color that's the right hue but too bright or too dull will still stand out. The eyedropper handles this automatically, but understanding the principle helps when you need to adjust manually.
              </p>
            </div>
          </section>

          {/* Surface Types */}
          <section id="surface-types" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Surface Types</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Different materials absorb and reflect light differently. Matching the surface type is just as important as matching the color. Here's what works best on each material:
            </p>
            <div className="space-y-4">
              {[
                {
                  surface: "Wood",
                  desc: "Use warm browns, tannish tones, and muted oranges. Keep roughness high and metallic at zero. Wood grain has subtle color variation — sample multiple spots and blend.",
                  tip: "Warm browns, high roughness, zero metallic",
                },
                {
                  surface: "Metal",
                  desc: "Metallic surfaces need the metallic slider turned up. Use silvers, grays, and dark steel tones. Metals reflect their surroundings, so consider the environment's ambient color.",
                  tip: "Silvers & grays, high metallic, medium roughness",
                },
                {
                  surface: "Fabric",
                  desc: "Fabrics are matte and absorbent. Use low metallic, high roughness. Colors tend to be richer and deeper on fabric. Couches, curtains, and rugs each have distinct palettes.",
                  tip: "Rich deep colors, zero metallic, very high roughness",
                },
                {
                  surface: "Stone",
                  desc: "Stones are tricky — they have natural color variation. Use muted grays, beiges, and tans. Medium roughness, zero metallic. Blend between light and dark stone patches.",
                  tip: "Muted grays & beiges, medium roughness, zero metallic",
                },
                {
                  surface: "Tile",
                  desc: "Tiles are smooth and slightly reflective. Use clean whites, blues, and grays. Lower roughness than stone, still zero metallic. Grout lines are a different color — account for them.",
                  tip: "Clean whites & blues, low roughness, zero metallic",
                },
                {
                  surface: "Glass",
                  desc: "Glass is nearly impossible to perfectly replicate, but you can match the frame or surrounding color instead. Focus on what's behind the glass if you can't avoid it.",
                  tip: "Match the frame, not the glass itself",
                },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.surface}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">{item.desc}</p>
                  <span className="font-body-sm text-xs text-primary bg-primary/10 px-2 py-1 rounded">{item.tip}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Map-Specific Colors */}
          <section id="map-colors" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Map-Specific Colors</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Each map has a dominant color palette. Pre-mixing these colors before a round starts gives you a head start. Here are the best color combinations for each map:
            </p>
            <div className="space-y-4">
              {[
                {
                  map: "Backrooms",
                  colors: "Yellows, off-whites, old carpet browns",
                  desc: "The iconic off-yellow wallpaper and stained carpet. Match the sickly yellow-beige palette. Fluorescent lighting washes out colors — desaturate slightly. Sample from the wallpaper near the ceiling for the most accurate tone.",
                },
                {
                  map: "Hide-and-Seek Mansion",
                  colors: "Dark walnut browns, burgundy reds, gold accents",
                  desc: "Rich walnut wood, velvet curtains, and gold trim define the Mansion. Use warm dark browns on furniture and burgundy tones on fabric. The library section is especially forgiving for brown-painted objects.",
                },
                {
                  map: "Indoor Country",
                  colors: "Greens, earth tones, hay yellows, wood browns",
                  desc: "Green foliage, hay bales, and wooden farm equipment create a natural palette. Use darker greens near the ground and lighter greens near windows. The hay and wood tones make warm browns a strong fallback.",
                },
                {
                  map: "Osaka",
                  colors: "Reds, oranges, grays, dark alley tones",
                  desc: "Neon signs, traditional red accents, and modern gray buildings. Japanese-style architecture uses warm reds and oranges, while the urban sections need cool grays. Dark alley areas call for muted dark tones.",
                },
                {
                  map: "Penguin Hotel",
                  colors: "Whites, light blues, hotel gold accents",
                  desc: "White marble floors, ice sculptures, and blue-toned hotel decor. White and light blue paint blend into the lobby and hallways. Gold accent areas need warm metallic paint for fixtures and trim.",
                },
                {
                  map: "Sewer",
                  colors: "Grays, dark greens, rust oranges, muted tones",
                  desc: "Muted grays, dark greens, and rusty metal dominate. Gray-green paint on pipes and metal grates disappears into the damp, low-lit tunnels. Rusted sections need orange-brown metallic values.",
                },
                {
                  map: "Sugar Land",
                  colors: "Pinks, candy pastels, bright multicolor",
                  desc: "A candy wonderland of pinks, pastels, and bright sweets. Pink and pastel paint matches nearly everything on this map. The gingerbread and cake areas offer rich warm brown accents for variety.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-surface border border-outline-variant rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-label-caps text-label-caps text-on-surface">{item.map}</h3>
                    <span className="font-body-sm text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">{item.colors}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Advanced Techniques */}
          <section id="advanced-techniques" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Advanced Techniques</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Once you've mastered the basics, these techniques will take your painting to the next level and make you nearly impossible to spot.
            </p>
            <div className="space-y-4">
              {[
                {
                  technique: "Gradient Blending",
                  desc: "Instead of one flat color, blend between two or three similar tones. Surfaces in real life aren't perfectly uniform — a gradient that goes from light to dark mimics natural shadow transitions and makes you look more organic.",
                },
                {
                  technique: "Pattern Matching",
                  desc: "Some surfaces have repeating patterns (tiles, wood grain, wallpaper). Study the pattern and replicate it on your body. Even a rough approximation of the pattern is far more convincing than a flat color.",
                },
                {
                  technique: "Metallic Finishes",
                  desc: "Adjust the metallic slider to match surface reflectivity. A chrome faucet needs high metallic, while a wooden table needs zero. The wrong metallic value is one of the biggest tells for experienced seekers.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-secondary rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.technique}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Color Mistakes */}
          <section id="common-mistakes" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Common Color Mistakes</h2>
            <div className="space-y-4">
              {[
                {
                  mistake: "Using Too Bright Colors",
                  desc: "New players often pick colors at full saturation. Real environments are muted and desaturated. Dial back the intensity — your paint should look 'boring' to blend in.",
                },
                {
                  mistake: "Ignoring Lighting Conditions",
                  desc: "A color that matches in bright light looks completely wrong in shadow. Always sample colors from the exact spot where you plan to hide, not from across the room.",
                },
                {
                  mistake: "Not Using the Eyedropper",
                  desc: "Trying to pick colors manually from the color wheel is unreliable. The 3D eyedropper captures exact values including roughness and metallic properties. Always use it.",
                },
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
          </div>
        </article>
      </div>

      <RelatedPages
        pages={relatedGuides["paint"]}
        nextSteps={[
          { label: "HIDER PATH", title: "Master Hiding", description: "Deep dive into camouflage, painting, and positioning", href: "/guides/hider", icon: "🎨" },
          { label: "SEEKER PATH", title: "Hunt Better", description: "Learn to read the environment and catch hiders", href: "/guides/seeker", icon: "🔍" },
          { label: "SOCIAL PLAY", title: "Play With Friends", description: "Set up the perfect lobby for your group", href: "/guides/tips", icon: "🎮" },
        ]}
      />

      <Comments slug="guides/paint" />
    </main>
  );
}
