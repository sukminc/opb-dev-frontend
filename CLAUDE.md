# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**onepercentbetter.poker** — "GTO Defends. We Exploit."

A GTO exploit quantification platform that identifies opponent deviations from GTO equilibrium and translates them into actionable, data-driven poker strategy. Currently a marketing/landing site promoting the product; the backend analytical engine is already functional and will be surfaced in the UI.

## Core Product Concepts

Three primary feature areas (the "cards") being built toward:
- **Deviation Card** — Quantifies the Δ between parsed GGPoker hand histories and GTO equilibrium
- **Moneyball Efficiency Card** — Identifies high fold-equity / low-risk spots automatically
- **Action Keeper Logic** — Proposes optimal bet sizing and bankroll risk management based on current equity

## Design System

- **Layout:** Bento grid — metrics surfaced as independent interactive cards
- **Colors:** Deep Black `#000000`, Electric Blue `#007AFF`, Profit Green accents
- **Logo:** Minimalist casino chip engraved with "1%"
- **Animation:** Framer Motion for card interactions (installed but not yet wired up)
- **Funding CTAs:** All link to `https://buymeacoffee.com/chris.yoon`

## Commands

### Backend (FastAPI + SQLite)
```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

uvicorn app.main:app --reload        # dev server at localhost:8000, docs at /docs
PYTHONPATH=. pytest -v               # all tests
PYTHONPATH=. pytest tests/test_api.py::test_health -v  # single test
```

### Frontend (Next.js)
```bash
cd frontend
npm install

npm run dev    # dev server at localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

## Architecture

Two independent services. Frontend is a static marketing page; backend is a fully functional analytical API.

**Backend (`backend/app/`)**
- `main.py` — FastAPI app, all routes, CORS for `localhost:3000` and `onepercentbetter.poker`
- `models.py` — SQLAlchemy ORM: `Tournament` (1-to-many) → `Hand`
- `db.py` — SQLite engine, session factory, FastAPI dependency injection
- `parser.py` — Regex-based GGPoker hand history parser (filename metadata, hand splitting, position/action/result extraction). Actions stored as `"folds"`, `"calls"`, `"raises"`, `"checks"`, `"bets"` (with the 's').
- `analytics.py` — Pandas aggregation: positional stats, P&L curves, exploit signals

**Backend API endpoints:**
| Method | Path | Purpose |
|--------|------|---------|
| GET | `/health` | Health check |
| POST | `/ingest` | Upload GGPoker `.txt` file |
| GET | `/tournaments` | List tournaments |
| PATCH | `/tournaments/{id}` | Update result/finish |
| GET | `/analytics/signals` | Top-level exploit metrics (P&L, ROI, VPIP, best/worst positions) |
| GET | `/analytics/positional` | Win-rate stats by position |
| GET | `/analytics/pnl` | Cumulative P&L over time |

**Frontend (`frontend/app/`)**
- `page.tsx` — Home page (assembles all section components)
- `components/` — Navbar, Hero, About, Roadmap, FundingCTA, Footer
- Styling: Tailwind CSS v4, dark theme
- Path alias: `@/*` → project root

**Deployment:** Frontend on Vercel (`vercel.json`), backend on any ASGI host.

## Testing

50 tests across 3 files (`PYTHONPATH=. pytest -v` from `backend/`):
- `test_parser.py` — parser unit tests (positions, actions, filename parsing, multi-hand splits)
- `test_api.py` — API integration tests (resets `test.db` on each run for clean empty-state assertions)
- `test_analytics.py` — analytics unit tests with in-memory SQLite fixtures
