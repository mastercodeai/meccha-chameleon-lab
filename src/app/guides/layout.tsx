import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Guides — All Tips, Strategies & Walkthroughs",
  description:
    "Browse all MECCHA CHAMELEON guides: beginner tips, hider strategies, seeker tactics, paint techniques, map breakdowns, and more.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides",
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}