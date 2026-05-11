import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Karan Kumar",
  description: "Thoughts on engineering, design, and AI.",
};

export default function BlogsPage() {
  return (
    <div className="relative">
      <BlogSection isPage={true} />
      <ContactSection />
    </div>
  );
}
