import { ArrowRight, Copy, Star } from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "~/components/ui/button";
import { Spotlight } from "~/components/ui/spotlight";
import { TextGenerateEffect } from "~/components/ui/text-generate-effect";
import { DEMO_URL } from "~/lib/config";
import { type Locale, t } from "../../i18n/utils";
import { DeviceShowcase } from "./device-showcase";

const INSTALL_CMD = "curl -fsSL https://get.bedrud.org | bash";

export function HeroSection({ lang }: { lang: Locale }) {
  const [copied, setCopied] = useState(false);

  const copyInstall = useCallback(async () => {
    await navigator.clipboard.writeText(INSTALL_CMD);
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
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t(lang, "hero.kicker")}
          </p>

          <TextGenerateEffect
            words={t(lang, "hero.headline")}
            as="h1"
            className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-[3.5rem]"
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
          </div>

          <button
            type="button"
            onClick={copyInstall}
            className="group mt-5 inline-flex items-center gap-2 rounded-lg border border-border/60 bg-muted/50 px-4 py-2 font-mono text-sm text-muted-foreground transition-colors hover:border-border hover:bg-muted"
            dir="ltr"
          >
            <span className="text-emerald-500">$</span> {INSTALL_CMD}
            {copied ? (
              <span className="text-emerald-500">{t(lang, "hero.copied")}</span>
            ) : (
              <Copy className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            )}
          </button>

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
