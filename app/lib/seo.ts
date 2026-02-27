import { supportedLngs } from "~/i18n/config";

const BASE_URL = "https://bedrud.org";

export function seoMeta(lang: string, path: string) {
  const url = `${BASE_URL}/${lang}${path}`;
  const ogImage = `${BASE_URL}/og-image.png`;

  return [
    { property: "og:url", content: url },
    { property: "og:image", content: ogImage },
    { property: "og:locale", content: lang },
    { property: "og:site_name", content: "Bedrud" },
    { name: "twitter:image", content: ogImage },
    { tagName: "link", rel: "canonical", href: url },
    ...supportedLngs.map((lng) => ({
      tagName: "link" as const,
      rel: "alternate",
      hrefLang: lng,
      href: `${BASE_URL}/${lng}${path}`,
    })),
    {
      tagName: "link" as const,
      rel: "alternate",
      hrefLang: "x-default",
      href: `${BASE_URL}/en${path}`,
    },
  ];
}
