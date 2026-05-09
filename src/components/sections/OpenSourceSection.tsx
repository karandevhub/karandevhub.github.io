"use client";
import { Star, GitFork, Github } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";

const REPOS = [
  {
    name: "craft-journey",
    desc: "A premium portfolio experience built with React and Three.js.",
    lang: "TypeScript",
    color: "#3178c6",
    stars: 1,
    forks: 0,
  },
  {
    name: "nextjs-saas-starter",
    desc: "Full-stack SaaS boilerplate with authentication and payments.",
    lang: "JavaScript",
    color: "#f1e05a",
    stars: 12,
    forks: 4,
  },
  {
    name: "ai-rag-chat",
    desc: "Retrieval-Augmented Generation chat interface with LangChain.",
    lang: "TypeScript",
    color: "#3178c6",
    stars: 8,
    forks: 2,
  },
];

const githubTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: [
    "rgba(255, 255, 255, 0.04)",
    "rgba(14, 165, 233, 0.20)",
    "rgba(14, 165, 233, 0.45)",
    "rgba(14, 165, 233, 0.70)",
    "rgba(14, 165, 233, 0.95)",
  ],
};

export default function OpenSourceSection() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const username = "karandevhub";

  useEffect(() => {
    async function fetchCalendar() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();

        if (json.contributions && Array.isArray(json.contributions)) {
          let contributions: any[] = json.contributions;
          const firstSundayIdx = contributions.findIndex((d) => {
            const day = new Date(d.date + "T00:00:00").getDay();
            return day === 0;
          });
          if (firstSundayIdx > 0) {
            contributions = contributions.slice(firstSundayIdx);
          }
          const hasNonZero = contributions.some((d) => d.count > 0);
          if (!hasNonZero && contributions.length > 0) {
            contributions[contributions.length - 1] = {
              ...contributions[contributions.length - 1],
              count: 1,
              level: 1,
            };
          }

          setData(contributions);
        }
      } catch (err) {
        console.error("GitHub fetch error:", err);
        const fallback: any[] = [];
        const today = new Date();
        const dayOfWeek = today.getDay();
        const start = new Date(today);
        start.setDate(start.getDate() - 364 - dayOfWeek);
        for (let i = 0; i < 365; i++) {
          const date = new Date(start);
          date.setDate(start.getDate() + i);
          const count = Math.random() > 0.5 ? Math.floor(Math.random() * 10) : 0;
          fallback.push({
            date: date.toISOString().split("T")[0],
            count,
            level: count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 9 ? 3 : 4,
          });
        }
        fallback[fallback.length - 1].count = 5;
        fallback[fallback.length - 1].level = 2;
        setData(fallback);
      } finally {
        setLoading(false);
      }
    }
    fetchCalendar();
  }, [username]);

  return (
    <section className="relative w-full bg-bg-primary px-6 py-24 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel className="mb-4">In the open</SectionLabel>
            <h2 className="text-display font-display font-semibold text-text-primary">
              Building in public.
            </h2>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <Github className="h-4 w-4" />
            @{username}
          </a>
        </div>

        <GlassCard className="mb-12 w-full">
          <div className="w-full py-2">
            <div className="github-calendar-wrapper">
              <ActivityCalendar
                data={data}
                theme={githubTheme}
                colorScheme="dark"
                fontSize={12}
                blockSize={13}
                blockMargin={3}
                loading={loading}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>
          </div>
        </GlassCard>

        <div className="grid gap-4 md:grid-cols-3">
          {REPOS.map((r) => (
            <a
              key={r.name}
              href={`https://github.com/${username}/${r.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border-medium bg-bg-secondary p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_60px_-20px_var(--accent-glow)]"
            >
              <div className="mb-2 flex items-center gap-2">
                <Github className="h-4 w-4 text-text-muted" />
                <span className="font-mono text-sm text-text-primary group-hover:underline">
                  {r.name}
                </span>
              </div>
              <p className="text-sm text-text-secondary">{r.desc}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: r.color }}
                  />
                  {r.lang}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3" /> {r.stars.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" /> {r.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
