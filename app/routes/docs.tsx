import { redirect } from "react-router";

export function meta() {
  return [{ name: "robots", content: "noindex, follow" }];
}

export function clientLoader({ params }: { params: { lang: string } }) {
  throw redirect(`/${params.lang}/docs/getting-started/quickstart`, {
    status: 301,
  });
}

export default function DocsPage() {
  return null;
}
