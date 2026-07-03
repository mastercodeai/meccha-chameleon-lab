import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON System Requirements — Can You Run It?",
  description:
    "MECCHA CHAMELEON PC system requirements. Minimum and recommended specs. Check if your PC can run MECCHA CHAMELEON.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/system-requirements",
  },
  keywords: [
    "meccha chameleon system requirements",
    "meccha chameleon pc specs",
    "can i run meccha chameleon",
    "meccha chameleon minimum requirements",
  ],
};

const sections = [
  { id: "minimum", title: "Minimum Requirements" },
  { id: "recommended", title: "Recommended Requirements" },
  { id: "performance", title: "Performance Tips" },
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
              Can your PC run MECCHA CHAMELEON? Built on Valve&apos;s Source
              engine, the game is lightweight and runs well on most modern
              hardware. Check the specs below to see if your rig qualifies.
            </p>

            <div className="space-y-10 font-body-main text-body-main text-on-surface-variant">
              {/* Minimum Requirements */}
              <section id="minimum">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Minimum Requirements
                </h2>
                <p className="mb-6">
                  These specs will let you launch and play the game at low
                  settings with a playable frame rate (30+ FPS).
                </p>
                <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
                  <div className="divide-y divide-outline-variant/50">
                    {[
                      { label: "OS", value: "Windows 10 64-bit" },
                      { label: "Processor", value: "Intel Core i3 / AMD Ryzen 3" },
                      { label: "Memory", value: "4 GB RAM" },
                      { label: "Graphics", value: "NVIDIA GTX 750 Ti / AMD Radeon R7 260" },
                      { label: "DirectX", value: "Version 11" },
                      { label: "Storage", value: "2 GB available space" },
                      { label: "Network", value: "Broadband Internet connection" },
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

              {/* Recommended Requirements */}
              <section id="recommended">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Recommended Requirements
                </h2>
                <p className="mb-6">
                  These specs will let you play at high settings with a smooth
                  frame rate (60+ FPS at 1080p).
                </p>
                <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
                  <div className="divide-y divide-outline-variant/50">
                    {[
                      { label: "OS", value: "Windows 10/11 64-bit" },
                      { label: "Processor", value: "Intel Core i5 / AMD Ryzen 5" },
                      { label: "Memory", value: "8 GB RAM" },
                      {
                        label: "Graphics",
                        value: "NVIDIA GTX 1060 / AMD RX 580 (4 GB VRAM)",
                      },
                      { label: "DirectX", value: "Version 11" },
                      { label: "Storage", value: "2 GB available space (SSD recommended)" },
                      { label: "Network", value: "Broadband Internet connection" },
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

              {/* Performance Tips */}
              <section id="performance">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Performance Tips
                </h2>
                <p className="mb-6">
                  Even if your PC barely meets the minimum specs, these tips can
                  help you get a playable experience.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Lower Your Resolution",
                      desc: "Dropping from 1080p to 720p can nearly double your FPS on integrated or low-end GPUs. The Source engine still looks decent at lower resolutions.",
                    },
                    {
                      title: "Disable Shadows",
                      desc: "Shadows are the single most expensive graphics setting. Turning them off gives a massive FPS boost with minimal gameplay impact in a hide-and-seek game.",
                    },
                    {
                      title: "Close Background Programs",
                      desc: "Web browsers, streaming apps, and Discord overlays all consume RAM and CPU. Close everything you don't need while playing.",
                    },
                    {
                      title: "Use Launch Options",
                      desc: "Right-click MECCHA CHAMELEON in Steam → Properties → Launch Options. Try: -high -threads 4 -novid -nojoy for better performance.",
                    },
                    {
                      title: "Update Your Drivers",
                      desc: "Outdated GPU drivers are a common cause of poor performance. Download the latest from NVIDIA, AMD, or Intel's website.",
                    },
                    {
                      title: "Install on an SSD",
                      desc: "While the game is only 2 GB, an SSD reduces load times significantly. If you have an SSD, install the game there.",
                    },
                  ].map((tip, i) => (
                    <div
                      key={i}
                      className="bg-surface border-l-4 border-primary rounded-r-lg p-4"
                    >
                      <h3 className="font-label-caps text-label-caps text-on-surface mb-1">
                        {tip.title}
                      </h3>
                      <p className="font-body-sm text-body-sm">
                        {tip.desc}
                      </p>
                    </div>
                  ))}
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
                      a: "Yes. The Source engine is very lightweight. Even laptops with integrated graphics (Intel UHD 620+) can run the game at low settings. Gaming laptops will have no issues at all.",
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
                      a: "The game requires about 2 GB of free disk space. An SSD is recommended for faster load times but not required.",
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
      </main>
    </>
  );
}
