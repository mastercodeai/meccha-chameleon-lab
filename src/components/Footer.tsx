import { getGameConfig } from '@/lib/data';

const config = getGameConfig();

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
        <p className="mb-2">
          {config.game.name} Guide & Tools — Fan-made companion site. Not affiliated with {config.game.developer} or Valve.
        </p>
        <p>
          Game data sourced from Steam API and community YouTube creators. Updated {config.game.lastUpdated}.
        </p>
        <p className="mt-2">
          <a href={config.socials.steam} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
            View on Steam
          </a>
        </p>
      </div>
    </footer>
  );
}
