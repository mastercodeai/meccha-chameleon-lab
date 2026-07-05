import Link from "next/link";
import { BreadcrumbSchema } from "@/components/Schema";
import { updates } from "@/data/updates";

const typeBadge: Record<string, { label: string; color: string }> = {
  update: { label: "UPDATE", color: "bg-primary/20 text-primary" },
  fix: { label: "HOTFIX", color: "bg-yellow-500/20 text-yellow-400" },
  release: { label: "LAUNCH", color: "bg-blue-500/20 text-blue-400" },
};

export default function UpdateDetailPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Updates", url: "https://mecchachameleonlab.com/update" },
        ]}
      />

      <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-4">
        Update History
      </h1>
      <p className="font-body-main text-body-main text-on-surface-variant mb-8">
        Full patch notes for MECCHA CHAMELEON, sourced from official Steam news.
      </p>

      <div className="space-y-6">
        {updates.map((update) => {
          const badge = typeBadge[update.type] || typeBadge.update;
          return (
            <div
              key={update.version}
              className="bg-surface border border-outline-variant rounded-lg p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="font-headline-md text-headline-md text-primary">
                    v{update.version}
                  </h2>
                  <span className={`font-label-caps text-label-caps px-2 py-0.5 rounded ${badge.color}`}>
                    {badge.label}
                  </span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  {update.date}
                </span>
              </div>

              <h3 className="font-body-main text-body-main text-on-surface mb-3">
                {update.title}
              </h3>

              <ul className="space-y-2 mb-4">
                {update.changes.map((item, i) => (
                  <li
                    key={i}
                    className="font-body-sm text-body-sm text-on-surface-variant flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {update.teaser && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mt-3">
                  <p className="font-body-sm text-body-sm text-primary">
                    {update.teaser}
                  </p>
                </div>
              )}
            </div>
          );
        })}
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
