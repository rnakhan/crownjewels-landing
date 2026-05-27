import { GemIcon, TrendIcon, InventoryIcon, WrenchIcon, HeartIcon, ChatIcon } from "./Icon";
import Reveal from "./Reveal";

const features = [
  { Icon: GemIcon, title: "AI Jewelry Design Generator", body: "Draft custom rings and concepts at the counter in under 5 seconds. Save designs directly to customer profiles for future reference and manufacturing." },
  { Icon: TrendIcon, title: "Precious Metal Price Sync", body: "Gold, silver, and platinum rates update continuously. Spot prices automatically calculate margins for repairs, appraisals, and order quotes." },
  { Icon: InventoryIcon, title: "Smart Inventory & POS", body: "Quick barcode or SKU lookup. Process split Stripe payments, issue gift receipts, log manual store credit adjustments, and track layaway installments." },
  { Icon: WrenchIcon, title: "Repair & Appraisal Intake", body: "Capture repair details with upfront deposit options, print official PDF repair quote certificates, and upload appraisal images directly via mobile camera." },
  { Icon: HeartIcon, title: "CRM & Customer Engagement", body: "Search clients by loyalty tiers and store demographics. Generate SMS QR codes for immediate customer messaging and draft custom holiday greetings." },
  { Icon: ChatIcon, title: "WhatsApp & Jeweler Chat", body: "Message suppliers and sync order history automatically. Leverage three-mode AI Chat (How Do I, General Jewelry, and Repair inventory lookup)." },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-surface-2/30">
      <div className="section">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Everything in one place</span>
            <h2 className="mt-3 headline">
              One platform. Every part of the <span className="serif-italic">jeweler's day</span>.
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
