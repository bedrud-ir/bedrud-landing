import { Check, Copy } from "lucide-react";
import { useCallback, useState } from "react";
import { type Locale, t } from "../../i18n/utils";

export function InstallSection({ lang }: { lang: Locale }) {
  const [copied, setCopied] = useState(false);
  const [copiedDocker, setCopiedDocker] = useState(false);

  const copy = useCallback(
    async (text: string, setter: (v: boolean) => void) => {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setter(true);
      setTimeout(() => setter(false), 2000);
    },
    [],
  );

  return (
    <section id="install" className="scroll-mt-20 section-y">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t(lang, "install.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(lang, "install.subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl flex flex-col gap-4">
          <button
            type="button"
            onClick={() => copy(t(lang, "install.command"), setCopied)}
            className="group flex w-full items-center justify-between gap-4 rounded-xl bg-card p-6 text-start shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)] transition-[shadow] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.12),0px_2px_4px_rgba(0,0,0,0.04)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:hover:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.14),0px_2px_4px_rgba(0,0,0,0.2)]"
            dir="ltr"
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
            className="group flex w-full items-center justify-between gap-4 rounded-xl bg-card p-6 text-start shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)] transition-[shadow] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.12),0px_2px_4px_rgba(0,0,0,0.04)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:hover:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.14),0px_2px_4px_rgba(0,0,0,0.2)]"
            dir="ltr"
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
