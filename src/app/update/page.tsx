import type { Metadata } from "next";
import Link from "next/link";
import { updates } from "@/data/updates";

export const metadata: Metadata = {
  title: "Update Log — MECCHA CHAMELEON Patch Notes",
  description:
    "Full patch notes and update history for MECCHA CHAMELEON. Every version since launch, every change documented — sourced from official Steam news.",
  keywords: [
    "meccha chameleon update",
    "meccha chameleon patch notes",
    "meccha chameleon changelog",
    "meccha chameleon version history",
    "meccha chameleon new update",
    "meccha chameleon 2.5.0",
    "meccha chameleon latest update",
  ],
  alternates: {
    canonical: "https://mecchachameleonlab.com/update",
  },
};

const typeBadge: Record<string, { label: string; color: string }> = {
  update: { label: "UPDATE", color: "bg-primary/20 text-primary" },
  fix: { label: "HOTFIX", color: "bg-yellow-500/20 text-yellow-400" },
  release: { label: "LAUNCH", color: "bg-blue-500/20 text-blue-400" },
};

const categoryBadge: Record<string, { label: string; color: string }> = {
  "new-content": { label: "New Content", color: "bg-purple-500/15 text-purple-400" },
  balance: { label: "Balance", color: "bg-orange-500/15 text-orange-400" },
  bugfix: { label: "Bug Fix", color: "bg-red-500/15 text-red-400" },
  qol: { label: "QoL", color: "bg-blue-500/15 text-blue-400" },
  performance: { label: "Performance", color: "bg-green-500/15 text-green-400" },
};

export default function UpdateIndexPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-4">
        Update Log
      </h1>
      <p className="font-body-main text-body-main text-on-surface-variant mb-8 max-w-2xl">
        Full patch notes for MECCHA CHAMELEON, sourced from official Steam news.
        All {updates.length} updates documented since launch.
      </p>

      <div className="space-y-6">
        {updates.map((update) => {
          const badge = typeBadge[update.type] || typeBadge.update;
          const catBadge = categoryBadge[update.category];
          return (
            <div
              key={update.version}
              className="bg-surface border border-outline-variant rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="font-headline-md text-headline-md text-primary">
                    v{update.version}
                  </h2>
                  <span className={`font-label-caps text-label-caps px-2 py-0.5 rounded ${badge.color}`}>
                    {badge.label}
                  </span>
                  {catBadge && (
                    <span className={`font-label-caps text-label-caps px-2 py-0.5 rounded ${catBadge.color}`}>
                      {catBadge.label}
                    </span>
                  )}
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
          href="/guides/beginner"
          className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
        >
          BEGINNER GUIDE
        </Link>
      </div>
    </main>
  );
}
