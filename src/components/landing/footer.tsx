import { useCallback } from "react";
import { Button } from "~/components/ui/button";
import {
  DISCORD_URL,
  GITHUB_DISCUSSIONS_URL,
  GITHUB_URL,
  TWITTER_URL,
} from "~/lib/config";
import { cn } from "~/lib/utils";
import { type Locale, supportedLocales, t } from "../../i18n/utils";
import { GitHubIcon } from "./github-icon";
import { XIcon } from "./x-icon";

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
      <div className="section-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
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
              <Button variant="ghost" size="icon-sm" asChild>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord community"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <title>Discord</title>
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon-sm" asChild>
                <a
                  href={TWITTER_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="size-4" />
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
                  href={`/#comparison`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.compare")}
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
              <li>
                <a
                  href={`/${lang}/changelog`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.changelog")}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold">
              {t(lang, "footer.developers")}
            </h4>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={`/${lang}/docs/quickstart`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.quickstart")}
                </a>
              </li>
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
                  href={`/${lang}/docs/architecture`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.architecture")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/docs/api`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.api")}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold">
              {t(lang, "footer.openSourceSection")}
            </h4>
            <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-3">
              <li>
                <a
                  href={`${GITHUB_URL}/blob/main/CONTRIBUTING.md`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.contribute")}
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/issues/new`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.reportIssue")}
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_DISCUSSIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(lang, "footer.discord")}
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
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} themadorg · Apache 2.0
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
