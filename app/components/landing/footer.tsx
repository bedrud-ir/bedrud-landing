import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <span className="text-lg font-bold">{t("footer.brand")}</span>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold">{t("footer.resources")}</h4>
            <ul className="mt-3 space-y-2">
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
          <div>
            <h4 className="font-semibold">{t("footer.legal")}</h4>
            <ul className="mt-3 space-y-2">
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
              <li>
                <a
                  href="https://github.com/themadorg/bedrud"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.privacy")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
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
        </div>
      </motion.div>
    </footer>
  );
}
