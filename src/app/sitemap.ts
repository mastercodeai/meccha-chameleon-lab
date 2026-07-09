import type { MetadataRoute } from "next";
import { maps } from "@/data/maps";
import { updates } from "@/data/updates";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mecchachameleonlab.com";
  // Use meaningful dates — homepage & maps update frequently, guides less so
  const today = new Date("2026-07-09");
  const weekAgo = new Date("2026-07-02");
  const monthAgo = new Date("2026-06-09");

  const staticPages = [
    { url: baseUrl, lastModified: today, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/maps`, lastModified: today, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/workshop`, lastModified: weekAgo, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/guides/beginner`, lastModified: weekAgo, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/guides/hider`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/guides/seeker`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/guides/paint`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/guides/tips`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/guides/combos`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/guides/controls`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/guides/object-tiers`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/guides/beginner-mistakes`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/guides/seeker-counters`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/guides/videos`, lastModified: weekAgo, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/crossplay`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/platforms/steam-deck`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date("2026-01-15"), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/gallery`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/tier-list`, lastModified: weekAgo, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/settings`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/system-requirements`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/terms`, lastModified: new Date("2026-01-15"), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/price`, lastModified: weekAgo, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/guides/easter-eggs`, lastModified: monthAgo, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/update`, lastModified: today, changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  const mapPages = maps.map((map) => ({
    url: `${baseUrl}/maps/${map.slug}`,
    lastModified: weekAgo,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Update pages: use actual update dates from data, old ones get lower priority
  const updatePages = updates.map((update) => {
    const isOld = update.version.startsWith("1.");
    return {
      url: `${baseUrl}/update/${update.version}`,
      lastModified: new Date(update.date),
      changeFrequency: "yearly" as const,
      priority: isOld ? 0.3 : 0.5,
    };
  });

  return [...staticPages, ...mapPages, ...updatePages];
}
