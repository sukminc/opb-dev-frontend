# The Closing Line

A OnePercentBetter project. Grading the closing lines of the world’s prediction markets.

A spectator’s scoreboard tracking which prediction market is sharper, category by category and season by season. Season 1 compares Polymarket and Kalshi on the 2026 US midterms Senate showdown.

## Season 1 status

**Awaiting results.** No election outcomes, venue scores, or winners have been inferred. This folder can be copied into a standalone GitHub repository later; it currently lives alongside the Next.js site. No scheduled collector or result-ingestion service is implemented.

## Methodology

The project aims to freeze prices just before an event resolves and grade those predictions against the actual outcome. This first release uses the project owner’s supplied Election Day snapshot from public APIs, not a newly collected or independently verified historical capture. Raw API responses, contract IDs, per-market Kalshi timestamps, and the exact price basis (bid, ask, last, or midpoint) were not supplied.

- Election Day: November 3, 2026; Eastern Time (America/New_York, UTC−05:00).
- Polymarket: 18:53 ET. Kalshi: 18:54–19:04 ET.
- These snapshots precede later battleground poll closes. The Kalshi window overlaps the listed 19:00 ET closes; do not label every quote as pre-poll-close or a verified final closing quote.
- Prices are implied probabilities in percent that the Democrat wins, except Nebraska: **Ricketts, the Republican incumbent, wins**, against an independent challenger. Do not complement Nebraska into a Democratic win probability.
- Poll closes are the supplied reference times. Alaska 24:00 ET means 00:00 ET on November 4.
- Missing Kalshi House data stays null / n/a; it is never treated as 0%.
- Keep frozen predictions separate from later verified outcomes and retain outcome sources and resolution dates when results are added.

## Scoring

Convert percent to probability first: `p = price_pct / 100`. Let `y = 1` if the named subject wins, otherwise `0`. Nebraska uses a Ricketts win as `y = 1`.

- **Brier score:** `(p − y)²`. Lower is better; 0 is perfect.
- **Log loss:** `−[y ln(p) + (1 − y) ln(1 − p)]`, equivalently `−ln(probability assigned to the actual outcome)`. Lower is better. Natural logarithms punish confident wrong predictions much more heavily. An impossible realized outcome has infinite loss; do not silently clip probabilities.
- **Calibration:** after verified results, group probabilities into fixed 10-point bins (0–10%, 10–20%, …, 90–100%; include 100% in the final bin), and compare each bin’s mean predicted probability with its hit rate. Report sample counts; small bins are noisy.
- Compare venue averages over the same resolved, paired state races only. Control markets are reported separately; missing prices are excluded, not zero-filled. This release deliberately leaves results, Brier scores, log losses, and calibration uncomputed.
- **Divergence:** absolute Polymarket minus Kalshi probability, in percentage points. Among 14 paired Senate races, 13 are within 2.5 points (inclusive); mean absolute divergence is 1.9 points, rounded to one decimal. Control markets are excluded from that statistic.

## Frozen data

Canonical machine-readable source: [data/snapshot-2026-midterms.json](data/snapshot-2026-midterms.json). The report imports this same file.

| Market | Priced subject / matchup | Polymarket | Kalshi | Gap (pts) | Poll close ET |
| --- | --- | ---: | ---: | ---: | --- |
| Senate (D) | Democratic Senate control | 86.5% | 87.0% | 0.5 | — |
| House (D) | Democratic House control | 98.1% | n/a | n/a | — |
| Texas | Talarico (D) vs Paxton (R) | 83.5% | 81.0% | 2.5 | 20:00 |
| Michigan | El-Sayed (D) vs Rogers (R) | 85.5% | 84.0% | 1.5 | 20:00 |
| Ohio special | Brown (D) vs Husted (R) | 82.5% | 81.0% | 1.5 | 19:30 |
| Maine | Jackson (D) vs Collins (R) | 74.5% | 73.0% | 1.5 | 20:00 |
| Alaska | Peltola (D) vs Sullivan (R) | 73.5% | 74.0% | 0.5 | 24:00 |
| Kansas | Hamilton (D) vs Marshall (R) | 72.5% | 74.0% | 1.5 | 20:00 |
| Iowa | Turek (D) vs Hinson (R) | 64.0% | 62.0% | 2.0 | 21:00 |
| North Carolina | Cooper (D) vs Whatley (R) | 98.4% | 98.8% | 0.4 | 19:30 |
| Georgia | Ossoff (D) vs Collins (R) | 98.8% | 98.4% | 0.4 | 19:00 |
| South Carolina | Andrews (D) vs Graham (R) | 36.5% | 39.0% | 2.5 | 19:00 |
| New Hampshire | Pappas (D) vs Sununu (R) | 96.0% | 94.6% | 1.4 | 19:00 |
| Minnesota | Flanagan (D) vs Tafoya (R) | 94.5% | 93.9% | 0.6 | 21:00 |
| Florida special | Nixon (D) vs Moody (R) | 15.5% | 5.9% | 9.6 | 20:00 |
| Nebraska | Ricketts (R incumbent) vs independent challenger | 63.0% | 62.0% | 1.0 | 21:00 |

## Website

Routes in `../frontend/`: `/closing-line` and `/closing-line/midterms-2026`. Run the website with its existing npm scripts; this folder has no runtime dependency on the website.

API discovery and collection design: [collectors/README.md](collectors/README.md).
