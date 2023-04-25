/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'juzto-yellow': '#FFC800',
        'juzto-blue': '#002888',
        'juzto-text-blue': '#0040D0',
      },
    },
  },
  plugins: [],
}

