import {
  ArrowDownToLine,
  Check,
  Copy,
  Globe,
  Laptop,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { type Locale, t } from "../../i18n/utils";
import { GITHUB_URL } from "../../lib/config";
import { cn } from "../../lib/utils";

type Platform = "linux" | "mac" | "windows" | "android" | "ios" | "browser";

const RELEASES_BASE = `${GITHUB_URL}/releases/latest`;

interface PlatformOption {
  id: Platform;
  icon: React.ElementType;
  labelKey: string;
}

const platforms: PlatformOption[] = [
  { id: "linux", icon: Monitor, labelKey: "downloadPage.platform.linux" },
  { id: "mac", icon: Laptop, labelKey: "downloadPage.platform.mac" },
  { id: "windows", icon: Monitor, labelKey: "downloadPage.platform.windows" },
  {
    id: "android",
    icon: Smartphone,
    labelKey: "downloadPage.platform.android",
  },
  { id: "ios", icon: Tablet, labelKey: "downloadPage.platform.ios" },
  { id: "browser", icon: Globe, labelKey: "downloadPage.platform.browser" },
];

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "linux";
  const ua = navigator.userAgent.toLowerCase();
  if (/android/.test(ua)) return "android";
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (/mac os x/.test(ua)) return "mac";
  if (/windows/.test(ua)) return "windows";
  return "linux";
}

function PlatformContent({
  platform,
  lang,
}: {
  platform: Platform;
  lang: Locale;
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const cardClass =
    "rounded-xl bg-card p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)]";
  const btnClass =
    "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90";

  switch (platform) {
    case "linux":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className={cardClass}>
            <h4 className="font-semibold">AppImage</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(lang, "downloadPage.noInstall")}
            </p>
            <a
              href={`${RELEASES_BASE}/download/bedrud-desktop-linux-x86_64.AppImage`}
              className={cn(btnClass, "mt-4")}
            >
              <ArrowDownToLine className="size-4" />
              .AppImage (x86_64)
            </a>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">Flatpak</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(lang, "downloadPage.flathub")}
            </p>
            <button
              type="button"
              onClick={() => copy("flatpak install flathub org.bedrud.Bedrud")}
              className={cn(btnClass, "mt-4")}
            >
              {copied ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
              flatpak install
            </button>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">Ubuntu / Debian</h4>
            <p className="mt-1 text-sm text-muted-foreground">apt</p>
            <button
              type="button"
              onClick={() =>
                copy(
                  "curl -fsSL https://get.bedrud.org/apt.gpg | sudo tee /etc/apt/trusted.gpg.d/bedrud.asc && echo 'deb [arch=amd64] https://get.bedrud.org/apt stable main' | sudo tee /etc/apt/sources.list.d/bedrud.list && sudo apt update && sudo apt install bedrud-desktop",
                )
              }
              className={cn(btnClass, "mt-4")}
            >
              {copied ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
              apt install
            </button>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">Arch (AUR)</h4>
            <p className="mt-1 text-sm text-muted-foreground">yay / paru</p>
            <button
              type="button"
              onClick={() => copy("yay -S bedrud-desktop")}
              className={cn(btnClass, "mt-4")}
            >
              {copied ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
              yay -S bedrud-desktop
            </button>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">Fedora / RHEL</h4>
            <p className="mt-1 text-sm text-muted-foreground">dnf</p>
            <button
              type="button"
              onClick={() =>
                copy(
                  "sudo dnf install https://get.bedrud.org/rpm/bedrud-desktop-latest.x86_64.rpm",
                )
              }
              className={cn(btnClass, "mt-4")}
            >
              {copied ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
              dnf install
            </button>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">Portable</h4>
            <p className="mt-1 text-sm text-muted-foreground">tar.xz</p>
            <a
              href={`${RELEASES_BASE}/download/bedrud-desktop-linux-x86_64.tar.xz`}
              className={cn(btnClass, "mt-4")}
            >
              <ArrowDownToLine className="size-4" />
              tar.xz (x86_64)
            </a>
          </div>
        </div>
      );

    case "mac":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className={cardClass}>
            <h4 className="font-semibold">Homebrew</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(lang, "downloadPage.brew")}
            </p>
            <button
              type="button"
              onClick={() => copy("brew install --cask bedrud")}
              className={cn(btnClass, "mt-4")}
            >
              {copied ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
              brew install --cask bedrud
            </button>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">Apple Silicon</h4>
            <p className="mt-1 text-sm text-muted-foreground">arm64 tar.gz</p>
            <a
              href={`${RELEASES_BASE}/download/bedrud-desktop-macos-arm64.tar.gz`}
              className={cn(btnClass, "mt-4")}
            >
              <ArrowDownToLine className="size-4" />
              arm64 tar.gz
            </a>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">Intel</h4>
            <p className="mt-1 text-sm text-muted-foreground">x86_64 tar.gz</p>
            <a
              href={`${RELEASES_BASE}/download/bedrud-desktop-macos-x86_64.tar.gz`}
              className={cn(btnClass, "mt-4")}
            >
              <ArrowDownToLine className="size-4" />
              x86_64 tar.gz
            </a>
          </div>
        </div>
      );

    case "windows":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className={cardClass}>
            <h4 className="font-semibold">WinGet</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(lang, "downloadPage.winget")}
            </p>
            <button
              type="button"
              onClick={() => copy("winget install Bedrud.Bedrud")}
              className={cn(btnClass, "mt-4")}
            >
              {copied ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
              winget install
            </button>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">Chocolatey</h4>
            <p className="mt-1 text-sm text-muted-foreground">choco</p>
            <button
              type="button"
              onClick={() => copy("choco install bedrud")}
              className={cn(btnClass, "mt-4")}
            >
              {copied ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
              choco install
            </button>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">
              {t(lang, "downloadPage.installer")}
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">NSIS .exe</p>
            <a
              href={`${RELEASES_BASE}/download/bedrud-desktop-windows-x86_64.exe`}
              className={cn(btnClass, "mt-4")}
            >
              <ArrowDownToLine className="size-4" />
              .exe (x86_64)
            </a>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">
              {t(lang, "downloadPage.portable")}
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">.zip</p>
            <a
              href={`${RELEASES_BASE}/download/bedrud-desktop-windows-x86_64.zip`}
              className={cn(btnClass, "mt-4")}
            >
              <ArrowDownToLine className="size-4" />
              .zip (x86_64)
            </a>
          </div>
        </div>
      );

    case "android":
      return (
        <div className="grid gap-4 sm:grid-cols-2 max-w-lg mx-auto">
          <div className={cardClass}>
            <h4 className="font-semibold">Google Play</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(lang, "downloadPage.playStore")}
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=org.bedrud.app"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btnClass, "mt-4")}
            >
              <ArrowDownToLine className="size-4" />
              Google Play
            </a>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">APK</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(lang, "downloadPage.sideload")}
            </p>
            <a
              href={`${RELEASES_BASE}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btnClass, "mt-4")}
            >
              <ArrowDownToLine className="size-4" />
              GitHub Releases
            </a>
          </div>
        </div>
      );

    case "ios":
      return (
        <div className="grid gap-4 sm:grid-cols-2 max-w-lg mx-auto">
          <div className={cardClass}>
            <h4 className="font-semibold">App Store</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(lang, "downloadPage.appStore")}
            </p>
            <a
              href="https://apps.apple.com/app/bedrud"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btnClass, "mt-4")}
            >
              <ArrowDownToLine className="size-4" />
              App Store
            </a>
          </div>
          <div className={cardClass}>
            <h4 className="font-semibold">IPA</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(lang, "downloadPage.sideload")}
            </p>
            <a
              href={`${RELEASES_BASE}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btnClass, "mt-4")}
            >
              <ArrowDownToLine className="size-4" />
              GitHub Releases
            </a>
          </div>
        </div>
      );

    case "browser":
      return (
        <div className="mx-auto max-w-md text-center">
          <div className={cn(cardClass, "text-center")}>
            <Globe className="mx-auto size-12 text-muted-foreground" />
            <h4 className="mt-4 font-semibold">
              {t(lang, "downloadPage.browserZero")}
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              {t(lang, "downloadPage.browserDesc")}
            </p>
            <a href={`/${lang}/demo`} className={cn(btnClass, "mt-4")}>
              {t(lang, "downloadPage.tryDemo")}
            </a>
          </div>
        </div>
      );
  }
}

export function DownloadSection({ lang }: { lang: Locale }) {
  const detected = useMemo(() => detectPlatform(), []);
  const [active, setActive] = useState<Platform>(detected);

  useEffect(() => {
    setActive(detected);
  }, [detected]);

  return (
    <section className="section-y">
      <div className="section-container">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2">
            {platforms.map((p) => {
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active === p.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  <Icon className="size-4" />
                  {t(lang, p.labelKey)}
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <PlatformContent platform={active} lang={lang} />
          </div>

          <div className="mt-10 text-center">
            <a
              href={`/${lang}/docs/getting-started/clients`}
              className={cn(
                "inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80",
              )}
            >
              {t(lang, "downloadPage.otherPlatforms")}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="mt-16 border-t pt-10">
            <h3 className="text-center text-2xl font-bold tracking-tight">
              {t(lang, "downloadPage.server")}
            </h3>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {t(lang, "downloadPage.serverDesc")}
            </p>
            <div
              className="mx-auto mt-4 max-w-md rounded-xl bg-card p-4 text-center font-mono text-sm text-muted-foreground shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)]"
              dir="ltr"
            >
              <span className="text-emerald-500">$</span> curl -fsSL
              https://get.bedrud.org | bash
            </div>
            <div className="mt-3 text-center">
              <a
                href={`/${lang}/install`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {t(lang, "downloadPage.serverGuide")}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
