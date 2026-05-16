"use client";

import { useEffect, useState, memo } from "react";
import { Star, GitFork, Github, ExternalLink } from "lucide-react";
import { ActivityCalendar } from "react-activity-calendar";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { GitHubRepo, ContributionDay } from "@/types/github";

// --- Constants & Config ---
const REPOS_LIST = ["sgit", "rag-ai-chatbot", "genkitx-patientseek"];
const USERNAME = "karandevhub";

const CALENDAR_THEME = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: [
    "rgba(255, 255, 255, 0.04)",
    "rgba(14, 165, 233, 0.20)",
    "rgba(14, 165, 233, 0.45)",
    "rgba(14, 165, 233, 0.70)",
    "rgba(14, 165, 233, 0.95)",
  ],
};


const RepoCard = memo(({ repo }: { repo: GitHubRepo }) => (
  <a
    href={repo.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-col justify-between rounded-2xl border border-border-medium bg-bg-secondary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_-15px_var(--accent-glow)]"
  >
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Github className="h-4 w-4 text-text-muted transition-colors group-hover:text-accent" />
          <span className="font-mono text-sm font-medium text-text-primary">
            {repo.name}
          </span>
        </div>
        <ExternalLink className="h-3.5 w-3.5 text-text-muted opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <p className="line-clamp-2 text-sm leading-relaxed text-text-secondary">
        {repo.desc}
      </p>
    </div>

    <div className="mt-6 flex items-center gap-4 text-[11px] font-medium uppercase tracking-wider text-text-muted">
      {repo.lang && (
        <span className="flex items-center gap-1.5">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: repo.color }}
          />
          {repo.lang}
        </span>
      )}
      <span className="flex items-center gap-1">
        <Star className="h-3 w-3" /> {repo.stars.toLocaleString()}
      </span>
      <span className="flex items-center gap-1">
        <GitFork className="h-3 w-3" /> {repo.forks}
      </span>
    </div>
  </a>
));

RepoCard.displayName = "RepoCard";

const RepoSkeleton = () => (
  <div className="h-44 w-full animate-pulse rounded-2xl border border-border-subtle bg-white/[0.02]" />
);


const getLangColor = (lang: string) => {
  const colors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Rust: "#dea584",
    Python: "#3572A5",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Go: "#00ADD8",
  };
  return colors[lang] || "#8b949e";
};


export default function OpenSourceSection() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    async function fetchGitHubData() {
      try {
        setLoading(true);
        
        // Execute all fetches in parallel for better performance
        const [calendarRes, ...repoResponses] = await Promise.all([
          fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`),
          ...REPOS_LIST.map(repo => fetch(`https://api.github.com/repos/${USERNAME}/${repo}`))
        ]);

        // 1. Process Calendar Data
        if (calendarRes.ok) {
          const json = await calendarRes.json();
          if (json.contributions && Array.isArray(json.contributions)) {
            let data: ContributionDay[] = json.contributions;
            
            // Optional: Align to start of week for aesthetic consistency
            const firstSunday = data.findIndex(d => new Date(d.date + "T00:00:00").getDay() === 0);
            if (firstSunday > 0) data = data.slice(firstSunday);
            
            setContributions(data);
          }
        }

        // 2. Process Repository Data
        const fetchedRepos = await Promise.all(
          repoResponses.map(async (res) => {
            if (!res.ok) return null;
            const json = await res.json();
            return {
              name: json.name,
              desc: json.description,
              lang: json.language,
              stars: json.stargazers_count,
              forks: json.forks_count,
              url: json.html_url,
              color: getLangColor(json.language)
            } as GitHubRepo;
          })
        );
        
        setRepos(fetchedRepos.filter((r): r is GitHubRepo => r !== null));

      } catch (err) {
        console.error("GitHub data synchronization failed:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <section className="relative w-full bg-bg-primary px-6 py-12 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-4">
            <SectionLabel>In the open</SectionLabel>
            <h2 className="text-display font-display font-semibold text-text-primary">
              Building in public.
            </h2>
          </div>
          
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-border-medium bg-bg-secondary px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-accent hover:text-text-primary"
          >
            <Github className="h-4 w-4" />
            <span>@{USERNAME}</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100" />
          </a>
        </div>

        {/* Contribution Activity */}
        <GlassCard className="mb-12 w-full border-border-medium/50 overflow-hidden">
          <div className="w-full py-4 overflow-x-auto">
            <div className="min-w-[800px] px-2">
              {mounted ? (
                <ActivityCalendar
                  data={contributions}
                  theme={CALENDAR_THEME}
                  colorScheme="dark"
                  fontSize={12}
                  blockSize={12}
                  blockMargin={4}
                  loading={loading}
                  labels={{
                    totalCount: "{{count}} contributions in the last year",
                  }}
                />
              ) : (
                <div className="h-[140px] w-full animate-pulse rounded-lg bg-white/[0.03]" />
              )}
            </div>
          </div>
        </GlassCard>

        {/* Repositories Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {loading && repos.length === 0
            ? Array.from({ length: 3 }).map((_, i) => <RepoSkeleton key={i} />)
            : repos.map((repo) => <RepoCard key={repo.name} repo={repo} />)}
        </div>
      </div>
    </section>
  );
}
