import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LandingLayout } from "~/components/legal/legal-layout";
import { Button } from "~/components/ui/button";
import { isValidLocale } from "~/i18n/config";
import { createI18nInstance } from "~/i18n/instance";
import { GITHUB_URL } from "~/lib/config";
import { fetchContributors } from "~/lib/github";
import { seoMeta } from "~/lib/seo";
import type { Route } from "./+types/contributors";

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export function meta({ params }: Route.MetaArgs) {
  const lang = params.lang;
  const validLang = isValidLocale(lang) ? lang : "en";
  const i18n = createI18nInstance(validLang);

  return [
    { title: i18n.t("contributorsPage.meta.title") },
    {
      name: "description",
      content: i18n.t("contributorsPage.meta.description"),
    },
    { property: "og:title", content: i18n.t("contributorsPage.meta.title") },
    {
      property: "og:description",
      content: i18n.t("contributorsPage.meta.description"),
    },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" },
    ...seoMeta(validLang, "/contributors"),
  ];
}

export default function ContributorsPage() {
  const { t } = useTranslation();
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    fetchContributors().then((data) => {
      if (data) setContributors(data);
    });
  }, []);

  return (
    <LandingLayout>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {t("contributorsPage.title")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mt-4 text-lg text-muted-foreground"
      >
        {t("contributorsPage.subtitle")}
      </motion.p>

      {contributors.length > 0 && (
        <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {contributors.map((c, i) => (
            <motion.a
              key={c.id}
              href={c.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.5) }}
              className="group flex flex-col items-center gap-2 rounded-xl border bg-card p-4 text-center transition-colors hover:border-border/80"
            >
              <img
                src={c.avatar_url}
                alt={c.login}
                width={48}
                height={48}
                className="size-12 rounded-full"
                loading="lazy"
              />
              <span className="text-sm font-medium">{c.login}</span>
              <span className="text-xs text-muted-foreground">
                {c.contributions} {t("contributorsPage.contributions")}
              </span>
            </motion.a>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-lg font-semibold">
          {t("contributorsPage.joinThem")}
        </p>
        <Button size="lg" className="mt-4 rounded-md" asChild>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            {t("contributorsPage.joinCta")}
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </motion.div>
    </LandingLayout>
  );
}
