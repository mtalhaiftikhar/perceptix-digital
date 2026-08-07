/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        teal: {
          400: '#00DBC2',
          500: '#00BBA7',
          600: '#008F7F',
          700: '#006B5F',
        },
        navy: {
          950: '#060B15',
          900: '#0B132B',
          800: '#121C2D',
          700: '#1C2D47',
        }
      }
    },
  },
  plugins: [],
}
