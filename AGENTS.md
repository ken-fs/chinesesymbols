# Repository Guidelines

This repository is a Next.js 14 (App Router) project written in TypeScript with Tailwind CSS. Use pnpm for all package tasks.

## Project Structure & Module Organization
- `app/` – routes and pages (`layout.tsx`, `page.tsx`, `symbol/[id]/page.tsx`), global styles in `app/globals.css`.
- `components/` – reusable React components (PascalCase, default export).
- `data/` – static datasets (`symbols.ts`, `categories.ts`).
- `types/` – TypeScript types (`symbol.ts`, `user.ts`).
- `utils/` – helpers (`keyGenerator.ts`, named exports).
- `hooks/` – custom hooks (`useUserPreferences.ts`).

## Build, Test, and Development Commands
- `pnpm install` – install dependencies.
- `pnpm dev` – run local dev server at http://localhost:3000.
- `pnpm build` – production build.
- `pnpm start` – start production server.
- `pnpm lint` – run ESLint (extends `next/core-web-vitals`).
Note: pnpm is required (not npm/yarn).

## Coding Style & Naming Conventions
- TypeScript, 2‑space indentation, semicolons, double quotes.
- React components: PascalCase filenames in `components/`, default export.
- Hooks: prefix with `use` (e.g., `useUserPreferences.ts`).
- Utilities: lowerCamelCase filenames; prefer named exports.
- Types/interfaces: PascalCase in `types/`; keep `ChineseSymbol` and `SymbolCategory` in sync with `data/`.
- Styling: Tailwind CSS utilities; favor the existing tech‑red theme tokens from `tailwind.config.ts`.

## Testing Guidelines
- No test runner is configured yet. If adding tests:
  - Unit/integration: Vitest + @testing-library/react; name as `*.test.ts(x)` colocated or under `__tests__/`.
  - E2E: Playwright in `e2e/`.
  - Add a `pnpm test` script and keep coverage meaningful around `components/` and critical utils.

## Commit & Pull Request Guidelines
- Follow Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `test:`, `chore:` (existing history primarily uses `feat:`).
- PRs should include: clear description, linked issues (`Closes #123`), before/after screenshots for UI changes, and a short testing note.
- Ensure `pnpm lint` and `pnpm build` pass before requesting review.

## Security & Configuration Tips
- Do not commit build artifacts (`.next/`) or secrets. If environment variables are introduced, store them in `.env.local` (git‑ignored).
- Keep to the App Router; do not introduce the Pages Router.
- Prefer small, focused PRs; align new data with `types/symbol.ts` and update `data/` consistently.

