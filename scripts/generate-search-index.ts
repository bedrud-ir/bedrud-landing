import fs from "node:fs";
import path from "node:path";
import { glob } from "glob";
import MiniSearch from "minisearch";

const LOCALES = ["en", "de", "fr", "es", "zh", "ja", "tr", "fa", "ar"];

function extractTextFromMDX(content: string): string {
  let text = content;

  text = text.replace(/^---[\s\S]*?---/m, "");

  text = text
    .replace(/#{1,6}\s+/g, "")
    .replace(/`{1,3}[\s\S]*?`{1,3}/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\n+/g, " ")
    .trim();

  return text;
}

function parseFrontmatter(content: string) {
  const frontmatterMatch = content.match(/^---[\s\S]*?---/m);
  let title = "";
  let description = "";

  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[0];
    const titleMatch = frontmatter.match(/title:\s*["']?([^"'\n]+)["']?/);
    const descMatch = frontmatter.match(/description:\s*["']?([^"'\n]+)["']?/);

    if (titleMatch) title = titleMatch[1];
    if (descMatch) description = descMatch[1];
  }

  return { title, description };
}

async function generateSearchIndex() {
  console.log("🔍 Generating per-locale search indexes for docs...");

  const docsDir = path.resolve(import.meta.dir, "..", "src", "content", "docs");
  const publicDir = path.resolve(import.meta.dir, "..", "public");
  fs.mkdirSync(publicDir, { recursive: true });

  const enFiles = await glob("en/**/*.mdx", { cwd: docsDir });
  const enSlugs = enFiles.map((f) =>
    f.replace(/^en\//, "").replace(/\.mdx$/, ""),
  );

  const slugToEnContent = new Map<string, string>();
  for (const file of enFiles) {
    const slug = file.replace(/^en\//, "").replace(/\.mdx$/, "");
    slugToEnContent.set(
      slug,
      fs.readFileSync(path.join(docsDir, file), "utf-8"),
    );
  }

  for (const locale of LOCALES) {
    const documents: Array<{
      id: string;
      title: string;
      description: string;
      text: string;
    }> = [];

    for (const slug of enSlugs) {
      const localePath = path.join(docsDir, `${locale}/${slug}.mdx`);
      const enPath = path.join(docsDir, `en/${slug}.mdx`);

      const filePath = fs.existsSync(localePath) ? localePath : enPath;
      const content = fs.readFileSync(filePath, "utf-8");
      const { title, description } = parseFrontmatter(content);
      const text = extractTextFromMDX(content);

      documents.push({
        id: slug,
        title: title || slug,
        description,
        text,
      });
    }

    const miniSearch = new MiniSearch({
      fields: ["title", "description", "text"],
      storeFields: ["title", "description"],
      idField: "id",
      searchOptions: {
        boost: { title: 3, description: 2 },
        fuzzy: 0.2,
        prefix: true,
      },
    });

    miniSearch.addAll(documents);

    const json = JSON.stringify(miniSearch.toJSON());
    const indexPath = path.join(publicDir, `search-index-${locale}.json`);
    fs.writeFileSync(indexPath, json, "utf-8");

    console.log(`  ✅ ${locale}: ${documents.length} docs → ${indexPath}`);
  }

  const legacyPath = path.join(publicDir, "search-index.json");
  if (fs.existsSync(legacyPath)) {
    fs.unlinkSync(legacyPath);
    console.log("  🗑️ Removed legacy search-index.json");
  }

  console.log("✅ All search indexes generated.");
}

generateSearchIndex().catch((err) => {
  console.error("Error generating search index:", err);
  process.exit(1);
});
