"use client";
import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface BlogViewCounterProps {
  slug: string;
  readonly?: boolean;
}

export default function BlogViewCounter({ slug, readonly = false }: BlogViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(
          `https://blog-views-api.karan-portfolio.workers.dev/views/${slug}`,
          { method: readonly ? "GET" : "POST" }
        );
        const data = await response.json();
        if (data.views !== undefined) {
          setViews(data.views);
        }
      } catch (err) {
        console.error("Failed to fetch views:", err);
      }
    };

    fetchViews();
  }, [slug, readonly]);

  if (views === null) return null;

  return (
    <span className="flex items-center gap-1.5">
      <Eye className="h-3.5 w-3.5" />
      {views.toLocaleString()} views
    </span>
  );
}
