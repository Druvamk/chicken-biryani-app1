/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: { center: true, padding: { DAFAULT: "1rem", sm: "3rem" } },
      colors: { primary: "#ffc001", secondary: "#ff9c01" },
    },
  },
  plugins: [],
};
