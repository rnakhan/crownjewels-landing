import Reveal from "./Reveal";

const beats = [
  { time: "9:14 AM", title: "Walk-in sale, ring sized", body: "New Sale, charged on the spot. Inventory ticks down, the customer's birthday gets logged for next year.", accent: "border-l-emerald-400" },
  { time: "11:02 AM", title: "Repair intake — gold chain", body: "Intake form captures photos and quote. Status auto-flows through to Due Repairs, you're alerted before it goes overdue.", accent: "border-l-rose-400" },
  { time: "2:48 PM", title: "Festival promo to 200 customers", body: "Ao Dai Festival is in 9 days. Send a WhatsApp blast to high-value customers — built right into the dashboard.", accent: "border-l-accent" },
  { time: "5:30 PM", title: "Close out, see the day", body: "Daily Sales Trend, Sales by Category, Seller Incentives — your numbers, the moment you lock the door.", accent: "border-l-gold-500" },
];

export default function WorkflowStory() {
  return (
    <section id="workflow" className="py-20 lg:py-28">
      <div className="section">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">A day at the counter</span>
            <h2 className="mt-3 headline">
              Designed for the <span className="serif-italic">jeweler's day</span>.
            </h2>
            <p className="mt-5 text-ink/80 text-lg leading-relaxed">
              Every "Attention Needed" card on your dashboard is something your old POS would have let slip.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {beats.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <div className={`card p-6 border-l-4 ${b.accent} h-full`}>
                <div className="text-xs font-semibold tracking-wider text-muted">{b.time}</div>
                <h3 className="mt-3 font-display text-xl tracking-tight">{b.title}</h3>
                <p className="mt-2 text-sm text-ink/75 leading-relaxed">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
