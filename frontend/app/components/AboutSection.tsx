import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-16 px-6">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[1.8rem] p-6 sm:p-8">
            <p className="mb-3 text-xs text-[#2d6a47]">About</p>
            <Link href="/about" className="group inline-block mb-4">
              <h2 className="text-2xl font-bold text-[#111111] tracking-tight transition-colors group-hover:text-[#1a3a2e]">
                Chris S. Yoon
              </h2>
            </Link>
            <p className="text-sm text-[#5f5a52] leading-7">
              Senior SDET and Data Quality engineer with 10+ years across QA,
              test automation, and data reliability. Most recently Data QA
              Architect at theScore; before that, Tech Lead of a five-person
              data quality team at QA Consultants. My work is designing the
              frameworks and controls that prove software and data are
              correct — not just testing inside someone else&apos;s.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#aacfbe] bg-[linear-gradient(180deg,#f2faf6_0%,#d8f0e4_100%)] px-3 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2d6a47] animate-pulse" />
              <span className="text-xs text-[#111111]">Open to Senior SDET · QA Automation · Data Quality · QA Lead roles</span>
            </div>
          </div>

          <div className="glass-panel rounded-[1.8rem] p-6 sm:p-8">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#2d6a47]">
              Recruiter path
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#111111]">
              Experience first, then proof.
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
              Start with where I&apos;ve worked and what I owned, then the
              projects that show how I build. Toronto-based; open to GTA and
              Canada-remote roles.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="#experience"
                className="inline-flex items-center justify-between rounded-[1.2rem] border border-[#9abfb0] bg-[linear-gradient(180deg,#f2faf6_0%,#ddf0e8_100%)] px-5 py-4 text-sm text-[#1a3a2e] transition-colors hover:border-[#5a9a78] hover:bg-[linear-gradient(180deg,#eaf6f0_0%,#cce8d8_100%)]"
              >
                <span>Read experience</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="https://linkedin.com/in/sukminyoon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-[1.2rem] border border-[#c0d8cc] px-5 py-4 text-sm text-[#5f5a52] transition-colors hover:border-[#7abba0] hover:text-[#1a3a2e]"
              >
                <span>Open LinkedIn</span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href="mailto:sukminc@gmail.com"
                className="inline-flex items-center justify-between rounded-[1.2rem] border border-[#c0d8cc] px-5 py-4 text-sm text-[#5f5a52] transition-colors hover:border-[#7abba0] hover:text-[#1a3a2e]"
              >
                <span>sukminc@gmail.com</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
