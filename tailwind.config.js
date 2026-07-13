/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0d7ff2",
        "eco-green": "#10b981",
        "background-dark": "#0f172a",
        "background-light": "#f5f7f8",
        "slate-card": "rgba(30,41,59,0.7)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
