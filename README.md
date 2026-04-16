# Bedrud

An open source project by [theMadOrg](https://github.com/theMadOrg).

## Tech Stack

- [Astro](https://astro.build/) - Static site generator (SSG)
- [React](https://react.dev/) - Interactive islands
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Bun](https://bun.sh/) - Runtime and package manager
- [Biome](https://biomejs.dev/) - Linter and formatter

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts

| Command              | Description             |
| -------------------- | ----------------------- |
| `bun dev`            | Start dev server        |
| `bun run build`      | Production build (SSG)  |
| `bun run preview`    | Preview production build|
| `bun test`           | Run tests               |
| `bun run typecheck`  | Type check              |
| `bun run check`      | Biome lint + format     |
| `bun run format`     | Auto-format with Biome  |
| `bun run lint`       | Lint with Biome         |

## i18n

Build-time i18n with 9 locales. All routes under `/:lang/` prefix:

- `/en/` - English
- `/de/` - Deutsch
- `/fr/` - Français
- `/es/` - Español
- `/zh/` - 中文
- `/ja/` - 日本語
- `/tr/` - Türkçe
- `/fa/` - فارسی (RTL)
- `/ar/` - العربية (RTL)

`/` redirects to `/en`. RTL direction set automatically from locale.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
