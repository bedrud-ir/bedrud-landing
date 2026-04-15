import { data, useLoaderData, useParams } from "react-router";
import {
  getDocBySlug,
  getNextDoc,
  getPreviousDoc,
  type SidebarItem,
} from "@/content/docs/sidebar";
import { DocsBreadcrumb } from "~/components/docs/docs-breadcrumb";
import { Mdx } from "~/components/docs/mdx-components";
import { Pager } from "~/components/docs/pager";
import { isValidLocale } from "~/i18n/config";
import { seoMeta } from "~/lib/seo";
import type { Route } from "./+types/docs-slug";

const docModules = import.meta.glob("../../content/docs/**/*.mdx", {
  eager: true,
});

interface LoaderData {
  doc: SidebarItem;
  Content: React.ComponentType;
  previous: SidebarItem | undefined;
  next: SidebarItem | undefined;
}

export function meta({ params }: Route.MetaArgs) {
  const lang = params.lang || "en";
  const validLang = isValidLocale(lang) ? lang : "en";
  const slug = params["*"] || "";
  const doc = getDocBySlug(slug);

  const title = doc ? `${doc.title} - Bedrud` : "Docs - Bedrud";
  const description = doc?.description || "Bedrud documentation";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "robots", content: "index, follow" },
    ...seoMeta(validLang, `/docs/${slug}`),
  ];
}

export async function clientLoader({
  params,
}: {
  params: { lang: string; "*": string };
}): Promise<LoaderData> {
  const slug = params["*"] || "";
  const doc = getDocBySlug(slug);

  if (!doc) {
    throw data(null, { status: 404 });
  }

  const moduleKey = `../../content/docs/${doc.slug}.mdx`;
  const module = docModules[moduleKey] as
    | { default: React.ComponentType }
    | undefined;

  if (!module?.default) {
    throw data(null, { status: 404 });
  }

  return {
    doc,
    Content: module.default,
    previous: getPreviousDoc(doc.slug),
    next: getNextDoc(doc.slug),
  };
}

export default function DocsSlugPage() {
  const { lang } = useParams<{ lang: string }>();
  const loaderData = useLoaderData<LoaderData>();

  return (
    <article className="max-w-none">
      <DocsContent lang={lang} loaderData={loaderData} />
    </article>
  );
}

function DocsContent({
  lang,
  loaderData,
}: {
  lang?: string;
  loaderData: LoaderData;
}) {
  const { doc, Content, previous, next } = loaderData;

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <DocsBreadcrumb slug={doc.slug} />
      <h1>{doc.title}</h1>
      {doc.description && (
        <p className="text-xl text-muted-foreground">{doc.description}</p>
      )}
      <Mdx>
        <Content />
      </Mdx>
      {lang && <Pager previous={previous} next={next} lang={lang} />}
    </article>
  );
}
