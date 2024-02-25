/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom:{
          100:"#012943",
          101:"#F9B02A",
          102:"#005493",
        }

      }
    },
  },
  plugins: [],
}