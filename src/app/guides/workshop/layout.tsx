import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Workshop — 600+ Custom Maps Guide",
  description: "Everything about MECCHA CHAMELEON Steam Workshop: how to subscribe to custom maps, best Workshop maps, map creation basics, and platform compatibility.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/workshop",
  },
};

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
