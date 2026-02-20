export const supportedLngs = ["en", "de", "fr", "fa", "ar"] as const;
export const defaultLng = "en";

export type Locale = (typeof supportedLngs)[number];

const rtlLocales: ReadonlySet<string> = new Set(["fa", "ar"]);

export function isValidLocale(lang: string): lang is Locale {
  return (supportedLngs as readonly string[]).includes(lang);
}

export function getDir(lang: string): "ltr" | "rtl" {
  return rtlLocales.has(lang) ? "rtl" : "ltr";
}
