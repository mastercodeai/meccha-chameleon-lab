import Link from 'next/link';
import { getGameConfig } from '@/lib/data';

const config = getGameConfig();

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-950/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight text-green-400 hover:text-green-300 transition-colors">
          🦎 {config.game.name}
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link href="/maps" className="px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Spots
          </Link>
          <Link href="/paint-guide" className="px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Paint
          </Link>
          <Link href="/beginner-guide" className="px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Guide
          </Link>
          <Link href="/workshop" className="px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Workshop
          </Link>
          <Link href="/controls" className="px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Controls
          </Link>
        </nav>
      </div>
    </header>
  );
}
