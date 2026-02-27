import { describe, expect, test } from "bun:test";
import { meta } from "~/routes/lang-home";

function callMeta(lang: string) {
  return meta({
    params: { lang },
  } as unknown as Parameters<typeof meta>[0]);
}

describe("LangHome route", () => {
  describe("meta for en", () => {
    test("returns English title", () => {
      const result = callMeta("en");
      expect(result).toContainEqual({
        title: "Bedrud — Video Meetings, Your Way",
      });
    });

    test("returns English description", () => {
      const result = callMeta("en");
      expect(result).toContainEqual({
        name: "description",
        content:
          "Bedrud is an open-source video meeting platform. Self-host it or use our cloud — a single binary packaging web UI, REST API, and WebRTC media server.",
      });
    });
  });

  describe("meta for fa", () => {
    test("returns Farsi title", () => {
      const result = callMeta("fa");
      expect(result).toContainEqual({
        title: "بدرود — جلسات ویدیویی، به سلیقه شما",
      });
    });

    test("returns Farsi description", () => {
      const result = callMeta("fa");
      expect(result).toContainEqual({
        name: "description",
        content:
          "بدرود یک پلتفرم جلسات ویدیویی متن‌باز است. خودمیزبان کنید یا از فضای ابری ما استفاده کنید — یک فایل باینری شامل رابط کاربری وب، API و سرور رسانه WebRTC.",
      });
    });
  });

  test("meta returns robots tag", () => {
    const result = callMeta("en");
    expect(result).toContainEqual({
      name: "robots",
      content: "index, follow",
    });
  });

  describe("SEO meta", () => {
    test("returns og:url for en", () => {
      const result = callMeta("en");
      expect(result).toContainEqual({
        property: "og:url",
        content: "https://bedrud.org/en",
      });
    });

    test("returns og:image", () => {
      const result = callMeta("en");
      expect(result).toContainEqual({
        property: "og:image",
        content: "https://bedrud.org/og-image.png",
      });
    });

    test("returns og:site_name", () => {
      const result = callMeta("en");
      expect(result).toContainEqual({
        property: "og:site_name",
        content: "Bedrud",
      });
    });

    test("returns canonical link", () => {
      const result = callMeta("en");
      expect(result).toContainEqual({
        tagName: "link",
        rel: "canonical",
        href: "https://bedrud.org/en",
      });
    });

    test("returns hreflang alternates", () => {
      const result = callMeta("en");
      expect(result).toContainEqual({
        tagName: "link",
        rel: "alternate",
        hrefLang: "fa",
        href: "https://bedrud.org/fa",
      });
      expect(result).toContainEqual({
        tagName: "link",
        rel: "alternate",
        hrefLang: "x-default",
        href: "https://bedrud.org/en",
      });
    });

    test("returns correct og:url for fa", () => {
      const result = callMeta("fa");
      expect(result).toContainEqual({
        property: "og:url",
        content: "https://bedrud.org/fa",
      });
    });
  });
});
