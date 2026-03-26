# one-percent-better-landing

Public landing hub for the 1% Better portfolio.

This repo powers the site that presents Chris Yoon's current projects, recent GitHub activity, and hiring-first trust story. It is not just a marketing page. It is meant to behave like a live operating board for the public-facing portfolio.

Shared strategy lives in:

- `../../career-growth-os/data/projects.json`
- `../../career-growth-os/data/public_profile.json`
- `../../career-growth-os/docs/repo-role-contract.md`

## What lives here

- a Next.js frontend for the landing site
- lightweight route handlers that proxy GitHub activity into the UI
- project-card metadata in `frontend/app/data/projects.ts`
- commit-driven project sorting and MVP progress hints

## Product Card Model

Each project card should:

- map to a real public repo or an intentional public surface
- show latest linked GitHub activity
- display an MVP ETA set by judgment
- compute MVP progress automatically from `status`, `repoType`, and recent 14-day activity
- belong clearly to one of four groups: current main build, secondary builds, operating layer, or archive

Progress is intentionally heuristic. The goal is to show truthful momentum, not fake precision.

## Current Direction

- the site stays hiring-first, but the current main build is now poker
- poker appears as technical proof, not as a public strategy dump
- the poker card links to `.poker`, not to a public source repo
- smaller products like Focus and Today still appear, but as secondary builds
- archive work should support credibility without confusing the active brand
- `1% Better - OS` belongs on the site because it is now part of the real build workflow
- `1% Better - OS` should still read as internal leverage rather than the main public hero

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
