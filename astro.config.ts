import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export default defineConfig({
  output: "static",
  site: "https://bedrud.org",
  srcDir: "./src",
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
    syntaxHighlight: false,
    remarkPlugins: [remarkGfm],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "fr", "es", "zh", "ja", "tr", "fa", "ar"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
