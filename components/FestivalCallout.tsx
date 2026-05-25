import Reveal from "./Reveal";

const events = [
  { date: "May 10", name: "Ao Dai Festival", note: "Promo to top 200 customers" },
  { date: "Aug 19", name: "Raksha Bandhan", note: "Bracelet & rakhi pendant restock" },
  { date: "Oct 20", name: "Diwali", note: "Gold-buying season — adjust thresholds" },
  { date: "Feb 17", name: "Lunar New Year", note: "Red-thread & charm collection" },
  { date: "—", name: "Customer birthdays", note: "Auto-reminders, one tap to wish" },
];

export default function FestivalCallout() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section grid lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">Built for your customers' calendar</span>
          <h2 className="mt-3 headline">
            The platform that knows <span className="serif-italic text-accent">when your customers buy</span>.
          </h2>
          <p className="mt-6 text-ink/80 text-lg leading-relaxed">
            Festival reminders, anniversaries, birthdays — surfaced on the dashboard the moment they matter, with one-tap WhatsApp wishes and pre-built promotion templates.
          </p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <div className="card overflow-hidden">
            {events.map((e, i) => (
              <div key={e.name} className={`flex items-center gap-5 px-6 py-5 ${i ? "border-t border-line/[0.10]" : ""} hover:bg-surface-2/50 transition`}>
                <div className="font-display text-accent text-lg w-20 tracking-tight">{e.date}</div>
                <div className="flex-1">
                  <div className="font-medium">{e.name}</div>
                  <div className="text-sm text-muted">{e.note}</div>
                </div>
                <div className="text-xs text-gold-700 dark:text-gold-300 bg-gold-50 dark:bg-gold-700/15 px-3 py-1.5 rounded-full">Send wishes</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
