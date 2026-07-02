import type { Metadata } from 'next';
import Link from 'next/link';
import { getMaps } from '@/lib/data';
import { buildBreadcrumbSchema } from '@/lib/seo';

const maps = getMaps();

export const metadata: Metadata = {
  title: 'Best Hiding Spots by Map — MECCHA CHAMELEON Guide',
  description: 'Find the best hiding spots for every map in MECCHA CHAMELEON. Detailed guides with paint advice and pose tips for Living Room, Kitchen, Bathroom, and more.',
  alternates: { canonical: 'https://mecchachameleonlab.com/maps/' },
};

export default function MapsPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', item: 'https://mecchachameleonlab.com/' },
    { name: 'Maps', item: 'https://mecchachameleonlab.com/maps/' },
  ]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="text-[13px] text-[#898989] mb-8">
        <a href="/" className="hover:text-[#00c573] transition-colors">Home</a>
        <span className="mx-2 text-[#363636]">/</span>
        <span className="text-[#b4b4b4]">Maps</span>
      </nav>

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3ecf8e]/30 bg-[#3ecf8e]/5 text-[12px] font-medium text-[#3ecf8e] mb-4" style={{ fontFamily: "'Source Code Pro', monospace", letterSpacing: '1.2px', textTransform: 'uppercase' as const }}>
          {maps.length} Maps
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-[#fafafa] mb-3">Best Hiding Spots</h1>
        <p className="text-[16px] text-[#b4b4b4] max-w-2xl">
          Select a map to see the best hiding spots, paint advice, and pro tips.
          Each spot is sourced from popular YouTube gameplay videos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {maps.map((map) => (
          <Link key={map.id} href={`/maps/${map.slug}/`} className="group p-6 rounded-xl bg-[#171717] border border-[#2e2e2e] hover:border-[#3ecf8e]/30 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-semibold text-[#fafafa] group-hover:text-[#3ecf8e] transition-colors">{map.name}</h2>
              <span className={`text-[11px] px-2.5 py-1 rounded-full border ${
                map.difficulty === 'Easy' ? 'border-[#3ecf8e]/30 text-[#3ecf8e] bg-[#3ecf8e]/5' :
                map.difficulty === 'Medium' ? 'border-[#f59e0b]/30 text-[#f59e0b] bg-[#f59e0b]/5' :
                'border-[#ef4444]/30 text-[#ef4444] bg-[#ef4444]/5'
              }`}>
                {map.difficulty}
              </span>
            </div>
            <p className="text-[14px] text-[#898989] mb-4 leading-relaxed">{map.description}</p>
            <div className="flex items-center justify-between text-[12px] text-[#898989]">
              <span className="flex items-center gap-1">
                <span className="text-[#3ecf8e]">{map.spotCount}</span> hiding spots
              </span>
              <span>Best for: {map.bestFor}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
