import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'DM Serif Display'", "serif"],
        body: ["'Inter'", "sans-serif"]
      },
      colors: {
        earth: {
          50: "#f5efe7",
          100: "#e9dcc9",
          200: "#d9c0a0",
          300: "#caa377",
          400: "#ba874e",
          500: "#a06c36",
          600: "#7d5329",
          700: "#5a3a1c",
          800: "#382110",
          900: "#1a0b04"
        },
        sky: {
          50: "#edf6ff",
          100: "#cfe6ff",
          200: "#a1ceff",
          300: "#74b5ff",
          400: "#479cff",
          500: "#1a84ff",
          600: "#0067e6",
          700: "#004fab",
          800: "#00376f",
          900: "#001f33"
        }
      }
    }
  },
  plugins: []
};

export default config;
