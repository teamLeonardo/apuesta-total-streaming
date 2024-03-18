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
        gradiantLeft:
            'linear-gradient(90deg, rgba(0,0,0,0.9002320185614849) 0%, rgba(0,0,0,0) 70%)',
        gradiantBotton:
            'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0) 70%)',
        gradiantTop:
            'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
        gradiantBottonCard:
            'linear-gradient(0deg, rgba(0,0,0,0.6951155462184874) 0%, rgba(0,0,0,0) 80%)',
        gradiantTop2:
            'linear-gradient(180deg, rgba(0,0,0,0.5914740896358543) 0%, rgba(0,0,0,0) 34%)',
        footerGradiant:
            'linear-gradient(180deg,#0000,oklch(61.64% 0.111 222.57 / 23.53%))',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'tablet': '740px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors: {
        'fondo': "#101427",
        panel: "var(--panel-color)",
        text1: "var(--text-color-1)",
        text2: "var(--text-color-2)",
        secondaryColor: "rgb(var(--secondary-color))",
      },
    },
  },
  plugins: [],
};
export default config;
