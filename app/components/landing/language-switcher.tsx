import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { type Locale, supportedLngs } from "~/i18n/config";
import { cn } from "~/lib/utils";

interface LangMeta {
  flag: string;
  label: string;
}

const langMeta: Record<Locale, LangMeta> = {
  en: { flag: "\u{1F1EC}\u{1F1E7}", label: "English" },
  de: { flag: "\u{1F1E9}\u{1F1EA}", label: "Deutsch" },
  fr: { flag: "\u{1F1EB}\u{1F1F7}", label: "Français" },
  fa: { flag: "\u{1F1EE}\u{1F1F7}", label: "\u0641\u0627\u0631\u0633\u06CC" },
  ar: {
    flag: "\u{1F1F8}\u{1F1E6}",
    label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
  },
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = (lang as Locale) ?? "en";
  const current = langMeta[currentLang];

  const switchTo = useCallback(
    (locale: Locale) => {
      setOpen(false);
      if (locale !== currentLang) {
        navigate(`/${locale}/`, { replace: true });
      }
    },
    [currentLang, navigate],
  );

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Change language"
        className="inline-flex size-9 items-center justify-center rounded-md text-lg transition-colors hover:bg-accent"
      >
        {current.flag}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            role="listbox"
            tabIndex={-1}
            aria-activedescendant={`lang-${currentLang}`}
            className="absolute inset-e-0 top-full z-50 mt-1.5 min-w-36 overflow-hidden rounded-lg border bg-popover p-1 shadow-lg"
          >
            {supportedLngs.map((locale) => {
              const meta = langMeta[locale];
              const isActive = locale === currentLang;
              return (
                <button
                  key={locale}
                  id={`lang-${locale}`}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => switchTo(locale)}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors",
                    isActive
                      ? "bg-accent font-medium text-accent-foreground"
                      : "text-popover-foreground hover:bg-accent/50",
                  )}
                >
                  <span className="text-base leading-none">{meta.flag}</span>
                  <span>{meta.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
