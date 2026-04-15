import { Calendar, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LandingLayout } from "~/components/legal/legal-layout";
import { Button } from "~/components/ui/button";
import { isValidLocale } from "~/i18n/config";
import { createI18nInstance } from "~/i18n/instance";
import { GITHUB_URL } from "~/lib/config";
import { fetchReleases } from "~/lib/github";
import { seoMeta } from "~/lib/seo";
import type { Route } from "./+types/changelog";

interface Release {
  tag_name: string;
  published_at: string;
  body: string;
  html_url: string;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function meta({ params }: Route.MetaArgs) {
  const lang = params.lang;
  const validLang = isValidLocale(lang) ? lang : "en";
  const i18n = createI18nInstance(validLang);

  return [
    { title: i18n.t("changelogPage.meta.title") },
    { name: "description", content: i18n.t("changelogPage.meta.description") },
    { property: "og:title", content: i18n.t("changelogPage.meta.title") },
    {
      property: "og:description",
      content: i18n.t("changelogPage.meta.description"),
    },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" },
    ...seoMeta(validLang, "/changelog"),
  ];
}

export default function ChangelogPage() {
  const { t } = useTranslation();
  const [releases, setReleases] = useState<Release[]>([]);

  useEffect(() => {
    fetchReleases().then((data) => {
      if (data) setReleases(data);
    });
  }, []);

  return (
    <LandingLayout>
      <div className="px-6 py-24 sm:py-32 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {t("changelogPage.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          {t("changelogPage.subtitle")}
        </motion.p>

        {releases.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-muted-foreground"
          >
            {t("changelogPage.noReleases")}
          </motion.p>
        ) : (
          <div className="mt-12 space-y-8">
            {releases.map((release, i) => (
              <motion.article
                key={release.tag_name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <h2 className="font-mono text-lg font-semibold">
                    {release.tag_name}
                  </h2>
                  {release.published_at && (
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="size-3.5" />
                      {formatDate(release.published_at)}
                    </span>
                  )}
                  <a
                    href={release.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-auto text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="size-4" />
                  </a>
                </div>
                {release.body && (
                  <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted-foreground">
                    {release.body}
                  </pre>
                )}
              </motion.article>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Button variant="outline" size="sm" className="rounded-md" asChild>
            <a href={`${GITHUB_URL}/releases`} target="_blank" rel="noreferrer">
              {t("changelogPage.viewOnGithub")}
              <ExternalLink className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </LandingLayout>
  );
}
