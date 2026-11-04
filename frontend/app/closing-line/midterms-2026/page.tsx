import type { Metadata } from "next";
import Link from "next/link";
import { agreement, divergence, percent, snapshot, type SnapshotMarket } from "../../lib/closing-line";

const title = "2026 Midterms — The Closing Line";
const description = "Polymarket vs Kalshi: 14 frozen Senate forecasts, scored against AP-called results. 15 of 16 markets called — provisional verdict: Kalshi, on points.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/closing-line/midterms-2026" },
  openGraph: { title, description, url: "/closing-line/midterms-2026" },
  twitter: { title, description },
};

function fmtScore(value: number | null, digits: number): string {
  return value === null ? "n/a" : value.toFixed(digits);
}

function resultLabel(market: SnapshotMarket): string {
  if (market.status !== "called") return "Awaiting results";
  if (market.id === "nebraska") return "Ricketts (R) won";
  return market.outcome === "democrat" ? "Democrat won" : "Republican won";
}

function MarketRow({ market }: { market: SnapshotMarket }) {
  const gap = divergence(market);
  const isSplit = gap !== null && gap > 2.5;
  const called = market.status === "called";
  return (
    <tr className={`border-t border-border ${isSplit ? "bg-brand-soft" : ""}`}>
      <th scope="row" className="px-5 py-5 text-left font-normal">
        <span className="block font-semibold text-foreground">{market.label}{market.id === "nebraska" ? " *" : ""}</span>
        <span className="mt-1 block max-w-64 text-xs leading-relaxed text-secondary">{market.matchup ?? market.subject}</span>
      </th>
      <td className="px-4 py-5 text-right font-mono tabular-nums text-foreground">{percent(market.polymarket_pct)}</td>
      <td className="px-4 py-5 text-right font-mono tabular-nums text-foreground">{percent(market.kalshi_pct)}</td>
      <td className={`px-4 py-5 text-right font-mono tabular-nums ${isSplit ? "font-semibold text-accent" : "text-secondary"}`}>{gap === null ? "n/a" : `${gap.toFixed(1)} pts`}</td>
      <td className="whitespace-nowrap px-4 py-5 text-right font-mono text-xs text-secondary">{market.poll_close_et ?? "—"}</td>
      <td className={`px-4 py-5 text-xs ${called ? "font-medium text-foreground" : "text-muted"}`}>{resultLabel(market)}</td>
      <td className="px-4 py-5 font-mono text-xs text-secondary">{called ? `${fmtScore(market.brier.polymarket, 4)} / ${fmtScore(market.brier.kalshi, 4)}` : "Awaiting results"}</td>
      <td className="px-4 py-5 font-mono text-xs text-secondary">{called ? `${fmtScore(market.log_loss.polymarket, 3)} / ${fmtScore(market.log_loss.kalshi, 3)}` : "Awaiting results"}</td>
    </tr>
  );
}

export default function Midterms2026Page() {
  const florida = snapshot.races.find((race) => race.id === "florida-special")!;
  const senate = snapshot.controls.find((market) => market.id === "senate-control")!;

  return (
    <>
      <Link href="/closing-line" className="inline-flex min-h-11 items-center text-sm text-secondary hover:text-accent">← The Closing Line</Link>
      <header className="mt-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Season 1 · 2026 Midterms</p>
          <span className="inline-flex items-center gap-2 rounded-full border border-border-hover bg-surface px-4 py-2 font-mono text-xs text-secondary"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />Provisional results · 15 of 16 called</span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">Polymarket vs Kalshi <span className="block text-secondary">— Prediction Showdown</span></h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-secondary">The 2026 US Senate, through two prediction markets. The prices are frozen. The verdict comes from the results.</p>
        <div className="glass-panel mt-9 grid overflow-hidden rounded-2xl sm:grid-cols-2">
          {[
            { name: "Polymarket", time: "18:53 ET", brier: snapshot.verdict.mean_brier.polymarket, logLoss: snapshot.verdict.mean_log_loss.polymarket },
            { name: "Kalshi", time: "18:54–19:04 ET", brier: snapshot.verdict.mean_brier.kalshi, logLoss: snapshot.verdict.mean_log_loss.kalshi },
          ].map((venue, index) => (
            <div key={venue.name} className={`p-6 sm:p-8 ${index === 1 ? "border-t border-border sm:border-t-0 sm:border-l" : ""}`}>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">Venue 0{index + 1}</p>
              <h2 className="mt-3 text-2xl font-semibold">{venue.name}</h2>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div><dt className="text-secondary">Mean Brier / log loss</dt><dd className="mt-2 font-mono text-foreground">{venue.brier.toFixed(4)} · {venue.logLoss.toFixed(3)}</dd></div>
                <div><dt className="text-secondary">Snapshot · Nov 3</dt><dd className="mt-2 font-mono text-foreground">{venue.time}</dd></div>
              </dl>
            </div>
          ))}
        </div>
      </header>

      <section aria-labelledby="verdict-title" className="mt-14">
        <h2 id="verdict-title" className="font-mono text-xs uppercase tracking-[0.2em] text-accent">00 / The verdict — provisional</h2>
        <div className="glass-panel mt-6 rounded-2xl p-6 sm:p-9">
          <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{snapshot.verdict.headline}</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-secondary">{snapshot.verdict.detail}</p>
          <dl className="mt-7 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
            <div><dt className="text-secondary">Head-to-head wins</dt><dd className="mt-2 font-mono text-foreground">PM {snapshot.verdict.head_to_head_wins.polymarket} – {snapshot.verdict.head_to_head_wins.kalshi} K</dd></div>
            <div><dt className="text-secondary">Mean Brier · PM / K</dt><dd className="mt-2 font-mono text-foreground">{snapshot.verdict.mean_brier.polymarket.toFixed(4)} / {snapshot.verdict.mean_brier.kalshi.toFixed(4)}</dd></div>
            <div><dt className="text-secondary">Mean log loss · PM / K</dt><dd className="mt-2 font-mono text-foreground">{snapshot.verdict.mean_log_loss.polymarket.toFixed(3)} / {snapshot.verdict.mean_log_loss.kalshi.toFixed(3)}</dd></div>
            <div><dt className="text-secondary">Paired markets scored</dt><dd className="mt-2 font-mono text-foreground">{snapshot.verdict.paired_markets_scored} of {snapshot.verdict.paired_markets_total}</dd></div>
          </dl>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">{snapshot.verdict.alaska_note}</p>
          <p className="mt-3 font-mono text-xs text-muted">Results: AP race calls as of Nov 4, ~07:45 ET · Primary metric (mean Brier) declared before results</p>
        </div>
      </section>

      <section aria-labelledby="glance-title" className="mt-14">
        <h2 id="glance-title" className="font-mono text-xs uppercase tracking-[0.2em] text-accent">01 / At a glance</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-medium text-secondary">Where they agree</h3>
            <p className="mt-5 font-mono text-4xl font-semibold tracking-tight">{agreement.count}<span className="text-xl text-muted"> / {agreement.total}</span></p>
            <p className="mt-4 text-sm leading-relaxed text-secondary">Races within 2.5 pts. Mean divergence: <strong className="font-medium text-foreground">{agreement.mean} pts</strong>. Almost the same map.</p>
          </article>
          <article className="rounded-2xl border border-border-hover bg-brand-soft p-6">
            <h3 className="text-sm font-medium text-accent">The one big split</h3>
            <p className="mt-5 font-mono text-4xl font-semibold tracking-tight text-accent">{divergence(florida)!.toFixed(1)}<span className="text-xl"> pts</span></p>
            <p className="mt-4 text-sm leading-relaxed text-secondary"><strong className="font-medium text-foreground">Florida:</strong> Polymarket {percent(florida.polymarket_pct)} vs Kalshi {percent(florida.kalshi_pct)} for the Democrat. Moody held Florida — Kalshi’s 5.9% was nearly spot-on (Brier 0.0035); Polymarket’s 15.5% cost 0.0240. The split decided the night.</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-medium text-secondary">The trust test</h3>
            <p className="mt-5 font-mono text-4xl font-semibold tracking-tight">86–87<span className="text-xl text-muted">%</span></p>
            <p className="mt-4 text-sm leading-relaxed text-secondary">Both priced <strong className="font-medium text-foreground">Democratic Senate control</strong> here. PM {percent(senate.polymarket_pct)} · K {percent(senate.kalshi_pct)}. Democrats took the Senate — both venues nailed it; Kalshi a touch closer (Brier 0.0169 vs 0.0182).</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="races-title" className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="races-title" className="font-mono text-xs uppercase tracking-[0.2em] text-accent">02 / The frozen board</h2>
          <p className="font-mono text-xs text-secondary">14 Senate races · 2 control markets</p>
        </div>
        <p id="table-help" className="mt-4 text-sm leading-relaxed text-secondary">Democrat win probability (%), except Nebraska*. Gap = absolute difference in percentage points. Results are AP race calls; scores are shown per venue. Alaska is still pending.</p>
        <p className="mt-3 text-xs text-muted">Scroll the table horizontally to see all columns →</p>
        <div role="region" aria-label="Election market comparison, scroll horizontally" aria-describedby="table-help" tabIndex={0} className="mt-4 overflow-x-auto rounded-2xl border border-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <table className="w-full min-w-[1120px] border-collapse text-sm">
            <caption className="sr-only">2026 midterms frozen market probabilities with results and scores for 15 of 16 markets; Alaska pending.</caption>
            <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-secondary">
              <tr>
                <th scope="col" className="px-5 py-4 text-left">Race / priced subject</th>
                <th scope="col" className="px-4 py-4 text-right">Polymarket</th>
                <th scope="col" className="px-4 py-4 text-right">Kalshi</th>
                <th scope="col" className="px-4 py-4 text-right">Divergence</th>
                <th scope="col" className="px-4 py-4 text-right">Close ET</th>
                <th scope="col" className="px-4 py-4 text-left">Result</th>
                <th scope="col" className="px-4 py-4 text-left">Brier · PM / K</th>
                <th scope="col" className="px-4 py-4 text-left">Log loss · PM / K</th>
              </tr>
            </thead>
            <tbody>{snapshot.controls.map((market) => <MarketRow key={market.id} market={market} />)}</tbody>
            <tbody>
              <tr className="border-t border-border-hover bg-surface"><th colSpan={8} scope="rowgroup" className="px-5 py-3 text-left font-mono text-xs font-normal text-accent">SENATE / STATE RACES</th></tr>
              {snapshot.races.map((market) => <MarketRow key={market.id} market={market} />)}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-secondary">* Nebraska prices Ricketts, the Republican incumbent, to win against an independent challenger. It is not a Democratic win probability. Alaska’s 24:00 ET close means midnight on November 4. House Kalshi data is n/a.</p>
      </section>

      <section aria-labelledby="method-title" className="mt-14 grid gap-6 border-t border-border pt-10 md:grid-cols-[1fr_2fr]">
        <h2 id="method-title" className="font-mono text-xs uppercase tracking-[0.2em] text-accent">03 / Methodology</h2>
        <div className="space-y-4 text-sm leading-relaxed text-secondary">
          <p>Prices are implied probabilities (%) from both venues’ public APIs, snapshotted on Election Day, <strong className="font-medium text-foreground">November 3, 2026</strong>: Polymarket at <strong className="font-medium text-foreground">18:53 ET</strong>, Kalshi at <strong className="font-medium text-foreground">18:54–19:04 ET</strong>, ahead of later battleground poll closes.</p>
          <p>The Kalshi window overlaps the listed 19:00 ET closes. These are fixed Election Day snapshots, not verified final quotes at every individual poll close. The supplied dataset does not include per-market Kalshi timestamps or the exact bid/ask/last-price basis.</p>
          <p>Brier score = (p − y)². Log loss = −ln(probability assigned to the actual outcome), with p on a 0–1 scale. Lower is better. <strong className="font-medium text-foreground">The primary ranking metric — mean Brier score — was declared before any results arrived</strong>; log loss is reported alongside. Venue averages cover every resolved market priced by both venues: the state races plus Senate control. The House market, priced only by Polymarket, is scored separately and excluded from the averages. Head-to-head race wins are shown for color; the averages decide. No outcomes or scores are inferred from prices.</p>
          <p>We measure how well matched market probabilities predicted outcomes at a declared cutoff. Results are AP race calls as of <strong className="font-medium text-foreground">November 4, ~07:45 ET</strong>: fifteen of sixteen markets are called, including Democratic control of both chambers. Alaska remains — Sullivan (R) leads Peltola (D) by roughly 1,700 votes with about 72% counted, and a ranked-choice tabulation is scheduled for November 18 if no candidate clears 50%. Kalshi finishes ahead on mean Brier under either Alaska outcome. Calibration bins comparing stated probabilities with observed hit rates will follow once Alaska resolves.</p>
          <p>One capture caveat: Kalshi’s Florida quote came from a final gap-fill fetch at ~19:03 ET — after Florida’s eastern-county polls closed at 19:00 ET, before the state’s full close at 20:00 ET. All other Kalshi quotes are stamped 18:54–18:56 ET.</p>
          <Link href="/closing-line#scoring" className="inline-flex min-h-11 items-center text-accent hover:underline">Read the scoring guide →</Link>
        </div>
      </section>
    </>
  );
}
