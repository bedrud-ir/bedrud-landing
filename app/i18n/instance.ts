import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "~/locales/en";
import fa from "~/locales/fa";
import type { Locale } from "./config";
import { defaultLng } from "./config";

const resources = {
  en: { translation: en },
  fa: { translation: fa },
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
