import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import { sections } from "@/content/docs/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { ScrollArea } from "~/components/ui/scroll-area";
import { cn } from "~/lib/utils";

interface SidebarProps {
  lang: string;
}

function Sidebar({ lang }: SidebarProps) {
  const location = useLocation();
  const { t } = useTranslation();
  const currentSlug = location.pathname.split("/").slice(4).join("/");

  const activeSection = sections.find((section) =>
    section.items.some((item) => item.slug === currentSlug),
  );

  return (
    <aside className="border-e">
      <ScrollArea className="h-[calc(100vh-4rem)] py-6 pe-4">
        <div className="space-y-4">
          <div className="pb-4">
            <Link
              to={`/${lang}`}
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              <span>{t("docs.backToHome")}</span>
            </Link>
          </div>
          <div className="pb-4">
            <h3 className="px-4 text-sm font-semibold">
              {t("docs.documentation")}
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
                        <Link
                          key={item.slug}
                          to={`/${lang}/docs/${item.slug}`}
                          className={cn(
                            "block ps-6 pe-4 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-accent text-accent-foreground font-medium"
                              : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                          )}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </nav>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollArea>
    </aside>
  );
}

export { Sidebar };
