import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config
