import { X } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import { Button } from "~/components/ui/button";
import { type Locale, supportedLngs } from "~/i18n/config";
import { GITHUB_URL } from "~/lib/config";
import { cn } from "~/lib/utils";
import { GitHubIcon } from "./github-icon";
import { navLinks, navRouteLinks } from "./navbar";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement | null>(null);
  const currentLang = (lang as Locale) ?? "en";

  const switchTo = useCallback(
    (locale: Locale) => {
      if (locale !== currentLang) {
        const path = window.location.pathname;
        const rest = path.replace(`/${currentLang}`, "");
        navigate(`/${locale}${rest}`, { replace: true });
      }
    },
    [currentLang, navigate],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab") {
        if (!panelRef.current) return;
        const focusableElements = panelRef.current.querySelectorAll<
          HTMLButtonElement | HTMLAnchorElement
        >(
          "button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
        );
        const first = focusableElements[0] as HTMLElement;
        const last = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (panelRef.current) {
      const focusable = panelRef.current.querySelector(
        "button:not([disabled]), a[href]",
      ) as HTMLElement;
      if (focusable) {
        focusable.focus();
        firstFocusRef.current = focusable as HTMLButtonElement;
      }
    }
  }, []);

  const backdropClickHandler = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={backdropClickHandler}
      />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="absolute inset-y-0 start-0 flex w-full max-w-sm flex-col bg-background shadow-xl"
      >
        <div className="flex h-full flex-col px-6 py-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  B
                </span>
              </div>
              <span className="text-lg font-bold tracking-tight">Bedrud</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="size-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* Nav links */}
          <nav
            className="mt-8 flex flex-col gap-1"
            aria-label={t("mobileNav.navigation")}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.key}
                href={`/${lang}/${link.href}`}
                onClick={onClose}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="rounded-lg px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-accent"
              >
                {t(link.key)}
              </motion.a>
            ))}
            {navRouteLinks.map((link, i) => (
              <motion.a
                key={link.key}
                href={`/${lang}/${link.route}`}
                onClick={onClose}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + (navLinks.length + i) * 0.05 }}
                className="rounded-lg px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-accent"
              >
                {t(link.key)}
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <div className="mt-auto flex flex-col gap-3">
            <Button size="lg" asChild>
              <a href={`/${lang}/demo`}>{t("mobileNav.tryDemo")}</a>
            </Button>
          </div>

          {/* Actions */}
          <div className="border-t pt-6">
            {/* GitHub */}
            <Button variant="outline" asChild>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                <GitHubIcon className="size-4" />
                GitHub ↗
              </a>
            </Button>

            {/* Language grid */}
            <div className="mt-4">
              <div className="mb-2 text-sm font-medium text-muted-foreground">
                {t("mobileNav.language")}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {supportedLngs.map((locale) => {
                  const isActive = locale === currentLang;
                  return (
                    <button
                      key={locale}
                      type="button"
                      onClick={() => switchTo(locale)}
                      className={cn(
                        "rounded-md px-2 py-1.5 text-sm transition-colors",
                        isActive
                          ? "bg-accent font-medium text-accent-foreground"
                          : "text-popover-foreground hover:bg-accent/50",
                      )}
                    >
                      {locale}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
