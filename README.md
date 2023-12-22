# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Librairies

Intégration des templates avec TailwindCSS & HeadlessUI (pour les composants complexes, autocomplete, etc)

Localstorage avec Pinia

Internationalisation avec i18n

Appels API avec le plugin ohmyfetch (accessibles de façon globale avec l'attribut "$api")

## IndexDB

La gestion d'indexDB se fait dans le plugin localforage (création des différentes instances, et provider).
On peut ensuite y accéder directement dans les différents templates avec l'attribut global "$storage".
