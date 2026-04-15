import { ExternalLink, Github, Mail, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { LandingLayout } from "~/components/legal/legal-layout";
import { isValidLocale } from "~/i18n/config";
import { createI18nInstance } from "~/i18n/instance";
import { CONTACT_EMAIL, DISCORD_URL, GITHUB_URL } from "~/lib/config";
import { seoMeta } from "~/lib/seo";
import type { Route } from "./+types/contact";

const channels = [
  {
    key: "github",
    icon: Github,
    href: `${GITHUB_URL}/issues`,
  },
  {
    key: "discord",
    icon: MessageSquare,
    href: DISCORD_URL,
  },
  {
    key: "email",
    icon: Mail,
    href: `mailto:${CONTACT_EMAIL}`,
  },
] as const;

export function meta({ params }: Route.MetaArgs) {
  const lang = params.lang;
  const validLang = isValidLocale(lang) ? lang : "en";
  const i18n = createI18nInstance(validLang);

  return [
    { title: i18n.t("contactPage.meta.title") },
    { name: "description", content: i18n.t("contactPage.meta.description") },
    { property: "og:title", content: i18n.t("contactPage.meta.title") },
    {
      property: "og:description",
      content: i18n.t("contactPage.meta.description"),
    },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" },
    ...seoMeta(validLang, "/contact"),
  ];
}

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <LandingLayout>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {t("contactPage.title")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mt-4 text-lg text-muted-foreground"
      >
        {t("contactPage.subtitle")}
      </motion.p>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {channels.map(({ key, icon: Icon, href }, i) => (
          <motion.a
            key={key}
            href={href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 + i * 0.08 }}
            className="group flex flex-col items-start rounded-xl border bg-card p-6 transition-colors hover:border-border/80"
          >
            <Icon className="size-6 text-muted-foreground" strokeWidth={1.5} />
            <h2 className="mt-4 text-[17px] font-semibold tracking-tight">
              {t(`contactPage.${key}.title`)}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {t(`contactPage.${key}.description`)}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:underline">
              {t(`contactPage.${key}.cta`)}
              <ExternalLink className="size-3.5" />
            </span>
          </motion.a>
        ))}
      </div>
    </LandingLayout>
  );
}
