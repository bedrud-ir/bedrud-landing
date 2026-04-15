import { useCallback } from "react";
import { Button } from "~/components/ui/button";
import { supportedLocales, type Locale } from "../../i18n/utils";
import { DISCORD_URL, GITHUB_URL } from "~/lib/config";
import { cn } from "~/lib/utils";
import { t } from "../../i18n/utils";
import { GitHubIcon } from "./github-icon";

export function Footer({ lang }: { lang: Locale }) {
  const currentLang = lang;

  const switchLocale = useCallback(
    (locale: Locale) => {
      if (locale !== currentLang) {
        const path = window.location.pathname;
        const rest = path.replace(`/${currentLang}`, "");
        window.location.href = `/${locale}${rest}`;
      }
    },
    [currentLang],
  );

  return (
    <footer className="bg-muted/30 px-6 pt-16 pb-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  B
                </span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                {t(lang, "footer.brand")}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {t(lang, "footer.tagline")}
            </p>
            <div className="mt-4 flex items-center gap-1">
              <Button variant="ghost" size="icon-sm" asChild>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold">
              {t(lang, "footer.product")}
            </h4>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={`/${lang}/features`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.features")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/#platforms`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.platforms")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/#open-source`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.openSource")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/demo`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.demo")}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold">
              {t(lang, "footer.resources")}
            </h4>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={`/${lang}/docs`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.docs")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/changelog`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.changelog")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/contributors`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.contributors")}
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/releases`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.releases")}
                </a>
              </li>
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.discord")}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold">{t(lang, "footer.legal")}</h4>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={`/${lang}/privacy`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.privacy")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/terms`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.terms")}
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.license")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/contact`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} themadorg · MIT License
          </p>
          <div className="flex flex-wrap gap-1.5">
            {supportedLocales.map((locale) => {
              const isActive = locale === currentLang;
              return (
                <button
                  key={locale}
                  type="button"
                  onClick={() => switchLocale(locale)}
                  className={cn(
                    "text-sm transition-colors",
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  [{locale}]
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
