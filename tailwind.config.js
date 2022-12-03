/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '750px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
