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
        'Bai-Jamjuree': "'Bai Jamjuree'",
      },
      letterSpacing: {
        widest: '0.3em',
        mobile: '375px',
        desktop: '1440px',
      },
      colors: {
        primary: {
          'clipboard-cyan': 'hsl(171, 66%, 44%)',
          'clipboard-light-blue': 'hsl(233, 100%, 69%)',
        },
        neutral: {
          'clipboard-dark-blue': 'hsl(210, 10%, 33%)',
          'clipboard-blue': 'hsl(201, 11%, 66%)',
        },
      },
    },
  },
  plugins: [],
};
