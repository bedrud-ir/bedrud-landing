import { describe, expect, test } from "bun:test";
import { clientLoader } from "~/routes/home";

describe("Home route", () => {
  test("clientLoader redirects to /en", () => {
    const response = clientLoader();
    expect(response.status).toBe(302);
    expect(response.headers.get("Location")).toBe("/en");
  });
});
