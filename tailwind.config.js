/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: { 50: '#E8F5E9', 100: '#C8E6C9', 200: '#A5D6A7', 300: '#81C784', 400: '#66BB6A', 500: '#4CAF50', 600: '#43A047', 700: '#388E3C', 800: '#2E7D32', 900: '#1B5E20', 950: '#0D3B0F' },
        gold: { 400: '#FFCA28', 500: '#F9A825', 600: '#F57F17' },
        earth: { 100: '#FFF8E1', 200: '#FFECB3', 300: '#FFE082', 400: '#FFD54F', 500: '#FFC107' }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};