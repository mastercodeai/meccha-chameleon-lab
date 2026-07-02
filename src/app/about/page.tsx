import type { Metadata } from 'next';
import { getGameConfig } from '@/lib/data';

const config = getGameConfig();

export const metadata: Metadata = {
  title: 'About — MECCHA CHAMELEON Guide',
  description: 'About this fan-made MECCHA CHAMELEON companion site. Data sources, content policy, and contact info.',
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight mb-4">About</h1>
      <div className="space-y-6 text-gray-300 text-sm">
        <p>
          This is a fan-made companion site for MECCHA CHAMELEON, a multiplayer hide-and-seek game on Steam.
          We are not affiliated with {config.game.developer} or Valve.
        </p>
        <p>
          <strong>Data Sources:</strong> All game data is sourced from the official Steam Store API, 
          Steam Reviews API, and public YouTube gameplay videos. Each piece of content includes 
          source attribution with links to the original material.
        </p>
        <p>
          <strong>Content Policy:</strong> We do not create or distribute cheats, hacks, or exploits. 
          All content is intended to help players improve their gameplay through legitimate strategies.
        </p>
        <p>
          <strong>Updates:</strong> Content is updated regularly to reflect game patches and new community discoveries.
        </p>
      </div>
    </main>
  );
}