import Link from "next/link";
import { BreadcrumbSchema, ArticleSchema, FAQSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import { relatedGuides } from "@/data/relatedGuides";
import Comments from "@/components/Comments";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "subscribe", title: "How to Subscribe" },
  { id: "best-maps", title: "Best Workshop Maps" },
  { id: "creating", title: "Creating Your Own Map" },
  { id: "official-vs-workshop", title: "Official vs Workshop Maps" },
  { id: "platform-faq", title: "Platform Compatibility" },
  { id: "faq", title: "FAQ" },
];

export default function WorkshopPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
          { name: "Workshop", url: "https://mecchachameleonlab.com/guides/workshop" },
        ]}
      />
      <ArticleSchema
        title="MECCHA CHAMELEON Workshop — 600+ Custom Maps Guide"
        description="Everything about MECCHA CHAMELEON Steam Workshop: how to subscribe to custom maps, best Workshop maps, map creation basics, and platform compatibility."
        url="https://mecchachameleonlab.com/guides/workshop"
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
            Steam Workshop Guide
          </h1>

          <p className="font-body-main text-body-main text-on-surface-variant mb-6">
            The Steam Workshop is where MECCHA CHAMELEON&apos;s community shines. With over 600 custom maps — and new ones added every week — the Workshop extends the game far beyond its 7 official maps. This guide covers how to subscribe to maps, the best community creations, and the basics of making your own.
          </p>

          {/* Overview */}
          <section id="overview" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Overview</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              The Steam Workshop for MECCHA CHAMELEON is a free content platform where community members create and share custom maps. All Workshop maps are free to download — you only need to own the base game ($5.99) to access them.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant">
              Workshop maps support all game modes (Basic, Infection, and Double) and work in both public and private lobbies. The Workshop data on our site refreshes daily via the Steam API, so you can browse and discover maps right here.
            </p>
          </section>

          {/* How to Subscribe */}
          <section id="subscribe" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">How to Subscribe</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Subscribing to Workshop maps is simple and takes just a few clicks:
            </p>
            <ol className="font-body-main text-body-main text-on-surface-variant space-y-3 list-decimal list-inside mb-4">
              <li><strong>Open Steam</strong> and navigate to the MECCHA CHAMELEON store page.</li>
              <li><strong>Click the &quot;Community Hub&quot;</strong> button, then select the &quot;Workshop&quot; tab.</li>
              <li><strong>Browse or search</strong> for maps. Use filters like &quot;Most Subscribed&quot; or &quot;Top Rated&quot; to find popular maps.</li>
              <li><strong>Click &quot;Subscribe&quot;</strong> on any map you want to add. Steam will automatically download it.</li>
              <li><strong>Launch MECCHA CHAMELEON</strong> — subscribed maps appear in your map selection screen alongside official maps.</li>
            </ol>
            <p className="font-body-main text-body-main text-on-surface-variant">
              To unsubscribe, return to the Workshop page and click &quot;Unsubscribe.&quot; The map will be removed on your next game launch.
            </p>
          </section>

          {/* Best Workshop Maps */}
          <section id="best-maps" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Best Workshop Maps</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              With 600+ maps available, it can be hard to know where to start. Here are some categories of highly-rated community maps worth trying:
            </p>
            <div className="space-y-4">
              <div className="bg-surface border border-outline-variant rounded-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-2">🏠 Realistic House Maps</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Detailed residential environments with lots of furniture and objects to blend into. Great for beginners because the surfaces are varied and easy to match with paint.
                </p>
              </div>
              <div className="bg-surface border border-outline-variant rounded-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-2">🏙️ Urban / City Maps</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Large outdoor environments with buildings, streets, and vehicles. These maps favor seekers due to open sightlines but offer creative hiding spots for skilled hiders.
                </p>
              </div>
              <div className="bg-surface border border-outline-variant rounded-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-2">🎨 Abstract / Art Maps</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Creative maps with unique visual themes — neon, watercolor, or surreal environments. These are challenging for painters but visually stunning.
                </p>
              </div>
              <div className="bg-surface border border-outline-variant rounded-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-2">📐 Small / Competitive Maps</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Compact maps designed for fast rounds and competitive play. Fewer hiding spots mean every paint job counts.
                </p>
              </div>
            </div>
          </section>

          {/* Creating Your Own Map */}
          <section id="creating" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Creating Your Own Map</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              MECCHA CHAMELEON supports community map creation. If you want to build your own map, here&apos;s what you need to know:
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Tools Required</h3>
            <ul className="font-body-main text-body-main text-on-surface-variant space-y-2 mb-4 list-disc list-inside">
              <li>A 3D modeling tool like <strong>Blender</strong> (free) or <strong>Unity</strong> for creating map geometry.</li>
              <li>Basic understanding of UV mapping and texturing.</li>
              <li>The MECCHA CHAMELEON map template (available on the Workshop or community Discord).</li>
            </ul>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Design Principles</h3>
            <ul className="font-body-main text-body-main text-on-surface-variant space-y-2 mb-4 list-disc list-inside">
              <li><strong>Variety of surfaces:</strong> Good maps have diverse colors and textures for hiders to paint against.</li>
              <li><strong>Balance:</strong> Avoid maps that heavily favor either hiders or seekers. Test with both roles.</li>
              <li><strong>Performance:</strong> Keep polygon counts reasonable. Maps that run poorly get downvoted fast.</li>
              <li><strong>Lighting:</strong> Consistent, well-lit environments help both painters and seekers.</li>
            </ul>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Publishing</h3>
            <p className="font-body-main text-body-main text-on-surface-variant">
              Once your map is ready, publish it through the Steam Workshop using the in-game upload tool. Add a clear description, screenshots, and tags to help players find it. Maps with good thumbnails and descriptions get significantly more subscribers.
            </p>
          </section>

          {/* Official vs Workshop Maps */}
          <section id="official-vs-workshop" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Official vs Workshop Maps</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Both official and Workshop maps have their strengths. Here&apos;s how they compare:
            </p>
            <div className="space-y-3">
              <div className="bg-surface border border-outline-variant rounded-lg p-4">
                <h3 className="font-label-caps text-label-caps text-primary mb-2">Quality &amp; Polish</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  <strong>Official:</strong> Professionally designed with consistent quality. <strong>Workshop:</strong> Varies widely — top-rated maps rival official quality, but lesser-known maps may have rough edges.
                </p>
              </div>
              <div className="bg-surface border border-outline-variant rounded-lg p-4">
                <h3 className="font-label-caps text-label-caps text-primary mb-2">Variety</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  <strong>Official:</strong> 7 maps covering core themes. <strong>Workshop:</strong> 600+ maps with wild creativity — from realistic offices to alien planets to pixel art worlds.
                </p>
              </div>
              <div className="bg-surface border border-outline-variant rounded-lg p-4">
                <h3 className="font-label-caps text-label-caps text-primary mb-2">Balance</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  <strong>Official:</strong> Extensively playtested for fair gameplay. <strong>Workshop:</strong> Community maps may be unbalanced — check ratings and reviews before committing to a long session.
                </p>
              </div>
              <div className="bg-surface border border-outline-variant rounded-lg p-4">
                <h3 className="font-label-caps text-label-caps text-primary mb-2">Updates</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  <strong>Official:</strong> Updated by the developers with game patches. <strong>Workshop:</strong> Updated by individual creators — some are actively maintained, others are not.
                </p>
              </div>
            </div>
          </section>

          {/* Platform Compatibility */}
          <section id="platform-faq" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Platform Compatibility</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Here&apos;s what you need to know about Workshop maps across different platforms:
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">PC (Windows)</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Full Workshop support. Subscribe, download, and play all 600+ maps with no limitations. This is the primary platform for MECCHA CHAMELEON.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Steam Deck</h3>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Workshop maps work on Steam Deck. The subscription and download process is identical to PC. Performance may vary depending on map complexity — simpler maps run smoothly, while very detailed maps may need lower graphics settings.
            </p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Console &amp; Crossplay</h3>
            <p className="font-body-main text-body-main text-on-surface-variant">
              MECCHA CHAMELEON is currently a Steam PC game. Workshop content is exclusive to the Steam platform. If the game comes to other platforms in the future, Workshop map availability would depend on the platform&apos;s mod support.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Frequently Asked Questions
            </h2>
            <FAQSchema
              items={[
                { q: "How do I install Workshop maps?", a: "Open the Steam Workshop page for MECCHA CHAMELEON, find a map you like, and click Subscribe. The map will automatically download and appear in your in-game map selection." },
                { q: "Are Workshop maps free?", a: "Yes, all Steam Workshop content for MECCHA CHAMELEON is completely free. You only need to own the base game ($5.99) to access all Workshop maps." },
                { q: "Can I play Workshop maps on Steam Deck?", a: "Yes, Workshop maps work on Steam Deck. The download and installation process is the same as on PC. Performance may vary depending on map complexity." },
                { q: "How many Workshop maps are there?", a: "There are over 600 community-created Workshop maps available, with new maps being added regularly. The Workshop data on our site refreshes daily via the Steam API." },
              ]}
            />
            {/* Visual FAQ cards */}
            <div className="space-y-4 mt-4">
              {[
                { q: "How do I install Workshop maps?", a: "Open the Steam Workshop page for MECCHA CHAMELEON, find a map you like, and click Subscribe. The map will automatically download and appear in your in-game map selection." },
                { q: "Are Workshop maps free?", a: "Yes, all Steam Workshop content for MECCHA CHAMELEON is completely free. You only need to own the base game ($5.99) to access all Workshop maps." },
                { q: "Can I play Workshop maps on Steam Deck?", a: "Yes, Workshop maps work on Steam Deck. The download and installation process is the same as on PC. Performance may vary depending on map complexity." },
                { q: "How many Workshop maps are there?", a: "There are over 600 community-created Workshop maps available, with new maps being added regularly. The Workshop data on our site refreshes daily via the Steam API." },
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
            <Link href="/guides/game-modes" className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all">
              GAME MODES
            </Link>
          </div>
        </article>
      </div>

      <RelatedPages
        pages={relatedGuides["tips"]}
        nextSteps={[
          { label: "LEARN MAPS", title: "Official Maps", description: "Master the 7 built-in maps first", href: "/maps", icon: "🗺️" },
          { label: "GAME MODES", title: "All Game Modes", description: "Which mode works best on Workshop maps", href: "/guides/game-modes", icon: "🎮" },
          { label: "BEGINNER GUIDE", title: "New Player Start", description: "Learn the basics before exploring Workshop", href: "/guides/beginner", icon: "📖" },
        ]}
      />

      <Comments slug="guides/workshop" />
    </main>
  );
}
