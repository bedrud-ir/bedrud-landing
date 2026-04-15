export interface DocMeta {
  title: string;
  description?: string;
  order?: number;
}

export function extractMeta(content: string): DocMeta & { content: string } {
  const lines = content.split("\n");

  // Find frontmatter delimiters (first and second "---")
  const firstDashIndex = lines.findIndex((line) => line.trim() === "---");
  if (firstDashIndex === -1) {
    return { title: "", content };
  }

  const secondDashIndex = lines.findIndex(
    (line, idx) => idx > firstDashIndex && line.trim() === "---",
  );

  if (secondDashIndex === -1) {
    return { title: "", content };
  }

  const frontmatter = lines
    .slice(firstDashIndex + 1, secondDashIndex)
    .join("\n");
  const rest = lines.slice(secondDashIndex + 1).join("\n");

  const meta: DocMeta = { title: "" };

  const titleMatch = frontmatter.match(/title:\s*(.+)/);
  const descMatch = frontmatter.match(/description:\s*(.+)/);
  const orderMatch = frontmatter.match(/order:\s*(.+)/);

  if (titleMatch) meta.title = titleMatch[1].trim();
  if (descMatch) meta.description = descMatch[1].trim();
  if (orderMatch) meta.order = parseInt(orderMatch[1].trim(), 10);

  return { ...meta, content: rest };
}
