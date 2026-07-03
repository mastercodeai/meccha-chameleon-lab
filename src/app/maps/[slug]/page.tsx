import Link from "next/link";
import Image from "next/image";
import { maps, getMapBySlug } from "@/data/maps";
import { getSpotsByMapSlug } from "@/data/spots";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return maps.map((map) => ({ slug: map.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const map = getMapBySlug(slug);
  if (!map) return {};
  return {
    title: `${map.name} — Best Hiding Spots | MECCHA CHAMELEON Lab`,
    description: `Detailed hiding spot guide for ${map.name} in MECCHA CHAMELEON. ${map.spots} spots with screenshots and difficulty ratings.`,
  };
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    EASY: "bg-green-500/10 text-green-400 border-green-500/30",
    MEDIUM: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    HARD: "bg-red-500/10 text-red-400 border-red-500/30",
  };
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-label-caps border ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
}

export default async function MapPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const map = getMapBySlug(slug);
  if (!map) notFound();

  const spots = getSpotsByMapSlug(slug);

  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
        <Link href="/maps" className="hover:text-primary transition-colors">Maps</Link>
        <span>/</span>
        <span className="text-on-surface">{map.name}</span>
      </nav>

      {/* Map Hero */}
      <div className="relative rounded-lg overflow-hidden border-2 border-[#1e1e32] mb-stack-lg">
        <Image
          src={map.image}
          alt={`${map.name} map`}
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/30 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h1 className="font-display-lg text-3xl md:text-4xl text-on-surface uppercase tracking-wide mb-2">
            {map.name}
          </h1>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary rounded font-label-caps text-sm">
              {map.spots} SPOTS
            </span>
            <span className="text-on-surface-variant font-body-sm">{map.description}</span>
          </div>
        </div>
      </div>

      {/* Spots Grid */}
      {spots.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spots.map((spot) => (
            <div
              key={spot.id}
              className="bg-surface border border-outline-variant rounded-lg overflow-hidden glow-hover transition-all"
            >
              <div className="relative aspect-video">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  className="object-cover"
                />
                {/* Spot number badge */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_8px_rgba(75,226,119,0.6)]">
                  <span className="text-sm font-bold text-on-primary">{spot.id}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-headline-md text-base text-on-surface">{spot.name}</h3>
                  <DifficultyBadge difficulty={spot.difficulty} />
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{spot.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs text-on-surface-variant">Best for:</span>
                  <span className={`text-xs font-label-caps ${spot.bestFor === "Hider" ? "text-primary" : "text-secondary"}`}>
                    {spot.bestFor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-surface border border-outline-variant rounded-lg p-12 text-center">
          <p className="font-body-main text-body-main text-on-surface-variant">
            Detailed spot guide for {map.name} coming soon. Check back for updates!
          </p>
        </div>
      )}

      {/* Related Maps */}
      <div className="mt-stack-lg">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-6 uppercase">Other Maps</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {maps.filter((m) => m.slug !== slug).slice(0, 4).map((m) => (
            <Link
              key={m.slug}
              href={`/maps/${m.slug}`}
              className="bg-surface border border-outline-variant rounded-lg overflow-hidden glow-hover transition-all"
            >
              <div className="relative aspect-video">
                <Image src={m.image} alt={m.name} fill className="object-cover" />
              </div>
              <div className="p-3">
                <span className="font-label-caps text-sm text-on-surface uppercase">{m.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
