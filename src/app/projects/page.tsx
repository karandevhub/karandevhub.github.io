import AllProjectsSection from "@/components/sections/AllProjectsSection";
import { Metadata } from "next";
import { SEO } from "@/constants";

export const metadata: Metadata = {
  title: "Projects | Karan Kumar",
  description:
    "Things I've shipped. A detailed archive of applications, systems, and digital tools.",
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
