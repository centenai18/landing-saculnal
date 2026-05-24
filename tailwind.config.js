/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#08080B",
          card: "#101015",
          panel: "#16161D",
          line: "#1E1E27",
        },
        ink: {
          DEFAULT: "#F5F5F7",
          soft: "#A8A8B3",
          dim: "#6B6B78",
          faint: "#3A3A45",
        },
        red: {
          DEFAULT: "#FF2A2A",
          glow: "#FF3D3D",
          deep: "#C81818",
          soft: "#FF6B6B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(255,42,42,0.35)",
        "glow-soft": "0 0 80px -20px rgba(255,42,42,0.2)",
        ring: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
