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
      expect(result).toContainEqual({ title: "Bedrud" });
    });

    test("returns English description", () => {
      const result = callMeta("en");
      expect(result).toContainEqual({
        name: "description",
        content: "Bedrud - An open source project by theMadOrg",
      });
    });
  });

  describe("meta for fa", () => {
    test("returns Farsi title", () => {
      const result = callMeta("fa");
      expect(result).toContainEqual({ title: "بدرود" });
    });

    test("returns Farsi description", () => {
      const result = callMeta("fa");
      expect(result).toContainEqual({
        name: "description",
        content: "بدرود - یک پروژه متن‌باز از theMadOrg",
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
