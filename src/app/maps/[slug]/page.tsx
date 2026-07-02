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
    alternates: { canonical: `https://mecchachameleonlab.com/maps/${slug}/` },
  };
}

export default async function MapDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const map = getMapBySlug(slug);
  if (!map) notFound();

  const spots = getSpotsByMap(map.id);
  const palette = getPaletteByMap(map.id);

  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', item: 'https://mecchachameleonlab.com/' },
    { name: 'Maps', item: 'https://mecchachameleonlab.com/maps/' },
    { name: map.name, item: `https://mecchachameleonlab.com/maps/${slug}/` },
  ]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="text-[13px] text-[#898989] mb-8">
        <a href="/" className="hover:text-[#00c573] transition-colors">Home</a>
        <span className="mx-2 text-[#363636]">/</span>
        <a href="/maps/" className="hover:text-[#00c573] transition-colors">Maps</a>
        <span className="mx-2 text-[#363636]">/</span>
        <span className="text-[#b4b4b4]">{map.name}</span>
      </nav>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-semibold tracking-tight text-[#fafafa]">{map.name}</h1>
          <span className={`text-[11px] px-2.5 py-1 rounded-full border ${
            map.difficulty === 'Easy' ? 'border-[#3ecf8e]/30 text-[#3ecf8e] bg-[#3ecf8e]/5' :
            map.difficulty === 'Medium' ? 'border-[#f59e0b]/30 text-[#f59e0b] bg-[#f59e0b]/5' :
            'border-[#ef4444]/30 text-[#ef4444] bg-[#ef4444]/5'
          }`}>
            {map.difficulty}
          </span>
        </div>
        <p className="text-[15px] text-[#b4b4b4] leading-relaxed">{map.description}</p>
        <div className="mt-4 flex items-center gap-6 text-[13px] text-[#898989]">
          <span><span className="text-[#3ecf8e] font-medium">{map.spotCount}</span> spots</span>
          <span>Best for: {map.bestFor}</span>
          <a href={map.youtubeSource} target="_blank" rel="noopener noreferrer" className="text-[#00c573] hover:text-[#3ecf8e] transition-colors">
            YouTube Source →
          </a>
        </div>
      </div>

      {/* Color Palette */}
      {palette && (
        <section className="mb-10 p-6 rounded-xl bg-[#171717] border border-[#2e2e2e]">
          <h2 className="text-[12px] font-medium uppercase tracking-[1.2px] text-[#898989] mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
            🎨 Recommended Colors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {palette.colors.map((color) => (
              <div key={color.hex} className="group text-center">
                <div className="w-full h-10 rounded-lg mb-2 border border-[#2e2e2e] group-hover:border-[#3ecf8e]/30 transition-colors" style={{ backgroundColor: color.hex }} />
                <div className="text-[11px] font-medium text-[#b4b4b4]" style={{ fontFamily: "'Source Code Pro', monospace" }}>{color.hex}</div>
                <div className="text-[12px] text-[#fafafa] mt-0.5">{color.name}</div>
                <div className="text-[11px] text-[#898989] mt-0.5">{color.use}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Spots */}
      <section>
        <h2 className="text-[12px] font-medium uppercase tracking-[1.2px] text-[#898989] mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
          ⭐ Hiding Spots ({spots.length})
        </h2>
        <div className="space-y-3">
          {spots.map((spot) => (
            <div key={spot.id} className="p-5 rounded-xl bg-[#171717] border border-[#2e2e2e]">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-[16px] font-medium text-[#fafafa]">{spot.name}</h3>
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
              <p className="text-[14px] text-[#b4b4b4] mb-4 leading-relaxed">{spot.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-[#0f0f0f] border border-[#242424]">
                  <div className="text-[11px] font-medium uppercase tracking-[1px] text-[#898989] mb-1" style={{ fontFamily: "'Source Code Pro', monospace" }}>Paint Advice</div>
                  <div className="text-[13px] text-[#b4b4b4]">{spot.paintAdvice}</div>
                </div>
                <div className="p-3 rounded-lg bg-[#0f0f0f] border border-[#242424]">
                  <div className="text-[11px] font-medium uppercase tracking-[1px] text-[#898989] mb-1" style={{ fontFamily: "'Source Code Pro', monospace" }}>Pose Tips</div>
                  <div className="text-[13px] text-[#b4b4b4]">{spot.poseTips}</div>
                </div>
              </div>
              <div className="mt-3 text-[12px] text-[#898989]">
                Source: <a href={spot.youtubeSource} target="_blank" rel="noopener noreferrer" className="text-[#00c573] hover:text-[#3ecf8e] transition-colors">YouTube</a>
                {spot.youtubeTimestamp && <span className="text-[#363636]"> at {spot.youtubeTimestamp}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
