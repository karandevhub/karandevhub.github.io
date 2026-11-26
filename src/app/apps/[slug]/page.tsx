import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Mail } from "lucide-react";
import { SEO } from "@/constants";
import { APP_SUPPORT_EMAIL, appPath, privacyUrlOf, projects } from "@/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import AppStatusBadge from "@/components/apps/AppStatusBadge";
import PhoneFrame from "@/components/apps/PhoneFrame";
import StoreButtons from "@/components/apps/StoreButtons";
import { FEATURE_ICONS } from "@/components/apps/featureIcons";

const BASE_URL = SEO.url.replace(/\/$/, "");

const findProject = (slug: string) => projects.find((p) => p.slug === slug);

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
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
  const title = `${project.title}: ${project.tagline.replace(/\.$/, "")}`;
  return {
    title,
    description: project.landing.intro,
    alternates: { canonical: `${BASE_URL}${appPath(slug)}` },
    openGraph: {
      title,
      description: project.landing.intro,
      url: `${BASE_URL}${appPath(slug)}`,
      images: [project.landing.screenshots[0] ?? project.icon],
    },
  };
}

export default async function AppLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) {
    notFound();
  }

  const { landing, accent } = project;
  const [heroShot, backShot] = landing.screenshots;
  const privacyUrl = privacyUrlOf(project);
  const others = projects.filter((p) => p.slug !== project.slug);
  const accentStyle = {
    "--accent": accent,
    "--accent-glow": `${accent}26`,
    "--accent-border": `${accent}59`,
  } as React.CSSProperties;

  return (
    <main className="relative overflow-hidden bg-bg-primary" style={accentStyle}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px]"
        style={{
          background: `radial-gradient(ellipse 70% 55% at 75% 30%, ${accent}2e, transparent 70%)`,
        }}
      />

      <section className="relative px-6 pb-16 pt-28 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Link
              href="/projects"
              className="mb-10 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              All apps
            </Link>

            <div className="mb-6 flex items-center gap-4">
              <img
                src={project.icon}
                alt={`${project.title} icon`}
                className="h-16 w-16 rounded-[28%] shadow-lg ring-1 ring-white/10 md:h-20 md:w-20"
              />
              <div>
                <p className="font-display text-xl font-semibold text-text-primary md:text-2xl">
                  {project.title}
                </p>
                <AppStatusBadge status={project.status} className="mt-1.5" />
              </div>
            </div>

            <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-text-primary">
              {landing.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
              {landing.intro}
            </p>

            <StoreButtons project={project} className="mt-9" />

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary">
              {landing.trust.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4" style={{ color: accent }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto flex h-[520px] w-full max-w-md items-center justify-center md:h-[620px]">
            <div
              className="absolute h-[70%] w-[70%] rounded-full blur-3xl"
              style={{ background: `${accent}40` }}
            />
            {backShot && (
              <PhoneFrame
                src={backShot}
                alt={`${project.title} screenshot`}
                className="absolute left-1/2 top-1/2 aspect-[9/19.5] h-[78%] -translate-x-[90%] -translate-y-[46%] -rotate-6 opacity-80"
              />
            )}
            {heroShot && (
              <PhoneFrame
                src={heroShot}
                alt={`${project.title} main screen`}
                className="relative aspect-[9/19.5] h-[92%] translate-x-[18%] rotate-2"
                eager
              />
            )}
          </div>
        </div>
      </section>

      <section className="relative border-y border-border-subtle bg-bg-secondary/40 px-6 lg:px-10">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {landing.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-2 py-8 text-center md:py-10 ${i > 0 ? "md:border-l md:border-border-subtle" : ""} ${i % 2 === 1 ? "border-l border-border-subtle md:border-l" : ""} ${i > 1 ? "border-t border-border-subtle md:border-t-0" : ""}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-semibold md:text-4xl" style={{ color: accent }}>
                  {stat.value}
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="relative px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <SectionLabel className="mb-4">About</SectionLabel>
            <h2 className="font-display text-3xl font-semibold leading-tight text-text-primary md:text-5xl">
              {landing.about.title}
            </h2>
            {landing.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          {landing.about.list && (
            <div className="self-end rounded-3xl border border-border-medium bg-bg-secondary p-7">
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                {landing.about.list.title}
              </p>
              <ul className="mt-5 space-y-3">
                {landing.about.list.items.map((item, i) => (
                  <li key={item} className="flex items-center gap-4 text-text-primary">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-semibold"
                      style={{ background: `${accent}22`, color: accent }}
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="relative px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel className="mb-4">Features</SectionLabel>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-text-primary md:text-5xl">
            Everything you get with {project.title}.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {landing.features.map((feature) => {
              const Icon = FEATURE_ICONS[feature.icon];
              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-border-medium bg-bg-secondary p-7 transition-colors duration-300 hover:border-accent"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: `${accent}1f`, color: accent }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-base">{feature.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-border-medium bg-bg-secondary/60 p-8 md:p-12">
          <SectionLabel className="mb-4">How it works</SectionLabel>
          <ol className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
            {landing.steps.map((step, i) => (
              <li key={step.title}>
                <span className="font-display text-5xl font-semibold" style={{ color: accent }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-base">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel className="mb-4">Screenshots</SectionLabel>
          <h2 className="font-display text-3xl font-semibold leading-tight text-text-primary md:text-5xl">
            Take a look inside.
          </h2>
        </div>
        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 lg:px-[max(2.5rem,calc((100vw_-_80rem)/2_+_2.5rem))]">
          {landing.screenshots.map((src, i) => (
            <PhoneFrame
              key={src}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              className="h-[440px] shrink-0 snap-start md:h-[520px]"
              natural
            />
          ))}
        </div>
      </section>

      <section className="relative px-6 pb-20 lg:px-10 lg:pb-28">
        <div
          className="mx-auto flex max-w-7xl flex-col items-center overflow-hidden rounded-[2rem] border px-6 py-16 text-center md:py-20"
          style={{
            borderColor: `${accent}59`,
            background: `radial-gradient(ellipse at 50% 0%, ${accent}33, transparent 70%), var(--bg-secondary)`,
          }}
        >
          <img src={project.icon} alt="" className="h-20 w-20 rounded-[28%] shadow-xl ring-1 ring-white/10" />
          <h2 className="mt-8 max-w-2xl font-display text-3xl font-semibold leading-tight text-text-primary md:text-5xl">
            {project.status === "live" ? `Get ${project.title} today.` : `${project.title} is coming soon.`}
          </h2>
          <p className="mt-4 max-w-xl text-text-secondary">{project.tagline}</p>
          <StoreButtons project={project} className="mt-9 justify-center" />
        </div>
      </section>

      <footer className="relative border-t border-border-subtle px-6 py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <img src={project.icon} alt="" className="h-10 w-10 rounded-[28%]" />
            <div>
              <p className="font-display font-semibold text-text-primary">{project.title}</p>
              <p className="text-sm text-text-muted">{project.tagline}</p>
            </div>
          </div>

          <nav aria-label={`${project.title} links`} className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {privacyUrl && (
              <a
                href={privacyUrl}
                {...(privacyUrl.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                className="text-text-secondary transition-colors hover:text-accent"
              >
                Privacy policy
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-accent"
              >
                Website
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            <a
              href={`mailto:${APP_SUPPORT_EMAIL}?subject=${encodeURIComponent(project.title)}`}
              className="inline-flex items-center gap-1.5 text-text-secondary transition-colors hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5" />
              Contact support
            </a>
            <Link href="/projects" className="text-text-secondary transition-colors hover:text-accent">
              All apps
            </Link>
          </nav>
        </div>

        {others.length > 0 && (
          <div className="mx-auto mt-10 max-w-7xl border-t border-border-subtle pt-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">More apps</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={appPath(other.slug)}
                  className="inline-flex items-center gap-3 rounded-2xl border border-border-medium bg-bg-secondary px-4 py-2.5 text-sm text-text-primary transition-colors hover:border-border-strong"
                >
                  <img src={other.icon} alt="" className="h-7 w-7 rounded-[28%]" />
                  {other.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </footer>
    </main>
  );
}
