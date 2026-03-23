/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1f1f1f', // Our primary Charcoal
          900: '#121212', // Deep Charcoal
          950: '#000000',
        },
        amber: {
          50: '#fffcf2',
          100: '#fff9e6',
          200: '#ffefbf',
          300: '#ffe199',
          400: '#ffca66',
          500: '#fab133', // Our primary Gold
          600: '#e0951a',
          700: '#b87514',
          800: '#945d14',
          900: '#7a4d14',
          950: '#472a08',
        },
        fawn: {
          50: '#f9f6f1', // Ultra light background
          100: '#f5f0e3', // Champagne
          200: '#ebdcb0',
          300: '#e1c87d',
          DEFAULT: '#f5f0e3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
