import { Bot, Globe, HardDrive, Smartphone, Tablet } from "lucide-react";
import { type Locale, t } from "../../i18n/utils";

const platforms = [
  { key: "web", icon: Globe },
  { key: "android", icon: Smartphone },
  { key: "ios", icon: Tablet },
  { key: "server", icon: HardDrive },
  { key: "bots", icon: Bot },
] as const;

export function PlatformsSection({ lang }: { lang: Locale }) {
  return (
    <section
      id="platforms"
      className="relative scroll-mt-20 border-t bg-muted/30 section-y"
    >
      <div className="section-container">
        {/* Header — left-aligned */}
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t(lang, "platforms.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(lang, "platforms.subtitle")}
          </p>
        </div>

        {/* Grid — 3 columns on lg so cards aren't cramped */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group flex items-start gap-4 rounded-xl border bg-card p-6 transition-colors duration-300 hover:border-border/80"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/8">
                <Icon className="size-5 text-primary" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold leading-tight">
                  {t(lang, `platforms.${key}.title`)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(lang, `platforms.${key}.tech`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
