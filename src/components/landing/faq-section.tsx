import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { type Locale, t } from "../../i18n/utils";

const faqKeys = [
  "updates",
  "encryption",
  "network",
  "proxy",
  "cloudVsSelfHosted",
] as const;

export function FaqSection({ lang }: { lang: Locale }) {
  return (
    <section
      id="faq"
      className="relative scroll-mt-20 border-t bg-muted/30 section-y"
    >
      <div className="section-container">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t(lang, "faq.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(lang, "faq.subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl divide-y">
          {faqKeys.map((key) => (
            <FaqItem key={key} lang={lang} itemKey={key} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  lang,
  itemKey,
}: {
  lang: Locale;
  itemKey: (typeof faqKeys)[number];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-border/50">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-[17px] font-medium transition-colors hover:text-foreground"
      >
        <span>{t(lang, `faq.${itemKey}.question`)}</span>
        <ChevronDown
          className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {t(lang, `faq.${itemKey}.answer`)}
          </p>
        </div>
      </div>
    </div>
  );
}
