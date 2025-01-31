/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#083155", // Use RGB format without alpha
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
