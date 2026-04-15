import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import type { Root } from "mdast";

function remarkStripFrontmatter() {
  return (tree: Root) => {
    const index = tree.children.findIndex((node) => node.type === "yaml");
    if (index === 0) {
      tree.children.shift();
    }
  };
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkStripFrontmatter, remarkGfm],
        rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
      }),
    },
    reactRouter(),
    tsconfigPaths(),
  ],
});
