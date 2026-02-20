import { describe, expect, test } from "bun:test";
import {
  defaultLng,
  getDir,
  isValidLocale,
  supportedLngs,
} from "~/i18n/config";

describe("i18n config", () => {
  test("supportedLngs includes en and fa", () => {
    expect(supportedLngs).toContain("en");
    expect(supportedLngs).toContain("fa");
  });

  test("defaultLng is en", () => {
    expect(defaultLng).toBe("en");
  });

  describe("isValidLocale", () => {
    test("returns true for supported locales", () => {
      expect(isValidLocale("en")).toBe(true);
      expect(isValidLocale("fa")).toBe(true);
    });

    test("returns false for unsupported locales", () => {
      expect(isValidLocale("de")).toBe(false);
      expect(isValidLocale("")).toBe(false);
      expect(isValidLocale("english")).toBe(false);
    });
  });

  describe("getDir", () => {
    test("returns ltr for en", () => {
      expect(getDir("en")).toBe("ltr");
    });

    test("returns rtl for fa", () => {
      expect(getDir("fa")).toBe("rtl");
    });

    test("returns ltr for unknown languages", () => {
      expect(getDir("de")).toBe("ltr");
    });
  });
});
