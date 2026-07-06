"use client";

import { useState } from "react";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
}

export default function LiteYouTube({ videoId, title }: LiteYouTubeProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="absolute top-0 left-0 w-full h-full cursor-pointer group"
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-16 h-16 drop-shadow-lg group-hover:scale-110 transition-transform"
          viewBox="0 0 68 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66.52 7.74a.84.84 0 00-.58-.58C59.16 5.5 34 5.5 34 5.5s-25.16 0-31.94 1.66a.84.84 0 00-.58.58C.5 14.52.5 24 .5 24s0 9.48 1.48 16.26a.84.84 0 00.58.58C9.34 42.5 34 42.5 34 42.5s25.16 0 31.94-1.66a.84.84 0 00.58-.58C67.5 33.48 67.5 24 67.5 24s0-9.48-1.48-16.26z"
            fill="#FF0000"
          />
          <path d="M45 24L27 14v20l18-10z" fill="#FFF" />
        </svg>
      </div>
    </button>
  );
}
