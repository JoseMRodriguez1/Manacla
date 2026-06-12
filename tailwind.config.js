/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2A5A3B',
          secondary: '#4A90E2',
          accent: '#8B5A2B',
          bg: '#F8F9FA',
          text: '#2D3748'
        }
      }
    },
  },
  plugins: [],
}
