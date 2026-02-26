import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "~/locales/ar";
import de from "~/locales/de";
import en from "~/locales/en";
import es from "~/locales/es";
import fa from "~/locales/fa";
import fr from "~/locales/fr";
import ja from "~/locales/ja";
import tr from "~/locales/tr";
import zh from "~/locales/zh";
import type { Locale } from "./config";
import { defaultLng } from "./config";

const resources = {
  en: { translation: en },
  de: { translation: de },
  fr: { translation: fr },
  es: { translation: es },
  zh: { translation: zh },
  ja: { translation: ja },
  tr: { translation: tr },
  fa: { translation: fa },
  ar: { translation: ar },
};

export function createI18nInstance(lng: Locale = defaultLng) {
  const instance = i18next.createInstance();
  instance.use(initReactI18next).init({
    lng,
    resources,
    interpolation: { escapeValue: false },
    initImmediate: false,
  });
  return instance;
}
