/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      gray: "#363958",
      navi_blue: "#363958;",
      background_color: "#FFFBF0",
      orange_color: "#FABE4C",
    },
  },
  plugins: [require("daisyui")],
};
