/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Mulish'],
        body: ['Rokkitt'],
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
    },
    extend: {},
  },
  plugins: [],
};
