import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { SidebarItem } from "@/content/docs/sidebar";

interface PagerProps {
  previous?: SidebarItem;
  next?: SidebarItem;
  lang: string;
}

function Pager({ previous, next, lang }: PagerProps) {
  const { t } = useTranslation();

  return (
    <nav
      className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2"
      aria-label="Article navigation"
    >
      {previous && (
        <a
          href={`/${lang}/docs/${previous.slug}`}
          rel="prev"
          className="group relative rounded-lg border bg-card p-6 text-card-foreground transition-all hover:border-primary/50 hover:shadow-md cursor-pointer"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span className="text-sm">{t("docs.previous")}</span>
          </div>
          <h3 className="mt-2 text-lg font-semibold leading-none tracking-tight">
            {previous.title}
          </h3>
          {previous.description && (
            <p className="mt-2 text-sm text-muted-foreground">
              {previous.description}
            </p>
          )}
        </a>
      )}

      {next && (
        <a
          href={`/${lang}/docs/${next.slug}`}
          rel="next"
          className="group relative rounded-lg border bg-card p-6 text-card-foreground transition-all hover:border-primary/50 hover:shadow-md cursor-pointer"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">{t("docs.next")}</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </div>
          <h3 className="mt-2 text-lg font-semibold leading-none tracking-tight">
            {next.title}
          </h3>
          {next.description && (
            <p className="mt-2 text-sm text-muted-foreground">
              {next.description}
            </p>
          )}
        </a>
      )}
    </nav>
  );
}

export { Pager };
