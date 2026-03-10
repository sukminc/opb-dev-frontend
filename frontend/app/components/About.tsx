"use client";

import { Workflow, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Workflow,
    label: "Pipeline Engineering",
    body: "Built and maintained 15+ Airflow DAGs handling millions of nightly betting transactions at TheScore (ESPN Bet). BigQuery, AWS Redshift, SOX-compliant transformation logic, automated observability frameworks — production-grade, not demo-grade.",
  },
  {
    icon: Cpu,
    label: "AI-Powered Builder",
    body: "Full-stack from FastAPI to Next.js. Using LLMs and modern AI tooling to ship real products — poker analytics, sports data platforms, API validation frameworks. Every project on this page is live code, not a tutorial clone.",
  },
  {
    icon: ShieldCheck,
    label: "Reliability by Design",
    body: "A decade of finding data failures before they hit production means I engineer reliability into pipelines from the start. Fail-fast DQ gates, schema drift detection, regression suites that test the tests. Pipelines that don't page you at 2am.",
  },
];

const experience = [
  { company: "TheScore × ESPN Bet", role: "Senior Data Engineer", period: "2023 – 2025" },
  { company: "Avesis (via QAC)",    role: "Technical Data Lead",   period: "2021 – 2023" },
  { company: "Jewelers Mutual",     role: "Data Engineer",         period: "2020 – 2021" },
  { company: "VRBO · Expedia",      role: "Data Migration Analyst", period: "2016 – 2018" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-4xl mx-auto">

        {/* Open-to-work pill */}
        <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/5 rounded-full px-3 py-1 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400 font-mono tracking-widest uppercase">
            Open to Work — Data Engineering / AI Engineering Roles
          </span>
        </div>

        {/* Headline */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#007AFF] tracking-widest uppercase">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight text-white leading-snug">
            I built pipelines for ESPN Bet.{" "}
            <span className="text-[#333]">Now I build products with AI.</span>
          </h2>
          <p className="text-[#555] mt-4 max-w-2xl leading-relaxed">
            Data engineer with a decade of experience building production ETL
            infrastructure — sports betting, insurance, fintech. My last role
            was architecting Airflow pipelines and data observability systems
            for TheScore, partnered with ESPN Bet.
          </p>
          <p className="text-[#555] mt-3 max-w-2xl leading-relaxed">
            Now I&apos;m doing both: looking for my next DE role while shipping
            AI-powered products in public. Every project here is a real stack,
            a real problem, a real commit. That&apos;s what 1% better looks like.
          </p>
        </div>

        {/* Experience strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
          {experience.map((e) => (
            <div
              key={e.company}
              className="flex items-center justify-between border border-[#1a1a1a] rounded-lg px-4 py-3 bg-black"
            >
              <div>
                <p className="text-xs font-semibold text-white font-mono">{e.company}</p>
                <p className="text-[10px] text-[#555] mt-0.5">{e.role}</p>
              </div>
              <span className="text-[10px] font-mono text-[#333]">{e.period}</span>
            </div>
          ))}
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="border border-[#1a1a1a] rounded-xl p-5 bg-black hover:border-[#2a2a2a] hover:bg-[#050505] transition-all"
              >
                <div className="w-9 h-9 rounded-md bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center mb-4">
                  <Icon size={16} className="text-[#007AFF]" />
                </div>
                <p className="text-sm font-semibold text-white mb-2 font-mono">
                  {p.label}
                </p>
                <p className="text-xs text-[#555] leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#007AFF] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#0066DD] transition-colors"
          >
            View LinkedIn <ArrowRight size={14} />
          </a>
          <a
            href="https://github.com/sukminc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#666] text-sm px-5 py-2.5 rounded-md hover:border-[#007AFF] hover:text-white transition-all"
          >
            View GitHub <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
