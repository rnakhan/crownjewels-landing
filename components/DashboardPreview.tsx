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
            <div className="relative rounded-2xl card overflow-hidden shadow-glow bg-surface">
              {/* Dashboard Browser Chrome */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-line/[0.08] bg-surface-2/40 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-medium text-ink/60">Acme Jewelry Store · Admin Dashboard</span>
                </div>
                <button className="flex items-center gap-1 text-[10px] px-2 py-1 rounded bg-surface border border-line/10 text-muted hover:text-ink transition">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  <span>Refresh Data</span>
                </button>
              </div>

              <div className="p-5">
                {/* Header Welcome text */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line/[0.06] pb-4">
                  <div>
                    <h3 className="font-display text-xl font-medium text-accent">Welcome back, John Doe</h3>
                    <div className="text-[10px] text-muted font-medium mt-0.5">Tuesday, May 26, 2026</div>
                  </div>
                </div>

                {/* Quick Access Grid */}
                <div className="mt-5">
                  <div className="text-[10px] uppercase tracking-wider text-muted font-semibold mb-2.5">Quick Access</div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {[
                      { label: "New Sale", emoji: "🛒", border: "border-sky-500/20 hover:bg-sky-500/5 text-sky-600 dark:text-sky-400" },
                      { label: "Repair Intake", emoji: "🔧", border: "border-purple-500/20 hover:bg-purple-500/5 text-purple-600 dark:text-purple-400" },
                      { label: "Add Customer", emoji: "👤", border: "border-emerald-500/20 hover:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400" },
                      { label: "Search Item", emoji: "🔍", border: "border-amber-500/20 hover:bg-amber-500/5 text-amber-600 dark:text-amber-400" },
                      { label: "Add Item", emoji: "📦", border: "border-sky-500/20 hover:bg-sky-500/5 text-sky-600 dark:text-sky-400" },
                      { label: "Transactions", emoji: "📊", border: "border-rose-500/20 hover:bg-rose-500/5 text-rose-600 dark:text-rose-400" },
                      { label: "Jeweler AI", emoji: "👤", border: "border-purple-500/20 hover:bg-purple-500/5 text-purple-600 dark:text-purple-400 font-semibold" },
                      { label: "Jewelry Design", emoji: "✨", border: "border-purple-500/20 hover:bg-purple-500/5 text-purple-600 dark:text-purple-400" },
                      { label: "Saved Designs", emoji: "📂", border: "border-sky-500/20 hover:bg-sky-500/5 text-sky-600 dark:text-sky-400" },
                      { label: "Custom Order", emoji: "🔧", border: "border-amber-500/20 hover:bg-amber-500/5 text-amber-600 dark:text-amber-400" },
                      { label: "Metal Prices", emoji: "📈", border: "border-emerald-500/20 hover:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`rounded-lg border bg-surface-2/20 p-2.5 text-center flex flex-col items-center justify-center cursor-pointer transition duration-200 ${item.border}`}
                      >
                        <span className="text-sm mb-1">{item.emoji}</span>
                        <span className="text-[9px] font-medium leading-tight truncate w-full">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attention Needed Section */}
                <div className="mt-5">
                  <div className="text-[10px] uppercase tracking-wider text-muted font-semibold mb-2.5">Attention Needed</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      {
                        title: "22 repair items overdue",
                        desc: "22 repair items are overdue",
                        btn: "View Repairs",
                        border: "border-l-rose-500 text-rose-600 dark:text-rose-400 border-l-4"
                      },
                      {
                        title: "SKU Chain-White-Gold low",
                        desc: "SKU Chain-White-Gold is very low in stock",
                        btn: "Check inventory threshold",
                        border: "border-l-amber-500 text-amber-600 dark:text-amber-400 border-l-4"
                      },
                      {
                        title: "Kentucky Games soon",
                        desc: "Southern Kentucky Highland Games is on May 30",
                        btn: "Explore more",
                        border: "border-l-sky-500 text-sky-600 dark:text-sky-400 border-l-4"
                      },
                      {
                        title: "Birthday wishes due...",
                        desc: "Birthdays due for: Adam Combs, Finnegan Martin...",
                        btn: "Send Wishes",
                        border: "border-l-pink-500 text-pink-600 dark:text-pink-400 border-l-4"
                      },
                      {
                        title: "3 customer anniversaries",
                        desc: "3 customer anniversaries this week",
                        btn: "View Details",
                        border: "border-l-emerald-500 text-emerald-600 dark:text-emerald-400 border-l-4"
                      }
                    ].map((card, i) => (
                      <div
                        key={i}
                        className={`rounded-lg border border-line/[0.08] bg-surface-2/10 p-3 shadow-sm flex flex-col justify-between ${card.border}`}
                      >
                        <div>
                          <h4 className="text-[11px] font-semibold text-ink line-clamp-1">{card.title}</h4>
                          <p className="text-[9px] text-muted mt-1 line-clamp-2 leading-relaxed">{card.desc}</p>
                        </div>
                        <button className="text-[9px] font-semibold mt-2.5 text-left hover:underline">
                          {card.btn} →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Analytics */}
                <div className="mt-5 border-t border-line/[0.06] pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted font-semibold">Performance Overview</div>
                    <div className="flex gap-2">
                      <span className="text-[9px] px-2 py-0.5 rounded-full border border-line/15 text-muted hover:text-ink transition cursor-pointer">Seller Incentives</span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-accent text-white font-medium hover:brightness-105 transition cursor-pointer">Dive into Data</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ["Total Sales (30d)", "$25,420", "+12.4%"],
                      ["Transactions", "35", "+8.2%"],
                      ["Avg. Ticket", "$726", "+4.1%"],
                    ].map(([k, v, rate], i) => (
                      <div key={i} className="rounded-xl border border-line/[0.08] bg-surface-2/10 p-3 flex flex-col justify-between">
                        <div className="text-[10px] text-muted">{k}</div>
                        <div className="flex items-baseline justify-between mt-1">
                          <div className="font-display text-lg font-semibold text-ink tracking-tight">{v}</div>
                          <span className="text-[8px] font-semibold text-emerald-500">{rate}</span>
                        </div>
                      </div>
                    ))}
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
