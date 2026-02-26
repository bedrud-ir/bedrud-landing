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
});
