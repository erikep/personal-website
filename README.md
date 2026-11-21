# My Personal Website

Personal brand site for Erik: work experience, education, project portfolio, and writing.

## Stack

- [Astro](https://astro.build) + TypeScript
- Custom CSS design tokens (no component library)
- Markdown content collections for `experience`, `education`, `projects`, and `writing`
- Target deploy: Cloudflare Workers Static Assets

## Content

| Path | Purpose |
| --- | --- |
| `src/data/site.ts` | Name, tagline, email, social URLs, canonical `url` |
| `src/content/experience/` | Work history entries |
| `src/content/education/` | Education / academic entries |
| `src/content/projects/` | Portfolio case studies |
| `src/content/writing/` | Blog posts (`draft: true` hides from public lists/routes) |

## Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm run deploy` | Build and deploy to Cloudflare Workers Static Assets |
| `npm run cf:login` | Authenticate the Wrangler CLI with Cloudflare |
