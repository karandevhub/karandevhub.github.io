import AllProjectsSection from "@/components/sections/AllProjectsSection";
import { Metadata } from "next";
import { SEO } from "@/constants";

export const metadata: Metadata = {
  title: "Apps | Karan Kumar",
  description:
    "Mobile apps and games I have designed, built and published.",
  alternates: {
    canonical: `${SEO.url.replace(/\/$/, "")}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-16">
      <AllProjectsSection />
    </main>
  );
}
