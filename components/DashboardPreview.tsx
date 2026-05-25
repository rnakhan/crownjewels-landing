import Reveal from "./Reveal";

export default function DashboardPreview() {
  return (
    <section className="py-20 lg:py-28 bg-surface-2/30">
      <div className="section grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div>
            <span className="eyebrow">Performance Overview</span>
            <h2 className="mt-3 headline">
              Know your top sellers.<br />
              Watch your day.<br />
              <span className="serif-italic text-accent">Hit your numbers.</span>
            </h2>
            <p className="mt-6 text-ink/80 text-lg leading-relaxed">
              Total sales, transaction volume, and average ticket — refreshed in real time. Drill into Daily Sales Trend, slice by category, and reward your team with built-in Seller Incentives.
            </p>
            <ul className="mt-8 space-y-3 text-ink/85">
              <li className="flex gap-3"><span className="text-accent">●</span> 30-day rolling sales, transactions, and AOV</li>
              <li className="flex gap-3"><span className="text-accent">●</span> Daily sales trend with transaction overlay</li>
              <li className="flex gap-3"><span className="text-accent">●</span> Category mix at a glance — rings, necklaces, earrings, bracelets</li>
              <li className="flex gap-3"><span className="text-accent">●</span> Seller Incentives & "Dive into Data" reports</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <a href="https://crownjewels-staging.web.app/" target="_blank" rel="noopener" className="group relative block">
            <div className="absolute -inset-8 bg-gradient-to-br from-plum/15 to-gold/15 rounded-[2rem] blur-3xl" />
            <span className="absolute -top-3 right-4 z-10 rounded-full bg-accent text-white text-[11px] font-medium px-3 py-1 opacity-0 group-hover:opacity-100 transition shadow-glow">
              View live →
            </span>
            <div className="relative card p-6">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Performance Overview</h4>
                <div className="flex gap-2">
                  <span className="text-xs px-3 py-1 rounded-full border border-line/15">Seller Incentives</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent text-white">Dive into Data</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  ["Total Sales (30d)", "$25,420"],
                  ["Transactions", "35"],
                  ["Avg. Ticket", "$726"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-line/[0.12] p-4">
                    <div className="text-[11px] text-muted">{k}</div>
                    <div className="font-display text-2xl mt-1 tracking-tight">{v}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-4 mt-5">
                <div className="col-span-3 rounded-xl border border-line/[0.12] p-4">
                  <div className="text-xs text-muted mb-3">Daily Sales Trend</div>
                  <svg viewBox="0 0 240 90" className="w-full h-24">
                    <defs>
                      <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="rgb(var(--accent))" stopOpacity="0.4" />
                        <stop offset="1" stopColor="rgb(var(--accent))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,70 C30,40 50,10 75,15 C100,20 120,75 150,80 C180,85 210,82 240,80 L240,90 L0,90 Z" fill="url(#g)" />
                    <path d="M0,70 C30,40 50,10 75,15 C100,20 120,75 150,80 C180,85 210,82 240,80" fill="none" stroke="rgb(var(--accent))" strokeWidth="2" />
                  </svg>
                </div>
                <div className="col-span-2 rounded-xl border border-line/[0.12] p-4">
                  <div className="text-xs text-muted mb-3">Sales by Category</div>
                  <div className="flex items-center justify-center">
                    <div
                      className="h-24 w-24 rounded-full"
                      style={{
                        background:
                          "conic-gradient(rgb(var(--accent)) 0 70%, #2dd4bf 70% 85%, #f59e0b 85% 92%, #f97316 92% 96%, #a78bfa 96% 100%)",
                      }}
                    />
                  </div>
                  <div className="mt-3 grid grid-cols-2 text-[10px] gap-y-1 text-ink/70">
                    <span>● Rings 70%</span>
                    <span>● Necklaces 15%</span>
                    <span>● Earrings 4%</span>
                    <span>● Bracelets 4%</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
