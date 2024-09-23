import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "md": "768px",
      "lg": "1024px",
      "xl": "1332px",
      // "2xl": "1536px"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#9ADCE5",
        black: "#0B0A0A",
        raisin_black: "#262626",
        charleston_green: "#1F2C2E",
        bright_gray: "#EEEEEE",
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
        clashdisplay: ['var(--font-clashdisplay)'],
      }
    },
  },
  plugins: [],
};
export default config;
