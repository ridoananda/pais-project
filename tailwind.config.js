/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#6A3CC3',
      },
      container: {
        center: true,
        padding: '2rem'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
};
