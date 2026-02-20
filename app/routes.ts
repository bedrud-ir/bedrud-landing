import {
  index,
  layout,
  prefix,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix(":lang", [
    layout("routes/lang-layout.tsx", [index("routes/lang-home.tsx")]),
  ]),
] satisfies RouteConfig;
