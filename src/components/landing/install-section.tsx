import { Check, Copy } from "lucide-react";
import { useCallback, useState } from "react";
import { t, type Locale } from "../../i18n/utils";

export function InstallSection({ lang }: { lang: Locale }) {
  const [copied, setCopied] = useState(false);
  const [copiedDocker, setCopiedDocker] = useState(false);

  const copy = useCallback(
    async (text: string, setter: (v: boolean) => void) => {
      await navigator.clipboard.writeText(text);
      setter(true);
      setTimeout(() => setter(false), 2000);
    },
    [],
  );

  return (
    <section className="scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t(lang, "install.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(lang, "install.subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-4">
          <button
            type="button"
            onClick={() => copy(t(lang, "install.command"), setCopied)}
            className="group flex w-full items-center justify-between gap-4 rounded-xl border bg-card p-5 text-start transition-colors hover:border-border/80"
          >
            <code className="font-mono text-sm text-muted-foreground">
              <span className="text-emerald-500">$</span>{" "}
              {t(lang, "install.command")}
            </code>
            <span className="shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
              {copied ? (
                <Check className="size-4 text-emerald-500" />
              ) : (
                <Copy className="size-4" />
              )}
            </span>
          </button>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="h-px flex-1 bg-border" />
            <span>{t(lang, "install.or")}</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            onClick={() =>
              copy(t(lang, "install.dockerCommand"), setCopiedDocker)
            }
            className="group flex w-full items-center justify-between gap-4 rounded-xl border bg-card p-5 text-start transition-colors hover:border-border/80"
          >
            <code className="font-mono text-sm text-muted-foreground">
              <span className="text-blue-500">$</span>{" "}
              {t(lang, "install.dockerCommand")}
            </code>
            <span className="shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
              {copiedDocker ? (
                <Check className="size-4 text-emerald-500" />
              ) : (
                <Copy className="size-4" />
              )}
            </span>
          </button>

          <p className="text-center text-sm text-muted-foreground">
            {t(lang, "install.requirements")}
          </p>
        </div>
      </div>
    </section>
  );
}
