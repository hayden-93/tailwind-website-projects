/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'shortly-cyan': 'hsl(180, 66%, 49%)',
        'shortly-cyanLight': 'hsl(180, 66%, 69%)',
        'shortly-darkViolet': 'hsl(257, 27%, 26%)',
        'shortly-red': 'hsl(0, 87%, 67%)',
        'shortly-grayishViolet': 'hsl(257, 7%, 63%)',
        'shortly-veryDarkBlue': 'hsl(255, 11%, 22%)',
        'shortly-veryDarkViolet': 'hsl(260, 8%, 14%) ',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        180: '32rem',
      },
    },
  },
  plugins: [],
};
