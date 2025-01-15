/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        impact: ['Impact', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        customRed: '#e30505', // Define your custom red color
      },
    },
  },
  plugins: [],
}
