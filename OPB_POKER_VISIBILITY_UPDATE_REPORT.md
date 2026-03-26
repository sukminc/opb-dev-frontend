# OPB Poker Visibility Update Report

Date: 2026-03-26
Report path: `opb-dev-frontend/OPB_POKER_VISIBILITY_UPDATE_REPORT.md`

## TASK

Implement the first controlled OPB Poker visibility update on `onepercentbetter.dev` so OPB Poker appears as a real in-progress project without turning the site into a poker-branded portfolio.

## WHAT I CHANGED

- Updated the project canon in [projects.ts](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/frontend/app/data/projects.ts):
  - removed the stale `1% Better - Coaching` featured card from the live site registry
  - added `onepercentbetter.poker Backend` as a public `poker` category project backed by `opb-poker-v2`
  - kept the wording grounded in the curated summary layer:
    - backend-first
    - cumulative memory
    - grounded runtime outputs
    - private alpha / not a shipped consumer app
- Updated [Projects.tsx](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/frontend/app/components/Projects.tsx):
  - replaced the poker placeholder behavior with a real project-card rendering path
  - renamed the section to `Poker Specialist Proof`
  - kept the section secondary to the main hiring story
  - tightened progress-label behavior so active public repos do not get mislabeled as `Live ✓` just because commit counts are high
  - always shows the editorial note field so the OPB Poker honesty line remains visible
- Updated [AboutSection.tsx](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/frontend/app/components/AboutSection.tsx):
  - added one controlled OPB Poker mention as backend/product proof
  - kept the mention brief and engineering-focused
- Updated [projects.spec.ts](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/frontend/tests/projects.spec.ts):
  - removed the stale coaching assertion
  - added assertions for the new OPB Poker card and section
- Updated stale repo-strategy/reference docs:
  - [README.md](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/README.md)
  - [CLAUDE.md](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/CLAUDE.md)
  - [idea.md](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/idea.md)
  - these now point to `career-growth-os` curated sources instead of legacy `opb-os` paths, and `CLAUDE.md` now explicitly points OPB Poker wording updates at the curated summary doc

## MESSAGE IMPACT

- The homepage Projects area now shows OPB Poker as a real technical/product build instead of a generic poker placeholder.
- The site remains hiring-first because OPB Poker appears in the projects surface and one About sentence, not in the hero, nav, or footer.
- The new wording makes OPB Poker legible as serious backend proof:
  - session-packet ingestion
  - cumulative memory
  - operator review and payload contracts
  - private alpha / not a shipped consumer app

## DECISIONS MADE

- Used `/Users/chrisyoon/GitHub/career-growth-os/docs/project-curation/opb-poker-curated-summary.md` as the main wording layer instead of inventing new poker copy locally.
- Kept OPB Poker in its own secondary category rather than moving it into the hero or featured-product stack.
- Removed `1% Better - Coaching` from the active homepage project canon because it was the main stale project-model conflict identified in the approved audit plan.
- Did not add a site-wide poker CTA, poker nav item, or poker footer signal.
- Updated the repo strategy docs to `career-growth-os` paths, but did not try to rewrite broader site strategy beyond the minimum needed to stop future source drift.

## RISKS / OPEN QUESTIONS

- The OPB Poker card currently uses the existing card system rather than a custom proof-card layout. That keeps the first pass small, but a later refinement may want a slightly richer proof-point presentation.
- `CLAUDE.md`, `README.md`, and `idea.md` were already dirty before this change. I updated only the specific stale source-path/content lines needed for this task and left unrelated user edits intact.
- The OPB Poker card currently links indirectly through commit activity rather than introducing a new explicit CTA row. That keeps the UI stable for now, but a later pass could add a more direct repo/domain link treatment if desired.

## OUT OF SCOPE

- Hero changes
- Nav changes
- Footer changes
- Site-wide poker branding
- Changes to `opb-poker-v2`
- Changes to `career-growth-os`
- New product claims or rollout-state changes

## TEST / VALIDATION

- `npm run build`
  - passed
- `npm test -- tests/projects.spec.ts`
  - passed
- `npm test -- tests/navigation.spec.ts`
  - failed, but the failures were outside the scope of this task:
    - existing `/about` navigation issues under the Playwright/Turbopack webserver
    - stale navigation expectations that do not match the current homepage copy
- Also manually re-read the changed content files to confirm:
  - OPB Poker appears as a real project card
  - the About mention is limited and engineering-focused
  - hero/nav/footer remain non-poker-centered
  - wording stays inside the curated summary truth boundary

## RECOMMENDED NEXT STEP

Preview-review this update, then do the next small refinement pass:

1. decide whether the OPB Poker card should get a direct repo/domain link treatment
2. clean up the unrelated navigation-spec drift
3. consider a later `/about` copy pass so OPB Poker appears there once, as calmly as it now does on the homepage
