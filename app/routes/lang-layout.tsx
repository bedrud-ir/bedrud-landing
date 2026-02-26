import { useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { data, Outlet, useParams } from "react-router";
import { isValidLocale, type Locale } from "~/i18n/config";
import { createI18nInstance } from "~/i18n/instance";

export async function clientLoader({ params }: { params: { lang: string } }) {
  if (!isValidLocale(params.lang)) {
    throw data(null, { status: 404 });
  }
  return null;
}

export default function LangLayout() {
  const { lang } = useParams<{ lang: string }>();
  const i18n = useMemo(() => createI18nInstance(lang as Locale), [lang]);

  return (
    <I18nextProvider i18n={i18n}>
      <Outlet />
    </I18nextProvider>
  );
}
