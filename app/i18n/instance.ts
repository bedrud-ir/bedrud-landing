import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "~/locales/ar";
import de from "~/locales/de";
import en from "~/locales/en";
import fa from "~/locales/fa";
import fr from "~/locales/fr";
import type { Locale } from "./config";
import { defaultLng } from "./config";

const resources = {
  en: { translation: en },
  de: { translation: de },
  fr: { translation: fr },
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
