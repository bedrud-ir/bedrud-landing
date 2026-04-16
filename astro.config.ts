import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export default defineConfig({
  compressHTML: true,
  output: "static",
  site: "https://bedrud.org",
  srcDir: "./src",
  integrations: [
    react(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          de: "de",
          fr: "fr",
          es: "es",
          zh: "zh",
          ja: "ja",
          tr: "tr",
          fa: "fa",
          ar: "ar",
        },
      },
    }),
  ],
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
      prefixDefaultLocale: true,
    },
  },
});
