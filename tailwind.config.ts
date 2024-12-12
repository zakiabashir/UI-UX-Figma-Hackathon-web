import type { Config } from "tailwindcss";
// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "414px", 
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom: '0px 8px 40px 0px #31208A0D', // Your custom box-shadow
      },
    },
  },
  plugins: [],
} satisfies Config;
