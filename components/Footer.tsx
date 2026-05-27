export default function Footer() {
  return (
    <footer className="border-t border-line/[0.10] py-10 mt-10">
      <div className="section flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/crown_favicon.svg" alt="Crown Jewels Logo" className="h-6 w-6" />
            <span className="font-display text-base text-ink">Crown Jewels</span>
          </div>
          <span className="hidden md:inline">·</span>
          <span>© {new Date().getFullYear()} FOURFOLD LLC. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="/contact" className="hover:text-ink transition font-medium text-accent">Contact Us</a>
          <a href="https://crownjewels-staging.web.app/login" className="hover:text-ink transition">Store sign in</a>
          <a href="/#features" className="hover:text-ink transition">Features</a>
        </div>
      </div>
    </footer>
  );
}
