# Agent Instructions

## Overview

Bedrud: open source web app. React Router 7, TypeScript, Tailwind CSS 4, shadcn/ui. Bun runtime/pkg manager. Biome for lint/format. i18next for multilingual (en, fa).

## Development

- Use `bun` for all package management (not npm/yarn/pnpm)
- Run `bun run check` to lint and format check
- Run `bun test` before committing changes
- Run `bun run typecheck` to verify types

## Code Style

- TypeScript strict mode enabled
- Biome: double quotes, semicolons, 2-space indent, 80 char width
- Path alias `~/` → `app/`
- Follow existing patterns for new routes/components
- Use shadcn/ui from `~/components/ui`
- Use `cn()` from `~/lib/utils` for conditional classes

## Testing

- `bun:test` framework
- Test files in `test/`, mirroring `app/` structure
- Extensions: `.test.ts` or `.test.tsx`

## Routes

- Route files in `app/routes/`
- All user routes under `/:lang/` prefix
- `/` redirects to `/en`
- `lang-layout.tsx` validates `:lang`, provides `I18nextProvider`
- Each localized route exports `meta` function using i18n for SEO
- Route config in `app/routes.ts`

## i18n

- Translations in `app/locales/{lang}.ts` (en.ts, fa.ts)
- Config in `app/i18n/config.ts` (supported langs, RTL detection)
- Instance factory in `app/i18n/instance.ts` (SSR-safe, per-request)
- `useTranslation()` hook in components
- `createI18nInstance()` in `meta()` for localized SEO