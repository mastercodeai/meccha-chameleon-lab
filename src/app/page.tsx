import Link from 'next/link';
import { getGameConfig, getMaps, getTopSpots } from '@/lib/data';
import { buildFAQSchema } from '@/lib/seo';

const config = getGameConfig();
const maps = getMaps();
const topSpots = getTopSpots(5);

export default function HomePage() {
  const faqSchema = buildFAQSchema([
    { question: 'What is MECCHA CHAMELEON?', answer: 'MECCHA CHAMELEON is a multiplayer hide-and-seek game on Steam where players paint their bodies to blend into the environment. Released June 9, 2026.' },
    { question: 'How do I hide better in MECCHA CHAMELEON?', answer: 'Use the paint tool to match the color of the surface you want to blend with. Crouch to reduce your visible area, and stay still when Seekers are nearby.' },
    { question: 'Is MECCHA CHAMELEON free?', answer: 'No, MECCHA CHAMELEON costs $5.99 on Steam.' },
  ]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">
          🦎 MECCHA CHAMELEON Guide
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The ultimate companion for MECCHA CHAMELEON — best hiding spots for every map, 
          paint color guides, and pro tips. Updated {config.game.lastUpdated}.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Steam: {config.stats.rating} ({config.stats.totalReviews.toLocaleString()} reviews) · {config.stats.platform}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <Link href="/maps" className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-green-500 transition-colors text-center">
          <div className="text-2xl mb-2">🗺️</div>
          <div className="font-bold text-sm">Best Spots</div>
          <div className="text-xs text-gray-500">By map</div>
        </Link>
        <Link href="/paint-guide" className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-green-500 transition-colors text-center">
          <div className="text-2xl mb-2">🎨</div>
          <div className="font-bold text-sm">Paint Guide</div>
          <div className="text-xs text-gray-500">Color palettes</div>
        </Link>
        <Link href="/beginner-guide" className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-green-500 transition-colors text-center">
          <div className="text-2xl mb-2">📖</div>
          <div className="font-bold text-sm">Beginner Guide</div>
          <div className="text-xs text-gray-500">Start here</div>
        </Link>
        <Link href="/workshop" className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-green-500 transition-colors text-center">
          <div className="text-2xl mb-2">🔧</div>
          <div className="font-bold text-sm">Workshop</div>
          <div className="text-xs text-gray-500">Custom maps</div>
        </Link>
      </div>

      {/* Maps Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🗺️ Maps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {maps.map((map) => (
            <Link key={map.id} href={`/maps/${map.slug}`} className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-green-500 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">{map.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  map.difficulty === 'Easy' ? 'bg-green-900/50 text-green-400' :
                  map.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                  'bg-red-900/50 text-red-400'
                }`}>
                  {map.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-2">{map.description.slice(0, 80)}...</p>
              <div className="text-xs text-gray-500">{map.spotCount} spots · Best for {map.bestFor}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Spots */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">⭐ Top Hiding Spots</h2>
        <div className="space-y-3">
          {topSpots.map((spot, i) => (
            <div key={spot.id} className="p-4 rounded-xl bg-gray-900 border border-gray-800 flex items-center gap-4">
              <div className="text-2xl font-black text-green-400 w-8">#{i + 1}</div>
              <div className="flex-1">
                <div className="font-bold">{spot.name}</div>
                <div className="text-sm text-gray-400">{spot.description.slice(0, 80)}...</div>
              </div>
              <div className="text-right">
                <div className="text-yellow-400">{'★'.repeat(spot.effectiveness)}{'☆'.repeat(5 - spot.effectiveness)}</div>
                <div className="text-xs text-gray-500">{spot.difficulty}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="p-6 rounded-xl border border-gray-800">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">What is MECCHA CHAMELEON?</h3>
            <p className="text-gray-400 text-sm">MECCHA CHAMELEON is a multiplayer hide-and-seek game on Steam where players paint their bodies to blend into the environment. Released June 9, 2026.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">How do I hide better?</h3>
            <p className="text-gray-400 text-sm">Use the paint tool to match the color of the surface you want to blend with. Crouch to reduce your visible area, and stay still when Seekers are nearby.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Is MECCHA CHAMELEON free?</h3>
            <p className="text-gray-400 text-sm">No, MECCHA CHAMELEON costs $5.99 on Steam.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
