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
        title: "Bedrud — Talk to people, not the platform",
      });
    });

    test("returns English description", () => {
      const result = callMeta("en");
      expect(result).toContainEqual({
        name: "description",
        content:
          "Self-hosted video meetings. Single binary. 200MB RAM. Open source under Apache 2.0.",
      });
    });
  });

  describe("meta for fa", () => {
    test("returns Farsi title", () => {
      const result = callMeta("fa");
      expect(result).toContainEqual({
        title: "بدرود — با آدم‌ها حرف بزن، نه با پلتفرم",
      });
    });

    test("returns Farsi description", () => {
      const result = callMeta("fa");
      expect(result).toContainEqual({
        name: "description",
        content:
          "جلسات ویدیویی خودمیزبان. یک فایل باینری. ۲۰۰ مگابایت RAM. متن‌باز تحت Apache 2.0.",
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
