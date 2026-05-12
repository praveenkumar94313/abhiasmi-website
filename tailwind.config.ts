import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  "#FDFBF7",
          100: "#FAF6EE",
          200: "#F5EDD9",
          300: "#EDE0C4",
          400: "#E0CFA8",
        },
        charcoal: {
          700: "#2C2C2C",
          800: "#1E1E1E",
          900: "#111111",
        },
        slate: {
          warm: "#6B7280",
          muted: "#9CA3AF",
        },
        gold: {
          300: "#D4B483",
          400: "#C9A96E",
          500: "#B8935A",
          600: "#9D7A45",
        },
        navy: {
          800: "#1E2A3A",
          900: "#111827",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans:  ["Inter", "Montserrat", "system-ui", "sans-serif"],
      },
      animation: {
        "ken-burns":    "kenBurns 20s ease-in-out infinite alternate",
        "thread-spin":  "threadSpin 1.8s linear infinite",
        "thread-wind":  "threadWind 2s ease-in-out infinite",
        "grain":        "grain 8s steps(10) infinite",
        "fade-in-up":   "fadeInUp 0.8s ease forwards",
        "shimmer":      "shimmer 2s infinite",
      },
      keyframes: {
        kenBurns: {
          "0%":   { transform: "scale(1)    translateX(0%)   translateY(0%)" },
          "50%":  { transform: "scale(1.08) translateX(-1%)  translateY(-1%)" },
          "100%": { transform: "scale(1.12) translateX(1%)   translateY(-2%)" },
        },
        threadSpin: {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        threadWind: {
          "0%, 100%": { strokeDashoffset: "0" },
          "50%":      { strokeDashoffset: "-200" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%":      { transform: "translate(-5%, -10%)" },
          "20%":      { transform: "translate(-15%, 5%)" },
          "30%":      { transform: "translate(7%, -25%)" },
          "40%":      { transform: "translate(-5%, 25%)" },
          "50%":      { transform: "translate(-15%, 10%)" },
          "60%":      { transform: "translate(15%, 0%)" },
          "70%":      { transform: "translate(0%, 15%)" },
          "80%":      { transform: "translate(3%, 35%)" },
          "90%":      { transform: "translate(-10%, 10%)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "linen-pattern": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23b8935a' fill-opacity='0.08' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'/%3E%3C/svg%3E\")",
        "weave-pattern":  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Cpath fill='%23c9a96e' fill-opacity='0.07' d='M5 0h1L0 6V5zm1 5v1H5z'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        gold:   "0 4px 24px rgba(184, 147, 90, 0.25)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.18)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
