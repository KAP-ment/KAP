/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        kapNavy: "#07070b",
        kapBlack: "#020203",
        kapAccent: "#6b6cff"
      },
      boxShadow: {
        'kap-deep': '0 10px 30px rgba(2,2,2,0.7)',
        'kap-soft': '0 4px 12px rgba(0,0,0,0.5)'
      },
      blur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
