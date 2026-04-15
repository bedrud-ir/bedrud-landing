import { motion } from "motion/react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router";
import { Button } from "~/components/ui/button";
import { type Locale, supportedLngs } from "~/i18n/config";
import { DISCORD_URL, GITHUB_URL } from "~/lib/config";
import { cn } from "~/lib/utils";
import { GitHubIcon } from "./github-icon";

export function Footer() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const currentLang = (lang as Locale) ?? "en";

  const switchLocale = useCallback(
    (locale: Locale) => {
      if (locale !== currentLang) {
        const path = window.location.pathname;
        const rest = path.replace(`/${currentLang}`, "");
        navigate(`/${locale}${rest}`, { replace: true });
      }
    },
    [currentLang, navigate],
  );

  return (
    <footer className="bg-muted/30 px-6 pt-16 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl"
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  B
                </span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                {t("footer.brand")}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {t("footer.tagline")}
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
            <h4 className="text-sm font-semibold">{t("footer.product")}</h4>
            <ul className="mt-3 space-y-3">
              <li>
                <Link
                  to={`/${lang}/features`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.features")}
                </Link>
              </li>
              <li>
                <a
                  href={`/${lang}/#platforms`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.platforms")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/#open-source`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.openSource")}
                </a>
              </li>
              <li>
                <Link
                  to={`/${lang}/demo`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.demo")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold">{t("footer.resources")}</h4>
            <ul className="mt-3 space-y-3">
              <li>
                <Link
                  to={`/${lang}/docs`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.docs")}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/changelog`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.changelog")}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/contributors`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.contributors")}
                </Link>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/releases`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.releases")}
                </a>
              </li>
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.discord")}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold">{t("footer.legal")}</h4>
            <ul className="mt-3 space-y-3">
              <li>
                <Link
                  to={`/${lang}/privacy`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/terms`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.license")}
                </a>
              </li>
              <li>
                <Link
                  to={`/${lang}/contact`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} themadorg · MIT License
          </p>
          <div className="flex flex-wrap gap-1.5">
            {supportedLngs.map((locale) => {
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
      </motion.div>
    </footer>
  );
}
