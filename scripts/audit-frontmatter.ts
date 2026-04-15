import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Glob } from "bun";
import { extractMeta } from "../content/docs/meta";

const DOCS_DIR = resolve(import.meta.dir, "../content/docs");

interface AuditResult {
  filename: string;
  hasTitle: boolean;
  hasDescription: boolean;
  issues: string[];
}

async function main() {
  const glob = new Glob("**/*.mdx");
  const results: AuditResult[] = [];

  for await (const file of glob.scan({ cwd: DOCS_DIR })) {
    const fullPath = resolve(DOCS_DIR, file);
    const content = readFileSync(fullPath, "utf-8");
    const meta = extractMeta(content);

    const issues: string[] = [];
    if (!meta.title) {
      issues.push("missing title");
    }
    if (!meta.description) {
      issues.push("missing description");
    }

    results.push({
      filename: file,
      hasTitle: !!meta.title,
      hasDescription: !!meta.description,
      issues,
    });
  }

  results.sort((a, b) => a.filename.localeCompare(b.filename));

  console.log("filename,has_title,has_description,issues");
  for (const r of results) {
    console.log(
      `"${r.filename}","${r.hasTitle}","${r.hasDescription}","${r.issues.join("; ")}"`,
    );
  }

  const total = results.length;
  const missingTitle = results.filter((r) => !r.hasTitle).length;
  const missingDesc = results.filter((r) => !r.hasDescription).length;

  console.error("");
  console.error(`Summary: ${total} files scanned`);
  console.error(`  Missing title:       ${missingTitle}`);
  console.error(`  Missing description: ${missingDesc}`);

  process.exit(missingTitle > 0 ? 1 : 0);
}

main();
