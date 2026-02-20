# Agent Instructions

## Overview

Bedrud is an open source web application built with React Router 7, TypeScript, Tailwind CSS 4, and shadcn/ui. It uses Bun as the runtime and package manager. Biome is used for linting and formatting. i18next provides multilingual support (en, fa).

## Development

- Use `bun` for all package management (not npm/yarn/pnpm)
- Run `bun run check` to lint and format check
- Run `bun test` before committing changes
- Run `bun run typecheck` to verify types

## Code Style

- TypeScript strict mode is enabled
- Biome enforces formatting: double quotes, semicolons, 2-space indent, 80 char line width
- Use path alias `~/` for imports from `app/`
- Follow existing patterns for new routes and components
- Use shadcn/ui components from `~/components/ui`
- Use `cn()` from `~/lib/utils` for conditional class names

## Testing

- Tests use `bun:test`
- Test files go in `test/` directory mirroring `app/` structure
- Name test files with `.test.ts` or `.test.tsx` extension

## Routes

- Route files go in `app/routes/`
- All user-facing routes are under `/:lang/` prefix
- `/` redirects to `/en`
- `lang-layout.tsx` validates the `:lang` param and provides `I18nextProvider`
- Each localized route should export a `meta` function using i18n for SEO
- Route config is in `app/routes.ts`

## i18n

- Translations live in `app/locales/{lang}.ts` (en.ts, fa.ts)
- Config in `app/i18n/config.ts` (supported languages, RTL detection)
- Instance factory in `app/i18n/instance.ts` (SSR-safe, per-request)
- Use `useTranslation()` hook in components for translated strings
- Use `createI18nInstance()` in `meta()` functions for localized SEO
