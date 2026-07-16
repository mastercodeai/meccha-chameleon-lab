import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON System Requirements — Can You Run It? (2026)",
  description:
    "MECCHA CHAMELEON minimum specs: Windows 10 64-bit, Intel Core i5, DirectX 11 GPU. Runs on laptops and low-end PCs. Full system requirements and compatibility guide.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/system-requirements",
  },
  keywords: [
    "meccha chameleon system requirements",
    "meccha chameleon pc specs",
    "can i run meccha chameleon",
    "meccha chameleon minimum requirements",
  ],
  openGraph: {
    title:
      "MECCHA CHAMELEON System Requirements — Can You Run It? (2026)",
    description:
      "MECCHA CHAMELEON minimum specs: Windows 10 64-bit, Intel Core i5, DirectX 11 GPU. Runs on laptops and low-end PCs. Full system requirements and compatibility guide.",
    url: "https://mecchachameleonlab.com/system-requirements",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MECCHA CHAMELEON System Requirements — Can You Run It? (2026)",
    description:
      "MECCHA CHAMELEON minimum specs: Windows 10 64-bit, Intel Core i5, DirectX 11 GPU. Runs on laptops and low-end PCs. Full system requirements and compatibility guide.",
  },
};

const sections = [
  { id: "minimum", title: "Minimum Requirements" },
  { id: "faq", title: "FAQ" },
];

export default function SystemRequirementsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          {
            name: "System Requirements",
            url: "https://mecchachameleonlab.com/system-requirements",
          },
        ]}
      />
      <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
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
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
              <p className="font-label-caps text-label-caps text-primary">
                $5.99 on Steam · Released June 9, 2026 · Windows only · AppID
                4704690
              </p>
            </div>

            <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-4">
              System Requirements
            </h1>
            <p className="font-body-main text-body-main text-on-surface-variant mb-8">
              Can your PC run MECCHA CHAMELEON? Check the Steam-listed minimum
              requirements below to see if your PC qualifies.
            </p>

            <div className="space-y-10 font-body-main text-body-main text-on-surface-variant">
              {/* Minimum Requirements */}
              <section id="minimum">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Minimum Requirements
                </h2>
                <p className="mb-6">
                  These are the minimum requirements listed on the Steam store page.
                </p>
                <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
                  <div className="divide-y divide-outline-variant/50">
                    {[
                      { label: "OS", value: "Windows 10 64-bit" },
                      { label: "Processor", value: "Intel Core i5" },
                      { label: "Graphics", value: "DirectX 11 or 12 compatible graphics card" },
                      { label: "Memory", value: "Not specified on Steam" },
                      { label: "Storage", value: "Not specified on Steam" },
                      { label: "Network", value: "Not specified on Steam" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center p-4"
                      >
                        <span className="font-label-caps text-label-caps text-primary">
                          {item.label}
                        </span>
                        <span className="text-on-surface text-sm text-right">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                  FAQ About Specs
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Can I run MECCHA CHAMELEON on a laptop?",
                      a: "Yes. Even laptops with integrated graphics can likely run the game at low settings. Gaming laptops will have no issues at all.",
                    },
                    {
                      q: "Does it work on Windows 11?",
                      a: "Yes. MECCHA CHAMELEON runs on both Windows 10 and Windows 11. There are no known compatibility issues with either OS.",
                    },
                    {
                      q: "Can I play on Mac or Linux?",
                      a: "No. MECCHA CHAMELEON is currently a Windows-only title. There are no Mac or Linux versions. You may be able to run it through Proton/Wine on Linux, but it is not officially supported.",
                    },
                    {
                      q: "How much storage do I need?",
                      a: "The exact storage requirement is not specified on the Steam page, but the game is relatively small. An SSD is recommended for faster load times but not required.",
                    },
                    {
                      q: "Is an internet connection required?",
                      a: "Yes. MECCHA CHAMELEON is a multiplayer game, so a broadband internet connection is required to play.",
                    },
                    {
                      q: "Will it run on Steam Deck?",
                      a: "Check our dedicated Steam Deck page for compatibility info and performance details.",
                    },
                    {
                      q: "How much does the game cost?",
                      a: "MECCHA CHAMELEON costs $5.99 on Steam (AppID 4704690). It was released on June 9, 2026.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-surface border border-outline-variant rounded-lg p-5"
                    >
                      <h3 className="font-label-caps text-label-caps text-primary mb-2">
                        {item.q}
                      </h3>
                      <p className="font-body-sm text-body-sm">
                        {item.q.includes("Steam Deck") ? (
                          <>
                            Check our dedicated{" "}
                            <Link
                              href="/platforms/steam-deck"
                              className="text-primary hover:underline"
                            >
                              Steam Deck page
                            </Link>{" "}
                            for compatibility info and performance details.
                          </>
                        ) : (
                          item.a
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
              <Link
                href="https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all"
              >
                BUY ON STEAM — $5.99
              </Link>
              <Link
                href="/settings"
                className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
              >
                BEST SETTINGS
              </Link>
              <Link
                href="/platforms/steam-deck"
                className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all"
              >
                STEAM DECK
              </Link>
            </div>
          </article>
        </div>

        <RelatedPages
          pages={[
            { title: "Price", description: "Is MECCHA CHAMELEON worth $5.99? Price breakdown and honest verdict.", href: "/price", icon: "💰" },
            { title: "Settings Guide", description: "Optimize your settings for maximum performance.", href: "/settings", icon: "⚙️" },
            { title: "Steam Deck", description: "Setup and performance guide for Steam Deck.", href: "/platforms/steam-deck", icon: "🎮" },
          ]}
        />
      </main>
    </>
  );
}
