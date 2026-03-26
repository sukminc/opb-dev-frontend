# OPB Poker Update Audit And Plan

Date: 2026-03-26
Scope: `onepercentbetter.dev` content audit and update planning only

Primary wording source for OPB Poker:

- `/Users/chrisyoon/GitHub/career-growth-os/docs/project-curation/opb-poker-curated-summary.md`

Contract / ownership source:

- `/Users/chrisyoon/GitHub/career-growth-os/docs/repo-role-contract.md`

This document is an implementation guide for future site updates.
It is not a second source of product truth.

## Current Audit

## What Feels Current

- The homepage hero still reads as a hiring/trust surface rather than a poker site.
- The metadata and OG copy are recruiter-safe and no longer funding-heavy.
- The homepage and `/about` page are already cleaner and more credibility-first than earlier versions.
- The site still protects the main story: proven data engineering background plus visible current execution.

## What Is Outdated Or Misaligned

### 1. Project canon is stale

Current issue:

- `frontend/app/data/projects.ts` still treats `1% Better - Coaching` / `opb-poker-app` as a featured product.
- There is no explicit OPB Poker backend project entry grounded in the new curated summary layer.
- The current project registry therefore underrepresents the strongest current technical proof and overrepresents an older poker-facing product framing.

Why it matters:

- The strongest current poker-related signal is `opb-poker-v2`, not a generic coaching surface.
- The site is currently missing the exact project that the cross-repo summary flow was built to support.

### 2. The poker section is only a placeholder

Current issue:

- `frontend/app/components/Projects.tsx` renders a poker category even when there are no poker items.
- The section currently shows a generic `PokerVerticalCard` with "separate specialist lane" messaging, but no real OPB Poker project summary, proof points, or links.

Why it matters:

- The site acknowledges poker without actually presenting the project in a meaningful way.
- That makes poker feel half-hidden rather than intentionally positioned.

### 3. The About surfaces now understate OPB Poker

Current issue:

- `frontend/app/components/AboutSection.tsx` and `frontend/app/components/About.tsx` speak broadly about small products and public execution, but they do not name OPB Poker as a serious current backend/product build.

Why it matters:

- The site avoids poker-overload successfully, but now risks going too far in the other direction.
- Recruiters reading the site would not understand that one of the strongest current technical proofs is a backend-first poker performance system with memory, runtime outputs, and operator review.

### 4. Repo strategy docs still point at legacy OS paths

Current issue:

- `README.md`, `CLAUDE.md`, and `idea.md` still reference `../opb-os/...` as canonical sources.

Why it matters:

- The cross-repo contract now treats `career-growth-os` as the active curated layer.
- Future site work will drift if repo docs keep pointing at older source paths.

### 5. Tests enforce the old project surface

Current issue:

- `frontend/tests/projects.spec.ts` still asserts:
  - `1% Better - Coaching` must appear
  - poker product names should not appear

Why it matters:

- Even after content strategy is updated, the tests will block a truthful OPB Poker presentation unless they are revised.

## Placement Recommendation

## Homepage Visibility

Recommendation:

- OPB Poker should be visible on the homepage.
- It should not be hero-headline material.
- It should appear as a serious in-progress project in the projects area, with one concise mention elsewhere only if needed for context.

Best placement:

- primary visibility: Projects section
- secondary visibility: a brief credibility sentence on `/about` or the homepage About section
- avoid: hero headline, navbar, footer-wide branding, or any copy that makes the whole site feel like a poker destination

## Projects Section

Recommendation:

- Replace the current poker placeholder with a real OPB Poker project card or mini-group.
- The section should feel like "specialist proof" rather than "future poker product lane."

Recommended section behavior:

- keep poker as its own category or subsection
- include one main OPB Poker backend card
- optionally include one small supporting line about the separate domain if a public destination is worth linking
- do not turn the section into a multi-card poker catalog on the dev homepage

## Detail Page Or Link Strategy

Recommendation:

- Do not add an internal project detail page yet.
- Start with external links from the card to:
  - the GitHub repo
  - the separate poker domain only if the destination is ready enough to support recruiter clicks honestly

Why:

- The current site has only `/` and `/about`.
- A one-off internal detail page would add structure that the rest of the site does not use yet.
- The cleaner first step is a strong homepage project card plus smart outbound links.

Future option:

- If the site later adds multiple project detail pages, OPB Poker should be one of the first detail routes because it has enough depth to justify it.

## Content Ownership Recommendation

## Should Come From Curated Summaries

Use `career-growth-os` curated OPB Poker language for:

- project title
- short project summary paragraph
- technical proof points
- honesty boundary
- "not a solver / not RTA / not a shipped consumer app" framing

## Should Stay Site-Specific

Let `opb-dev` choose:

- homepage card length
- section descriptions
- tagline length
- CTA labels
- link placement
- whether the site shows one proof bullet or three

Rule:

- `opb-dev` should compress and format curated truth, not rewrite OPB Poker from scratch.

## Page-By-Page Update Plan

## 1. Homepage Hero

Keep:

- the hiring-first headline
- the proven-background framing
- the non-poker-default brand read

Change later:

- tighten one support line so current execution can include a clearer signal that the work includes serious backend systems, not only small apps

Do not:

- turn the hero into poker language
- mention solver / coaching / poker strategy at hero level

## 2. Homepage Projects Section

Highest-priority update.

Plan:

- remove the stale `1% Better - Coaching` featured role from the current project canon unless there is a current reason to keep it as an active public asset
- add one OPB Poker backend entry derived from the curated summary layer
- replace the placeholder poker vertical card with a real structured section

Recommended OPB Poker card shape:

- title: backend-first OPB Poker / onepercentbetter.poker backend
- status: building / in progress
- description: short site-compressed version of the curated summary
- proof points:
  - session-packet ingestion and truth assembly
  - cumulative memory and deterministic runtime outputs
  - operator review / QA / payload contracts
- honesty line:
  - private alpha / not a shipped consumer app

Section copy goal:

- "specialist lane with real technical depth"
- not "future poker business"
- not "generic separate vertical"

## 3. Homepage About Section

Plan:

- keep recruiter-fast scan behavior
- add one sentence that makes OPB Poker legible as current engineering proof

Recommended direction:

- current proof layer includes live portfolio work plus OPB Poker as a backend-first system showing memory, runtime outputs, and QA-driven product shaping

Avoid:

- telling poker origin history
- over-explaining why poker is allowed on the site

## 4. `/about` Page

Plan:

- keep the current order: current build -> philosophy -> credibility
- update the Founder/current-build section so it names OPB Poker once, clearly and calmly

Recommended direction:

- describe OPB Poker as one of the clearest current backend AI/data-system builds
- keep the page centered on Chris, not on the poker product as a whole

Avoid:

- turning `/about` into a product page
- long explanations about future poker ambitions

## 5. Metadata And Shared Previews

Plan:

- no major structural change needed
- keep metadata recruiter-first
- do not inject poker language into OG/title/description unless the whole site positioning changes

Reason:

- shared previews should still describe the site as a hiring/trust surface
- OPB Poker belongs in page content, not in the main site metadata

## 6. Links Structure

Plan:

- do not add poker to the top nav
- do not add poker as a footer-wide brand signal
- keep poker links local to the OPB Poker card/section

Recommended link order inside the OPB Poker area:

1. GitHub repo
2. separate public domain only if ready for recruiter traffic

## 7. Repo Strategy Docs

Plan:

- update `README.md`, `CLAUDE.md`, and any root planning docs so they reference `career-growth-os` as the current curated source layer instead of legacy `opb-os` paths

Reason:

- the implementation should follow the new cross-repo contract

## 8. Tests

Plan:

- revise `frontend/tests/projects.spec.ts` after implementation
- remove assumptions that poker project names must not appear
- assert the new intended state instead:
  - homepage stays hiring-first
  - OPB Poker appears in the projects surface as a secondary but real project

## Recommended Future Site Structure

## Homepage

- hero: career credibility first
- projects:
  - current product work
  - OPB Poker specialist proof
  - operating layer
  - archive / proof of work
- about section: career context plus one clear current-build line

## About

- current build summary
- experience and credibility
- one concise paragraph naming OPB Poker as serious current backend/product evidence

## No Internal Project Pages Yet

- keep the site shallow until multiple projects justify detail routes

## Honest Poker Presentation Rule

Use this rule on every future site edit:

- visible, but secondary
- technical, not sensational
- engineering proof, not poker identity
- strong current implementation, but honest about what is still in progress

Safe public framing:

- backend-first poker performance system
- cumulative memory, runtime outputs, QA, operator review
- private alpha / in-progress productization

Unsafe public framing:

- shipped poker app
- open beta
- solver
- live poker assistant
- site-wide poker branding

## Recommended Implementation Sequence

1. Align repo docs with the new `career-growth-os` source path.
2. Update the projects registry and section structure so OPB Poker has a real card.
3. Revise homepage/About copy to mention OPB Poker once, clearly and calmly.
4. Update tests to enforce the new intended project surface.
5. Preview-review before production because the site is recruiter-facing.
