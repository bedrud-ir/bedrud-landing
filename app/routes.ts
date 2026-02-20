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
      route("privacy", "routes/privacy.tsx"),
      route("terms", "routes/terms.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
