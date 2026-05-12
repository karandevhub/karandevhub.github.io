import HeroSection from "@/components/sections/HeroSection";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection"));
const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection"));
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"));
const OpenSourceSection = dynamic(() => import("@/components/sections/OpenSourceSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <OpenSourceSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
