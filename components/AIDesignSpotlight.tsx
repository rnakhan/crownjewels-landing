import Reveal from "./Reveal";

export default function AIDesignSpotlight() {
  return (
    <section id="design" className="relative py-20 lg:py-28 bg-plum-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_20%,rgba(187,160,123,0.28),transparent_60%),radial-gradient(700px_500px_at_10%_90%,rgba(167,139,250,0.22),transparent_60%)]" />
      <div className="section relative grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="order-2 lg:order-1">
          <a href="https://crownjewels-staging.web.app/" target="_blank" rel="noopener" className="group block">
            <div className="relative rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 shadow-glow">
              <span className="absolute -top-3 right-4 z-10 rounded-full bg-gold-500 text-ink text-[11px] font-medium px-3 py-1 opacity-0 group-hover:opacity-100 transition">
                View live →
              </span>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="ml-3">Jewelry Design Generator</span>
              </div>
              <div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-xs text-white/60">Prompt</div>
                <p className="mt-1 text-sm text-white/90">
                  "Vintage halo engagement ring, oval centre stone, rose-gold band, milgrain detail, ~1.5ct."
                </p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?w=600&q=70&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1518370265276-f22b706aeac8?w=600&q=70&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1559006864-38a01f201f95?w=600&q=70&auto=format&fit=crop",
                ].map((src, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`AI generated ring concept ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-full bg-gold-500 text-ink font-medium">Save Design</span>
                <span className="px-3 py-1.5 rounded-full border border-white/20">Quote Customer</span>
                <span className="px-3 py-1.5 rounded-full border border-white/20">Send via WhatsApp</span>
              </div>
            </div>
          </a>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <span className="eyebrow !text-gold-300">AI that earns its keep</span>
          <h2 className="mt-3 headline">
            Sketch a custom piece <span className="serif-italic text-gold-300">in seconds</span>.<br />
            Save it. Quote it. Sell it.
          </h2>
          <p className="mt-6 text-white/70 text-lg max-w-xl leading-relaxed">
            The Jewelry Design Generator turns a customer's words into renderings while they're still at the counter. Save to the customer's profile, push a quote with live metal pricing, send the design to WhatsApp — done before they finish their coffee.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="btn-gold">See it in action</a>
            <a href="https://crownjewels-staging.web.app/login" className="rounded-full border border-white/20 px-6 py-3 hover:bg-white/10 transition text-white">Try a demo store</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
