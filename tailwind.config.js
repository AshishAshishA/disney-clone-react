/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors1: {
      blue_back: "#14143c",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-no-scrollbar")],
};
