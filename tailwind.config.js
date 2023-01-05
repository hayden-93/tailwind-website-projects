/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
        xs: '12px',
      },
    },
    fontFamily: {
      display: ['Mulish'],
      body: ['Rokkitt'],
    },
    screens: {
      sm: '375px',
      md: '768px',
    },
  },
  extend: {},
};
