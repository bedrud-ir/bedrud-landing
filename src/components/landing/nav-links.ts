import { GITHUB_DISCUSSIONS_URL } from "~/lib/config";

export const navLinks = [
  { key: "nav.features", href: "#features" },
  { key: "nav.compare", href: "#comparison" },
  { key: "nav.platforms", href: "#platforms" },
  { key: "nav.openSource", href: "#open-source" },
] as const;

export const navRouteLinks = [{ key: "nav.docs", route: "docs" }] as const;

export const navExternalLinks = [
  { key: "nav.community", href: GITHUB_DISCUSSIONS_URL },
] as const;
