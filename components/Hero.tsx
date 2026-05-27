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
                <span>AI-native · built for jewelers</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 headline headline-xl">
                Where craft meets <span className="serif-italic text-accent">intelligence</span>.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl text-ink/75 leading-relaxed text-[clamp(1.05rem,1.4vw,1.25rem)]">
                Crown Jewels is the AI-native operating system for jewelry stores.
                It sketches custom designs, messages your customers, watches your
                inventory and revenue, and surfaces the moments that matter — so you
                stay where you belong: on the bench.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="/book-demo" className="btn-primary">Book a Demo</a>
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

              <div className="relative ml-auto w-full max-w-[27rem]">
                {/* Floating AI Insight chip */}
                <div className="absolute -top-7 -left-9 w-[15.5rem] rotate-[-4deg] rounded-2xl glass shadow-soft p-4 hidden sm:block animate-float z-20">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent/15 text-accent">
                      <SparkleIcon className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-ink">Active Advisor</span>
                  </div>
                  <p className="mt-2 text-[11px] text-ink/80 leading-relaxed">
                    "Christmas is in 18 days. Your gold-ring stock is 32% below last year's pace. Want me to draft a restock plan?"
                  </p>
                </div>

                {/* Jeweler AI Agent Window */}
                <div className="relative rounded-2xl card overflow-hidden shadow-glow">
                  {/* Browser-like window header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-line/[0.08] bg-surface-2/40 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      <span className="ml-2 font-medium text-ink/60 flex items-center gap-1.5">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                        Jeweler AI Agent
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted hover:text-ink transition cursor-pointer">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 7l-.8 13.4c0 1-.9 1.6-1.8 1.6H7.6c-.9 0-1.8-.6-1.8-1.6L5 7m5 4v6m4-6v6M3 7h18M8 7l1-3h6l1 3"/></svg>
                      <span className="text-[10px]">Clear Chat</span>
                    </div>
                  </div>

                  <div className="p-6 bg-surface">
                    {/* Central Brain Icon Logo */}
                    <div className="flex flex-col items-center text-center">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent mb-3 shadow-sm animate-pulse">
                        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"/>
                        </svg>
                      </div>
                      <h3 className="font-display text-lg font-medium text-ink">Jeweler AI Agent</h3>
                      <p className="mt-1.5 text-[11px] text-muted max-w-sm leading-relaxed">
                        Your real-time, high-powered strategic store advisor. Leverage advanced customer clienteling, sales profiling, and seasonal holiday planning tools.
                      </p>
                    </div>

                    {/* Capabilities Outline Box */}
                    <div className="mt-5 rounded-xl border border-line/[0.06] bg-surface-2/30 p-3.5">
                      <div className="text-[10px] uppercase tracking-wider text-muted font-semibold text-center mb-2.5">
                        Capabilities Outline
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-ink/80">
                        <div className="flex items-center gap-2 px-2 py-1 rounded bg-surface/50 border border-line/[0.04]">
                          <span className="text-accent">👤</span>
                          <span className="font-medium">Clienteling</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1 rounded bg-surface/50 border border-line/[0.04]">
                          <span className="text-emerald-500">📈</span>
                          <span className="font-medium">Sales Audit</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1 rounded bg-surface/50 border border-line/[0.04]">
                          <span className="text-amber-500">📢</span>
                          <span className="font-medium">Holidays</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1 rounded bg-surface/50 border border-line/[0.04]">
                          <span className="text-indigo-500">📊</span>
                          <span className="font-medium">Stock Gaps</span>
                        </div>
                      </div>
                    </div>

                    {/* Suggested Prompts */}
                    <div className="mt-5 space-y-2">
                      <div className="text-[10px] uppercase tracking-wider text-muted font-semibold">Suggested Prompts</div>
                      {[
                        ["👤", "Customer clienteling for [Customer Name]..."],
                        ["📈", "Improve sales & local demographics..."],
                        ["📢", "Holiday calendar preparation..."],
                        ["📊", "Top-sellers & inventory extremes..."],
                      ].map(([emoji, text], i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 w-full text-left rounded-xl border border-line/[0.08] bg-surface-2/20 hover:bg-accent/5 hover:border-accent/20 px-3.5 py-2 text-[11px] text-ink/75 hover:text-accent transition duration-200 cursor-pointer"
                        >
                          <span>{emoji}</span>
                          <span className="truncate">{text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Mock Chat Input */}
                    <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-line/[0.12] bg-surface-2/40 px-3.5 py-2.5 text-xs text-muted">
                      <span className="flex-1">Type your message...</span>
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted hover:text-accent cursor-pointer transition" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating active design image card (Retaining old ring images) */}
                <div className="absolute -bottom-12 -left-12 w-[11.5rem] rounded-2xl glass shadow-soft p-2 hidden sm:block animate-float z-30" style={{ animationDelay: "1s" }}>
                  <div className="aspect-square rounded-xl overflow-hidden border border-line/[0.12]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1529519195486-16945f0fb37f?w=300&q=70&auto=format&fit=crop"
                      alt="Active oval halo design concept"
                      className="h-full w-full object-cover animate-pulse"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-2 px-1 pb-1">
                    <div className="text-[9px] uppercase tracking-[0.1em] text-muted font-semibold">Live AI Concept</div>
                    <div className="text-[10px] font-semibold text-ink truncate mt-0.5">Oval Halo Ring ~1.5ct</div>
                  </div>
                </div>

                {/* Floating gold metal price chip */}
                <div
                  className="absolute -bottom-6 -right-4 rounded-2xl bg-plum-900 text-white px-4 py-3.5 shadow-glow flex items-center gap-3 hidden sm:flex animate-float z-20"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="text-[10px] text-white/55 uppercase tracking-wider font-semibold">Gold · 22k</div>
                    <div className="text-xs font-semibold">$4,300/oz <span className="text-emerald-300 ml-1 font-medium">+0.4%</span></div>
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
