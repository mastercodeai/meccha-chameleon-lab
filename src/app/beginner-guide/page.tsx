import type { Metadata } from 'next';
import { getGameConfig } from '@/lib/data';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';

const config = getGameConfig();

export const metadata: Metadata = {
  title: 'Beginner Guide — MECCHA CHAMELEON',
  description: 'New to MECCHA CHAMELEON? Learn the basics of hiding, painting, and seeking in this multiplayer hide-and-seek game on Steam.',
  alternates: { canonical: `${config.seo.baseUrl}/beginner-guide` },
};

export default function BeginnerGuidePage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'Beginner Guide', item: `${config.seo.baseUrl}/beginner-guide` },
  ]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-green-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Beginner Guide</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight mb-4">📖 Beginner Guide</h1>
      <p className="text-gray-400 mb-8">
        New to MECCHA CHAMELEON? This guide covers everything you need to know to start playing.
      </p>

      <div className="space-y-8">
        <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-3">What is MECCHA CHAMELEON?</h2>
          <p className="text-gray-300 text-sm">
            MECCHA CHAMELEON is a multiplayer hide-and-seek game where you paint your white body to mimic the stage. 
            Split into Seeker and Hider teams — Hiders blend in, Seekers find them. Released June 9, 2026 on Steam for $5.99.
          </p>
        </section>

        <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-3">How to Play as Hider</h2>
          <ol className="space-y-3 text-gray-300 text-sm list-decimal list-inside">
            <li><strong>Find a good spot</strong> — Look for areas with distinctive colors and shapes.</li>
            <li><strong>Sample colors</strong> — Use the paint tool to pick up colors from nearby surfaces.</li>
            <li><strong>Paint yourself</strong> — Apply the sampled colors to your body to match the environment.</li>
            <li><strong>Pose correctly</strong> — Crouch or adjust your pose to match the shape of objects nearby.</li>
            <li><strong>Stay still</strong> — Movement breaks camouflage. Only move when the Seeker isn\'t looking.</li>
          </ol>
        </section>

        <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-3">How to Play as Seeker</h2>
          <ol className="space-y-3 text-gray-300 text-sm list-decimal list-inside">
            <li><strong>Scan methodically</strong> — Check each area systematically, don\'t just wander.</li>
            <li><strong>Look for imperfections</strong> — Slightly wrong colors, unusual shapes, or out-of-place objects.</li>
            <li><strong>Check common spots</strong> — Learn the popular hiding spots on each map.</li>
            <li><strong>Use audio cues</strong> — Listen for movement or paint sounds.</li>
            <li><strong>Time management</strong> — Don\'t spend too long in one area. Cover the whole map.</li>
          </ol>
        </section>

        <section className="p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-3">Quick Tips</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• <strong>Start with easy maps</strong> — Living Room and Office are beginner-friendly.</li>
            <li>• <strong>Watch YouTube guides</strong> — See how top players hide (links on each map page).</li>
            <li>• <strong>Practice painting</strong> — The paint tool takes practice. Spend time in custom games.</li>
            <li>• <strong>Play with friends</strong> — Private rooms are great for practicing without pressure.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}