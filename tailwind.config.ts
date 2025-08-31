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
        // 暗红色科技风主题
        "dark-red": {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        "tech-red": {
          50: "#fff1f1",
          100: "#ffe1e1",
          200: "#ffc7c7",
          300: "#ffa0a0",
          400: "#ff6b6b",
          500: "#ff3b3b",
          600: "#ed1515",
          700: "#c80e0e",
          800: "#a50f0f",
          900: "#8a1111",
          950: "#4a0404",
        },
        "neon-red": {
          50: "#fff1f1",
          100: "#ffe1e1",
          200: "#ffc7c7",
          300: "#ffa0a0",
          400: "#ff6b6b",
          500: "#ff3b3b",
          600: "#ed1515",
          700: "#c80e0e",
          800: "#a50f0f",
          900: "#8a1111",
          950: "#4a0404",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "tech-gradient":
          "linear-gradient(135deg, #1a1a1a 0%, #2d1b1b 50%, #1a1a1a 100%)",
        "neon-glow":
          "radial-gradient(circle, rgba(255, 59, 59, 0.3) 0%, transparent 70%)",
        "cyber-grid":
          "linear-gradient(rgba(255, 59, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 59, 59, 0.1) 1px, transparent 1px)",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        glow: {
          "0%": {
            boxShadow: "0 0 5px #ff3b3b, 0 0 10px #ff3b3b, 0 0 15px #ff3b3b",
          },
          "100%": {
            boxShadow: "0 0 10px #ff3b3b, 0 0 20px #ff3b3b, 0 0 30px #ff3b3b",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      fontFamily: {
        cyber: ["Orbitron", "monospace"],
        chinese: ["Noto Sans SC", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
