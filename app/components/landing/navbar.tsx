import { Menu } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router";
import { Button } from "~/components/ui/button";
import { GITHUB_URL } from "~/lib/config";
import { cn } from "~/lib/utils";
import { GitHubIcon } from "./github-icon";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

export const navLinks = [
  { key: "nav.features", href: "#features" },
  { key: "nav.platforms", href: "#platforms" },
  { key: "nav.openSource", href: "#open-source" },
] as const;

export const navRouteLinks = [{ key: "nav.docs", route: "docs" }] as const;

const SCROLL_THRESHOLD = 50;

export function Navbar() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div
          className={cn(
            "transition-all duration-300",
            scrolled
              ? "mx-3 mt-3 rounded-2xl border border-border/40 bg-background/92 shadow-lg shadow-black/[0.03] backdrop-blur-xl saturate-[1.4] sm:mx-auto sm:max-w-3xl dark:border-border/30 dark:shadow-black/20"
              : "border-b border-border/40 bg-background/92 backdrop-blur-xl saturate-[1.4]",
          )}
        >
          <nav
            className={cn(
              "mx-auto flex items-center justify-between gap-4 transition-all duration-300",
              scrolled ? "h-12 px-4" : "h-16 max-w-5xl px-6",
            )}
          >
            <Link to={`/${lang}`} className="flex shrink-0 items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-bold text-primary-foreground">
                  B
                </span>
              </div>
              <span className="text-base font-semibold tracking-tight">
                Bedrud
              </span>
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={`/${lang}/${link.href}`}
                  className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {t(link.key)}
                </a>
              ))}
              {navRouteLinks.map((link) => (
                <Link
                  key={link.key}
                  to={`/${lang}/${link.route}`}
                  className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>

            <div className="hidden shrink-0 items-center gap-0.5 lg:flex">
              <ThemeToggle />
              <LanguageSwitcher />
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="size-4" />
                </a>
              </Button>
              <Button size="sm" className="ms-1.5 rounded-md px-4" asChild>
                <a href={`/${lang}/demo`}>{t("nav.demo")}</a>
              </Button>
            </div>

            <div className="flex items-center gap-0.5 lg:hidden">
              <ThemeToggle />
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
