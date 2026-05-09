import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karan Kumar — Full Stack & AI Engineer" },
      {
        name: "description",
        content:
          "Full Stack & AI Engineer specializing in intelligent systems and immersive interfaces.",
      },
      { property: "og:title", content: "Karan Kumar — Full Stack & AI Engineer" },
      {
        property: "og:description",
        content: "Building intelligent systems that bridge the gap between AI and reality.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <OpenSourceSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
