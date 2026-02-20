# Contributing to Bedrud

## Getting Started

1. Fork the repository
2. Clone your fork
3. Install dependencies: `bun install`
4. Start the dev server: `bun dev`

## Development

- Run tests: `bun test`
- Type check: `bun run typecheck`
- Lint + format check: `bun run check`
- Auto-format: `bun run format`
- Build: `bun run build`

## Pull Requests

1. Create a feature branch from `main`
2. Make your changes
3. Ensure Biome passes (`bun run check`)
4. Ensure tests pass (`bun test`)
5. Ensure types check (`bun run typecheck`)
6. Open a pull request against `main`

## Code Style

- TypeScript strict mode
- Biome handles formatting and linting (double quotes, semicolons, 2-space indent)
- Use `~/` path alias for imports from `app/`
- Use shadcn/ui components and patterns
- Add tests for new functionality

## i18n

- Translations live in `app/locales/{lang}.ts`
- Add new translation keys to both `en.ts` and `fa.ts`
- Use `useTranslation()` hook in components
- Use `createI18nInstance()` in `meta()` functions for SEO
