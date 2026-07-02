import { getGameConfig } from '@/lib/data';

const config = getGameConfig();

export default function Footer() {
  return (
    <footer className="border-t border-[#242424] mt-24 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🦎</span>
              <span className="font-semibold text-sm text-[#fafafa]">{config.game.name}</span>
            </div>
            <p className="text-[13px] text-[#898989] leading-relaxed">
              Fan-made companion site. Not affiliated with {config.game.developer} or Valve.
              All game data sourced from Steam API and community YouTube creators.
            </p>
          </div>
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[1.2px] text-[#898989] mb-3" style={{ fontFamily: "'Source Code Pro', monospace" }}>
              Pages
            </h4>
            <ul className="space-y-2 text-[14px]">
              <li><a href="/maps/" className="text-[#b4b4b4] hover:text-[#00c573] transition-colors">Best Spots</a></li>
              <li><a href="/paint-guide/" className="text-[#b4b4b4] hover:text-[#00c573] transition-colors">Paint Guide</a></li>
              <li><a href="/beginner-guide/" className="text-[#b4b4b4] hover:text-[#00c573] transition-colors">Beginner Guide</a></li>
              <li><a href="/workshop/" className="text-[#b4b4b4] hover:text-[#00c573] transition-colors">Workshop Maps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[1.2px] text-[#898989] mb-3" style={{ fontFamily: "'Source Code Pro', monospace" }}>
              Links
            </h4>
            <ul className="space-y-2 text-[14px]">
              <li><a href={config.socials.steam} target="_blank" rel="noopener noreferrer" className="text-[#b4b4b4] hover:text-[#00c573] transition-colors">Steam Store</a></li>
              <li><a href={config.socials.steamCommunity} target="_blank" rel="noopener noreferrer" className="text-[#b4b4b4] hover:text-[#00c573] transition-colors">Steam Community</a></li>
              <li><a href="https://steamcommunity.com/workshop/browse/?appid=4704690" target="_blank" rel="noopener noreferrer" className="text-[#b4b4b4] hover:text-[#00c573] transition-colors">Workshop</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#242424] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#898989]">
            Updated {config.game.lastUpdated} · {config.stats.totalReviews.toLocaleString()} Steam reviews
          </p>
          <p className="text-[12px] text-[#898989]">
            Data sources: Steam API · YouTube · Steam Community
          </p>
        </div>
      </div>
    </footer>
  );
}
