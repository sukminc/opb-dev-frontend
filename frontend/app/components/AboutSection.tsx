import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-24 px-6">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[1.8rem] p-6 sm:p-8">
            <p className="text-xs text-[#8b857b] mb-3">About</p>
            <Link href="/about" className="group inline-block mb-4">
              <h2 className="text-2xl font-bold text-[#111111] tracking-tight group-hover:text-[#5f5a52] transition-colors">
                Chris S. Yoon
              </h2>
            </Link>
            <p className="text-sm text-[#5f5a52] leading-7">
              I spent the last decade building production data systems across fintech,
              media, and enterprise. Right now I am in a transition period: looking
              for the right next role while using onepercentbetter as a place to learn
              LLM workflows, ship simple products fast, and stay in motion.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 border border-[#ddd8cf] bg-[#fbfaf7] rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] animate-pulse" />
              <span className="text-xs text-[#111111]">Open to work</span>
            </div>
          </div>

          <div className="glass-panel rounded-[1.8rem] p-6 sm:p-8">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#8b857b]">
              Next step
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#111111]">
              Follow the thread before you reach out.
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
              The cleanest path is: understand the story, see what I am building,
              then decide whether you want a conversation. That keeps the flow consistent
              with the rest of the site and gives the context first.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-between rounded-[1.2rem] border border-[#ddd8cf] bg-[#fbfaf7] px-5 py-4 text-sm text-[#111111] transition-colors hover:border-[#b9b2a7] hover:bg-[#f1efea]"
              >
                <span>
                  Read the full story
                </span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://linkedin.com/in/sukminyoon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-[1.2rem] border border-[#ddd8cf] px-5 py-4 text-sm text-[#5f5a52] transition-colors hover:border-[#b9b2a7] hover:text-[#111111]"
              >
                <span>Then connect on LinkedIn</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
