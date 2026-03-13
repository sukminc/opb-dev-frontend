# one-percent-better-landing

Public landing hub for the 1% Better portfolio.

This repo powers the site that presents Chris Yoon's current projects, recent GitHub activity, and funding-first product story. It is not just a marketing page. It is meant to behave like a live operating board for the public-facing portfolio.

## What lives here

- a Next.js frontend for the landing site
- lightweight route handlers that proxy GitHub activity into the UI
- project-card metadata in `frontend/app/data/projects.ts`
- commit-driven project sorting and MVP progress hints

## Product Card Model

Each project card should:

- map to a real GitHub repository
- show latest linked GitHub activity
- display an MVP ETA set by judgment
- compute MVP progress automatically from `status`, `repoType`, and recent 14-day activity

Progress is intentionally heuristic. The goal is to show truthful momentum, not fake precision.

## Current Direction

- simple, fast-shipping products stay near the center of the story
- deeper products can exist publicly, but should not dominate the narrative unless they are actively shipping
- `1% Better OS` belongs on the site because it is now part of the real build workflow

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Verification
```bash
cd frontend
npm run build
npm test
```

## Key Paths

- `frontend/app/data/projects.ts`: public project registry
- `frontend/app/components/Projects.tsx`: project card UI and auto-progress logic
- `frontend/app/api/commits/route.ts`: GitHub commit proxy used by the cards
- `frontend/tests/projects.spec.ts`: smoke coverage for the projects section

## Deploy

- deploy target: Vercel
- production branch: `main`
