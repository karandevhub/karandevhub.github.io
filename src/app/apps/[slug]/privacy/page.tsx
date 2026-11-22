import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/constants";
import { privacyPath, projects } from "@/data/projects";
import { privacySections } from "@/lib/privacy";

const withPolicy = projects.filter((p) => p.privacy);

const findProject = (slug: string) => withPolicy.find((p) => p.slug === slug);

export function generateStaticParams() {
  return withPolicy.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) {
    return { title: "Not Found" };
  }
  return {
    title: `${project.title} Privacy Policy`,
    description: `How ${project.title} handles your information.`,
    alternates: { canonical: `${SEO.url.replace(/\/$/, "")}${privacyPath(slug)}` },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project?.privacy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-primary px-6 pb-24 pt-32 lg:px-10">
      <article className="mx-auto max-w-2xl">
        <Link
          href={`/projects#${project.slug}`}
          className="mb-10 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          All apps
        </Link>

        <div className="mb-8 flex items-center gap-4">
          <img src={project.icon} alt="" className="h-14 w-14 rounded-[28%]" />
          <h1 className="font-display text-3xl font-semibold text-text-primary md:text-4xl">
            {project.title} Privacy Policy
          </h1>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
          Last updated: {project.privacy.lastUpdated}
        </p>

        <p className="mt-8 leading-relaxed text-text-secondary">
          {project.privacy.summary} This policy explains what information the app uses and how it is
          handled. In short: we do not collect, store or share any personal information.
        </p>

        {privacySections(project).map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="mb-3 font-display text-xl font-semibold text-text-primary">{section.heading}</h2>
            <p className="leading-relaxed text-text-secondary">{section.body}</p>
          </section>
        ))}
      </article>
    </main>
  );
}
