import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMaps, getMapBySlug, getSpotsByMap, getPaletteByMap } from '@/lib/data';
import { buildBreadcrumbSchema } from '@/lib/seo';

const maps = getMaps();

export function generateStaticParams() {
  return maps.map((map) => ({ slug: map.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const map = getMapBySlug(slug);
  if (!map) return { title: 'Not Found' };
  return {
    title: `${map.name} Hiding Spots — MECCHA CHAMELEON Guide`,
    description: `Best hiding spots for ${map.name} in MECCHA CHAMELEON. ${map.spotCount} spots with paint advice and pose tips. Source: YouTube gameplay analysis.`,
    alternates: { canonical: `https://mecchachameleonlab.com/maps/${slug}` },
  };
}

export default async function MapDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const map = getMapBySlug(slug);
  if (!map) notFound();

  const spots = getSpotsByMap(map.id);
  const palette = getPaletteByMap(map.id);

  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', item: 'https://mecchachameleonlab.com' },
    { name: 'Maps', item: 'https://mecchachameleonlab.com/maps' },
    { name: map.name, item: `https://mecchachameleonlab.com/maps/${slug}` },
  ]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-green-400">Home</a>
        <span className="mx-2">›</span>
        <a href="/maps" className="hover:text-green-400">Maps</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">{map.name}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          🗺️ {map.name} — Best Hiding Spots
        </h1>
        <p className="text-gray-400">{map.description}</p>
        <div className="mt-3 flex gap-4 text-sm text-gray-500">
          <span>Difficulty: <span className={
            map.difficulty === 'Easy' ? 'text-green-400' :
            map.difficulty === 'Medium' ? 'text-yellow-400' :
            'text-red-400'
          }>{map.difficulty}</span></span>
          <span>Spots: {map.spotCount}</span>
          <span>Best for: {map.bestFor}</span>
        </div>
      </div>

      {/* Color Palette */}
      {palette && (
        <section className="mb-10 p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-4">🎨 Recommended Colors for {map.name}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {palette.colors.map((color) => (
              <div key={color.hex} className="text-center">
                <div className="w-full h-12 rounded-lg mb-2 border border-gray-700" style={{ backgroundColor: color.hex }} />
                <div className="text-xs font-mono text-gray-300">{color.hex}</div>
                <div className="text-xs text-gray-500">{color.name}</div>
                <div className="text-xs text-gray-600 mt-1">{color.use}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Spots */}
      <section>
        <h2 className="text-xl font-bold mb-6">⭐ Hiding Spots ({spots.length})</h2>
        <div className="space-y-4">
          {spots.map((spot) => (
            <div key={spot.id} className="p-5 rounded-xl bg-gray-900 border border-gray-800">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold">{spot.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-sm">{'★'.repeat(spot.effectiveness)}{'☆'.repeat(5 - spot.effectiveness)}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    spot.difficulty === 'Easy' ? 'bg-green-900/50 text-green-400' :
                    spot.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                    'bg-red-900/50 text-red-400'
                  }`}>
                    {spot.difficulty}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">{spot.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-gray-800/50">
                  <div className="text-gray-500 text-xs mb-1">🎨 Paint Advice</div>
                  <div className="text-gray-300">{spot.paintAdvice}</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-800/50">
                  <div className="text-gray-500 text-xs mb-1">🧍 Pose Tips</div>
                  <div className="text-gray-300">{spot.poseTips}</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                Source: <a href={spot.youtubeSource} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">YouTube</a>
                {spot.youtubeTimestamp && ` at ${spot.youtubeTimestamp}`}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
