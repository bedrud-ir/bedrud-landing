import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

export function InstallSection() {
  const { t } = useTranslation();
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {t("install.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            {t("install.subtitle")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mx-auto mt-10 max-w-2xl space-y-4"
        >
          <button
            type="button"
            onClick={() => copy(t("install.command"), setCopied)}
            className="group flex w-full items-center justify-between gap-4 rounded-xl border bg-card p-5 text-start transition-colors hover:border-border/80"
          >
            <code className="font-mono text-sm text-muted-foreground">
              <span className="text-emerald-500">$</span> {t("install.command")}
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
            <span>{t("install.or")}</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            onClick={() => copy(t("install.dockerCommand"), setCopiedDocker)}
            className="group flex w-full items-center justify-between gap-4 rounded-xl border bg-card p-5 text-start transition-colors hover:border-border/80"
          >
            <code className="font-mono text-sm text-muted-foreground">
              <span className="text-blue-500">$</span>{" "}
              {t("install.dockerCommand")}
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
            {t("install.requirements")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
