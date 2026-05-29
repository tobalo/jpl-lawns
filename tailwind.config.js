/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F0EAE0',
          300: '#E5DCD0',
          400: '#D4C8B8',
        },
        sage: {
          50: '#F0F4ED',
          100: '#E0E9DA',
          200: '#C5D4BC',
          300: '#A3BD96',
          400: '#8B9E7E',
          500: '#6E8462',
          600: '#566A4D',
        },
        forest: {
          500: '#4A8068',
          600: '#3D6B5A',
          700: '#2C4A3B',
          800: '#1F352B',
          900: '#1A3028',
          950: '#0F1F19',
        },
        bark: {
          50: '#F5EDE6',
          100: '#E8D8CA',
          200: '#C4A88E',
          300: '#A08068',
          400: '#7A5E48',
          500: '#5C4333',
          600: '#3E2E20',
          700: '#2A231C',
        },
        terra: {
          50: '#FDF3ED',
          100: '#F5DFD0',
          200: '#E8BFA5',
          300: '#D4956B',
          400: '#C4785A',
          500: '#B05C3A',
          600: '#8E4A2E',
        },
      },
    },
  },
  plugins: [],
};
