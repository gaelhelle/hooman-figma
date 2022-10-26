/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "theme-main": `10px 20px 50px rgba(0, 0, 0, 0.2)`,
      },
      borderRadius: {
        "theme-main": 20,
      },
    },
  },
  plugins: [],
};
