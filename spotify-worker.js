export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json",
    };

    const LASTFM_API_KEY = "ca134a9dc3451a0094f51fab9758bda5";
    const LASTFM_USER = "mekaranmahato";
    const LASTFM_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;

    try {
      const response = await fetch(LASTFM_ENDPOINT);
      const data = await response.json();
      
      const track = data.recenttracks.track[0];
      const isPlaying = track["@attr"]?.nowplaying === "true";

      return new Response(
        JSON.stringify({
          isPlaying: isPlaying,
          title: track.name,
          artist: track.artist["#text"],
          albumArt: track.image[3]["#text"] || track.image[2]["#text"],
          songUrl: `https://open.spotify.com/search/${encodeURIComponent(track.name + " " + track.artist["#text"])}`,
          debug: "Last.fm Mode Active!"
        }),
        { headers: corsHeaders }
      );
    } catch (e) {
      return new Response(JSON.stringify({ isPlaying: false, error: e.message }), { headers: corsHeaders });
    }
  },
};
