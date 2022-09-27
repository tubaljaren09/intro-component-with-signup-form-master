/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "hsl(0, 100%, 74%)",
      blue: "hsl(248, 32%, 49%)",
      black: "rgba(0, 0, 0, 0.5)",
      green: "hsl(154, 59%, 51%)",
    },
    screens: {
      desktop: "1440px",
    },
  },
  plugins: [],
};
