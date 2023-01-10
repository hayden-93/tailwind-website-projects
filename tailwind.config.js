/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      colors: {
        primary: {},
        neutral: {},
      },
      fontFamily: {
        body: ['Bai Jamjuree'],
      },
    },
  },
  plugins: [],
};
