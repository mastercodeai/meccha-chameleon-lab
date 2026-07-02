import type { Metadata } from 'next';
import { getGameConfig } from '@/lib/data';
import { buildBreadcrumbSchema } from '@/lib/seo';

const config = getGameConfig();

export const metadata: Metadata = {
  title: 'Hider Guide — MECCHA CHAMELEON',
  description: 'Master the art of hiding in MECCHA CHAMELEON. Advanced camouflage techniques, best spots, and paint strategies for Hiders.',
  alternates: { canonical: `${config.seo.baseUrl}/hider-guide` },
};

export default function HiderGuidePage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'Hider Guide', item: `${config.seo.baseUrl}/hider-guide` },
  ]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-green-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Hider Guide</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight mb-4">🫥 Hider Guide</h1>
      <p className="text-gray-400 mb-8">
        Advanced hiding techniques and strategies. Tips sourced from top YouTube gameplay creators.
      </p>

      <div className="space-y-6">
        <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-3">The 5 Rules of Hiding</h2>
          <ol className="space-y-3 text-gray-300 text-sm list-decimal list-inside">
            <li><strong>Match the dominant color</strong> — Don\'t try to match every detail. One solid matching color beats a messy pattern.</li>
            <li><strong>Reduce your silhouette</strong> — Crouch to minimize your profile. Smaller = harder to spot.</li>
            <li><strong>Use shadows</strong> — Dark areas make imperfect camouflage less noticeable.</li>
            <li><strong>Don\'t move</strong> — The #1 reason Hiders get caught is moving too early.</li>
            <li><strong>Think like furniture</strong> — You\'re not hiding behind objects, you ARE the object.</li>
          </ol>
        </section>

        <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-3">Advanced Techniques</h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• <strong>Edge blending</strong> — Position yourself at the edge of two colors and paint each half differently.</li>
            <li>• <strong>Shadow exploitation</strong> — Seekers often skip dark corners. Use them even if your paint isn\'t perfect.</li>
            <li>• <strong>Decoy positioning</strong> — Stand near objects that are similar but not identical. The Seeker\'s brain fills in the gap.</li>
            <li>• <strong>Map rotation</strong> — Move to a new spot if the Seeker is getting close. Don\'t wait until you\'re found.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}