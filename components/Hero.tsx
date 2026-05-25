import { SparkleIcon } from "./Icon";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background mesh + grid */}
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark" />
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 80%)",
        }}
      />

      <div className="section relative pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-line/15 bg-surface/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-accent">
                <SparkleIcon className="h-3.5 w-3.5" />
                <span>AI-native · built for jewellers</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 headline headline-xl">
                Where craft meets <span className="serif-italic text-accent">intelligence</span>.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl text-ink/75 leading-relaxed text-[clamp(1.05rem,1.4vw,1.25rem)]">
                Crown Jewels is the AI-native operating system for jewellery stores.
                It sketches custom designs, messages your customers, watches your
                inventory and revenue, and surfaces the moments that matter — so you
                stay where you belong: on the bench.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#demo" className="btn-primary">Book a Demo</a>
                <a href="https://crownjewels-staging.web.app/login" className="btn-ghost">Sign in to your store</a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Designs in</dt>
                  <dd className="mt-1 font-display text-3xl tracking-tight">5s</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Tools replaced</dt>
                  <dd className="mt-1 font-display text-3xl tracking-tight">7+</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Setup</dt>
                  <dd className="mt-1 font-display text-3xl tracking-tight">&lt; 1 wk</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Right: layered AI mockup */}
          <Reveal delay={200} className="lg:col-span-5">
            <a
              href="https://crownjewels-staging.web.app/"
              target="_blank"
              rel="noopener"
              className="group relative block"
              aria-label="View Crown Jewels live"
            >
              <div className="absolute -inset-10 bg-gradient-to-tr from-plum/30 via-gold/20 to-transparent rounded-[2.5rem] blur-3xl" />

              <span className="absolute -top-2 right-2 z-20 rounded-full bg-accent text-white text-[11px] font-medium px-3 py-1 opacity-0 group-hover:opacity-100 transition shadow-glow">
                View live →
              </span>

              <div className="relative ml-auto w-full max-w-[26rem]">
                {/* AI Insight floating card */}
                <div className="absolute -top-6 -left-8 w-[14.5rem] rotate-[-5deg] rounded-2xl glass shadow-soft p-4 hidden sm:block animate-float">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent/15 text-accent">
                      <SparkleIcon className="h-4 w-4" />
                    </span>
                    <span className="font-semibold">AI Insight</span>
                  </div>
                  <p className="mt-2 text-[11px] text-ink/80 leading-relaxed">
                    "Diwali is in 18 days. Your gold-ring stock is 32% below last year's pace. Want me to draft a restock plan?"
                  </p>
                </div>

                {/* Front card */}
                <div className="relative rounded-2xl card overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-line/[0.10] text-xs">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-300" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-muted">Crown Jewels — AI Design</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent text-white">
                        <SparkleIcon className="h-4 w-4" />
                      </div>
                      <div className="rounded-xl bg-surface-2 border border-line/[0.06] px-4 py-3 text-sm text-ink/90 leading-relaxed">
                        Vintage halo engagement ring, oval centre stone, rose-gold band, milgrain detail, ~1.5ct.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[
                        "https://images.unsplash.com/photo-1529519195486-16945f0fb37f?w=300&q=70&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1579555973297-560c43ca7562?w=300&q=70&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1499899833954-5ecd9439d17f?w=300&q=70&auto=format&fit=crop",
                      ].map((src, i) => (
                        <div key={i} className="aspect-square rounded-lg overflow-hidden border border-line/[0.12]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={src} alt={`Ring concept ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                      <span className="px-3 py-1.5 rounded-full bg-accent text-white font-medium">Save to customer</span>
                      <span className="px-3 py-1.5 rounded-full border border-line/15">Quote with live gold price</span>
                      <span className="px-3 py-1.5 rounded-full border border-line/15">Send to WhatsApp</span>
                    </div>
                  </div>
                </div>

                {/* Floating metal price chip */}
                <div className="absolute -bottom-5 -right-3 rounded-2xl bg-plum-900 text-white px-4 py-3 shadow-glow flex items-center gap-3 hidden sm:flex animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="text-[10px] text-white/55 uppercase tracking-wider">Gold · 22k</div>
                    <div className="text-sm font-semibold">$2,418/oz <span className="text-emerald-300 text-xs">+0.4%</span></div>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
