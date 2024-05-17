/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      color1: "#1F2937",
      color2: "#111827",
      color3: "#151515",
      color4: "#FFFFFF",
      color5: "#444444",
      color6: "#737373",
      color7: "#A1A1A1",
      color8: "#D0D0D0",
      color9: "#E8E8E8",
      color10: "#F3F3F3",
      color11: "#BB8506",
    },
    fontFamily: {
      inter: '"Inter", sans-serif',
      cinzel: '"Cinzel", serif;',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
