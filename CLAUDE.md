# CLAUDE.md

## What this is
Landing page + portfolio for **onepercentbetter.poker** — "GTO Defends. We Exploit."
Repo: `opblandingpage`. Backend lives in a separate repo.

## Owner
Chris S. Yoon · Senior Data Engineer & AI Builder · Toronto ON
`linkedin.com/in/sukminyoon` · `github.com/sukminc` · Open to Work

## Pages
- `/` — Brand hero ("GTO Defends. We Exploit.") + 4 project flip-cards
- `/about` — Full resume (experience, skills, education). LinkedIn CTA only, no PDF download.

## Projects (`frontend/app/data/projects.ts`)
1. **onepercentbetter** — GTO Exploit Analytics · `building` · featured
2. **Blue Jays Moneyball ETL** — Self-Validating ELT Pipeline · `live`
3. **ActionKeeper** — Staking Agreement Platform · `building`
4. **TwelveLabs API Validator** — Multimodal Search Validation · `live`

## Stack
Next.js · Tailwind CSS v4 · Framer Motion · TypeScript
Deploy: Vercel → `onepercentbetter.poker`

## Commands
```bash
cd frontend && npm run dev    # localhost:3000
cd frontend && npm run build
```

## Notes
- Resume PDF is gitignored — never commit
- After repo rename, reconnect Vercel: Settings → Git → Disconnect → reconnect
