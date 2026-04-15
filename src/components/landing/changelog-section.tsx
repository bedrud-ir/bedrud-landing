import { useEffect, useState } from "react";
import { type Locale, t } from "../../i18n/utils";
import { GITHUB_URL, GITHUB_REPO } from "../../lib/config";

interface Release {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
  body: string;
}

interface ChangelogSectionProps {
  lang: Locale;
}

export default function ChangelogSection({ lang }: ChangelogSectionProps) {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases?per_page=20`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setReleases(data);
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
            {t(lang, "changelogPage.title")}
          </h1>
          <p class="mt-4 text-lg text-muted-foreground">
            {t(lang, "changelogPage.subtitle")}
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
              <p class="text-sm text-destructive">Failed to load releases.</p>
            </div>
          )}

          {!loading && !error && releases.length === 0 && (
            <p class="text-center text-muted-foreground">
              {t(lang, "changelogPage.noReleases")}
            </p>
          )}

          {!loading && !error && releases.length > 0 && (
            <div class="space-y-8">
              {releases.map((release) => (
                <article
                  key={release.tag_name}
                  class="rounded-lg border bg-card p-6"
                >
                  <div class="flex items-center justify-between">
                    <h2 class="text-xl font-semibold">
                      {release.name || release.tag_name}
                    </h2>
                    <time class="text-sm text-muted-foreground">
                      {new Date(release.published_at).toLocaleDateString()}
                    </time>
                  </div>
                  {release.body && (
                    <div class="mt-4 prose prose-sm prose-neutral dark:prose-invert max-w-none whitespace-pre-wrap">
                      {release.body}
                    </div>
                  )}
                  <div class="mt-4">
                    <a
                      href={release.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sm text-primary hover:underline"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div class="mt-12 text-center">
          <a
            href={`${GITHUB_URL}/releases`}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-md border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            {t(lang, "changelogPage.viewOnGithub")}
          </a>
        </div>
      </div>
    </section>
  );
}
