export const supportedLngs = ["en", "fa"] as const;
export const defaultLng = "en";

export type Locale = (typeof supportedLngs)[number];

export function isValidLocale(lang: string): lang is Locale {
  return (supportedLngs as readonly string[]).includes(lang);
}

export function getDir(lang: string): "ltr" | "rtl" {
  return lang === "fa" ? "rtl" : "ltr";
}
