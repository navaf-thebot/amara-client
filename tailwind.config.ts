import type { Config } from "tailwindcss"
import scrollbar from 'tailwind-scrollbar';

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ["'Bodoni Moda'", "serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [scrollbar],
}

export default config
