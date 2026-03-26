# OPB Poker Update Audit Report

Date: 2026-03-26
Report path: `opb-dev-frontend/OPB_POKER_UPDATE_AUDIT_REPORT.md`

## TASK

Audit the live `opb-dev` site repo and produce a concrete update plan for `onepercentbetter.dev` so OPB Poker can be shown clearly as a major in-progress project without turning the portfolio site into a poker-only site.

## WHAT I CHANGED

- Added [OPB_POKER_UPDATE_AUDIT_AND_PLAN.md](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/OPB_POKER_UPDATE_AUDIT_AND_PLAN.md).
- The new audit/plan doc includes:
  - a content audit of the current homepage, projects, about, tests, and repo strategy docs
  - a page-by-page update plan
  - a homepage / projects / about / links placement recommendation for OPB Poker
  - a content-ownership split between curated summary inputs and site-specific shorter copy
  - an honesty rule for presenting poker without turning the site into a poker-branded surface
- Chose the report path `opb-dev-frontend/OPB_POKER_UPDATE_AUDIT_REPORT.md` because this repo already keeps planning/review docs at the repo root rather than in a dedicated reports directory.

## MESSAGE IMPACT

- `opb-dev` now has a concrete plan for how to consume the new curated OPB Poker summary layer instead of inventing site copy from scratch.
- The plan keeps the site recruiter-friendly while making OPB Poker visible as a serious technical/product project.
- The update path is now clear: add real OPB Poker project placement, keep it secondary to the overall hiring story, and remove stale project assumptions that no longer match the new cross-repo contract.

## DECISIONS MADE

- Treated `/Users/chrisyoon/GitHub/career-growth-os/docs/project-curation/opb-poker-curated-summary.md` as the main wording source for OPB Poker presentation.
- Treated `/Users/chrisyoon/GitHub/career-growth-os/docs/repo-role-contract.md` as the ownership rule:
  - `opb-poker-v2` proves
  - `career-growth-os` curates
  - `opb-dev` presents
- Chose not to recommend hero-level poker framing.
- Chose to recommend homepage project-level visibility instead:
  - visible
  - secondary
  - technically serious
- Chose not to recommend an internal OPB Poker detail page yet because the site currently has a shallow structure and a strong project card is the cleaner next step.

## RISKS / OPEN QUESTIONS

- `opb-dev-frontend` still has a stale active-project model centered on `1% Better - Coaching`, so implementation will require a real project-canon decision rather than copy-only changes.
- Existing root docs still reference legacy `opb-os` paths; if those are not updated during implementation, future contributors may pull from the wrong source layer.
- The separate poker domain may or may not be ready for recruiter-facing outbound clicks; the implementation should verify that before adding a prominent domain link.
- There is still an open strategic choice about whether OPB Poker should be one card or a tiny two-item subsection on the homepage. This plan recommends one main card first.

## OUT OF SCOPE

- Frontend implementation
- Site code edits
- Visual redesign
- Changes to `opb-poker-v2`
- Changes to `career-growth-os`
- Runtime or product behavior changes

## TEST / VALIDATION

- Verified the live `opb-dev` root first: `/Users/chrisyoon/GitHub/opb-dev`
- Verified the live site repo structure and current worktree state in `/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend`
- Grounded the audit in:
  - [projects.ts](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/frontend/app/data/projects.ts)
  - [Hero.tsx](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/frontend/app/components/Hero.tsx)
  - [Projects.tsx](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/frontend/app/components/Projects.tsx)
  - [AboutSection.tsx](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/frontend/app/components/AboutSection.tsx)
  - [About.tsx](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/frontend/app/components/About.tsx)
  - [layout.tsx](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/frontend/app/layout.tsx)
  - [projects.spec.ts](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/frontend/tests/projects.spec.ts)
  - existing root strategy docs such as [CLAUDE.md](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/CLAUDE.md), [README.md](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/README.md), and [DEV_SURFACE_REVIEW.md](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/DEV_SURFACE_REVIEW.md)
- Cross-checked planned OPB Poker presentation against:
  - [opb-poker-curated-summary.md](/Users/chrisyoon/GitHub/career-growth-os/docs/project-curation/opb-poker-curated-summary.md)
  - [repo-role-contract.md](/Users/chrisyoon/GitHub/career-growth-os/docs/repo-role-contract.md)

## RECOMMENDED NEXT STEP

Use [OPB_POKER_UPDATE_AUDIT_AND_PLAN.md](/Users/chrisyoon/GitHub/opb-dev/opb-dev-frontend/OPB_POKER_UPDATE_AUDIT_AND_PLAN.md) as the implementation brief for the next pass, starting with the project registry and projects section so the homepage gains a real OPB Poker project card before any broader copy refinements land.
