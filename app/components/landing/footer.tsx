import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { GitHubIcon } from "./github-icon";

export function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

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
          {/* Brand */}
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
                  href="https://github.com/themadorg/bedrud"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold">{t("footer.product")}</h4>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={`/${lang}/#features`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.features")}
                </a>
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
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold">{t("footer.resources")}</h4>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href="https://github.com/themadorg/bedrud"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.docs")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/themadorg/bedrud"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.github")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/themadorg/bedrud/releases"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.releases")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
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
                  href="https://github.com/themadorg/bedrud/blob/main/LICENSE"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.license")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Bedrud. {t("footer.madeBy")}{" "}
            <a
              href="https://github.com/themadorg"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              theMadOrg
            </a>
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowUp className="size-3.5" />
            {t("footer.backToTop")}
          </button>
        </div>
      </motion.div>
    </footer>
  );
}
