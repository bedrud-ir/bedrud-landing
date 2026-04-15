export interface Section {
  title: string;
  slugs: string[];
}

export const sections: Section[] = [
  {
    title: "Getting Started",
    slugs: [
      "getting-started/quickstart",
      "getting-started/installation",
      "getting-started/clients",
      "getting-started/configuration",
      "getting-started/cli-reference",
    ],
  },
  {
    title: "Architecture",
    slugs: [
      "architecture/overview",
      "architecture/server",
      "architecture/web",
      "architecture/android",
      "architecture/ios",
      "architecture/desktop",
      "architecture/agents",
      "architecture/webrtc-connectivity",
      "architecture/turn-server",
    ],
  },
  {
    title: "Backend",
    slugs: [
      "backend/index",
      "backend/structure",
      "backend/database",
      "backend/authentication",
      "backend/api-handlers",
      "backend/livekit",
      "backend/deployment",
      "backend/advanced",
    ],
  },
  {
    title: "API",
    slugs: ["api/authentication", "api/rooms", "api/admin", "api/passkeys"],
  },
  {
    title: "Guides",
    slugs: [
      "guides/development",
      "guides/deployment",
      "guides/docker",
      "guides/internal-tls",
      "guides/makefile",
      "guides/packages",
      "guides/appliance",
    ],
  },
  {
    title: "Contributing",
    slugs: ["contributing"],
  },
];
