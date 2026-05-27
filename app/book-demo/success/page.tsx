"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function DemoSuccessPage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* CSS Floating Confetti Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-15">
        {[...Array(16)].map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = 6 + Math.random() * 6;
          const size = 6 + Math.random() * 8;
          const colors = ["bg-accent/40", "bg-accent-2/40", "bg-sky-400/40", "bg-indigo-400/40"];
          const colorClass = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              key={i}
              className={`absolute rounded-full ${colorClass} animate-float`}
              style={{
                left: `${left}%`,
                top: `105%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                animationIterationCount: "infinite",
                transform: "translateY(0)",
              }}
            />
          );
        })}
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-35 -z-10" />

      <Nav />

      <section className="section py-16 lg:py-24 flex-1">
        <div className="max-w-4xl mx-auto text-center">
          {/* Central emblem */}
          <Reveal>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shadow-md">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 headline text-4xl sm:text-6xl">
              Your demo is <span className="serif-italic text-accent">confirmed</span>!
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-ink/75 text-base sm:text-lg leading-relaxed">
              We've successfully registered your store profile. An advisor from <strong className="text-ink font-semibold">FOURFOLD LLC</strong> will contact you within 24 hours to coordinate your live walkthrough.
            </p>
          </Reveal>

          {/* Embedded YouTube Showcase Container */}
          <Reveal delay={200} className="mt-14">
            <div className="relative rounded-2xl border border-line/[0.10] bg-surface/50 backdrop-blur-md p-4 sm:p-6 shadow-glow max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line/[0.08] pb-4 mb-5 text-left">
                <div>
                  <h3 className="text-sm font-semibold text-ink">Can't wait for your live session?</h3>
                  <p className="text-[11px] text-muted mt-0.5">Here is a recording showing key operating system features in action.</p>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                  Product Walkthrough
                </span>
              </div>

              {/* YouTube Iframe wrapper */}
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-inner border border-line/[0.06] bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/TDR5HkY0U7E"
                  title="Crown Jewels Platform Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          {/* Key Product Highlights Grid */}
          <Reveal delay={300} className="mt-16 border-t border-line/[0.06] pt-12">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-medium text-ink">What we will cover in your live demo</h2>
              <p className="text-xs text-muted mt-1">Custom-tailored topics based on your store's POS configuration.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
              {[
                {
                  title: "1. AI Design Sandbox",
                  desc: "Learn to control parameters like metal weights, stone ratings, and side-detail milgrain using natural English requests.",
                },
                {
                  title: "2. Clienteling Pipeline",
                  desc: "Connect your customer profile database to WhatsApp Web, generating tailored birthday promotions instantly.",
                },
                {
                  title: "3. Inventory Audit & Alerting",
                  desc: "Configure SKU alerts for low margins, overdue repairs, and gold/platinum price swings.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl border border-line/[0.06] bg-surface-2/20 backdrop-blur-sm">
                  <h4 className="text-xs font-semibold text-accent uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs text-ink/85 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400} className="mt-12">
            <a href="/" className="btn-ghost text-xs px-6 py-3 font-semibold">
              Return to landing page
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
