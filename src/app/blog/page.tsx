import { getAllPosts } from "@/lib/blog";
import BlogSection from "@/components/sections/BlogSection";
import { Metadata } from "next";

import { SEO } from "@/constants";

export const metadata: Metadata = {
  title: "Blog | Karan Kumar",
  description: "Writing about frontend, performance, and engineering.",
  alternates: {
    canonical: `${SEO.url.replace(/\/$/, "")}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-bg-primary">
      <BlogSection isPage={true} posts={posts} />
    </main>
  );
}
