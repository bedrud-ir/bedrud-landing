export const navLinks = [
  { key: "nav.home", route: "", hash: "", icon: "home" },
  {
    key: "nav.compare",
    route: "features",
    hash: "comparison",
    icon: "git-compare",
  },
] as const;

export const navRouteLinks = [
  { key: "nav.docs", route: "docs", icon: "book-open" },
  { key: "nav.download", route: "download", icon: "download" },
] as const;
