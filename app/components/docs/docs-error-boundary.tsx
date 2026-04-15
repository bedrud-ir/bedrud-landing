import {
  isRouteErrorResponse,
  Link,
  useParams,
  useRouteError,
} from "react-router";

export function DocsErrorBoundary() {
  const { lang } = useParams<{ lang: string }>();
  const error = useRouteError();

  let message = "Oops!";
  let details = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  }

  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold">{message}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{details}</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to={`/${lang}/docs/getting-started`}
            className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Back to Docs
          </Link>
          <Link
            to={`/${lang}`}
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
