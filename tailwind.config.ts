import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — driven by CSS vars in globals.css
        bg: "rgb(var(--bg) / <alpha-value>)",
        "bg-2": "rgb(var(--bg-2) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-2": "rgb(var(--ink-2) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-2": "rgb(var(--accent-2) / <alpha-value>)",
        // Brand accents (fixed across modes)
        plum: {
          DEFAULT: "#5c3eaa",
          50: "#f3effb",
          100: "#e6dcf5",
          300: "#a78bfa",
          400: "#8b6ed4",
          500: "#5c3eaa",
          600: "#4d2f93",
          700: "#3e2477",
          900: "#241548",
        },
        gold: {
          DEFAULT: "#bba07b",
          50: "#faf6ef",
          100: "#f1e8d8",
          300: "#dcc6a0",
          400: "#cdb796",
          500: "#bba07b",
          600: "#9c8460",
          700: "#76624a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Fraunces'", "'Playfair Display'", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 30px 80px -30px rgb(92 62 170 / 0.35)",
        "glow-gold": "0 30px 80px -30px rgb(187 160 123 / 0.45)",
        soft: "0 10px 40px -20px rgb(15 15 16 / 0.18)",
        ring: "0 0 0 1px rgb(var(--line) / 0.6)",
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(1100px 600px at 80% -10%, rgb(187 160 123 / 0.32), transparent 60%), radial-gradient(900px 500px at -10% 30%, rgb(92 62 170 / 0.22), transparent 60%)",
        "mesh-dark":
          "radial-gradient(1100px 600px at 80% -10%, rgb(187 160 123 / 0.18), transparent 60%), radial-gradient(900px 500px at -10% 30%, rgb(124 87 220 / 0.28), transparent 60%)",
        grid: "linear-gradient(to right, rgb(var(--line) / 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--line) / 0.4) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
