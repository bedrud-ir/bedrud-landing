import { BookOpen, MessageSquare } from "lucide-react";
import { Button } from "~/components/ui/button";
import { DISCORD_URL, DOCS_URL, GITHUB_URL } from "~/lib/config";
import { t, type Locale } from "../../i18n/utils";
import { GitHubIcon } from "./github-icon";

export function CtaSection({ lang }: { lang: Locale }) {
  return (
    <section className="scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t(lang, "cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            {t(lang, "cta.subtitle")}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <GitHubIcon className="size-4" />
              {t(lang, "cta.starGithub")}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={DOCS_URL} target="_blank" rel="noreferrer">
              <BookOpen className="size-4" />
              {t(lang, "cta.readDocs")}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={DISCORD_URL} target="_blank" rel="noreferrer">
              <MessageSquare className="size-4" />
              {t(lang, "cta.joinCommunity")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
