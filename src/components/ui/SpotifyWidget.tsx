import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SpotifyTrack {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumArt?: string;
  songUrl?: string;
}

function MusicBars() {
  return (
    <span className="flex items-end gap-[2px] h-3">
      {[1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full"
          style={{ background: "#1DB954" }}
          animate={{ scaleY: [0.4, 1, 0.6, 1, 0.3, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </span>
  );
}

export default function SpotifyWidget() {
  const [track] = useState<SpotifyTrack>({ isPlaying: false });

  return (
    <a
      href="https://open.spotify.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Spotify"
      className="group inline-flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-secondary/60 px-4 py-3 transition-all duration-300 hover:border-[#1DB954]/40 hover:bg-[#1DB954]/5 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1DB954]/50"
    >
      {/* Spotify logo SVG */}
      <span className="flex-shrink-0">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="#1DB954"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      </span>

      <div className="flex flex-col min-w-0">
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted leading-none mb-1">
          Currently playing on
        </span>
        <div className="flex items-center gap-2">
          {track.isPlaying ? (
            <>
              <MusicBars />
              <span className="text-sm font-medium text-text-primary truncate max-w-[150px]">
                {track.title}
              </span>
              <span className="text-xs text-text-muted truncate hidden sm:inline">
                — {track.artist}
              </span>
            </>
          ) : (
            <span className="text-sm font-medium text-text-secondary">
              Not Listening
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
