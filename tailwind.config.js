/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#CADB7F",
        darkGreen: "#146531",
        lightGray: "#49454F",
        bgWhite: "#FFF",
        bgBlack: "#000000",
        bgGreen: 'rgba(20, 20, 20, 0.2)'
      },
    },
  },
  plugins: [],
}
