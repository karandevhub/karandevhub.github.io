export interface GitHubRepo {
  name: string;
  desc: string;
  lang: string;
  stars: number;
  forks: number;
  url: string;
  color: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}
