import { createFileRoute } from "@tanstack/react-router";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs | Karan Kumar" },
      {
        name: "description",
        content: "Thoughts on engineering, design, and AI.",
      },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <main className="relative">
      <BlogSection isPage={true} />
      <ContactSection />
    </main>
  );
}
