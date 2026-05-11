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
  const [track, setTrack] = useState<SpotifyTrack>({ isPlaying: false });

  const WORKER_URL = "https://spotify-api.karan-portfolio.workers.dev";

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const res = await fetch(WORKER_URL);
        const data = await res.json();
        setTrack(data);
      } catch (e) {
        console.error("Spotify fetch failed:", e);
      }
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={track.songUrl || "https://open.spotify.com"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Spotify"
      className="group inline-flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-secondary/60 px-4 py-3 transition-all duration-300 hover:border-[#1DB954]/40 hover:bg-[#1DB954]/5 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1DB954]/50"
    >
      {/* Spotify logo SVG */}
      <span className="flex-shrink-0">
        <img 
          src={track.albumArt || "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"} 
          alt="Spotify"
          className={`h-8 w-8 rounded-full object-cover transition-transform duration-300 group-hover:rotate-[12deg] ${track.isPlaying ? 'animate-spin-slow' : ''}`}
        />
      </span>

      <div className="flex flex-col min-w-0">
        <span 
          className="font-mono text-[10px] uppercase tracking-widest leading-none mb-1 text-[#1DB954]"
          style={{ textShadow: "0 0 8px rgba(29, 185, 84, 0.4)" }}
        >
          {track.isPlaying ? "Currently playing" : "Last played"} on
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
            <span className="text-sm font-medium text-text-primary">
              Spotify
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
