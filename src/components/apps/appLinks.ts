import type { Project } from "@/types";
import { privacyUrlOf } from "@/data/projects";

export interface AppLink {
  label: string;
  href: string;
  primary: boolean;
  external: boolean;
}

export function appLinksOf(project: Project): AppLink[] {
  const { playStore, appStore, website } = project.links;
  const candidates: [string, string | undefined, boolean][] = [
    ["Google Play", playStore, true],
    ["App Store", appStore, true],
    ["Website", website, false],
    ["Privacy policy", privacyUrlOf(project), false],
  ];
  return candidates.flatMap(([label, href, primary]) =>
    href ? [{ label, href, primary, external: href.startsWith("http") }] : [],
  );
}
