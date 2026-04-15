import {
  index,
  layout,
  prefix,
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix(":lang", [
    layout("routes/lang-layout.tsx", [
      index("routes/lang-home.tsx"),
      route("features", "routes/features.tsx"),
      layout("routes/docs-layout.tsx", [
        route("docs", "routes/docs.tsx"),
        route("docs/*", "routes/docs-slug.tsx"),
      ]),
      route("demo", "routes/demo.tsx"),
      route("changelog", "routes/changelog.tsx"),
      route("contributors", "routes/contributors.tsx"),
      route("contact", "routes/contact.tsx"),
      route("privacy", "routes/privacy.tsx"),
      route("terms", "routes/terms.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
