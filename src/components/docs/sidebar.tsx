import { ArrowLeft } from "lucide-react";
import { t, type Locale } from "../../i18n/utils";
import { sections } from "@/content/docs/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { cn } from "~/lib/utils";

interface SidebarProps {
  lang: Locale;
  currentSlug?: string;
}

function Sidebar({ lang, currentSlug = "" }: SidebarProps) {
  const activeSection = sections.find((section) =>
    section.items.some((item) => item.slug === currentSlug),
  );

  return (
    <aside className="border-e">
      <div className="scroll-area h-[calc(100vh-4rem)] py-6 pe-4">
        <div className="space-y-4">
          <div className="pb-4">
            <a
              href={`/${lang}`}
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              <span>{t(lang, "docs.backToHome")}</span>
            </a>
          </div>
          <div className="pb-4">
            <h3 className="px-4 text-sm font-semibold">
              {t(lang, "docs.documentation")}
            </h3>
          </div>
          <Accordion
            type="multiple"
            defaultValue={activeSection ? [activeSection.title] : []}
            className="space-y-2"
          >
            {sections.map((section) => (
              <AccordionItem key={section.title} value={section.title}>
                <AccordionTrigger className="ps-4 py-2 text-sm font-semibold hover:no-underline">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-0">
                  <nav className="space-y-1">
                    {section.items.map((item) => {
                      const isActive = item.slug === currentSlug;
                      return (
                        <a
                          key={item.slug}
                          href={`/${lang}/docs/${item.slug}`}
                          className={cn(
                            "block ps-6 pe-4 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-accent text-accent-foreground font-medium"
                              : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                          )}
                        >
                          {item.title}
                        </a>
                      );
                    })}
                  </nav>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </aside>
  );
}

export { Sidebar };
