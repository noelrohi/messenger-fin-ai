# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server on port 3000
- `pnpm build` - Build for production (runs vite build && tsc)
- `pnpm test` - Run tests with Vitest
- `pnpm lint` - Lint code with Biome
- `pnpm format` - Format code with Biome
- `pnpm check` - Run Biome linting and formatting checks

## Architecture

This is a React application built with:

- **TanStack Router** for file-based routing (routes in `src/routes/`)
- **Vite** for build tooling and development server
- **TypeScript** with strict configuration
- **Tailwind CSS** for styling
- **Biome** for linting and formatting (tab indentation, double quotes)
- **Vitest** for testing with React Testing Library

### Key Structure

- Routes are file-based in `src/routes/` with `__root.tsx` as the layout
- Components in `src/components/`
- Utilities in `src/lib/`
- Global styles in `src/styles.css`
- Route tree is auto-generated in `src/routeTree.gen.ts` (ignored by Biome)

### Path Aliases

- `@/*` maps to `./src/*` for imports

## Component Installation

Use Shadcn for UI components:
```bash
pnpx shadcn@latest add [component-name]
```

## Coding Standards

- Use tabs for indentation (Biome configuration)
- Use double quotes for strings
- Strict TypeScript with no unused locals/parameters
- Components use React 19 with JSX transform