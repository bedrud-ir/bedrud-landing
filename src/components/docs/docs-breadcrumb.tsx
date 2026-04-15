import { t, type Locale } from "../../i18n/utils";
import { sections } from "@/content/docs/sidebar";

interface BreadcrumbProps {
  lang: Locale;
  slug: string;
}

export function DocsBreadcrumb({ lang, slug }: BreadcrumbProps) {
  let sectionTitle: string | undefined;
  let docTitle: string | undefined;
  for (const section of sections) {
    for (const item of section.items) {
      if (item.slug === slug) {
        sectionTitle = section.title;
        docTitle = item.title;
        break;
      }
    }
  }

  return (
    <nav
      className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-1.5">
        <li>
          <a
            href={`/${lang}`}
            className="transition-colors hover:text-foreground"
          >
            Home
          </a>
        </li>
        <li>/</li>
        <li>
          <a
            href={`/${lang}/docs`}
            className="transition-colors hover:text-foreground"
          >
            {t(lang, "nav.docs")}
          </a>
        </li>
        {sectionTitle && (
          <>
            <li>/</li>
            <li>{sectionTitle}</li>
          </>
        )}
        {docTitle && (
          <>
            <li>/</li>
            <li className="text-foreground" aria-current="page">
              {docTitle}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
