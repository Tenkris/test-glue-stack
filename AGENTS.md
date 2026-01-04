# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Expo Router screens and layouts. `_layout.tsx` defines the root stack; `index.tsx` maps to `/`.
- `components/`: Shared UI and providers. The Gluestack UI provider lives at `components/ui/gluestack-ui-provider/`.
- `assets/`: Static images and icons used by the app.
- `app-example/`: Archived starter app content for reference.
- Root config: `app.json`, `babel.config.js`, `eslint.config.js`, `tailwind.config.js`, `tsconfig.json`, `global.css`.

## Build, Test, and Development Commands
- `npm install`: Install dependencies.
- `npm run start` or `npx expo start`: Start the Expo dev server.
- `npm run android` / `npm run ios` / `npm run web`: Launch a platform target from Metro.
- `npm run lint`: Run Expo's ESLint rules.
- `npm run reset-project`: Listed in `package.json`, but the script file is not in this repo; restore it before running.

## Coding Style & Naming Conventions
- TypeScript is in strict mode; keep types explicit for public APIs.
- Indentation is 2 spaces; keep semicolons consistent with the file.
- React components use PascalCase and live in `.tsx` files.
- Route names are file-based under `app/` (e.g., `app/settings.tsx` -> `/settings`).
- Styling uses NativeWind class names; design tokens come from `tailwind.config.js`, with base styles in `global.css`.
- Use the `@/` path alias for root-relative imports when helpful.

## Testing Guidelines
- No test framework or coverage thresholds are configured yet.
- If you add tests, prefer `__tests__/` or `*.test.tsx` next to the feature, and document the new test command in `package.json`.

## Commit & Pull Request Guidelines
- Commit history uses sentence-case, descriptive messages without conventional prefixes; follow that pattern.
- PRs should include a concise summary, rationale, and screenshots for UI changes; note any commands you ran (`npm run lint`, `npx expo start`, etc.).
