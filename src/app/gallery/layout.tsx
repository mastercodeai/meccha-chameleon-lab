import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Gallery — Screenshots, Art & Map Images (2026)",
  description:
    "Exclusive MECCHA CHAMELEON screenshots and art from all 7 maps. High-res gameplay images with labeled hiding spots, object transformations, and map guides.",
  keywords: [
    "meccha chameleon gallery",
    "meccha chameleon screenshots",
    "meccha chameleon art",
    "meccha chameleon images",
    "meccha chameleon maps",
    "meccha chameleon wallpaper",
    "meccha chameleon gameplay",
  ],
  alternates: {
    canonical: "https://mecchachameleonlab.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
