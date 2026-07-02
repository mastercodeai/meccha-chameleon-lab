import Link from 'next/link';
import { getGameConfig } from '@/lib/data';

const config = getGameConfig();

export default function Header() {
  return (
    <header className="border-b border-[#2e2e2e] bg-[#171717]/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-sm tracking-tight text-[#fafafa] hover:text-[#3ecf8e] transition-colors">
          <span className="text-lg">🦎</span>
          <span>{config.game.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-[14px] font-medium">
          <Link href="/maps/" className="px-3 py-2 rounded-md text-[#b4b4b4] hover:text-[#fafafa] hover:bg-[#1e1e1e] transition-colors">
            Spots
          </Link>
          <Link href="/paint-guide/" className="px-3 py-2 rounded-md text-[#b4b4b4] hover:text-[#fafafa] hover:bg-[#1e1e1e] transition-colors">
            Paint
          </Link>
          <Link href="/beginner-guide/" className="px-3 py-2 rounded-md text-[#b4b4b4] hover:text-[#fafafa] hover:bg-[#1e1e1e] transition-colors">
            Guide
          </Link>
          <Link href="/workshop/" className="px-3 py-2 rounded-md text-[#b4b4b4] hover:text-[#fafafa] hover:bg-[#1e1e1e] transition-colors">
            Workshop
          </Link>
          <Link href="/controls/" className="px-3 py-2 rounded-md text-[#b4b4b4] hover:text-[#fafafa] hover:bg-[#1e1e1e] transition-colors">
            Controls
          </Link>
        </nav>
        <a
          href={config.socials.steam}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-medium bg-[#0f0f0f] text-[#fafafa] border border-[#fafafa] hover:bg-[#fafafa] hover:text-[#0f0f0f] transition-colors"
        >
          Steam →
        </a>
      </div>
    </header>
  );
}
