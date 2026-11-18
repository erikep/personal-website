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
| `src/data/site.ts` | Name, tagline, email, social URLs |
| `src/content/experience/` | Work history entries |
| `src/content/projects/` | Portfolio case studies |
| `src/content/writing/` | Blog posts (`draft: true` hides from public lists later) |

## Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |
