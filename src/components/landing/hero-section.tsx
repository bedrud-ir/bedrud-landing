import { ArrowRight, Star } from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "~/components/ui/button";
import { Spotlight } from "~/components/ui/spotlight";
import { TextGenerateEffect } from "~/components/ui/text-generate-effect";
import { DEMO_URL } from "~/lib/config";
import { t, type Locale } from "../../i18n/utils";
import { DeviceShowcase } from "./device-showcase";
import { GitHubIcon } from "./github-icon";

export function HeroSection({ lang }: { lang: Locale }) {
  const [copied, setCopied] = useState(false);

  const copyInstall = useCallback(async () => {
    await navigator.clipboard.writeText(
      "curl -fsSL https://get.bedrud.org | bash",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Spotlight />
        <div className="hero-glow absolute left-1/2 top-0 h-[40rem] w-[80rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/8 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-24 lg:pt-28 xl:pt-32">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <TextGenerateEffect
            words={t(lang, "hero.headline")}
            as="h1"
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-[3.5rem]"
            duration={0.4}
            delayIncrement={0.06}
          />

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[17px] sm:leading-relaxed">
            {t(lang, "hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="h-11 rounded-md px-7" asChild>
              <a href={DEMO_URL} target="_blank" rel="noreferrer">
                {t(lang, "hero.tryDemo")}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 rounded-md px-7 font-mono text-sm"
              onClick={copyInstall}
            >
              {copied ? t(lang, "hero.copied") : t(lang, "hero.installNow")}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-11 rounded-md px-5"
              asChild
            >
              <a
                href="https://github.com/themadorg/bedrud"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="size-4" />
                {t(lang, "hero.viewOnGithub")}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="font-medium text-foreground">
                {t(lang, "hero.stars")}
              </span>
              <span className="hidden sm:inline">
                {t(lang, "hero.starsLabel")}
              </span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span>{t(lang, "hero.license")}</span>
            </div>
          </div>
        </div>

        <div className="relative z-0 mt-12 sm:mt-16">
          <DeviceShowcase />
        </div>
      </div>
    </section>
  );
}
