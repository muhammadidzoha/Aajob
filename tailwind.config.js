/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
        serif: ["'Dancing Script', serif"],
      },
      colors: {
        first: "#403FF2",
        second: "#00334E",
        third: "#8D93AB",
      },
    },
  },
  plugins: [],
};
