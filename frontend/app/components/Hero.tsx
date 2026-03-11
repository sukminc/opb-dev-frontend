"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 px-6 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#5E5CE6]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full">

        {/* Status chip */}
        <div className="inline-flex items-center gap-2 bg-[#5E5CE6]/10 border border-[#5E5CE6]/20 rounded-full px-3 py-1 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5E5CE6] animate-pulse" />
          <span className="text-xs text-[#8A8B97]">Active build</span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.02] mb-6">
          GTO Defends.
          <br />
          <span className="text-[#5E5CE6]">We Exploit.</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-[#8A8B97] max-w-xl leading-relaxed mb-5">
          Quantify opponent deviations from GTO equilibrium and turn them into
          actionable edge. Parses GGPoker hand histories, surfaces bb/100 exploit
          signals by position — with an LLM agent layer in active development.
        </p>

        {/* Byline */}
        <p className="text-sm text-[#4B4C58] mb-14">
          Built by{" "}
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8B97] hover:text-[#5E5CE6] transition-colors underline underline-offset-2 decoration-[#4B4C58]"
          >
            Chris S. Yoon
          </a>
          {" "}— Senior Data Engineer & AI builder
        </p>

        {/* Scroll cue */}
        <div className="flex items-center gap-2 text-[#4B4C58]">
          <ArrowDown size={13} className="animate-bounce" />
          <span className="text-xs">See the projects</span>
        </div>

      </div>
    </section>
  );
}
