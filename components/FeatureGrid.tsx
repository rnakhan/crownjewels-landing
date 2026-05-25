import { GemIcon, TrendIcon, InventoryIcon, WrenchIcon, HeartIcon, ChatIcon } from "./Icon";
import Reveal from "./Reveal";

const features = [
  { Icon: GemIcon, title: "AI Jewelry Design Generator", body: "Sketch a custom piece in seconds. Generate, refine, save — then quote the customer on the spot." },
  { Icon: TrendIcon, title: "Live Metal Prices", body: "Gold, silver and platinum rates updated continuously, baked into every quote, repair and custom order." },
  { Icon: InventoryIcon, title: "Smart Inventory & SKU Alerts", body: "Search, lookup and add inventory. Get pinged the moment a SKU dips below your threshold." },
  { Icon: WrenchIcon, title: "Repair Intake & Tracking", body: "Capture intake notes, track status, and surface overdue repairs before customers walk back in." },
  { Icon: HeartIcon, title: "Customer CRM", body: "Layaway, appraisals, pending payments — plus AI-drafted birthday and anniversary wishes." },
  { Icon: ChatIcon, title: "WhatsApp & Jeweller Chat", body: "Reach customers on WhatsApp and chat with your team — without leaving the platform." },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-surface-2/30">
      <div className="section">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Everything in one place</span>
            <h2 className="mt-3 headline">
              One platform. Every part of the <span className="serif-italic">jeweller's day</span>.
            </h2>
            <p className="mt-5 text-ink/80 text-lg leading-relaxed">
              Stop juggling four tools. Crown Jewels gives you the operational backbone — and a few moves your competitors can't match.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="feature-card group h-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl tracking-tight">{title}</h3>
                <p className="mt-3 text-ink/75 leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
