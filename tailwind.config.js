/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        canvas: {
          950: "#0A0A0B",
          900: "#111111",
          850: "#161618",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          soft: "rgba(139,92,246,0.16)",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139,92,246,0.2), 0 24px 80px rgba(0,0,0,0.45)",
        soft: "0 20px 80px rgba(0,0,0,0.28)",
      },
      backgroundImage: {
        "subtle-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
