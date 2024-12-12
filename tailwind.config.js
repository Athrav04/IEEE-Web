/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        
      },
      backgroundImage: {
        'dark-fade': 'linear-gradient(to left, #000000, #0A0A0A, #0A0A0A, #0A0A0A,#0A0A0A,#0A0A0A, #0A0A0A)'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        translate: {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(1px, 0px)' },
        }
      },
      animation: {
        translate: 'translate 1s ease-in'
      }
    },
  },
  plugins: [require('tailwind-gradient-mask-image')],
}