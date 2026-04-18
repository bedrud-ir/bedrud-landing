# Bedrud Agent Instructions

## Build & Dev

Runtime: Bun only. Package manager + test runner both Bun.

Dev server: `bun dev` (port 4321). Auto-generates search indexes first.

Build: `bun run build` (SSG to `dist/`). Also auto-generates search indexes.

CI order: `bun run check` → `bun run typecheck` → `bun run build`

Default branch: `master`. PRs target `master`.

Deploy: GitHub Pages via `deploy.yml`. Site: `bedrud.org`.

## Commands

| Command               | Purpose                                        |
| --------------------- | ---------------------------------------------- |
| `bun dev`             | Dev server (port 4321)                         |
| `bun run build`       | Static build to `dist/`                        |
| `bun run preview`     | Preview production build                       |
| `bun test`            | Run tests (preload: `test/setup.ts` via bunfig) |
| `bun run typecheck`   | `tsc --noEmit`                                 |
| `bun run typecheck:astro` | `astro check`                              |
| `bun run check`       | Biome lint + format check                      |
| `bun run format`      | Biome auto-format                              |
| `bun run lint`        | Biome lint only                                |

## File Structure

```
src/
  pages/
    index.astro                    # redirects / → /en
    [lang]/                        # all locale-prefixed routes
      index.astro                  # landing page
      about.astro
      blog/
        index.astro                # blog listing
        [slug].astro               # individual blog posts
      changelog.astro
      contact.astro
      contributors.astro
      demo.astro
      docs/
        index.astro                # docs home
        [...slug].astro            # catch-all doc pages
      download.astro
      features.astro
      install.astro
      privacy.astro
      terms.astro

  layouts/
    Base.astro                     # shared HTML shell (IntersectionObserver, theme flash script)
    Landing.astro                  # landing page layout
    DocsLayout.astro               # docs layout (sidebar + TOC + pager)

  components/
    landing/                       # landing page sections (all React .tsx)
      navbar.tsx                   # fixed navbar, morphs to floating pill on scroll
      footer.tsx
      hero-section.tsx
      device-showcase.tsx          # macbook + phone scroll-linked mockups
      features-section.astro
      platforms-section.astro
      faq-section.tsx
      language-switcher.tsx
      mobile-menu.tsx
      theme-toggle.tsx
      meeting-preview.tsx / .astro
      phone-meeting-preview.tsx
      social-proof-bar.tsx
      step-visuals/                # install flow step mockups
        invite-mockup.tsx
        meeting-mockup.tsx
        scale-mockup.tsx
        terminal-mockup.tsx
      ...other sections
    docs/                          # docs chrome (React .tsx)
      sidebar.tsx
      docs-mobile-sidebar.tsx
      toc.tsx
      search.tsx                   # minisearch-powered, reads search-index JSON
      mdx/                         # custom MDX components used in doc content
        callout.astro
        tabs.astro / tabs-*.astro
        installer-steps.astro
        systemd-services.astro
        create-admin.astro
        tabs-utils.ts
    ui/                            # shadcn/ui + device mockups
      button.tsx, dialog.tsx, sheet.tsx, accordion.tsx, input.tsx, table.tsx
      macbook-scroll.tsx           # scroll-linked React island (useScroll + useTransform)
      mobile-phone-scroll.tsx      # scroll-linked React island
      phone-mockup.tsx
      spotlight.tsx
      text-generate-effect.tsx     # per-word blur-reveal animation
    blog/                          # blog components (Astro .astro, not React)
      blog-post-card.astro
      blog-post-header.astro
      blog-back-link.astro
    seo/
      json-ld.astro

  content/
    docs/                          # MDX docs per locale
      en/                          # english (canonical), subdirs: getting-started/, architecture/, backend/, api/, guides/
      de/, fr, es, zh, ja, tr, fa, ar/
      sidebar.ts                   # manually maintained sidebar config (single source of truth for nav order)
      meta.ts                      # DocMeta interface
    blog/                          # MDX blog posts (currently en/ only)

  i18n/
    utils.ts                       # t(locale, "key.subkey"), getDir(), isValidLocale()
    locales/{lang}.ts              # 10 locale files, nested objects, dot-notation keys

  styles/
    global.css                     # Tailwind v4 + CSS vars theme + keyframe animations + .scroll-area

  lib/
    utils.ts                       # cn() class merge utility
    config.ts                      # site config
    github.ts                      # GitHub API helpers

  content.config.ts                # content collection schemas (docs + blog)

public/
  fonts/                           # self-hosted fonts
  search-index-{locale}.json       # auto-generated by scripts/, do NOT edit
  favicon.*, manifest.json, robots.txt, og-image.svg

scripts/
  generate-search-index.ts         # MiniSearch index builder, runs on dev/build
```

## Architecture

Framework: Astro 6, `output: "static"` (SSG only). React islands for interactive components.

Path aliases:
- `~/` → `src/`
- `@/content/*` → `src/content/*`

Content collections: `docs` + `blog`, both MDX. Schema in `src/content.config.ts`.

Docs fallback: Per-locale MDX in `src/content/docs/{locale}/`. Falls back to `en/` if locale file missing.

Sidebar: `src/content/docs/sidebar.ts` — manually maintained, flat order with section grouping.

Search: `scripts/generate-search-index.ts` builds per-locale MiniSearch indexes into `public/search-index-{locale}.json`. Run before dev/build.

## i18n

Build-time only. No runtime lib. Use `t(locale, "key.subkey")` from `src/i18n/utils.ts`.

10 locales: en, de, fr, es, zh, ja, tr, fa, ar, ru. Routes under `/:lang/`. `/` → `/en`.

RTL: fa, ar auto-set `dir="rtl"` via `getDir(locale)`.

Translations: `src/i18n/locales/{lang}.ts` — nested objects, dot-notation keys.

## Code Conventions

Components: shadcn/ui (CVA + Tailwind). Merge classes with `cn()` from `src/lib/utils.ts`.

Icons: lucide-react only.

Styling: Tailwind v4 + CSS vars via `@tailwindcss/vite` plugin. No `tailwind.config.*` file.

Animations:
- Scroll-linked (macbook-scroll, mobile-phone-scroll): React islands in `src/components/ui/`
- All others: CSS keyframes + `data-animate` / `.in-view` (IntersectionObserver in Base.astro)

Biome: Format + lint. Config: `biome.json`. Double quotes, semicolons, 2-space indent.

TypeScript: Strict mode (extends `astro/tsconfigs/strict`). `ignoreDeprecations: "6.0"` for TS 6.

Design system: Full reference in `DESIGN.md` — shadow-as-border, typography scale, spacing, component patterns, dark mode, RTL rules, animation do's/don'ts.

## Generated Files

Search indexes: `public/search-index-{locale}.json` — auto-generated, git-ignored. Do NOT edit.

Biome excludes: `public/search-index-*.json`, `.astro/`, `dist/`, `node_modules/`.

## Commit Messages

Format: `<action> <what> for <why>`

Actions: `add` (new), `delete` (removed), `update` (changed)

Examples:
```
add commit template for consistent git history
delete unused imports for cleaner module output
update README for new install instructions
```
