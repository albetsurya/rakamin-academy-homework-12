/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      color: {
        primary: "#eeeeee",
        accent: "#73A79A",
        secondary: "#393e46",
        dark: "#222831",
      },
    },
  },
  plugins: [],
};
