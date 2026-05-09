import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Rivera — Frontend Architect & Systems Designer" },
      {
        name: "description",
        content:
          "Frontend architect & systems-minded designer. Building interfaces that feel inevitable. Currently leading frontend at Linear.",
      },
      { property: "og:title", content: "Alex Rivera — Frontend Architect" },
      {
        property: "og:description",
        content: "Building interfaces that feel inevitable.",
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
      <AchievementsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
