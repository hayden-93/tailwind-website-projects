/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
    },
    extend: {},
  },
  plugins: [],
};
