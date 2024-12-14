/** @type {import('tailwindcss').Config} */
import tailwindcss from 'tailwindcss'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        animateUnderline:{
          '0%':{width:'0%'},
          '15%':{width:'20%'},
          '30':{width:'30%'},
          '50%':{width:'50%'},
          '75%':{width:'75%'},
          '100%':{width:'100%'}
        },
        reverse:{
          '0%': { transform: 'scaleX(0)' },
          '25%': { transform: 'scaleX(0.25)' },
          '50%': { transform: 'scaleX(0.5)' },
          '75%': { transform: 'scaleX(0.75)' },
          '100%': { transform: 'scaleX(1)' }
        },
      },
      animation:{
        animatedUnderline : 'animateUnderline 5s linear ',
        reverse:'reverse 5s linear',
      },
      backgroundSize: {
        'auto':'auto',
        'cover':'cover',
        'contain':'contain',
        "200%":'200%'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        icona: ["icona"]
      },
    },
  },
  plugins: [tailwindcss,require('tailwind-gradient-mask-image')]
}