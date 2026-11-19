# Erik — personal website

Personal brand site for Erik: work experience, project portfolio, and writing.

## Stack

- [Astro](https://astro.build) + TypeScript
- Custom CSS design tokens (no component library)
- Markdown content collections for `experience`, `projects`, and `writing`
- Target deploy: Cloudflare Workers Static Assets

## Develop

```bash
npm install
npm run dev
```

## Content

| Path | Purpose |
| --- | --- |
| `src/data/site.ts` | Name, tagline, email, social URLs, canonical `url` |
| `src/content/experience/` | Work history entries |
| `src/content/projects/` | Portfolio case studies |
| `src/content/writing/` | Blog posts (`draft: true` hides from public lists/routes) |

Update `site.url` in `src/data/site.ts` and `site` in `astro.config.mjs` together when the production domain is final. Default social share image is `public/images/og.jpg` (`site.ogImage`); override per page with the `image` prop on `BaseLayout`.

## Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm run deploy` | Build and deploy to Cloudflare Workers Static Assets |
| `npm run cf:login` | Authenticate the Wrangler CLI with Cloudflare |

## Deploy

Static Astro output is served from `./dist` via [`wrangler.jsonc`](wrangler.jsonc).

```bash
npm run cf:login   # once
npm run deploy
```

For push-to-deploy, connect this GitHub repo in the Cloudflare dashboard under **Workers & Pages** → your Worker → **Settings** → **Builds** (build: `npm run build`, deploy: `npx wrangler deploy`).
