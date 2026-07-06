-- Migration 0002: comments table

CREATE TABLE IF NOT EXISTS comments (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  page_slug  TEXT NOT NULL,
  nickname   TEXT NOT NULL,
  email      TEXT,
  website    TEXT,
  content    TEXT NOT NULL,
  ip_hash    TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  is_deleted INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_comments_slug ON comments(page_slug, created_at DESC);
