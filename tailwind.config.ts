import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img1: "url('/src/assets/background.png')", // ✅ bu yer to‘g‘ri
      },
    },
  },
  plugins: [],
};

export default config;
