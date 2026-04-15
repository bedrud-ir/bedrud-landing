import { BookOpen, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { DISCORD_URL, DOCS_URL, GITHUB_URL } from "~/lib/config";
import { GitHubIcon } from "./github-icon";

export function CtaSection() {
  const { t } = useTranslation();

  return (
    <section className="scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            {t("cta.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="lg" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <GitHubIcon className="size-4" />
              {t("cta.starGithub")}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={DOCS_URL} target="_blank" rel="noreferrer">
              <BookOpen className="size-4" />
              {t("cta.readDocs")}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={DISCORD_URL} target="_blank" rel="noreferrer">
              <MessageSquare className="size-4" />
              {t("cta.joinCommunity")}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
