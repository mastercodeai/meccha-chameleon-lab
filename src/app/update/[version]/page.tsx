import Link from "next/link";
import { BreadcrumbSchema } from "@/components/Schema";

const knownUpdates = [
  {
    version: "v1.3.0",
    date: "2026-07-01",
    highlights: [
      "New map: Rooftop Night",
      "Added 15 new Workshop-compatible objects",
      "Improved paint matching accuracy",
      "Fixed desync issues in multiplayer",
    ],
  },
  {
    version: "v1.2.0",
    date: "2026-06-20",
    highlights: [
      "Balance changes to Seeker detection range",
      "New paint color options added",
      "Performance optimizations for large maps",
      "Bug fixes for Workshop item loading",
    ],
  },
  {
    version: "v1.1.0",
    date: "2026-06-12",
    highlights: [
      "Steam Workshop support launched",
      "Added emote system for communication",
      "New hiding spots on Kitchen map",
      "UI improvements and accessibility options",
    ],
  },
  {
    version: "v1.0.0",
    date: "2026-06-09",
    highlights: [
      "Full release on Steam",
      "7 official maps included",
      "Online multiplayer with cross-platform support",
      "Paint system with color matching mechanics",
    ],
  },
];

export default function UpdatePage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Updates", url: "https://mecchachameleonlab.com/update" },
        ]}
      />

      <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-8">
        Update History
      </h1>
      <p className="font-body-main text-body-main text-on-surface-variant mb-8">
        Full patch notes and update history for MECCHA CHAMELEON. Every version, every change, documented here.
      </p>

      <div className="space-y-6">
        {knownUpdates.map((update) => (
          <div
            key={update.version}
            className="bg-surface border border-outline-variant rounded-lg p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <h2 className="font-headline-md text-headline-md text-primary">
                {update.version}
              </h2>
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                {update.date}
              </span>
            </div>
            <ul className="space-y-2">
              {update.highlights.map((item, i) => (
                <li
                  key={i}
                  className="font-body-sm text-body-sm text-on-surface-variant flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
        <a
          href="https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-primary to-green-400 text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all"
        >
          VIEW ON STEAM
        </a>
        <Link
          href="/price"
          className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
        >
          PRICE & VALUE
        </Link>
        <Link
          href="/guides/beginner"
          className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all"
        >
          BEGINNER GUIDE
        </Link>
      </div>
    </main>
  );
}
