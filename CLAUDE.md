# CLAUDE.md — 1% Better Landing Hub

## What this is
Public brand hub and shipping board for the 1% Better portfolio.

- Primary role: show current projects, recent GitHub execution, and funding intent
- Current deploy target: primary 1% Better landing domain
- Long-term brand direction: `OnePercentBetter.now`
- Local repo: `one-percent-better-landing`

Rule: if a project is not listed in `frontend/app/data/projects.ts`, it is not an active public brand asset.
Rule: if `frontend/app/data/projects.ts` conflicts with `../one-percent-better-os/projects.json` or `../one-percent-better-os/public_profile.json`, treat the OS files as canonical and update the landing data intentionally.

## Owner
Chris S. Yoon · Senior Data Engineer & AI Builder · Toronto, ON

## Brand Strategy

### Phase 1 — Now
- Public story: data engineer + AI builder who ships fast
- Emphasize proof of execution, not grand claims
- The landing page is a live portfolio, not a static resume
- Keep the core story centered on simple products, not bigger systems

### Phase 2 — Post-MVP
- Move public brand toward `OnePercentBetter.now`
- Keep the umbrella brand broad: systems, automation, tooling, small products
- Let simple shipping-first apps fund deeper products

### Phase 3 — Long term
- Split niche verticals into their own surfaces when they deserve it
- Keep the main brand clean, general, and portfolio-first

## Projects Canon
Current public projects live in `frontend/app/data/projects.ts`.

At the moment the site should represent:
- Featured Products:
  - `1% Better Today`
  - `1% Better - Focus`
- Poker Product Line:
  - `1% Better - Exploit Better`
  - `1% Better - Action Keeper`
- Operating Layer:
  - `1% Better - OS`
- Archive / Proof of Work:
  - `Blue Jays Moneyball ETL`
  - `TwelveLabs API Validator`

Public hierarchy matters:

- `1% Better Today` is the core product.
- `1% Better - Focus` supports the same thesis.
- `1% Better - This Website` is the trust and distribution layer.
- `1% Better - OS` is internal leverage and should not overpower the main public story.
- Poker is a separate vertical, not the default face of the brand.

## Project Card Rules
- Every project card must map to one repo via `repoName`
- Latest commit and total commit count come from `frontend/app/api/commits/route.ts`
- Project grouping is driven by `category`, then recent GitHub activity inside each group
- MVP progress is not hand-entered anymore
- MVP progress is auto-recommended from:
  - project `status`
  - project `repoType`
  - recent 14-day commit activity
- Featured products should read like strategic products, not like low-progress experiments
- Keep `mvpEta` human-authored, because timeline is still editorial judgment

## Editing Rules
- When adding a new public project, update `frontend/app/data/projects.ts`
- Before changing project strategy, check `../one-percent-better-os/projects.json` and `../one-percent-better-os/public_profile.json`
- Add a `repoType` that reflects the actual shape of the repo
- Do not hardcode progress percentages in cards
- If the progress heuristic changes, update both the card UI and the explanatory copy
- If tests mention project names or progress hints, update `frontend/tests/projects.spec.ts`
- Push back on over-engineering: if a first release needs auth, billing, background jobs, and admin surfaces together, it is too broad
- Prefer one clear user loop over a more impressive architecture

## Voice
- Precise, calm, and direct
- Shipping-focused
- No inflated startup language
- Prefer evidence: commits, working links, concrete outcomes

## Stack
- Frontend: Next.js 16, TypeScript, Tailwind CSS v4
- APIs in this repo: App Router route handlers
- Deploy: Vercel

## Commands
```bash
cd frontend && npm run dev
cd frontend && npm run build
cd frontend && npm test
```

## Notes
- Vercel deploys from `main`
- The project cards are part portfolio, part operating dashboard
- If a repo is newly created but missing on the site, add it quickly so the brand stays truthful
- The landing page is allowed to style and sequence the story, but it should not invent a different strategy from the OS registry
