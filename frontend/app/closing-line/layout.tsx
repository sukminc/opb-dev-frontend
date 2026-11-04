import Link from "next/link";
import BrandMark from "../components/BrandMark";
import Footer from "../components/Footer";
import { BRAND } from "../lib/brand";

export default function ClosingLineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.background, color: BRAND.ink }}>
      <nav aria-label="Project navigation" className="border-b border-border px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <Link href="/" aria-label="OnePercentBetter home" className="rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            <BrandMark size="sm" showWordmark subtitle="Independent projects" />
          </Link>
          <Link href="/closing-line" className="inline-flex min-h-11 items-center font-mono text-xs text-secondary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            / the-closing-line
          </Link>
        </div>
      </nav>
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-12 sm:py-20">{children}</main>
      <Footer />
    </div>
  );
}
