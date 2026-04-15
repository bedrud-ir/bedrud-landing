import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router";
import { sections } from "@/content/docs/sidebar";

interface BreadcrumbProps {
  slug: string;
}

export function DocsBreadcrumb({ slug }: BreadcrumbProps) {
  const { lang } = useParams();
  const { t } = useTranslation();

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
          <Link
            to={`/${lang}`}
            className="transition-colors hover:text-foreground"
          >
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link
            to={`/${lang}/docs`}
            className="transition-colors hover:text-foreground"
          >
            {t("nav.docs")}
          </Link>
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
