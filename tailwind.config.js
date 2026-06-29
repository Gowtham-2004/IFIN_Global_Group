/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F7941D',
          hover: '#E67E00',
          light: '#FFF6EF',
        },
        surface: '#0C1428',
        'surface-secondary': '#151E34',
        border: '#E5E7EB',
        accent: '#2563EB',
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
