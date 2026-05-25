import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crown Jewels — Where craft meets intelligence",
  description:
    "The AI-native operating system for jewellers. Sketches custom designs, messages customers, watches inventory, surfaces what matters — so you stay on the bench.",
};

const themeBootstrap = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (t === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="font-sans antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
