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
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3ecf8e]/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3ecf8e]/30 bg-[#3ecf8e]/5 text-[12px] font-medium text-[#3ecf8e] mb-6" style={{ fontFamily: "'Source Code Pro', monospace", letterSpacing: '1.2px', textTransform: 'uppercase' as const }}>
              Updated {config.game.lastUpdated}
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.00] mb-6 text-[#fafafa]">
              MECCHA CHAMELEON
              <br />
              <span className="text-[#3ecf8e]">Guide & Spots</span>
            </h1>
            <p className="text-lg text-[#b4b4b4] leading-relaxed mb-8 max-w-xl mx-auto">
              Best hiding spots for every map. Paint color guides. Pro tips from top YouTube creators.
              Everything you need to master the game.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/maps/" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-medium bg-[#3ecf8e] text-[#0f0f0f] hover:bg-[#00c573] transition-colors">
                Explore Spots →
              </Link>
              <Link href="/beginner-guide/" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-medium bg-[#0f0f0f] text-[#fafafa] border border-[#2e2e2e] hover:border-[#363636] transition-colors">
                Beginner Guide
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-[13px] text-[#898989]">
            {config.stats.rating} · {config.stats.totalReviews.toLocaleString()} reviews · {config.stats.platform} · {config.game.price}
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: '/maps/', icon: '🗺️', label: 'Best Spots', sub: 'By map' },
            { href: '/paint-guide/', icon: '🎨', label: 'Paint Guide', sub: 'Color palettes' },
            { href: '/beginner-guide/', icon: '📖', label: 'Beginner Guide', sub: 'Start here' },
            { href: '/workshop/', icon: '🔧', label: 'Workshop', sub: 'Custom maps' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="group p-4 rounded-xl bg-[#171717] border border-[#2e2e2e] hover:border-[#3ecf8e]/30 transition-colors">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-[14px] font-medium text-[#fafafa] group-hover:text-[#3ecf8e] transition-colors">{item.label}</div>
              <div className="text-[12px] text-[#898989]">{item.sub}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Maps */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-[#fafafa]">Maps</h2>
          <Link href="/maps/" className="text-[13px] text-[#00c573] hover:text-[#3ecf8e] transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {maps.map((map) => (
            <Link key={map.id} href={`/maps/${map.slug}/`} className="group p-5 rounded-xl bg-[#171717] border border-[#2e2e2e] hover:border-[#3ecf8e]/30 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-[16px] font-medium text-[#fafafa] group-hover:text-[#3ecf8e] transition-colors">{map.name}</h3>
                <span className={`text-[11px] px-2 py-0.5 rounded-full border ${
                  map.difficulty === 'Easy' ? 'border-[#3ecf8e]/30 text-[#3ecf8e] bg-[#3ecf8e]/5' :
                  map.difficulty === 'Medium' ? 'border-[#f59e0b]/30 text-[#f59e0b] bg-[#f59e0b]/5' :
                  'border-[#ef4444]/30 text-[#ef4444] bg-[#ef4444]/5'
                }`}>
                  {map.difficulty}
                </span>
              </div>
              <p className="text-[13px] text-[#898989] mb-3 line-clamp-2">{map.description}</p>
              <div className="flex items-center justify-between text-[12px] text-[#898989]">
                <span>{map.spotCount} spots</span>
                <span>{map.bestFor}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Spots */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold text-[#fafafa] mb-6">Top Hiding Spots</h2>
        <div className="space-y-2">
          {topSpots.map((spot, i) => (
            <div key={spot.id} className="group flex items-center gap-4 p-4 rounded-xl bg-[#171717] border border-[#2e2e2e] hover:border-[#3ecf8e]/30 transition-colors">
              <div className="text-[12px] font-medium text-[#3ecf8e] w-6 text-center" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-medium text-[#fafafa] group-hover:text-[#3ecf8e] transition-colors">{spot.name}</div>
                <div className="text-[12px] text-[#898989] truncate">{spot.description}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f59e0b] text-[12px]">{'★'.repeat(spot.effectiveness)}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full border ${
                  spot.difficulty === 'Easy' ? 'border-[#3ecf8e]/30 text-[#3ecf8e]' :
                  spot.difficulty === 'Medium' ? 'border-[#f59e0b]/30 text-[#f59e0b]' :
                  'border-[#ef4444]/30 text-[#ef4444]'
                }`}>
                  {spot.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold text-[#fafafa] mb-6">FAQ</h2>
        <div className="space-y-3">
          {[
            { q: 'What is MECCHA CHAMELEON?', a: 'A multiplayer hide-and-seek game on Steam where players paint their bodies to blend into the environment. Released June 9, 2026.' },
            { q: 'How do I hide better?', a: 'Use the paint tool to match the color of the surface you want to blend with. Crouch to reduce your visible area, and stay still when Seekers are nearby.' },
            { q: 'Is MECCHA CHAMELEON free?', a: 'No, it costs $5.99 on Steam.' },
          ].map((faq) => (
            <details key={faq.q} className="group p-4 rounded-xl bg-[#171717] border border-[#2e2e2e]">
              <summary className="text-[14px] font-medium text-[#fafafa] cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="text-[#898989] group-open:rotate-45 transition-transform ml-2">+</span>
              </summary>
              <p className="mt-3 text-[13px] text-[#b4b4b4] leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
