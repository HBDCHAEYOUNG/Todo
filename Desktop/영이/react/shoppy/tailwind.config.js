/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: { brand: "#F57B42" },
      backgroundImage: {
        banner: "url('../public/images/banner.jpg')",
      },
    },
  },
  plugins: [],
};
