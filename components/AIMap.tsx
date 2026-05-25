import { PenIcon, ChatIcon, BellIcon, BotIcon } from "./Icon";
import Reveal from "./Reveal";

const items = [
  { Icon: PenIcon, name: "AI sketches", body: "The Jewelry Design Generator turns plain-English requests into rendered concepts your customer can react to in real time." },
  { Icon: ChatIcon, name: "AI writes", body: "Drafts WhatsApp wishes, festival promotions, and customer follow-ups in your tone — ready to send in one tap." },
  { Icon: BellIcon, name: "AI watches", body: "Tracks SKU thresholds, overdue repairs, customer birthdays, and metal-price moves. Surfaces only what needs you." },
  { Icon: BotIcon, name: "AI assists", body: "Jeweller Chat answers questions about your inventory, sales, and customers. Ask in English. Get the number." },
];

export default function AIMap() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="section">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">AI in every part of your day</span>
            <h2 className="mt-3 headline">
              Not "AI features". <br className="hidden sm:block" />
              <span className="serif-italic text-accent">AI fabric.</span>
            </h2>
            <p className="mt-5 text-ink/80 text-lg leading-relaxed max-w-2xl">
              Crown Jewels was built around AI from day one — not bolted on. It shows up everywhere a jeweller needs it, and stays out of the way everywhere they don't.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ Icon, name, body }, i) => (
            <Reveal key={name} delay={i * 80}>
              <div className="card p-7 h-full relative">
                <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight">{name}</h3>
                <p className="mt-2 text-ink/75 leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
