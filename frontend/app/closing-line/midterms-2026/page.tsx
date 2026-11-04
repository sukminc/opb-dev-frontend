import type { Metadata } from "next";
import Link from "next/link";
import { agreement, divergence, percent, snapshot, type SnapshotMarket } from "../../lib/closing-line";

const title = "2026 Midterms — The Closing Line";
const description = "Polymarket vs Kalshi: 14 frozen Senate forecasts, scored against reality once results are verified.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/closing-line/midterms-2026" },
  openGraph: { title, description, url: "/closing-line/midterms-2026" },
  twitter: { title, description },
};

function MarketRow({ market }: { market: SnapshotMarket }) {
  const gap = divergence(market);
  const isSplit = gap !== null && gap > 2.5;
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
      <td className="px-4 py-5 text-xs text-muted">Awaiting results</td>
      <td className="px-4 py-5 text-xs text-muted">Awaiting results</td>
      <td className="px-4 py-5 text-xs text-muted">Awaiting results</td>
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
          <span className="inline-flex items-center gap-2 rounded-full border border-border-hover bg-surface px-4 py-2 font-mono text-xs text-secondary"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />Awaiting results</span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">Polymarket vs Kalshi <span className="block text-secondary">— Prediction Showdown</span></h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-secondary">The 2026 US Senate, through two prediction markets. The prices are frozen. The verdict comes from the results.</p>
        <div className="glass-panel mt-9 grid overflow-hidden rounded-2xl sm:grid-cols-2">
          {[
            { name: "Polymarket", time: "18:53 ET" },
            { name: "Kalshi", time: "18:54–19:04 ET" },
          ].map((venue, index) => (
            <div key={venue.name} className={`p-6 sm:p-8 ${index === 1 ? "border-t border-border sm:border-t-0 sm:border-l" : ""}`}>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">Venue 0{index + 1}</p>
              <h2 className="mt-3 text-2xl font-semibold">{venue.name}</h2>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div><dt className="text-secondary">Brier / log loss</dt><dd className="mt-2 font-mono text-muted">Awaiting results</dd></div>
                <div><dt className="text-secondary">Snapshot · Nov 3</dt><dd className="mt-2 font-mono text-foreground">{venue.time}</dd></div>
              </dl>
            </div>
          ))}
        </div>
      </header>

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
            <p className="mt-4 text-sm leading-relaxed text-secondary"><strong className="font-medium text-foreground">Florida:</strong> Polymarket {percent(florida.polymarket_pct)} vs Kalshi {percent(florida.kalshi_pct)} for the Democrat. Tonight’s sharpness test.</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-medium text-secondary">The trust test</h3>
            <p className="mt-5 font-mono text-4xl font-semibold tracking-tight">86–87<span className="text-xl text-muted">%</span></p>
            <p className="mt-4 text-sm leading-relaxed text-secondary">Both priced <strong className="font-medium text-foreground">Democratic Senate control</strong> here. PM {percent(senate.polymarket_pct)} · K {percent(senate.kalshi_pct)}. A shared conviction to grade.</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="races-title" className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="races-title" className="font-mono text-xs uppercase tracking-[0.2em] text-accent">02 / The frozen board</h2>
          <p className="font-mono text-xs text-secondary">14 Senate races · 2 control markets</p>
        </div>
        <p id="table-help" className="mt-4 text-sm leading-relaxed text-secondary">Democrat win probability (%), except Nebraska*. Gap = absolute difference in percentage points. Scores will be shown per venue after verified results.</p>
        <p className="mt-3 text-xs text-muted">Scroll the table horizontally to see all columns →</p>
        <div role="region" aria-label="Election market comparison, scroll horizontally" aria-describedby="table-help" tabIndex={0} className="mt-4 overflow-x-auto rounded-2xl border border-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <table className="w-full min-w-[1120px] border-collapse text-sm">
            <caption className="sr-only">2026 midterms frozen market probabilities; all results and scores await verified outcomes.</caption>
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
          <p>Brier score = (p − y)². Log loss = −ln(probability assigned to the actual outcome), with p on a 0–1 scale. Lower is better. Venue averages will use the same resolved, paired state races; control markets stay separate. No outcomes or scores are inferred from prices.</p>
          <p>After results, calibration bins will compare stated probabilities with observed hit rates, alongside sample counts. Until then: <span className="text-foreground">Awaiting results.</span></p>
          <Link href="/closing-line#scoring" className="inline-flex min-h-11 items-center text-accent hover:underline">Read the scoring guide →</Link>
        </div>
      </section>
    </>
  );
}
