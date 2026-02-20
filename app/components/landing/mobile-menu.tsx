import { X } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { GitHubIcon } from "./github-icon";
import { navLinks } from "./navbar";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const { t } = useTranslation();

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
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="absolute inset-y-0 end-0 flex w-full max-w-sm flex-col bg-background shadow-xl [dir=rtl]:end-auto [dir=rtl]:start-0"
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
          <nav className="mt-8 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.key}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="rounded-lg px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-accent"
              >
                {t(link.key)}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="mt-auto flex flex-col gap-3 border-t pt-6">
            <Button variant="outline" asChild>
              <a
                href="https://github.com/themadorg/bedrud"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </Button>
            <Button asChild>
              <a
                href="https://github.com/themadorg/bedrud"
                target="_blank"
                rel="noreferrer"
              >
                {t("nav.getStarted")}
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
