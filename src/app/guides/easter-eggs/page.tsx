import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import Comments from "@/components/Comments";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Community Secrets & Rumors",
 description:
    "Community-reported secrets, rumored easter eggs, and hidden details in MECCHA CHAMELEON. Unverified findings from the community.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/easter-eggs",
  },
  openGraph: {
    title: "MECCHA CHAMELEON Community Secrets & Rumors",
    description:
      "Community-reported secrets, rumored easter eggs, and hidden details in MECCHA CHAMELEON. Unverified findings from the community.",
    url: "https://mecchachameleonlab.com/guides/easter-eggs",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MECCHA CHAMELEON Community Secrets & Rumors",
    description:
      "Community-reported secrets, rumored easter eggs, and hidden details in MECCHA CHAMELEON. Unverified findings from the community.",
  },
};

const sections = [
  { id: "hidden-rooms", title: "Hidden Rooms" },
  { id: "secret-objects", title: "Secret Objects" },
  { id: "developer-references", title: "Developer References" },
  { id: "community-discoveries", title: "Community Discoveries" },
  { id: "map-specific", title: "Map-Specific Secrets" },
];

export default function EasterEggsPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
          { name: "Community Secrets", url: "https://mecchachameleonlab.com/guides/easter-eggs" },
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
                  className="font-body-sm text-sm text-on-surface-variant hover:text-secondary transition-colors py-1 px-2 rounded hover:bg-secondary/5"
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
            Community Secrets & Rumors
          </h1>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-8">
            <p className="font-body-sm text-body-sm text-yellow-200">
              ⚠️ <strong>Disclaimer:</strong> The following are community-reported findings and may not all be accurate. We verify entries as patches release. Some details are speculative or based on unconfirmed player reports.
            </p>
          </div>
          <p className="font-body-main text-body-main text-on-surface-variant mb-8">
            The MECCHA CHAMELEON community has reported various hidden secrets, easter eggs, and mysterious details across the game&apos;s maps. While not all findings have been officially confirmed, these are the most discussed community discoveries.
          </p>

          {/* Hidden Rooms */}
          <section id="hidden-rooms" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Hidden Rooms
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Several maps have been reported to contain secret areas. These community findings may require further verification.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "The Basement Vault",
                  map: "Backrooms",
                  desc: "Behind a row of filing cabinets, players report a narrow gap that leads to a hidden area with golden chameleon figurines and what appears to be a developer message on the wall.",
                  difficulty: "Medium",
                },
                {
                  title: "Attic Crawlspace",
                  map: "Hide-and-Seek Mansion",
                  desc: "Climb the bookshelf in the library to access a small crawlspace. Community members report finding what looks like developer concept art pinned to the walls.",
                  difficulty: "Hard",
                },
                {
                  title: "Rooftop Garden",
                  map: "Osaka",
                  desc: "Players report a vent cover on an elevated area that can be walked through, leading to a small garden with glowing plants and a hidden chameleon statue.",
                  difficulty: "Easy",
                },
                {
                  title: "Server Room",
                  map: "Backrooms",
                  desc: "In a back corner, a filing cabinet reportedly hides a passage to a mini room filled with blinking lights and computer terminals.",
                  difficulty: "Medium",
                },
              ].map((room, i) => (
                <div
                  key={i}
                  className="bg-surface border border-outline-variant rounded-lg p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-label-caps text-label-caps text-primary">
                      {room.title}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/30">
                      {room.difficulty}
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant mb-1">
                    Map: {room.map}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {room.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Secret Objects */}
          <section id="secret-objects" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Secret Objects
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Some objects in MECCHA CHAMELEON are hidden or behave in unexpected ways. These are scattered across various maps.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "The Golden Chameleon",
                  desc: "A tiny golden chameleon figurine hidden in an obscure corner of each map. Finding all of them across every map unlocks a special achievement.",
                  hint: "Always check behind large furniture and inside tight spaces.",
                },
                {
                  name: "Rubber Duck Army",
                  desc: "Community reports describe rubber ducks arranged in a formation under a desk that react when you interact with them.",
                  hint: "Look under desks and tables in office-themed maps like Backrooms.",
                },
                {
                  name: "Developer's Coffee Mug",
                  desc: "A coffee mug with the developer's handle written on it. It appears in different locations depending on the map, always near a workstation.",
                  hint: "Check any area that looks like someone works there.",
                },
                {
                  name: "The Infinity Cube",
                  desc: "Rumors of a strange glowing cube that shifts colors. Its reported location seems to change between updates.",
                  hint: "Community members report it appears near reflective surfaces.",
                },
              ].map((obj, i) => (
                <div
                  key={i}
                  className="bg-surface border-l-4 border-secondary rounded-r-lg p-4"
                >
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">
                    {obj.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">
                    {obj.desc}
                  </p>
                  <p className="font-body-sm text-xs text-secondary italic">
                    Hint: {obj.hint}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Developer References */}
          <section id="developer-references" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Developer References
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              The developer has scattered personal touches and references throughout the game.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "lemorion_1224 Signature",
                  desc: "The developer's username appears carved into hidden surfaces across multiple maps. Look for it etched into wood, written on whiteboards, or spray-painted in hard-to-reach spots.",
                },
                {
                  title: "Development Timeline",
                  desc: "A hidden wall in one of the maps displays a timeline of the game's development, from first prototype to full release. It includes early concept sketches and milestone dates.",
                },
                {
                  title: "Pet Chameleons",
                  desc: "Small animated chameleons sit on ledges and shelves in various maps. They're not objects you can hide as — they're part of the environment, and they occasionally change color.",
                },
                {
                  title: "Hidden Sound Effects",
                  desc: "Certain secret areas trigger unique sound effects not heard anywhere else in the game. These include chiptune melodies, retro game sounds, and developer voice clips.",
                },
              ].map((ref, i) => (
                <div
                  key={i}
                  className="bg-surface border-l-4 border-purple-500 rounded-r-lg p-4"
                >
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">
                    {ref.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {ref.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Community Discoveries */}
          <section id="community-discoveries" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Community Discoveries
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              The MECCHA CHAMELEON community has uncovered secrets that even veteran players missed. Here are some of the best community finds.
            </p>
            <div className="bg-surface-container-high border border-outline-variant rounded-lg p-6 mb-4">
              <h3 className="font-label-caps text-label-caps text-secondary mb-3 uppercase">
                Community Spotlight
              </h3>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  • <strong className="text-on-surface">Morse Code Message:</strong> Community members report blinking lights in a hidden room that spell out &quot;THANKS FOR PLAYING&quot; in morse code
                </li>
                <li>
                  • <strong className="text-on-surface">QR Code Object:</strong> A reportedly scannable QR code hidden on a poster — community members say it leads to a secret page with developer commentary
                </li>
                <li>
                  • <strong className="text-on-surface">Color Theory Puzzle:</strong> Rumored puzzle where painting surfaces in a specific color order reveals a hidden message
                </li>
                <li>
                  • <strong className="text-on-surface">Shadow Formation:</strong> Unconfirmed reports of shadows combining to form a chameleon shape at specific positions on certain maps
                </li>
              </ul>
            </div>
          </section>

          {/* Map-Specific Secrets */}
          <section id="map-specific" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Map-Specific Secrets
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Each official map may have unique secrets. These are community-reported and not all are confirmed.
            </p>
            <div className="space-y-3">
              {[
                { map: "Backrooms", secret: "Hidden area behind filing cabinets with golden figurines" },
                { map: "Mansion", secret: "Crawlspace behind bookshelves in the library" },
                { map: "Indoor Country", secret: "Reported underground tunnel near farm equipment area" },
                { map: "Osaka", secret: "Rooftop area accessible through a vent cover" },
                { map: "Penguin Hotel", secret: "Hidden room behind the hotel lobby counter" },
                { map: "Sewer", secret: "Secret area behind a breakable pipe section" },
                { map: "Sugar Land", secret: "Hidden candy cave behind a gingerbread house" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border border-outline-variant rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-2"
                >
                  <span className="font-label-caps text-label-caps text-primary shrink-0 sm:w-32">
                    {item.map}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.secret}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
            <Link
              href="/maps"
              className="bg-gradient-to-r from-secondary to-inverse-secondary text-on-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(168,130,255,0.4)] hover:brightness-110 transition-all"
            >
              BROWSE MAPS
            </Link>
            <Link
              href="/guides/beginner"
              className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
            >
              BEGINNER GUIDE
            </Link>
            <Link
              href="/guides/tips"
              className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
            >
              TIPS & TRICKS
            </Link>
          </div>
        </article>
      </div>

      <RelatedPages
        pages={[
          { title: "All Maps", description: "Browse all 7 official maps with hiding spot guides.", href: "/maps", icon: "🗺️" },
          { title: "Gallery", description: "Game screenshots, map previews, and character art.", href: "/gallery", icon: "🖼️" },
          { title: "Beginner Guide", description: "Everything you need to know before your first round.", href: "/guides/beginner", icon: "📖" },
        ]}
      />

      <Comments slug="guides/easter-eggs" />
    </main>
  );
}
