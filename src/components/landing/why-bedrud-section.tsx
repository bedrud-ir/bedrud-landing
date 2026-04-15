import { Ban, Binary, Lock } from "lucide-react";
import { t, type Locale } from "../../i18n/utils";

const cards = [
  {
    key: "noLockIn",
    icon: Lock,
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10 dark:bg-rose-500/15",
  },
  {
    key: "singleBinary",
    icon: Binary,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10 dark:bg-blue-500/15",
  },
  {
    key: "noPerSeat",
    icon: Ban,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
  },
] as const;

export function WhyBedrudSection({ lang }: { lang: Locale }) {
  return (
    <section className="scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 sm:grid-cols-3">
          {cards.map(({ key, icon: Icon, color, bg }) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-7 transition-colors duration-300 hover:border-border/80 sm:p-8"
            >
              <div
                className={`inline-flex size-11 items-center justify-center rounded-xl ${bg}`}
              >
                <Icon className={`size-5 ${color}`} strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight">
                {t(lang, `whyBedrud.${key}.title`)}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {t(lang, `whyBedrud.${key}.description`)}
              </p>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
