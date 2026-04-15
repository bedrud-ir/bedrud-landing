import { Menu } from "lucide-react";
import { t, type Locale } from "../../i18n/utils";
import { ThemeToggle } from "~/components/landing/theme-toggle";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { Toc } from "./toc";

interface DocsLayoutProps {
  lang: Locale;
  currentSlug?: string;
}

function DocsLayout({ lang, currentSlug = "" }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 items-center gap-4 px-4 lg:max-w-5xl lg:px-6">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle sidebar</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="p-6">
                  <nav className="space-y-1">
                    <Sidebar lang={lang} currentSlug={currentSlug} />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <Button variant="ghost" size="sm" asChild>
              <a href={`/${lang}`} className="gap-2 text-sm">
                <span className="font-semibold">Bedrud</span>
              </a>
            </Button>

            <span className="text-sm text-muted-foreground">
              {t(lang, "nav.docs")}
            </span>
          </div>

          <div className="ms-auto flex items-center gap-1">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="pt-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5">
            <div className="hidden lg:block lg:col-span-1">
              <Sidebar lang={lang} currentSlug={currentSlug} />
            </div>

            <div className="lg:col-span-3 xl:col-span-3">
              <div className="hidden xl:block mb-6">
                <Toc lang={lang} />
              </div>
              <main
                id="main-content"
                className="min-h-screen flex-1 py-8 lg:py-12"
              >
                <slot />
              </main>
            </div>

            <div className="hidden xl:block xl:col-span-1">
              <Toc lang={lang} />
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 px-4 lg:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} themadorg &middot; MIT
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href={`/${lang}/privacy`} className="hover:text-foreground">
              {t(lang, "footer.privacy")}
            </a>
            <span>&middot;</span>
            <a href={`/${lang}/terms`} className="hover:text-foreground">
              {t(lang, "footer.terms")}
            </a>
            <span>&middot;</span>
            <a href={`/${lang}/contact`} className="hover:text-foreground">
              {t(lang, "footer.contact")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DocsLayout;
