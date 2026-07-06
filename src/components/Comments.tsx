"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Comment {
  id: number;
  page_slug: string;
  nickname: string;
  email: string | null;
  website: string | null;
  content: string;
  created_at: string;
}

interface CommentsResponse {
  comments: Comment[];
  total: number;
  cursor: number;
}

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr + "Z"); // D1 stores UTC
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60_000);
  const diffHr = Math.floor(diffMs / 3_600_000);
  const diffDay = Math.floor(diffMs / 86_400_000);

  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 30) return `${diffDay}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [total, setTotal] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Form fields
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [content, setContent] = useState("");

  // Turnstile
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileTokenRef = useRef<string>("");
  const widgetIdRef = useRef<string>("");
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);

  const fetchComments = useCallback(async (offset: number, append: boolean) => {
    try {
      if (append) setLoadingMore(true);
      else setLoading(true);

      const res = await fetch(`/api/comments?slug=${encodeURIComponent(slug)}&cursor=${offset}&limit=20`);
      if (!res.ok) throw new Error("Failed to load comments");

      const data: CommentsResponse = await res.json();
      setComments(prev => append ? [...prev, ...data.comments] : data.comments);
      setTotal(data.total);
      setCursor(data.cursor);
    } catch {
      // silent fail on load
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [slug]);

  // Initial load
  useEffect(() => {
    fetchComments(0, false);
  }, [fetchComments]);

  // Load Turnstile script
  useEffect(() => {
    if (typeof window === "undefined") return;

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) return;

    // Check if script already loaded
    if (window.turnstile) {
      setTurnstileLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.onload = () => setTurnstileLoaded(true);
    document.head.appendChild(script);
  }, []);

  // Render Turnstile widget when loaded
  useEffect(() => {
    if (!turnstileLoaded || !turnstileRef.current || !window.turnstile) return;
    if (widgetIdRef.current) return; // already rendered

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) return;

    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: siteKey,
      action: "comment",
      callback: (token: string) => {
        turnstileTokenRef.current = token;
      },
      "error-callback": () => {
        turnstileTokenRef.current = "";
      },
      size: "invisible",
    });
  }, [turnstileLoaded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Basic validation
    if (nickname.trim().length < 2) {
      setError("Name must be at least 2 characters");
      return;
    }
    if (content.trim().length < 1) {
      setError("Please write a comment");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          nickname: nickname.trim(),
          email: email.trim() || undefined,
          website: website.trim() || undefined,
          content: content.trim(),
          turnstileToken: turnstileTokenRef.current || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to post comment");
        return;
      }

      // Success
      setSuccess(true);
      setContent("");
      setEmail("");
      setWebsite("");
      // Keep nickname for convenience
      turnstileTokenRef.current = "";

      // Refresh comments
      fetchComments(0, false);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-12">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
        <span>💬</span>
        Comments
        {total > 0 && (
          <span className="text-on-surface-variant font-body-sm">({total})</span>
        )}
      </h2>

      {/* Comment Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-surface border border-outline-variant rounded-lg p-5 mb-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="comment-name" className="block font-label-caps text-label-caps text-on-surface-variant mb-1.5">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              id="comment-name"
              type="text"
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              maxLength={20}
              required
              placeholder="Your name"
              className="w-full bg-surface-container-high border border-outline-variant rounded px-3 py-2 text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="comment-email" className="block font-label-caps text-label-caps text-on-surface-variant mb-1.5">
              Email <span className="text-on-surface-variant/50 text-[10px]">Optional</span>
            </label>
            <input
              id="comment-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-surface-container-high border border-outline-variant rounded px-3 py-2 text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="comment-website" className="block font-label-caps text-label-caps text-on-surface-variant mb-1.5">
            Website <span className="text-on-surface-variant/50 text-[10px]">Optional</span>
          </label>
          <input
            id="comment-website"
            type="url"
            value={website}
            onChange={e => setWebsite(e.target.value)}
            placeholder="https://yoursite.com"
            className="w-full bg-surface-container-high border border-outline-variant rounded px-3 py-2 text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment-content" className="block font-label-caps text-label-caps text-on-surface-variant mb-1.5">
            Comment <span className="text-red-400">*</span>
          </label>
          <textarea
            id="comment-content"
            value={content}
            onChange={e => setContent(e.target.value)}
            maxLength={500}
            required
            rows={3}
            placeholder="Share your thoughts..."
            className="w-full bg-surface-container-high border border-outline-variant rounded px-3 py-2 text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <div className="text-right text-xs text-on-surface-variant/50 mt-1">
            {content.length}/500
          </div>
        </div>

        {/* Turnstile container (invisible) */}
        <div ref={turnstileRef} className="mb-4" />

        {error && (
          <p className="text-red-400 text-sm mb-3">{error}</p>
        )}
        {success && (
          <p className="text-green-400 text-sm mb-3">Comment posted!</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-2.5 rounded hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Posting..." : "Post Comment"}
        </button>
      </form>

      {/* Comments List */}
      {loading ? (
        <div className="text-center py-8">
          <div className="inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : comments.length === 0 ? (
        <p className="text-on-surface-variant text-sm text-center py-8">
          No comments yet. Be the first to share your thoughts!
        </p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-surface border border-outline-variant rounded-lg p-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">
                    {comment.nickname.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {comment.website ? (
                    <a
                      href={comment.website}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      {comment.nickname}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-on-surface">
                      {comment.nickname}
                    </span>
                  )}
                  <span className="text-xs text-on-surface-variant">
                    {timeAgo(comment.created_at)}
                  </span>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant pl-11 whitespace-pre-wrap">
                {comment.content}
              </p>
            </div>
          ))}

          {comments.length < total && (
            <button
              onClick={() => fetchComments(cursor, true)}
              disabled={loadingMore}
              className="w-full py-3 text-sm text-primary border border-primary/30 rounded hover:bg-primary/5 transition-colors disabled:opacity-50"
            >
              {loadingMore ? "Loading..." : "Load more comments"}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
