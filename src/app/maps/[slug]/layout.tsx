import type { Metadata } from "next";
import { maps } from "@/data/maps";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const map = maps.find((m) => m.slug === slug);
  
  if (!map) {
    return {
      title: "Map Not Found",
      description: "This map page does not exist.",
    };
  }

  const title = `${map.name} — Best Hiding Spots & Map Guide`;
  const description = `Complete ${map.name} map guide for MECCHA CHAMELEON: ${map.spots} hiding spots with screenshots, difficulty ratings, and strategies. ${map.description.substring(0, 100)}...`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | MECCHA CHAMELEON Lab`,
      description,
      url: `https://mecchachameleonlab.com/maps/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | MECCHA CHAMELEON Lab`,
      description,
    },
    alternates: {
      canonical: `https://mecchachameleonlab.com/maps/${slug}`,
    },
  };
}

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return children;
}
