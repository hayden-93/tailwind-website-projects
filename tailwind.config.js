/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "clipboard-cyan": "hsl(171, 66%, 44%)",
          "clipboard-light-blue": "hsl(233, 100%, 69%)",
        },
        neutral: {
          "clipboard-dark-blue": "hsl(210, 10%, 33%)",
          "clipboard-blue": "hsl(201, 11%, 66%)",
        },
        "shortly-cyan": "hsl(180, 66%, 49%)",
        "shortly-cyanLight": "hsl(180, 66%, 69%)",
        "shortly-darkViolet": "hsl(257, 27%, 26%)",
        "shortly-red": "hsl(0, 87%, 67%)",
        "shortly-grayishViolet": "hsl(257, 7%, 63%)",
        "shortly-veryDarkBlue": "hsl(255, 11%, 22%)",
        "shortly-veryDarkViolet": "hsl(260, 8%, 14%) ",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        180: "32rem",
        mobile: "375px",
        desktop: "1440px",
      },
      screens: {
        "loop-sm": "480px",
        "loop-md": "768px",
        "loop-lg": "976px",
        "loop-xl": "1440px",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
        "Bai-Jamjuree": "'Bai Jamjuree'",
      },
      letterSpacing: {
        widest: "0.3em",
      },
    },
  },
  plugins: [],
};
