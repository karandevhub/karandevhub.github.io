export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const pathParts = url.pathname.split("/").filter(Boolean);
    const slug = pathParts[1];

    if (!slug) {
      return new Response(JSON.stringify({ error: "No slug provided" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    try {
      if (request.method === "POST") {
        const ip = request.headers.get("cf-connecting-ip") || "anonymous";
        const viewKey = `viewed:${slug}:${ip}`;
        const hasViewed = await env.BLOG_VIEWS.get(viewKey);
        
        if (!hasViewed) {
          const current = (await env.BLOG_VIEWS.get(slug)) || 0;
          const newValue = parseInt(current) + 1;
          await env.BLOG_VIEWS.put(slug, newValue.toString());
          await env.BLOG_VIEWS.put(viewKey, "true", { expirationTtl: 86400 });
          
          return new Response(JSON.stringify({ slug, views: newValue, new: true }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        const current = (await env.BLOG_VIEWS.get(slug)) || 0;
        return new Response(JSON.stringify({ slug, views: parseInt(current), new: false }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const views = (await env.BLOG_VIEWS.get(slug)) || 0;
      return new Response(JSON.stringify({ slug, views: parseInt(views) }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};
