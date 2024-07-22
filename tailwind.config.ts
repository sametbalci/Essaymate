import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "purple-gradient": "linear-gradient(91.35deg, #D37AE9 0.94%, #7E36FC 99.06%);"
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        geistMono: ['var(--font-geist-mono)'],
        'satoshi': "'Satoshi', sans-serif",
        'nanum': "'Nanum Myeongjo', serif",
      },
    },
  },
  plugins: [],
};
export default config;
