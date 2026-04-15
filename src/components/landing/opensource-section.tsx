import { BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { Spotlight } from "~/components/ui/spotlight";
import { GitHubIcon } from "./github-icon";

export function OpenSourceSection() {
  const { t } = useTranslation();

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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              {t("openSource.license")}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {t("openSource.title")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
            >
              {t("openSource.subtitle")}
            </motion.p>
          </div>

          {/* Right — CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-10 flex shrink-0 flex-wrap gap-3 lg:mt-0"
          >
            <Button size="lg" asChild>
              <a
                href="https://github.com/themadorg/bedrud"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="size-4" />
                {t("openSource.github")}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/themadorg/bedrud"
                target="_blank"
                rel="noreferrer"
              >
                <BookOpen className="size-4" />
                {t("openSource.docs")}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
