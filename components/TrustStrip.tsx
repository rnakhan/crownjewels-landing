export default function TrustStrip() {
  return (
    <section className="border-y border-line/[0.10] bg-surface-2/30">
      <div className="section py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Built for independent jewelers, family ateliers, and multi-store boutiques.
        </p>
        <div className="flex items-center gap-7 text-muted/70 font-display text-base tracking-wide">
          <span>maison ateliér</span>
          <span className="opacity-40">·</span>
          <span className="tracking-[0.15em] text-xs">VERMEIL & CO</span>
          <span className="opacity-40">·</span>
          <span>Goldsmith Row</span>
          <span className="opacity-40">·</span>
          <span>Ananya Jewels</span>
        </div>
      </div>
    </section>
  );
}
