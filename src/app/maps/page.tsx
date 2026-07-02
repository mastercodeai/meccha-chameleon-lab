import type { Metadata } from 'next';
import Link from 'next/link';
import { getMaps } from '@/lib/data';
import { buildBreadcrumbSchema } from '@/lib/seo';

const maps = getMaps();

export const metadata: Metadata = {
  title: 'Best Hiding Spots by Map — MECCHA CHAMELEON Guide',
  description: 'Find the best hiding spots for every map in MECCHA CHAMELEON. Detailed guides with paint advice and pose tips for Living Room, Kitchen, Bathroom, and more.',
  alternates: { canonical: 'https://mecchachameleonlab.com/maps' },
};

export default function MapsPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', item: 'https://mecchachameleonlab.com' },
    { name: 'Maps', item: 'https://mecchachameleonlab.com/maps' },
  ]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-green-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Maps</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight mb-4">
        🗺️ Best Hiding Spots by Map
      </h1>
      <p className="text-gray-400 mb-8">
        Select a map to see the best hiding spots, paint advice, and pro tips. 
        Each spot is sourced from popular YouTube gameplay videos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {maps.map((map) => (
          <Link key={map.id} href={`/maps/${map.slug}`} className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-green-500 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-bold">{map.name}</h2>
              <span className={`text-xs px-2 py-1 rounded ${
                map.difficulty === 'Easy' ? 'bg-green-900/50 text-green-400' :
                map.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                'bg-red-900/50 text-red-400'
              }`}>
                {map.difficulty}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{map.description}</p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>{map.spotCount} hiding spots</span>
              <span>Best for: {map.bestFor}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
