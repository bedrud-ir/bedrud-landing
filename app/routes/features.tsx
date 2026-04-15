import {
  ArrowRight,
  Binary,
  Bot,
  Ear,
  Globe,
  KeyRound,
  Monitor,
  Shield,
  UserPlus,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { LandingLayout } from "~/components/legal/legal-layout";
import { Button } from "~/components/ui/button";
import { isValidLocale } from "~/i18n/config";
import { createI18nInstance } from "~/i18n/instance";
import { DOCS_URL } from "~/lib/config";
import { seoMeta } from "~/lib/seo";
import type { Route } from "./+types/features";

const sections = [
  {
    key: "guestJoin",
    icon: UserPlus,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
  },
  {
    key: "singleBinary",
    icon: Binary,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10 dark:bg-blue-500/15",
  },
  {
    key: "webrtc",
    icon: Monitor,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/10 dark:bg-violet-500/15",
  },
  {
    key: "passkeys",
    icon: KeyRound,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10 dark:bg-amber-500/15",
  },
  {
    key: "admin",
    icon: Shield,
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10 dark:bg-rose-500/15",
  },
  {
    key: "audio",
    icon: Ear,
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-500/10 dark:bg-cyan-500/15",
  },
  {
    key: "bots",
    icon: Bot,
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10 dark:bg-rose-500/15",
  },
  {
    key: "multiPlatform",
    icon: Globe,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10 dark:bg-blue-500/15",
  },
] as const;

export function meta({ params }: Route.MetaArgs) {
  const lang = params.lang;
  const validLang = isValidLocale(lang) ? lang : "en";
  const i18n = createI18nInstance(validLang);

  return [
    { title: i18n.t("featuresPage.meta.title") },
    {
      name: "description",
      content: i18n.t("featuresPage.meta.description"),
    },
    { property: "og:title", content: i18n.t("featuresPage.meta.title") },
    {
      property: "og:description",
      content: i18n.t("featuresPage.meta.description"),
    },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" },
    ...seoMeta(validLang, "/features"),
  ];
}

export default function FeaturesPage() {
  const { t } = useTranslation();

  return (
    <LandingLayout>
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="lg:flex lg:gap-16">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                {t("featuresPage.title")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mt-4 text-lg text-muted-foreground"
              >
                {t("featuresPage.subtitle")}
              </motion.p>

              <div className="mt-14 space-y-16">
                {sections.map(({ key, icon: Icon, color, bg }, i) => (
                  <motion.section
                    key={key}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl ${bg}`}
                      >
                        <Icon className={`size-5 ${color}`} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t(`featuresPage.${key}.pain`)}
                        </p>
                        <h2 className="mt-2 text-xl font-semibold tracking-tight">
                          {t(`featuresPage.${key}.title`)}
                        </h2>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                          {t(`featuresPage.${key}.description`)}
                        </p>
                      </div>
                    </div>
                  </motion.section>
                ))}
              </div>
            </div>

            <aside className="hidden lg:block lg:w-56">
              <div className="sticky top-24">
                <p className="text-sm font-semibold">
                  {t("featuresPage.ready")}
                </p>
                <Button size="sm" className="mt-3 rounded-md" asChild>
                  <a href={DOCS_URL} target="_blank" rel="noreferrer">
                    {t("featuresPage.readyCta")}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
