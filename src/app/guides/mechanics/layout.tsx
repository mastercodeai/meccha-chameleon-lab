import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechanics — Paint System, Clones & Scoring Explained",
  description: "Deep dive into MECCHA CHAMELEON game mechanics: how the paint system works, clone mechanics, scoring system, taunts, and camera controls.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/mechanics",
  },
};

export default function MechanicsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
