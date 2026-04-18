# Bedrud

## Tech Stack

- **Framework:** Astro (SSG, React islands)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Runtime:** Bun
- **Linter/Formatter:** Biome
- **i18n:** Build-time `t()` function (no runtime i18n library)
- **Icons:** lucide-react only

## Commands

- `bun dev` - Start dev server (port 4321)
- `bun run build` - Static build to `dist/`
- `bun run preview` - Preview production build
- `bun test` - Run tests
- `bun run typecheck` - Type check
- `bun run check` - Biome lint + format check
- `bun run format` - Auto-format with Biome
- `bun run lint` - Lint with Biome

## Project Structure

- `src/` - Application source
  - `pages/` - Astro pages (file-based routing)
  - `layouts/` - Astro layouts (Base, Landing, DocsLayout)
  - `components/` - React island components
    - `landing/` - Landing page sections
    - `docs/` - Docs chrome (sidebar, toc, pager)
    - `ui/` - shadcn/ui components
  - `content/` - MDX docs (content collections)
  - `i18n/` - Build-time i18n utils + 9 locale files
  - `styles/` - Global CSS (Tailwind v4 + theme vars)
  - `lib/` - Utilities
- `test/` - Unit tests
- `public/` - Static assets

## Conventions

- Path alias: `~/` maps to `src/`
- Tests use `bun:test` with files in `test/` mirroring `src/` structure
- Components use shadcn/ui patterns (CVA + Tailwind)
- CSS uses Tailwind v4 with CSS variables for theming (`@tailwindcss/vite` plugin)
- Biome handles formatting (double quotes, semicolons, 2-space indent) and linting
- All routes under `/:lang/` prefix (en, de, fr, es, zh, ja, tr, fa, ar)
- `/` redirects to `/en`
- RTL locales (fa, ar): `dir="rtl"` auto-set on `<html>`
- Translations: `src/i18n/locales/{lang}.ts` (nested objects, dot-notation keys)
- Build-time `t("key.subkey")` via `src/i18n/utils.ts`
- Scroll-linked animations (macbook-scroll, mobile-phone-scroll): React islands
- All other animations: CSS keyframes + `data-animate` / `.in-view` (IntersectionObserver in Base.astro)
- ScrollArea: CSS-only (`.scroll-area` class in global.css, no Radix)
