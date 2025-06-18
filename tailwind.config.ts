import type { Config } from "tailwindcss";
import scrollbar from 'tailwind-scrollbar';

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/[locale]/**/*.{js,ts,jsx,tsx,mdx}',
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

export default config;