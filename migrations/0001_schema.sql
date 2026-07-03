-- MECCHA CHAMELEON D1 Schema
-- Migration 0001: maps + spots

CREATE TABLE IF NOT EXISTS maps (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  spots_count INTEGER NOT NULL DEFAULT 0,
  difficulty INTEGER NOT NULL DEFAULT 1,
  color TEXT NOT NULL DEFAULT '#8B7355',
  image_key TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS spots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  map_slug TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK(difficulty IN ('EASY', 'MEDIUM', 'HARD')),
  best_for TEXT NOT NULL CHECK(best_for IN ('Hider', 'Seeker', 'Both')),
  image_key TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (map_slug) REFERENCES maps(slug) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_spots_map_slug ON spots(map_slug);
CREATE INDEX IF NOT EXISTS idx_maps_slug ON maps(slug);
