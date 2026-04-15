import type { Locale } from "../../i18n/utils";

interface DocsErrorBoundaryProps {
  lang: Locale;
}

export function DocsErrorBoundary({ lang }: DocsErrorBoundaryProps) {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Oops!</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          An unexpected error occurred.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={`/${lang}/docs/getting-started`}
            className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Back to Docs
          </a>
          <a
            href={`/${lang}`}
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
