import { BookOpen } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Spotlight } from "~/components/ui/spotlight";
import { t, type Locale } from "../../i18n/utils";
import { GitHubIcon } from "./github-icon";

export function OpenSourceSection({ lang }: { lang: Locale }) {
  return (
    <section
      id="open-source"
      className="relative scroll-mt-20 overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* Subtle spotlight background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
      >
        <Spotlight />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="items-end gap-16 lg:flex">
          {/* Left — text */}
          <div className="max-w-lg flex-1">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {t(lang, "openSource.license")}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t(lang, "openSource.title")}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t(lang, "openSource.subtitle")}
            </p>
          </div>

          {/* Right — CTAs */}
          <div className="mt-10 flex shrink-0 flex-wrap gap-3 lg:mt-0">
            <Button size="lg" asChild>
              <a
                href="https://github.com/themadorg/bedrud"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="size-4" />
                {t(lang, "openSource.github")}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/themadorg/bedrud"
                target="_blank"
                rel="noreferrer"
              >
                <BookOpen className="size-4" />
                {t(lang, "openSource.docs")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
