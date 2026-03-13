# Frontend

Next.js app for the 1% Better landing page.

## Responsibilities

- render the public brand site
- fetch repo activity through local route handlers
- sort project cards by recent GitHub activity
- show MVP progress as an auto-recommended heuristic

## Project Cards

The projects section is driven by:

- `app/data/projects.ts`
- `app/components/Projects.tsx`
- `app/api/commits/route.ts`

Each card combines:

- editorial metadata such as title, description, `status`, `repoType`, and `mvpEta`
- live GitHub data such as latest commit, total commits, and recent 14-day activity

Do not add fixed progress percentages back into the data file. Progress should be derived in the UI layer from the heuristic.

## Commands

```bash
npm install
npm run dev
npm run build
npm test
```
