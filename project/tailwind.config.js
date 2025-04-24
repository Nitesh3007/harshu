/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'lavender': {
          50: '#f7f3ff',
          100: '#edebfe',
          200: '#dcd6fd',
          300: '#cabffc',
          400: '#b19cf9',
          500: '#9271f2',
          600: '#7d4fe4',
          700: '#6c3ccf',
          800: '#5a33aa',
          900: '#4a2d8b',
        },
        'rose': {
          50: '#fff1f6',
          100: '#ffe4ef',
          200: '#fecde2',
          300: '#fda4c8',
          400: '#fb71a7',
          500: '#f44086',
          600: '#e71f66',
          700: '#c31352',
          800: '#a21247',
          900: '#89103f',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};