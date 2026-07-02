import type { Metadata } from 'next';
import { getGameConfig } from '@/lib/data';
import { buildBreadcrumbSchema } from '@/lib/seo';

const config = getGameConfig();

export const metadata: Metadata = {
  title: 'Workshop Maps — MECCHA CHAMELEON',
  description: 'Browse Steam Workshop maps for MECCHA CHAMELEON. Custom maps, community creations, and how to install them.',
  alternates: { canonical: `${config.seo.baseUrl}/workshop` },
};

export default function WorkshopPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'Workshop', item: `${config.seo.baseUrl}/workshop` },
  ]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-green-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Workshop</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight mb-4">🔧 Workshop Maps</h1>
      <p className="text-gray-400 mb-8">
        MECCHA CHAMELEON supports Steam Workshop for custom maps. Browse community creations and learn how to install them.
      </p>

      <section className="p-6 rounded-xl bg-gray-900 border border-gray-800 mb-8">
        <h2 className="text-xl font-bold mb-3">How to Install Workshop Maps</h2>
        <ol className="space-y-3 text-gray-300 text-sm list-decimal list-inside">
          <li>Open Steam and go to the MECCHA CHAMELEON store page.</li>
          <li>Click on "Workshop" in the navigation bar.</li>
          <li>Browse maps and click "Subscribe" on any map you want to install.</li>
          <li>Launch the game — subscribed maps will be available in custom games.</li>
        </ol>
      </section>

      <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
        <h2 className="text-xl font-bold mb-3">Browse Workshop</h2>
        <p className="text-gray-300 text-sm mb-4">
          Visit the official Steam Workshop page to see all available community maps:
        </p>
        <a href="https://steamcommunity.com/workshop/browse/?appid=4704690" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-bold transition-colors">
          Open Steam Workshop →
        </a>
      </section>
    </main>
  );
}