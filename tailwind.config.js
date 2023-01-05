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
  },
  plugins: [],
};
