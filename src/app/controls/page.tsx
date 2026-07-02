import type { Metadata } from 'next';
import { getGameConfig } from '@/lib/data';
import { buildBreadcrumbSchema } from '@/lib/seo';

const config = getGameConfig();

export const metadata: Metadata = {
  title: 'Controls & Keybinds — MECCHA CHAMELEON',
  description: 'Default controls and keybinds for MECCHA CHAMELEON on Steam. Keyboard and controller mappings.',
  alternates: { canonical: `${config.seo.baseUrl}/controls` },
};

export default function ControlsPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'Controls', item: `${config.seo.baseUrl}/controls` },
  ]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-green-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Controls</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight mb-4">🎮 Controls & Keybinds</h1>
      <p className="text-gray-400 mb-8">
        Default keyboard and controller mappings for MECCHA CHAMELEON.
      </p>

      <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
        <h2 className="text-xl font-bold mb-4">Keyboard Controls</h2>
        <div className="space-y-3">
          {[
            ['WASD', 'Move'],
            ['Mouse', 'Look around'],
            ['Left Click', 'Use paint tool / Interact'],
            ['Right Click', 'Sample color'],
            ['Shift', 'Sprint / Run'],
            ['C', 'Crouch'],
            ['Space', 'Jump'],
            ['E', 'Interact / Pick up'],
            ['Tab', 'Scoreboard'],
            ['Esc', 'Pause menu'],
          ].map(([key, action]) => (
            <div key={key} className="flex justify-between items-center py-2 border-b border-gray-800">
              <span className="font-mono text-sm bg-gray-800 px-3 py-1 rounded">{key}</span>
              <span className="text-gray-300 text-sm">{action}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}