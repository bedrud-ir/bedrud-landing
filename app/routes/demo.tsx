import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { LandingLayout } from "~/components/legal/legal-layout";
import { Button } from "~/components/ui/button";
import { isValidLocale } from "~/i18n/config";
import { createI18nInstance } from "~/i18n/instance";
import { DEMO_URL, DOCS_URL } from "~/lib/config";
import { seoMeta } from "~/lib/seo";
import type { Route } from "./+types/demo";

export function meta({ params }: Route.MetaArgs) {
  const lang = params.lang;
  const validLang = isValidLocale(lang) ? lang : "en";
  const i18n = createI18nInstance(validLang);

  return [
    { title: i18n.t("demoPage.meta.title") },
    { name: "description", content: i18n.t("demoPage.meta.description") },
    { property: "og:title", content: i18n.t("demoPage.meta.title") },
    {
      property: "og:description",
      content: i18n.t("demoPage.meta.description"),
    },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" },
    ...seoMeta(validLang, "/demo"),
  ];
}

export default function DemoPage() {
  const { t } = useTranslation();

  return (
    <LandingLayout>
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {t("demoPage.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          {t("demoPage.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="lg" className="rounded-md" asChild>
            <a href={DEMO_URL} target="_blank" rel="noreferrer">
              <ExternalLink className="size-4" />
              {t("demoPage.tryNow")}
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          {t("demoPage.noInstall")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-xl border bg-card p-8"
        >
          <p className="text-muted-foreground">{t("demoPage.orSelfHost")}</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 rounded-md"
            asChild
          >
            <a href={DOCS_URL} target="_blank" rel="noreferrer">
              {t("demoPage.installCta")}
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </LandingLayout>
  );
}
