import { useTranslation } from "react-i18next";
import { isValidLocale } from "~/i18n/config";
import { createI18nInstance } from "~/i18n/instance";
import type { Route } from "./+types/lang-home";

export function meta({ params }: Route.MetaArgs) {
  const lang = params.lang;
  const validLang = isValidLocale(lang) ? lang : "en";
  const i18n = createI18nInstance(validLang);

  return [
    { title: i18n.t("meta.title") },
    { name: "description", content: i18n.t("meta.description") },
    { property: "og:title", content: i18n.t("meta.title") },
    { property: "og:description", content: i18n.t("meta.description") },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: i18n.t("meta.title") },
    {
      name: "twitter:description",
      content: i18n.t("meta.description"),
    },
    { name: "robots", content: "index, follow" },
  ];
}

export default function LangHome() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-svh flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {t("home.heading")}
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          {t("home.description")}
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/theMadOrg/bedrud"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            {t("home.github")}
          </a>
        </div>
      </div>
    </main>
  );
}
