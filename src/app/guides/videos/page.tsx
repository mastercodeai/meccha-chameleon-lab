import type { Metadata } from "next";
import Link from "next/link";
import { videos } from "@/data/videos";
import LiteYouTube from "@/components/LiteYouTube";

export const metadata: Metadata = {
  title: "Video Tutorials — Best MECCHA CHAMELEON Guides on YouTube",
  description:
    "Curated collection of the best MECCHA CHAMELEON video tutorials on YouTube. Beginner guides, painting tips, advanced strategies, and map walkthroughs — all from verified creators.",
  keywords: [
    "meccha chameleon tutorial",
    "meccha chameleon guide video",
    "meccha chameleon painting tips",
    "meccha chameleon youtube",
    "meccha chameleon beginner guide",
    "meccha chameleon advanced tips",
  ],
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/videos",
  },
};

const categoryLabels: Record<string, { label: string; color: string; icon: string }> = {
  beginner: { label: "Beginner", color: "bg-green-500/20 text-green-400", icon: "🟢" },
  painting: { label: "Painting", color: "bg-blue-500/20 text-blue-400", icon: "🎨" },
  advanced: { label: "Advanced", color: "bg-purple-500/20 text-purple-400", icon: "⚡" },
  maps: { label: "Maps", color: "bg-orange-500/20 text-orange-400", icon: "🗺️" },
  entertainment: { label: "Entertainment", color: "bg-pink-500/20 text-pink-400", icon: "🎮" },
};

const categories = ["beginner", "painting", "advanced", "maps", "entertainment"] as const;

export default function VideosPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-4">
        Video Tutorials
      </h1>
      <p className="font-body-main text-body-main text-on-surface-variant mb-8 max-w-2xl">
        Curated collection of the best MECCHA CHAMELEON tutorials on YouTube.
        All videos are from verified community creators.
      </p>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const info = categoryLabels[cat];
          return (
            <a
              key={cat}
              href={`#${cat}`}
              className={`font-label-caps text-label-caps px-3 py-1.5 rounded-full ${info.color} hover:opacity-80 transition-opacity`}
            >
              {info.icon} {info.label}
            </a>
          );
        })}
      </div>

      {categories.map((cat) => {
        const info = categoryLabels[cat];
        const catVideos = videos.filter((v) => v.category === cat);
        if (catVideos.length === 0) return null;
        return (
          <section key={cat} id={cat} className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
              <span>{info.icon}</span>
              {info.label} Guides
            </h2>
            <div className="grid gap-6">
              {catVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-surface border border-outline-variant rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
                >
                  {/* YouTube Embed */}
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <LiteYouTube videoId={video.videoId} title={video.title} />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-body-main text-body-main text-on-surface font-semibold leading-snug">
                        {video.title}
                      </h3>
                      <span className={`font-label-caps text-label-caps px-2 py-0.5 rounded shrink-0 ${info.color}`}>
                        {info.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-on-surface-variant font-body-sm text-body-sm mb-3">
                      <span>{video.channel}</span>
                      <span>•</span>
                      <span>{video.views} views</span>
                      <span>•</span>
                      <span>{video.duration}</span>
                    </div>

                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                      {video.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {video.keyTopics.map((topic, i) => (
                        <span
                          key={i}
                          className="font-body-sm text-xs bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <div className="bg-surface border border-outline-variant rounded-lg p-6 mt-stack-lg">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
          Want your video featured?
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
          If you have a MECCHA CHAMELEON tutorial video that provides genuine value to players,
          let us know on our Discord and we may feature it here.
        </p>
        <a
          href="https://discord.gg/mecchachameleon"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-primary to-green-400 text-on-primary font-label-caps text-label-caps px-6 py-3 rounded text-center hover:brightness-110 transition-all"
        >
          JOIN DISCORD
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
        <Link
          href="/guides/beginner"
          className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
        >
          BEGINNER GUIDE
        </Link>
        <Link
          href="/guides/paint"
          className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all"
        >
          PAINT GUIDE
        </Link>
      </div>
    </main>
  );
}
