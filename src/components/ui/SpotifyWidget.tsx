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
    const interval = setInterval(fetchTrack, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={track.songUrl || "https://open.spotify.com"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Spotify"
      className="group inline-flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-secondary/60 px-3 py-2 transition-all duration-300 hover:border-[#1DB954]/40 hover:bg-[#1DB954]/5 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1DB954]/50"
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg">
        <div className="text-[#1DB954]">
          <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.306c-.216.353-.674.464-1.025.247-2.813-1.718-6.353-2.103-10.521-1.15-.403.093-.809-.16-.902-.564-.093-.404.161-.809.564-.902 4.566-1.043 8.49-.597 11.637 1.325.35.216.463.673.247 1.025l-.001.019zm1.469-3.262c-.273.442-.847.581-1.288.309-3.221-1.978-8.13-2.556-11.935-1.401-.497.151-1.023-.13-1.173-.628-.151-.497.13-1.023.628-1.173 4.349-1.32 9.754-.672 13.459 1.6 0 .001.001 0 .31.309.271.441.132 1.014-.309 1.285l.001.008zm.135-3.385c-3.863-2.294-10.243-2.506-13.978-1.371-.594.18-1.226-.153-1.406-.747-.181-.594.153-1.226.747-1.406 4.285-1.301 11.332-1.055 15.776 1.583.535.318.709 1.007.391 1.542-.317.535-1.006.709-1.542.392l.012.007z" />
          </svg>
        </div>
      </span>

      <div className="flex flex-col min-w-0">
        <span 
          className="font-mono text-[10px] uppercase tracking-widest leading-none mb-1 text-[#1DB954]"
          style={{ textShadow: "0 0 8px rgba(29, 185, 84, 0.4)" }}
        >
          {track.isPlaying ? "Currently playing" : "Last played"} on
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-text-primary truncate max-w-[150px]">
            {track.title || "Spotify"}
          </span>
          {track.artist && (
            <span className="text-xs text-text-muted truncate hidden sm:inline">
              — {track.artist}
            </span>
          )}
          {track.isPlaying && <MusicBars />}
        </div>
      </div>
    </a>
  );
}
