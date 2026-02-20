import { describe, expect, test } from "bun:test";
import { loader } from "~/routes/home";

describe("Home route", () => {
  test("loader redirects to /en", () => {
    const response = loader();
    expect(response.status).toBe(302);
    expect(response.headers.get("Location")).toBe("/en");
  });
});
