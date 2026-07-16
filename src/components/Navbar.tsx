"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type NavLink = { href: string; label: string };
type NavDropdown = { label: string; children: { href: string; label: string }[] };
type NavItem = NavLink | NavDropdown;

const navLinks: NavItem[] = [
  { href: "/", label: "HOME" },
  { href: "/maps", label: "MAPS" },
  {
    label: "GUIDES",
    children: [
      { href: "/guides/beginner", label: "Beginner Guide" },
      { href: "/guides/hider", label: "Hider Guide" },
      { href: "/guides/seeker", label: "Seeker Guide" },
      { href: "/guides/tips", label: "Tips & Tricks" },
      { href: "/guides/paint", label: "Paint Guide" },
      { href: "/guides/controls", label: "Controls" },
      { href: "/guides/combos", label: "Combos" },
      { href: "/guides/object-tiers", label: "Object Tiers" },
      { href: "/guides/seeker-counters", label: "Seeker Counters" },
      { href: "/guides/beginner-mistakes", label: "Common Mistakes" },
      { href: "/guides/easter-eggs", label: "Secrets & Rumors" },
      { href: "/guides/videos", label: "Video Tutorials" },
      { href: "/guides/game-modes", label: "Game Modes" },
      { href: "/guides/mechanics", label: "Game Mechanics" },
      { href: "/guides/workshop", label: "Workshop Guide" },
    ],
  },
  { href: "/tier-list", label: "TIER LIST" },
  {
    label: "MORE",
    children: [
      { href: "/workshop", label: "Workshop" },
      { href: "/price", label: "Price" },
      { href: "/update", label: "Update Log" },
      { href: "/crossplay", label: "Crossplay" },
      { href: "/settings", label: "Settings" },
      { href: "/system-requirements", label: "System Requirements" },
      { href: "/platforms/steam-deck", label: "Steam Deck" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setDropdown(null), 150);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-lg border-b border-white/10">
      <div className="flex justify-between items-center px-4 md:px-gutter py-stack-sm max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.svg" alt="MC Lab" width={32} height={32} />
          <span className="font-display-lg text-lg md:text-display-lg text-primary uppercase tracking-tight">
            MC LAB
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) =>
            "children" in link ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(link.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() =>
                    setDropdown(dropdown === link.label ? null : link.label)
                  }
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-label-caps text-label-caps hover:text-primary transition-colors uppercase ${
                    dropdown === link.label
                      ? "text-primary"
                      : "text-on-surface-variant"
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      dropdown === link.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                {dropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 min-w-[220px] bg-surface border border-outline-variant rounded-lg shadow-xl py-2 z-50">
                    {(link as NavDropdown).children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setDropdown(null)}
                        className="block px-4 py-2 text-sm font-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="https://discord.gg/eNFUDBSwag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Join Discord"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
          </a>
          <a
            href="https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
            aria-label="View on Steam"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12S18.606 0 11.979 0z" />
            </svg>
          </a>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-surface/95 backdrop-blur-lg border-t border-white/10 px-4 py-6 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.label} className="mb-2">
                <button
                  onClick={() =>
                    setDropdown(dropdown === link.label ? null : link.label)
                  }
                  className="flex items-center justify-between w-full py-3 text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      dropdown === link.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdown === link.label && (
                  <div className="pl-4 space-y-1">
                    {(link as NavDropdown).children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => {
                          setOpen(false);
                          setDropdown(null);
                        }}
                        className="block py-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors uppercase"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
