import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Price — Is It Worth $5.99?",
  description:
    "Is MECCHA CHAMELEON worth buying? Price breakdown, what you get, and honest verdict for the $5.99 Steam game.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/price",
  },
  openGraph: {
    title: "MECCHA CHAMELEON Price — Is It Worth $5.99?",
    description:
      "Is MECCHA CHAMELEON worth buying? Price breakdown, what you get, and honest verdict for the $5.99 Steam game.",
    url: "https://mecchachameleonlab.com/price",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MECCHA CHAMELEON Price — Is It Worth $5.99?",
    description:
      "Is MECCHA CHAMELEON worth buying? Price breakdown, what you get, and honest verdict for the $5.99 Steam game.",
  },
};

const sections = [
  { id: "price-breakdown", title: "Price Breakdown" },
  { id: "what-you-get", title: "What You Get" },
  { id: "comparison", title: "Comparison" },
  { id: "verdict", title: "Verdict" },
  { id: "faq", title: "FAQ" },
];

const faqItems = [
  {
    q: "How much does MECCHA CHAMELEON cost?",
    a: "MECCHA CHAMELEON costs $5.99 USD on Steam. There are no microtransactions or paid DLC — everything is included in the base price.",
  },
  {
    q: "Is MECCHA CHAMELEON free-to-play?",
    a: "No, MECCHA CHAMELEON is a premium game at $5.99. However, it offers exceptional value with 7+ maps, 605+ Workshop items, and multiplayer — all included.",
  },
  {
    q: "Are there microtransactions in MECCHA CHAMELEON?",
    a: "No. There are zero microtransactions, loot boxes, or paid DLC. Every map, object, and cosmetic is available from the moment you purchase the game.",
  },
  {
    q: "Is MECCHA CHAMELEON worth $5.99?",
    a: "Absolutely. For the price of a coffee, you get a full multiplayer game with 7+ official maps, 521+ Steam Workshop community items, and active multiplayer. Most players report hundreds of hours of gameplay.",
  },
  {
    q: "Does MECCHA CHAMELEON go on sale?",
    a: "Yes, MECCHA CHAMELEON occasionally goes on sale during Steam seasonal events like the Summer Sale and Winter Sale. Wishlist it on Steam to get notified.",
  },
];

const comparisonGames = [
  { name: "MECCHA CHAMELEON", price: "$5.99", maps: "7+", workshop: "605+", multiplayer: "Yes", verdict: "Best value" },
  { name: "Prop Hunt (Garry's Mod)", price: "$9.99", maps: "Varies", workshop: "Massive", multiplayer: "Yes", verdict: "Needs GMod" },
  { name: "Unspottable", price: "$14.99", maps: "10+", workshop: "No", multiplayer: "Local only", verdict: "Party game" },
  { name: "Hidden in Plain Sight", price: "$5.99", maps: "5", workshop: "No", multiplayer: "Local only", verdict: "Niche" },
];

export default function PricePage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Price", url: "https://mecchachameleonlab.com/price" },
        ]}
      />
      <FAQSchema items={faqItems} />

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
            Is MECCHA CHAMELEON Worth $5.99?
          </h1>

          {/* Price Breakdown */}
          <section id="price-breakdown" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Price Breakdown
            </h2>
            <div className="bg-surface border border-outline-variant rounded-lg p-6 mb-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-display-lg text-primary">$5.99</span>
                <span className="text-on-surface-variant font-body-main">USD on Steam</span>
              </div>
              <p className="font-body-main text-body-main text-on-surface-variant mb-4">
                MECCHA CHAMELEON is a premium buy-to-play game with zero microtransactions, no loot boxes, and no paid DLC. You pay once and get everything.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#12121e] border border-[#1e1e32] rounded-lg p-4 text-center">
                  <span className="block font-label-caps text-label-caps text-primary mb-1">NO MTX</span>
                  <span className="font-body-sm text-on-surface-variant">Zero microtransactions</span>
                </div>
                <div className="bg-[#12121e] border border-[#1e1e32] rounded-lg p-4 text-center">
                  <span className="block font-label-caps text-label-caps text-primary mb-1">NO DLC</span>
                  <span className="font-body-sm text-on-surface-variant">All content included</span>
                </div>
                <div className="bg-[#12121e] border border-[#1e1e32] rounded-lg p-4 text-center">
                  <span className="block font-label-caps text-label-caps text-primary mb-1">FREE UPDATES</span>
                  <span className="font-body-sm text-on-surface-variant">Regular content patches</span>
                </div>
              </div>
            </div>
          </section>

          {/* What You Get */}
          <section id="what-you-get" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              What You Get
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              For $5.99, here&apos;s everything included in the base game:
            </p>
            <div className="space-y-4">
              {[
                {
                  item: "7+ Official Maps",
                  desc: "From kitchen counters to night-time rooftops, each map offers unique hiding spots, paint challenges, and strategic depth. New maps arrive in free updates.",
                },
                {
                  item: "605+ Workshop Items",
                  desc: "The Steam Workshop community has created nearly 500 custom objects, maps, and cosmetics. This number grows every week, giving you essentially unlimited content.",
                },
                {
                  item: "Online Multiplayer",
                  desc: "Play hide-and-seek with friends or strangers online. Currently PC (Windows) only — all players are on the same platform via Steam.",
                },
                {
                  item: "Paint System",
                  desc: "The core mechanic — paint your body to blend into any surface. Mastering paint matching is the key skill that separates casual players from pros.",
                },
                {
                  item: "Regular Updates",
                  desc: "The developer actively releases balance patches, new objects, and quality-of-life improvements. The game keeps getting better.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border-l-4 border-primary rounded-r-lg p-4"
                >
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">
                    {item.item}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison */}
          <section id="comparison" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Comparison With Similar Games
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              How does MECCHA CHAMELEON stack up against other hide-and-seek and prop hunt games?
            </p>
            <div className="space-y-3">
              {comparisonGames.map((game, i) => (
                <div
                  key={i}
                  className={`bg-surface border rounded-lg p-4 ${
                    game.name === "MECCHA CHAMELEON"
                      ? "border-primary/50 shadow-[0_0_12px_rgba(75,226,119,0.15)]"
                      : "border-outline-variant"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-label-caps text-label-caps text-on-surface">
                        {game.name}
                        {game.name === "MECCHA CHAMELEON" && (
                          <span className="ml-2 text-primary">★ THIS GAME</span>
                        )}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-on-surface-variant">
                      <span>{game.price}</span>
                      <span>{game.maps} maps</span>
                      <span>{game.multiplayer}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Verdict */}
          <section id="verdict" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Verdict
            </h2>
            <div className="bg-surface border border-primary/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🦎</span>
                <span className="font-display-lg text-xl text-primary uppercase">
                  Absolutely Worth It
                </span>
              </div>
              <p className="font-body-main text-body-main text-on-surface-variant mb-4">
                At $5.99, MECCHA CHAMELEON is one of the best value propositions in casual gaming. You&apos;re getting a fully-featured multiplayer hide-and-seek game with a unique paint mechanic, 7+ maps, 605+ Workshop items, and active developer support — all for less than the price of a fast food meal.
              </p>
              <p className="font-body-main text-body-main text-on-surface-variant mb-4">
                The game has a 4.2/5 aggregate rating from over 42,000 reviews on Steam. Most players report getting dozens to hundreds of hours of entertainment, making the cost-per-hour essentially negligible.
              </p>
              <p className="font-body-main text-body-main text-on-surface-variant">
                The only scenario where we&apos;d suggest waiting is if you&apos;re on the fence — add it to your Steam wishlist and grab it during the next seasonal sale for an even better deal.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="bg-surface border border-outline-variant rounded-lg group"
                >
                  <summary className="p-4 cursor-pointer font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors list-none flex items-center justify-between">
                    <span>{item.q}</span>
                    <span className="ml-2 text-on-surface-variant group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-4 pb-4">
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
            <a
              href="https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-green-400 text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all"
            >
              BUY ON STEAM — $5.99
            </a>
            <Link
              href="/maps"
              className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
            >
              BROWSE MAPS
            </Link>
            <Link
              href="/guides/beginner"
              className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all"
            >
              BEGINNER GUIDE
            </Link>
          </div>
        </article>
      </div>

      <RelatedPages
        pages={[
          { title: "System Requirements", description: "Check if your PC can run MECCHA CHAMELEON.", href: "/system-requirements", icon: "💻" },
          { title: "Crossplay", description: "Can you play together across different platforms?", href: "/crossplay", icon: "🌐" },
          { title: "Beginner Guide", description: "Everything you need to know before your first round.", href: "/guides/beginner", icon: "📖" },
        ]}
      />
    </main>
  );
}
