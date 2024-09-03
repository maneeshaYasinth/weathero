/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '15xl': '12rem', // 128px
        '11xl': '9rem', // 144px
      },
      fontFamily: {
        pixelify: ['"Pixelify Sans"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}