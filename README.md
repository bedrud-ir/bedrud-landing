# Bedrud

An open source project by [theMadOrg](https://github.com/theMadOrg).

## Tech Stack

- [React Router 7](https://reactrouter.com/) - Full-stack React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Bun](https://bun.sh/) - Runtime and package manager
- [Vite](https://vite.dev/) - Build tool
- [Biome](https://biomejs.dev/) - Linter and formatter
- [i18next](https://www.i18next.com/) - Internationalization (en, fa)

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command              | Description             |
| -------------------- | ----------------------- |
| `bun dev`            | Start dev server        |
| `bun run build`      | Production build        |
| `bun run start`      | Start production server |
| `bun test`           | Run tests               |
| `bun run typecheck`  | Type check              |
| `bun run check`      | Biome lint + format     |
| `bun run format`     | Auto-format with Biome  |
| `bun run lint`       | Lint with Biome         |

## i18n

The app supports multiple languages with URL-based routing:

- `/en/` - English
- `/fa/` - فارسی (Farsi, RTL)
- `/` redirects to `/en`

Translations are in `app/locales/`. RTL direction is automatically set for Farsi.

## Docker

```bash
docker build -t bedrud .
docker run -p 3000:3000 bedrud
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
