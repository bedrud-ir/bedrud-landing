import { useEffect, useState } from "react";
import { type Locale, t } from "../../i18n/utils";
import { GITHUB_URL, GITHUB_REPO } from "../../lib/config";

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

interface ContributorsSectionProps {
  lang: Locale;
}

export default function ContributorsSection({
  lang,
}: ContributorsSectionProps) {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contributors?per_page=50`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setContributors(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section class="py-20">
      <div class="mx-auto max-w-4xl px-6">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
            {t(lang, "contributorsPage.title")}
          </h1>
          <p class="mt-4 text-lg text-muted-foreground">
            {t(lang, "contributorsPage.subtitle")}
          </p>
        </div>

        <div class="mt-12">
          {loading && (
            <div class="flex justify-center py-12">
              <div class="size-8 animate-spin rounded-full border-4 border-muted-foreground border-t-transparent" />
            </div>
          )}

          {error && (
            <div class="rounded-lg border bg-destructive/10 p-6 text-center">
              <p class="text-sm text-destructive">
                Failed to load contributors.
              </p>
            </div>
          )}

          {!loading && !error && contributors.length > 0 && (
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {contributors.map((contributor) => (
                <a
                  key={contributor.id}
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex flex-col items-center gap-2 rounded-lg border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    class="size-16 rounded-full"
                    loading="lazy"
                  />
                  <span class="text-sm font-medium group-hover:text-primary truncate w-full text-center">
                    {contributor.login}
                  </span>
                  <span class="text-xs text-muted-foreground">
                    {contributor.contributions}{" "}
                    {t(lang, "contributorsPage.contributions")}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        <div class="mt-12 text-center">
          <h2 class="text-2xl font-bold">
            {t(lang, "contributorsPage.joinThem")}
          </h2>
          <div class="mt-4">
            <a
              href={`${GITHUB_URL}/contributing`}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t(lang, "contributorsPage.joinCta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
