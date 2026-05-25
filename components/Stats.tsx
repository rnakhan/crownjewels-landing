import Reveal from "./Reveal";

const stats = [
  { value: "70%", label: "of dashboard alerts you'd otherwise miss", caption: "Surfaced automatically — not buried in spreadsheets." },
  { value: "5×", label: "faster custom quotes vs. pen-and-paper", caption: "Sketch with AI, quote with live metal pricing." },
  { value: "4 hrs", label: "saved per week on customer outreach", caption: "AI-drafted WhatsApp wishes and festival promotions." },
  { value: "1 sign-in", label: "for every store, every staff member", caption: "Multi-tenant, role-based, 2FA out of the box." },
];

export default function Stats() {
  return (
    <section className="relative py-20 lg:py-28 border-y border-line/[0.10] bg-surface-2/40">
      <div className="section">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">By the numbers</span>
            <h2 className="mt-3 headline">
              Quietly, <span className="serif-italic text-accent">relentlessly</span> useful.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line/[0.10] rounded-2xl overflow-hidden border border-line/[0.10]">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 80}>
              <div className="bg-bg p-8 h-full">
                <div className="font-display text-4xl lg:text-5xl tracking-tight text-ink">
                  {s.value}
                </div>
                <div className="mt-4 text-ink/90 font-medium">{s.label}</div>
                <div className="mt-2 text-sm text-ink/65 leading-relaxed">{s.caption}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
