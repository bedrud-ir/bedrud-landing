import { Bot, Globe, HardDrive, Smartphone, Tablet } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const platforms = [
  { key: "web", icon: Globe },
  { key: "android", icon: Smartphone },
  { key: "ios", icon: Tablet },
  { key: "server", icon: HardDrive },
  { key: "bots", icon: Bot },
] as const;

export function PlatformsSection() {
  const { t } = useTranslation();

  return (
    <section
      id="platforms"
      className="scroll-mt-20 border-t bg-muted/30 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header — left-aligned */}
        <div className="max-w-lg">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {t("platforms.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            {t("platforms.subtitle")}
          </motion.p>
        </div>

        {/* Grid — 3 columns on lg so cards aren't cramped */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex items-start gap-4 rounded-xl border bg-card p-5 transition-colors duration-300 hover:border-border/80"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/8">
                <Icon className="size-5 text-primary" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold leading-tight">
                  {t(`platforms.${key}.title`)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(`platforms.${key}.tech`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
