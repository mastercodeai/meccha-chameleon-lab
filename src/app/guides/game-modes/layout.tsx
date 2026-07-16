import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Game Modes — Basic, Infection & Double Explained",
  description: "Complete guide to all MECCHA CHAMELEON game modes: Basic hide-and-seek, Infection, and Double mode. Plus lobby settings and recommended configurations.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/game-modes",
  },
};

export default function GameModesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
