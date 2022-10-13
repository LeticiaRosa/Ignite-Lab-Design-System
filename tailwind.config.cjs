/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      Transparent :'transparent',
      Black: "#000000",
      White: "#FFFFFF",
      Gray: {
        100: "#E1E1E6",
        400: "#7C7C8A",
        800: "#202024",
        900: "#121214",
      },
      Cyan: {
        300: "#9BE1FB",
        500: "#61DAFB"
      }
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
