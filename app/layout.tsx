import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crown Jewels — AI-Native Jewelry Store Operating System",
  description:
    "The AI-native operating system for independent jewelry stores. Manage custom orders, repair intake, gold price tracking, layaway, and clienteling CRM with intelligent AI design sketching.",
  keywords: "jewelry store software, jeweler POS, jewelry inventory management, custom jewelry design AI, jeweler CRM, repair intake software, gold price tracker",
  icons: {
    icon: "/crown_favicon.svg",
  },
  openGraph: {
    title: "Crown Jewels — AI-Native Jewelry Store Operating System",
    description: "The AI-native operating system for jewelry stores. Manage inventory, clienteling, custom AI designs, and repair workflows on a unified screen.",
    type: "website",
  }
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
