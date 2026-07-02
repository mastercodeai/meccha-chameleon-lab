import type { Metadata } from 'next';
import { getGameConfig } from '@/lib/data';
import { buildBreadcrumbSchema } from '@/lib/seo';

const config = getGameConfig();

export const metadata: Metadata = {
  title: 'Seeker Guide — MECCHA CHAMELEON',
  description: 'Become a better Seeker in MECCHA CHAMELEON. Learn how to spot hidden players, common hiding patterns, and efficient search strategies.',
  alternates: { canonical: `${config.seo.baseUrl}/seeker-guide` },
};

export default function SeekerGuidePage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'Seeker Guide', item: `${config.seo.baseUrl}/seeker-guide` },
  ]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-green-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Seeker Guide</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight mb-4">🔍 Seeker Guide</h1>
      <p className="text-gray-400 mb-8">
        How to find hidden players efficiently. Strategies from top YouTube gameplay analysis.
      </p>

      <div className="space-y-6">
        <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-3">Seeker Mindset</h2>
          <p className="text-gray-300 text-sm mb-3">
            As a Seeker, your job is to find players who are pretending to be furniture. Look for:
          </p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• <strong>Color mismatches</strong> — Slightly wrong shades that don\'t quite match the surface.</li>
            <li>• <strong>Shape anomalies</strong> — Furniture that looks "off" or has human proportions.</li>
            <li>• <strong>Duplicate objects</strong> — Two of the same item when there should only be one.</li>
            <li>• <strong>Edge artifacts</strong> — Visible seams where the player meets the background.</li>
          </ul>
        </section>

        <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-3">Search Patterns</h2>
          <ol className="space-y-3 text-gray-300 text-sm list-decimal list-inside">
            <li><strong>Sweep methodically</strong> — Go room by room, left to right. Don\'t skip areas.</li>
            <li><strong>Check common spots first</strong> — Corners, behind furniture, near doors.</li>
            <li><strong>Look for movement</strong> — Even tiny movements give away a Hider\'s position.</li>
            <li><strong>Use the paint tool</strong> — If you suspect something, paint near it. Real objects react differently.</li>
            <li><strong>Listen carefully</strong> — Paint sounds and movement audio can reveal positions.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}