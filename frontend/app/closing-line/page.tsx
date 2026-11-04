import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

const title = "The Closing Line — a OnePercentBetter project";
const description = "Grading the closing lines of the world's prediction markets.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/closing-line" },
  openGraph: { title, description, url: "/closing-line" },
  twitter: { title, description },
};

export default function ClosingLinePage() {
  return (
    <>
      <header className="relative border-b border-border pb-14 sm:pb-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">A OnePercentBetter project</p>
        <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
          The Closing Line<span className="text-accent">.</span>
          <span className="sr-only"> — a OnePercentBetter project</span>
        </h1>
        <p className="mt-7 max-w-2xl text-xl leading-relaxed text-secondary sm:text-2xl">{description}</p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link href="/closing-line/midterms-2026" className="inline-flex min-h-12 items-center gap-6 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            Enter Season 1 <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <a href="#scoring" className="inline-flex min-h-11 items-center gap-2 text-sm text-secondary hover:text-accent">
            How we keep score <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section aria-labelledby="what-it-is" className="grid gap-6 border-b border-border py-12 md:grid-cols-[1fr_2fr] sm:py-16">
        <h2 id="what-it-is" className="font-mono text-xs uppercase tracking-[0.2em] text-accent">01 / What it is</h2>
        <div>
          <p className="max-w-2xl text-2xl font-medium leading-snug sm:text-3xl">A spectator’s scoreboard for the markets that predict the world.</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-secondary">Which prediction market is sharper? We freeze their probabilities before an event resolves, then grade them against what actually happens. Category by category. Season by season.</p>
          <p className="mt-4 text-sm text-muted">The same outcome. Two sets of odds. A score neither venue gets to rewrite.</p>
        </div>
      </section>

      <section id="scoring" aria-labelledby="scoring-title" className="py-12 sm:py-16">
        <h2 id="scoring-title" className="font-mono text-xs uppercase tracking-[0.2em] text-accent">02 / How scoring works</h2>
        <p className="mt-4 text-sm leading-relaxed text-secondary">Use probabilities from 0 to 1. The outcome is 1 if the priced subject wins, and 0 otherwise. Lower scores are better.</p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <article className="glass-panel rounded-2xl p-6">
            <p className="font-mono text-xs text-accent">01 / ACCURACY</p>
            <h3 className="mt-5 text-xl font-semibold">Brier score</h3>
            <p className="mt-4 break-words font-mono text-sm text-accent">(predicted probability − outcome)²</p>
            <p className="mt-4 text-sm leading-relaxed text-secondary">The squared distance between the forecast and reality. A perfect prediction scores zero.</p>
          </article>
          <article className="glass-panel rounded-2xl p-6">
            <p className="font-mono text-xs text-accent">02 / CONFIDENCE</p>
            <h3 className="mt-5 text-xl font-semibold">Log loss</h3>
            <p className="mt-4 font-mono text-sm leading-relaxed text-accent">−ln(probability assigned to the actual outcome)</p>
            <p className="mt-4 text-sm leading-relaxed text-secondary">Punishes confident wrong calls much harder. Being nearly certain and wrong carries a steep cost.</p>
          </article>
          <article className="glass-panel rounded-2xl p-6">
            <p className="font-mono text-xs text-accent">03 / RELIABILITY</p>
            <h3 className="mt-5 text-xl font-semibold">Calibration</h3>
            <p className="mt-4 font-mono text-sm text-accent">Stated probability ↔ hit rate</p>
            <p className="mt-4 text-sm leading-relaxed text-secondary">Do 70% calls win about 70% of the time? After results, 10-point probability bins will compare forecasts with hit rates and sample counts.</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="seasons-title" className="border-t border-border pt-12">
        <h2 id="seasons-title" className="font-mono text-xs uppercase tracking-[0.2em] text-accent">03 / The seasons</h2>
        <Link href="/closing-line/midterms-2026" className="group glass-panel mt-7 block rounded-2xl p-6 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs text-accent">SEASON 01 / POLITICS</span>
            <span className="rounded-full border border-border-hover px-3 py-1 font-mono text-xs text-secondary">Provisional · Kalshi on points</span>
          </div>
          <h3 className="mt-7 text-3xl font-semibold tracking-tight">Season 1 · 2026 Midterms</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-secondary">Polymarket vs Kalshi. Fourteen Senate races, one control test, and the probabilities frozen before the verdict.</p>
          <span className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-accent">Open the showdown <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></span>
        </Link>
      </section>
    </>
  );
}
