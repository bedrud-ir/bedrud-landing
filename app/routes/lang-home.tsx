import { FeaturesSection } from "~/components/landing/features-section";
import { Footer } from "~/components/landing/footer";
import { HeroSection } from "~/components/landing/hero-section";
import { Navbar } from "~/components/landing/navbar";
import { OpenSourceSection } from "~/components/landing/opensource-section";
import { PlatformsSection } from "~/components/landing/platforms-section";
import { isValidLocale } from "~/i18n/config";
import { createI18nInstance } from "~/i18n/instance";
import type { Route } from "./+types/lang-home";

export function meta({ params }: Route.MetaArgs) {
  const lang = params.lang;
  const validLang = isValidLocale(lang) ? lang : "en";
  const i18n = createI18nInstance(validLang);

  return [
    { title: i18n.t("meta.title") },
    { name: "description", content: i18n.t("meta.description") },
    { property: "og:title", content: i18n.t("meta.title") },
    { property: "og:description", content: i18n.t("meta.description") },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: i18n.t("meta.title") },
    {
      name: "twitter:description",
      content: i18n.t("meta.description"),
    },
    { name: "robots", content: "index, follow" },
  ];
}

export default function LangHome() {
  return (
    <>
      <Navbar />
      <div className="h-16" />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PlatformsSection />
        <OpenSourceSection />
      </main>
      <Footer />
    </>
  );
}
