import type { Metadata } from 'next';
import { getGameConfig } from '@/lib/data';
import { buildBreadcrumbSchema } from '@/lib/seo';

const config = getGameConfig();

export const metadata: Metadata = {
  title: 'System Requirements — MECCHA CHAMELEON',
  description: 'MECCHA CHAMELEON minimum and recommended system requirements. Check if your PC can run it.',
  alternates: { canonical: `${config.seo.baseUrl}/system-requirements` },
};

export default function SystemRequirementsPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'System Requirements', item: `${config.seo.baseUrl}/system-requirements` },
  ]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-green-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">System Requirements</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight mb-4">💻 System Requirements</h1>
      <p className="text-gray-400 mb-8">Source: Steam Store API (official data)</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-4 text-green-400">Minimum</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><strong>OS:</strong> Windows 10 64-bit</li>
            <li><strong>Processor:</strong> Intel Core i5</li>
            <li><strong>Graphics:</strong> DirectX 11 or 12 compatible</li>
            <li><strong>Storage:</strong> Available on Steam</li>
          </ul>
        </section>
        <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-4 text-yellow-400">Platform</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><strong>Platform:</strong> Steam PC (Windows only)</li>
            <li><strong>Price:</strong> {config.game.price}</li>
            <li><strong>Release:</strong> {config.game.releaseDate}</li>
            <li><strong>Multiplayer:</strong> Online PvP</li>
          </ul>
        </section>
      </div>
    </main>
  );
}