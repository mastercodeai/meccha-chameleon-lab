import type { Metadata } from "next";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Gallery — Game Screenshots & Art",
  description: "MECCHA CHAMELEON game screenshots, title screens, map previews, and character art. See what the game looks like before you buy.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/gallery",
  },
};

const R2_BASE = "https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev";

const screenshots = [
  {
    src: `${R2_BASE}/screenshots/title-screen-1.jpg`,
    alt: "MECCHA CHAMELEON Title Screen - Colorful 3D Text",
    title: "Title Screen",
    description: "The iconic title screen featuring the colorful MECCHA CHAMELEON logo against a brick wall backdrop.",
  },
  {
    src: `${R2_BASE}/screenshots/title-screen-2.jpg`,
    alt: "MECCHA CHAMELEON Title Screen - Pixel Art Style",
    title: "Pixel Art Title",
    description: "A pixel art version of the title screen, showcasing the game's retro aesthetic.",
  },
  {
    src: `${R2_BASE}/screenshots/title-screen-3.jpg`,
    alt: "MECCHA CHAMELEON Title Screen - Camouflage Concept",
    title: "Camouflage Concept",
    description: "The chameleon character blending into the brick wall, demonstrating the core camouflage mechanic.",
  },
  {
    src: `${R2_BASE}/screenshots/farm-map.jpg`,
    alt: "Farm Map - Pastoral Scene with Animals",
    title: "Farm Map",
    description: "A pastoral farm scene with cows and sheep. One of the game's charming outdoor environments.",
  },
  {
    src: `${R2_BASE}/screenshots/indoor-scene.jpg`,
    alt: "Indoor Scene - Green Walls with Photo Frames",
    title: "Indoor Scene",
    description: "An indoor environment with green walls and decorative photo frames. A cozy hiding spot.",
  },
  {
    src: `${R2_BASE}/screenshots/train-car.jpg`,
    alt: "Train Car - Moving Train Interior",
    title: "Train Car",
    description: "The interior of a moving train car. A dynamic environment where players must hide while in motion.",
  },
  {
    src: `${R2_BASE}/screenshots/underground-tunnel.jpg`,
    alt: "Underground Tunnel - Dark Industrial Space",
    title: "Underground Tunnel",
    description: "A dark, atmospheric underground tunnel. Perfect for tense hide-and-seek gameplay.",
  },
  {
    src: `${R2_BASE}/screenshots/underground-ruins.jpg`,
    alt: "Underground Ruins - Ancient Stone Structures",
    title: "Underground Ruins",
    description: "Ancient underground ruins with wooden beams and stone walls. A mysterious exploration area.",
  },
  {
    src: `${R2_BASE}/screenshots/christmas-room.jpg`,
    alt: "Christmas Room - Festive Indoor Scene",
    title: "Christmas Room",
    description: "A festive Christmas-themed room with colorful lights and decorations. Limited-time seasonal content.",
  },
  {
    src: `${R2_BASE}/screenshots/restaurant.jpg`,
    alt: "Restaurant - Futuristic Dining Hall",
    title: "Restaurant",
    description: "A futuristic restaurant with warm lighting and mechanical decorations. A social hub area.",
  },
  {
    src: `${R2_BASE}/screenshots/color-challenge.jpg`,
    alt: "Color Challenge - Interactive Puzzle Room",
    title: "Color Challenge",
    description: "An interactive challenge room with floating colored balls. Test your color-matching skills!",
  },
  {
    src: `${R2_BASE}/screenshots/10m-downloads.png`,
    alt: "10 Million Downloads Milestone",
    title: "15M Downloads!",
    description: "Celebrating 15 million downloads! A testament to the game's popularity.",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen py-24 px-4 md:px-gutter max-w-[1440px] mx-auto">
      <h1 className="font-display-lg text-4xl md:text-5xl text-on-surface text-center mb-4">
        Game <span className="text-primary">Gallery</span>
      </h1>
      <p className="font-body-main text-body-main text-on-surface-variant text-center mb-12 max-w-2xl mx-auto">
        Explore screenshots and artwork from MECCHA CHAMELEON. See the vibrant worlds, creative hiding spots, and unique camouflage mechanics that make the game special.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="group bg-surface border border-outline-variant rounded-lg overflow-hidden glow-hover transition-all"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-headline-md text-lg text-on-surface mb-2">
                {screenshot.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {screenshot.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <RelatedPages
        pages={[
          { title: "All Maps", description: "Browse all 7 official maps with hiding spot guides and strategies.", href: "/maps", icon: "🗺️" },
          { title: "Workshop", description: "Browse 605 community-created Workshop maps with ratings and subscribe links.", href: "/workshop", icon: "🔧" },
          { title: "Beginner Guide", description: "Everything you need to know before your first round of MECCHA CHAMELEON.", href: "/guides/beginner", icon: "📖" },
        ]}
      />
    </main>
  );
}
