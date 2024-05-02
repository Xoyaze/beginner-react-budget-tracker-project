/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          100: '#F1E8B8',
          200: '#D05353',
        }
      }
    },
  },
  plugins: [],
}