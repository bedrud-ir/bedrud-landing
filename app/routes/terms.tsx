import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { LegalLayout } from "~/components/legal/legal-layout";
import { isValidLocale } from "~/i18n/config";
import { createI18nInstance } from "~/i18n/instance";
import type { Route } from "./+types/terms";

export function meta({ params }: Route.MetaArgs) {
  const lang = params.lang;
  const validLang = isValidLocale(lang) ? lang : "en";
  const i18n = createI18nInstance(validLang);

  return [
    { title: i18n.t("terms.meta.title") },
    { name: "description", content: i18n.t("terms.meta.description") },
    { property: "og:title", content: i18n.t("terms.meta.title") },
    { property: "og:description", content: i18n.t("terms.meta.description") },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" },
  ];
}

const sections = [
  "acceptance",
  "services",
  "accounts",
  "acceptableUse",
  "intellectualProperty",
  "termination",
  "liability",
  "governingLaw",
  "changes",
  "contact",
] as const;

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <LegalLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">
          {t("terms.title")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("terms.lastUpdated")}
        </p>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          {t("terms.intro")}
        </p>
      </motion.div>

      <div className="mt-12 space-y-10">
        {sections.map((section, i) => (
          <motion.section
            key={section}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <h2 className="text-lg font-semibold">
              {t(`terms.${section}.title`)}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {t(`terms.${section}.content`)}
            </p>
          </motion.section>
        ))}
      </div>
    </LegalLayout>
  );
}
