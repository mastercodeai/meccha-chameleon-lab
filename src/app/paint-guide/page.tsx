import type { Metadata } from 'next';
import { getColorPalettes, getGameConfig } from '@/lib/data';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';

const config = getGameConfig();
const palettes = getColorPalettes();

export const metadata: Metadata = {
  title: 'Paint & Color Guide — MECCHA CHAMELEON',
  description: 'Master the paint tool in MECCHA CHAMELEON. Color palettes for every map, painting tips, and camouflage techniques from YouTube gameplay analysis.',
  alternates: { canonical: `${config.seo.baseUrl}/paint-guide` },
};

export default function PaintGuidePage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'Paint Guide', item: `${config.seo.baseUrl}/paint-guide` },
  ]);

  const faq = buildFAQSchema([
    { question: 'How does the paint tool work in MECCHA CHAMELEON?', answer: 'The paint tool lets you sample colors from nearby surfaces and paint your body to match. Get close to a surface, sample its color, then apply it to your character.' },
    { question: 'What are the best colors for hiding?', answer: 'Match the dominant color of the surface you want to blend with. Dark colors work well in shadows, while neutral tones (gray, beige, brown) work well in most indoor environments.' },
  ]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-green-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Paint Guide</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight mb-4">🎨 Paint & Color Guide</h1>
      <p className="text-gray-400 mb-8">
        Master the paint tool with recommended color palettes for every map. 
        All colors sourced from YouTube gameplay demonstrations.
      </p>

      <section className="mb-10 p-6 rounded-xl bg-gray-900 border border-gray-800">
        <h2 className="text-xl font-bold mb-4">💡 General Painting Tips</h2>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>• Always sample the color from the surface you want to blend into BEFORE painting.</li>
          <li>• Darker shades work better in shadows. Lighter shades work better in well-lit areas.</li>
          <li>• Don\'t try to match complex patterns — solid colors are more reliable.</li>
          <li>• Crouching reduces your visible surface area, making camouflage easier.</li>
          <li>• Moving breaks camouflage instantly. Stay still until the Seeker passes.</li>
          <li>• The paint tool has a limited range — get close to your target surface.</li>
        </ul>
      </section>

      {palettes.map((palette) => (
        <section key={palette.id} className="mb-8 p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-4">{palette.name}</h2>
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
      ))}
    </main>
  );
}