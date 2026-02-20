import { useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { data, Outlet } from "react-router";
import { isValidLocale } from "~/i18n/config";
import { createI18nInstance } from "~/i18n/instance";
import type { Route } from "./+types/lang-layout";

export async function loader({ params }: Route.LoaderArgs) {
  const lang = params.lang;
  if (!isValidLocale(lang)) {
    throw data(null, { status: 404 });
  }
  return { lang };
}

export default function LangLayout({ loaderData }: Route.ComponentProps) {
  const { lang } = loaderData;
  const i18n = useMemo(() => createI18nInstance(lang), [lang]);

  return (
    <I18nextProvider i18n={i18n}>
      <Outlet />
    </I18nextProvider>
  );
}
