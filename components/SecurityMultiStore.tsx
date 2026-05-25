import { ShieldIcon, InventoryIcon, TrendIcon, SparkleIcon } from "./Icon";
import Reveal from "./Reveal";

const pillars = [
  { Icon: ShieldIcon, title: "Two-Factor Auth", body: "Protect every store sign-in with TOTP-based 2FA." },
  { Icon: InventoryIcon, title: "Multi-store ready", body: "Run one store or fifty — switch between locations from a single sign-in." },
  { Icon: TrendIcon, title: "Seller Incentives", body: "Track per-staff performance and run commission programmes out of the box." },
  { Icon: SparkleIcon, title: "Classic Look mode", body: "Staff transitioning from older systems can flip to a familiar layout in one click." },
];

export default function SecurityMultiStore() {
  return (
    <section className="py-20 lg:py-28 bg-surface-2/30">
      <div className="section">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">Run it like a real business</span>
            <h2 className="mt-3 headline">
              Secure. Multi-store. <span className="serif-italic">Staff-friendly.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="card p-7 h-full">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl tracking-tight">{title}</h3>
                <p className="mt-2 text-sm text-ink/75 leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
