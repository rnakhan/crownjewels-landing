import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-bg/70 border-b border-line/[0.10]">
      <div className="section flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/crown_favicon.svg" alt="Crown Jewels Logo" className="h-8 w-8 filter dark:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
          <span className="font-display text-xl font-medium tracking-tight">Crown Jewels</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink/70">
          <a href="/#features" className="hover:text-ink transition">Features</a>
          <a href="/#workflow" className="hover:text-ink transition">How it works</a>
          <a href="/#design" className="hover:text-ink transition">AI Design</a>
          <a href="/contact" className="hover:text-ink transition font-medium text-accent">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="https://crownjewels-staging.web.app/login" className="hidden sm:inline-flex items-center px-3 py-2 text-sm text-ink/75 hover:text-ink transition">Sign in</a>
          <a href="/book-demo" className="btn-primary text-sm py-2 px-4 whitespace-nowrap">Book a Demo</a>
        </div>
      </div>
    </header>
  );
}
