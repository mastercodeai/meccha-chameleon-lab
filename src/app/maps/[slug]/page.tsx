import Link from "next/link";
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
    title: `${map.name} — Best Hiding Spots`,
    description: `Detailed hiding spot guide for ${map.name} in MECCHA CHAMELEON. ${map.spots} spots with screenshots and difficulty ratings.`,
    alternates: {
      canonical: `https://mecchachameleonlab.com/maps/${slug}`,
    },
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
        <img
          src={map.image}
          alt={`${map.name} map`}
          className="w-full h-auto object-cover"
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
              {/* Spot Image */}
              {spot.image && (
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_8px_rgba(75,226,119,0.6)]">
                      <span className="text-sm font-bold text-on-primary">{spot.id}</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <DifficultyBadge difficulty={spot.difficulty} />
                  </div>
                </div>
              )}
              
              {/* Spot Info */}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  {!spot.image && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_8px_rgba(75,226,119,0.6)]">
                      <span className="text-sm font-bold text-on-primary">{spot.id}</span>
                    </div>
                  )}
                  <h3 className="font-headline-md text-base text-on-surface">{spot.name}</h3>
                  {!spot.image && <DifficultyBadge difficulty={spot.difficulty} />}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">{spot.description}</p>
                <div className="flex items-center gap-2">
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
        <div className="text-center py-12">
          <p className="text-on-surface-variant">No hiding spots data available yet.</p>
        </div>
      )}

      {/* Other Maps */}
      <div className="mt-16">
        <h2 className="font-display-lg text-xl text-on-surface uppercase mb-6">Other Maps</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {maps
            .filter((m) => m.slug !== slug)
            .map((m) => (
              <Link
                key={m.slug}
                href={`/maps/${m.slug}`}
                className="group bg-surface border border-outline-variant rounded-lg overflow-hidden glow-hover"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={m.image}
                    alt={`${m.name} map`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <span className="text-xs font-display-lg text-on-surface uppercase">{m.name}</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}
