import { ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { Spotlight } from "~/components/ui/spotlight";
import { TextGenerateEffect } from "~/components/ui/text-generate-effect";
import { DeviceShowcase } from "./device-showcase";
import { GitHubIcon } from "./github-icon";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Spotlight />
        <div className="hero-glow absolute left-1/2 top-0 h-[40rem] w-[80rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/8 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-24 lg:pt-28 xl:pt-32">
        {/* ---- Centered text ---- */}
        <div className="mx-auto max-w-2xl text-center">
          <TextGenerateEffect
            words={t("hero.headline")}
            as="h1"
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-[3.5rem]"
            duration={0.4}
            delayIncrement={0.06}
          />

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[17px] sm:leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button size="lg" className="h-11 rounded-full px-7" asChild>
              <a
                href="https://github.com/themadorg/bedrud"
                target="_blank"
                rel="noreferrer"
              >
                {t("hero.getStarted")}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 rounded-full px-7"
              asChild
            >
              <a
                href="https://github.com/themadorg/bedrud"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="size-4" />
                {t("hero.viewOnGithub")}
              </a>
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex items-center justify-center gap-6"
          >
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="font-medium text-foreground">
                {t("hero.stars")}
              </span>
              <span className="hidden sm:inline">{t("hero.starsLabel")}</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span>{t("hero.license")}</span>
            </div>
          </motion.div>
        </div>

        {/* ---- Device showcase ---- */}
        <DeviceShowcase />
      </div>
    </section>
  );
}
