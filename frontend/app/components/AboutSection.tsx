import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-24 px-6">
      <div className="relative max-w-6xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div className="flex-1 max-w-2xl">
            <p className="text-xs text-[#8b857b] mb-3">About</p>
            <Link href="/about" className="group inline-block mb-4">
              <h2 className="text-2xl font-bold text-[#111111] tracking-tight group-hover:text-[#5f5a52] transition-colors">
                Chris S. Yoon
              </h2>
            </Link>
            <p className="text-sm text-[#5f5a52] leading-relaxed">
              I spent the last decade building production data systems across fintech,
              media, and enterprise. Right now I am in a transition period: looking
              for the right next role while using onepercentbetter as a place to learn
              LLM workflows, ship simple products fast, and stay in motion.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:pt-8">
            <div className="inline-flex items-center gap-2 border border-[#ddd8cf] bg-[#fbfaf7] rounded-full px-3 py-1 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] animate-pulse" />
              <span className="text-xs text-[#111111]">Open to work</span>
            </div>
            <a
              href="https://linkedin.com/in/sukminyoon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111111] text-[#f5f3ef] text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#2d2d2d] transition-colors"
            >
              Connect on LinkedIn <ArrowUpRight size={14} />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-[#ddd8cf] text-[#5f5a52] text-sm px-5 py-2.5 rounded-xl hover:border-[#b9b2a7] hover:text-[#111111] transition-all"
            >
              Read the full story →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
