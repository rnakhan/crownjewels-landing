import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="demo" className="py-24">
      <div className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-plum-700 via-plum-500 to-plum-900 text-white p-12 lg:p-16 shadow-glow">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-plum-300/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="headline">
                Ready to run your store the <span className="serif-italic text-gold-300">modern way?</span>
              </h2>
              <p className="mt-6 text-white/85 text-lg leading-relaxed">
                We'll walk through Crown Jewels with your team, set up a sandbox with your inventory, and have you trading in under a week.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hello@crownjewels.app?subject=Crown%20Jewels%20Demo" className="btn-gold">Book a Demo</a>
                <a href="https://crownjewels-staging.web.app/login" className="rounded-full border border-white/30 px-6 py-3 hover:bg-white/10 transition text-white">Sign in to your store</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
