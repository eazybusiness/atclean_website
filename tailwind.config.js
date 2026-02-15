/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006db5',      // A-Team Dark Blue
        secondary: '#00a7d9',    // A-Team Medium Blue
        accent: '#3bc8e8',       // A-Team Light Blue
      },
    },
  },
  plugins: [],
}
