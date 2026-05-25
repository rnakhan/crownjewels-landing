export default function Footer() {
  return (
    <footer className="border-t border-line/[0.10] py-10">
      <div className="section flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-gold-300 to-gold-700 text-white text-sm">◆</span>
          <span className="font-display text-base text-ink">Crown Jewels</span>
          <span>· © {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@crownjewels.app" className="hover:text-ink transition">Contact</a>
          <a href="https://crownjewels-staging.web.app/login" className="hover:text-ink transition">Store sign in</a>
          <a href="#features" className="hover:text-ink transition">Features</a>
        </div>
      </div>
    </footer>
  );
}
