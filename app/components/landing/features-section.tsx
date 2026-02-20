import type { LucideIcon } from "lucide-react";
import { Binary, Bot, Cloud, Monitor, ShieldCheck, Video } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface Feature {
  key: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

const features: Feature[] = [
  {
    key: "singleBinary",
    icon: Binary,
    iconBg: "bg-blue-500/10 dark:bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    key: "webrtcVideo",
    icon: Video,
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    key: "multiPlatform",
    icon: Monitor,
    iconBg: "bg-violet-500/10 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    key: "flexibleAuth",
    icon: ShieldCheck,
    iconBg: "bg-amber-500/10 dark:bg-amber-500/15",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    key: "botAgents",
    icon: Bot,
    iconBg: "bg-rose-500/10 dark:bg-rose-500/15",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    key: "selfHosted",
    icon: Cloud,
    iconBg: "bg-cyan-500/10 dark:bg-cyan-500/15",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
];

export function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section id="features" className="scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header — left-aligned for visual anchor */}
        <div className="max-w-lg">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {t("features.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-lg leading-relaxed text-muted-foreground"
          >
            {t("features.subtitle")}
          </motion.p>
        </div>

        {/* Even 3-column grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ key, icon: Icon, iconBg, iconColor }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-7 transition-colors duration-300 hover:border-border/80 sm:p-8"
            >
              {/* Icon */}
              <div
                className={`inline-flex size-11 items-center justify-center rounded-xl ${iconBg}`}
              >
                <Icon className={`size-5 ${iconColor}`} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight">
                {t(`features.${key}.title`)}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {t(`features.${key}.description`)}
              </p>

              {/* Single Binary: terminal snippet */}
              {key === "singleBinary" && (
                <div
                  aria-hidden="true"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-foreground/[0.03] px-4 py-2.5 font-mono text-sm text-muted-foreground dark:bg-foreground/[0.06]"
                >
                  <span className="text-emerald-500">$</span> ./bedrud
                </div>
              )}

              {/* Self-Hosted: deployment option pills */}
              {key === "selfHosted" && (
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3 py-1 text-xs font-medium">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Self-Hosted
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3 py-1 text-xs font-medium">
                    <span className="size-1.5 rounded-full bg-blue-500" />
                    Bedrud Cloud
                  </span>
                </div>
              )}

              {/* Subtle hover gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
