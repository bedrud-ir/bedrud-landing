# Bedrud

## Tech Stack

- **Framework:** React Router 7 (SSR)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Runtime:** Bun
- **Build:** Vite
- **Linter/Formatter:** Biome
- **i18n:** i18next + react-i18next

## Commands

- `bun dev` - Start dev server
- `bun run build` - Production build
- `bun run start` - Start production server
- `bun test` - Run tests
- `bun run typecheck` - Type check
- `bun run check` - Biome lint + format check
- `bun run format` - Auto-format with Biome
- `bun run lint` - Lint with Biome

## Project Structure

- `app/` - Application source
  - `routes/` - Route components
  - `components/` - Shared components
  - `components/ui/` - shadcn/ui components
  - `lib/` - Utilities
  - `i18n/` - i18n configuration and instance factory
  - `locales/` - Translation files (en.ts, fa.ts)
- `test/` - Unit tests
- `public/` - Static assets

## Conventions

- Path alias: `~/` maps to `app/`
- Tests use `bun:test` with files in `test/` mirroring `app/` structure
- Components use shadcn/ui patterns (CVA + Tailwind)
- CSS uses Tailwind v4 with CSS variables for theming
- Biome handles formatting (double quotes, semicolons, 2-space indent) and linting
- All routes are under `/:lang/` prefix (e.g., `/en/`, `/fa/`)
- `/` redirects to `/en`
- Translations live in `app/locales/{lang}.ts`
- RTL is supported via `dir` attribute on `<html>` (auto-detected from locale)
