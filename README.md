# Full Stack Monorepo with Turborepo, ESLint, Next.js, Express.js, Tailwind CSS, and shadcn

A full-stack monorepo starter template using **Turborepo**, **Next.js**, **Express.js**, **Tailwind CSS**, **shadcn**, and **ESLint**. Based on [The Halftime Code](https://www.thehalftimecode.com/building-a-full-stack-monorepo-with-turbopack-biome-next-js-express-js-tailwind-css-and-shadcn/) tutorial.

## Features

- **Monorepo** managed by Turborepo with pnpm workspaces
- **Next.js 16** frontend with React 19 and Turbopack
- **Express.js** backend with TypeScript
- **Tailwind CSS 4** with shadcn/ui components
- **TypeScript 6** with strict mode across all packages
- **ESLint 10** with flat config (`.ts` config files), Prettier, and perfectionist

## Project Structure

```
/apps
  /web          — Next.js frontend
  /server       — Express.js backend

/packages
  /types        — Shared types and API client
  /ui           — shadcn component library (Tailwind CSS)
  /utils        — Shared utility functions
```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/ivesfurtado/next-express-turborepo.git
   cd next-express-turborepo
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:3001`

4. **Build for production**

   ```bash
   pnpm build
   ```

5. **Lint**

   ```bash
   pnpm lint
   ```

## Tech Stack

| Layer    | Technology                                       |
| -------- | ------------------------------------------------ |
| Frontend | Next.js 16, React 19, Tailwind CSS 4, shadcn/ui  |
| Backend  | Express.js, TypeScript                           |
| Build    | Turborepo, pnpm workspaces                       |
| Linting  | ESLint 10 (flat config), Prettier, perfectionist |
| Language | TypeScript 6 (strict)                            |

## License

MIT

## Further Reading

For further details on building and setting up this monorepo, check out the original tutorial on [The Halftime Code](https://www.thehalftimecode.com/building-a-full-stack-monorepo-with-turbopack-biome-next-js-express-js-tailwind-css-and-shadcn/).
