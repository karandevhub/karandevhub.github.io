import type { PolicySection, Project } from "@/types";
import { APP_SUPPORT_EMAIL } from "@/data/projects";

export function privacySections(project: Project): PolicySection[] {
  const policy = project.privacy;
  if (!policy) {
    return [];
  }
  return [
    {
      heading: "Information we collect",
      body: "We do not collect any personal information. The app has no accounts, no sign-in, and no analytics or tracking tools.",
    },
    {
      heading: "Information stored on your device",
      body: `${policy.storedOnDevice} This data never leaves your device and is deleted when you uninstall the app.`,
    },
    ...(policy.extraSections ?? []),
    {
      heading: "App updates",
      body: "When the app opens, it asks Google Play or the Apple App Store whether a newer version is available. This check is handled by the store itself under its own privacy policy, and no personal information is sent to us.",
    },
    {
      heading: "Third-party services",
      body: "The app does not include advertising, analytics or social media services. If this changes in a future version, this policy will be updated before the change is released.",
    },
    {
      heading: "Children's privacy",
      body: "Because the app does not collect any personal information, it does not knowingly collect information from children under 13 or any other age group.",
    },
    {
      heading: "Data sharing and selling",
      body: "We do not share, sell or rent any information to anyone.",
    },
    {
      heading: "Changes to this policy",
      body: 'If this policy changes, the updated version will be posted on this page with a new "Last updated" date.',
    },
    {
      heading: "Contact",
      body: `If you have any questions about this policy, contact us at ${APP_SUPPORT_EMAIL}.`,
    },
  ];
}
