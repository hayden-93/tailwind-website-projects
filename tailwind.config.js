/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'loop-sm': '480px',
        'loop-md': '768px',
        'loop-lg': '976px',
        'loop-xl': '1440px',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
};
