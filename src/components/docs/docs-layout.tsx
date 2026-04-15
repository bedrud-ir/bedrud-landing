import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useParams } from "react-router";
import { LanguageSwitcher } from "~/components/landing/language-switcher";
import { ThemeToggle } from "~/components/landing/theme-toggle";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { Toc } from "./toc";

function DocsLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();

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
                    {lang && <Sidebar lang={lang} />}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <Button variant="ghost" size="sm" asChild>
              <Link to={`/${lang}`} className="gap-2 text-sm">
                <span className="font-semibold">Bedrud</span>
              </Link>
            </Button>

            <span className="text-sm text-muted-foreground">
              {t("nav.docs")}
            </span>
          </div>

          <div className="ms-auto flex items-center gap-1">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="pt-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5">
            <div className="hidden lg:block lg:col-span-1">
              {lang && <Sidebar lang={lang} />}
            </div>

            <div className="lg:col-span-3 xl:col-span-3">
              <div className="hidden xl:block mb-6">
                <Toc />
              </div>
              <main
                id="main-content"
                className="min-h-screen flex-1 py-8 lg:py-12"
              >
                <Outlet />
              </main>
            </div>

            <div className="hidden xl:block xl:col-span-1">
              <Toc />
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 px-4 lg:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} themadorg · MIT
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link to={`/${lang}/privacy`} className="hover:text-foreground">
              {t("footer.privacy")}
            </Link>
            <span>·</span>
            <Link to={`/${lang}/terms`} className="hover:text-foreground">
              {t("footer.terms")}
            </Link>
            <span>·</span>
            <Link to={`/${lang}/contact`} className="hover:text-foreground">
              {t("footer.contact")}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DocsLayout;
