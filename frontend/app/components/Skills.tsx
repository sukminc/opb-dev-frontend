import { SKILL_GROUPS } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-16 px-6">
      <div className="relative mx-auto max-w-5xl">
        <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#4ade80]">
          Skills
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#e9f4ec] sm:text-4xl">
          What I work with.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="glass-panel rounded-[1.8rem] p-6 sm:p-7">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#4ade80]">
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#23402e] bg-[linear-gradient(180deg,#12241a_0%,#0c1710_100%)] px-3 py-1.5 text-xs font-medium text-[#d9ecdf]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
