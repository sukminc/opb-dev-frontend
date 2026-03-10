"use client";

import { Github, Linkedin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="max-w-4xl mx-auto w-full">

        {/* Status pill */}
        <div className="inline-flex items-center gap-2 border border-[#2a2a2a] rounded-full px-3 py-1 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-[#666] font-mono tracking-widest uppercase">
            Building in public
          </span>
        </div>

        {/* Name */}
        <p className="text-sm font-mono text-[#555] mb-3 tracking-widest uppercase">
          Sukmin Yoon
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          1% better,{" "}
          <span className="text-[#007AFF]">every build.</span>
        </h1>

        {/* Sub */}
        <p className="text-lg text-[#555] max-w-xl leading-relaxed mb-10">
          Data engineer &amp; AI builder. I&apos;ve shipped ETL pipelines at
          scale for sports betting. Now I build AI-powered products in public —
          and get 1% better at both with every commit.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4 mb-20">
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#666] border border-[#2a2a2a] rounded-md px-4 py-2.5 hover:border-[#007AFF] hover:text-white transition-all"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a
            href="https://github.com/sukminc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#666] border border-[#2a2a2a] rounded-md px-4 py-2.5 hover:border-[#007AFF] hover:text-white transition-all"
          >
            <Github size={14} />
            GitHub
          </a>
        </div>

        {/* Scroll cue */}
        <div className="flex items-center gap-2 text-[#333]">
          <ArrowDown size={14} className="animate-bounce" />
          <span className="text-xs font-mono tracking-widest uppercase">
            See the projects
          </span>
        </div>
      </div>
    </section>
  );
}
