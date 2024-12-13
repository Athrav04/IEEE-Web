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
        animatedUnderline:{
          '0%':{width:'0px'},
          '15%':{width:'20px'},
          '30%':{width:'30px'},
          '50%': {width:'40px'},
          '75%' : {width:'60px'},
          '85%': {width:'75px'},
          '90%': {width:'90px'},
          '100%':{width:'96px'},

        }
      },
      animations:{
        animatedUnderline : 'animateUnderline 3s linear '
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
      keyframes: {
        '0%':{'background-position':'('}
      },
    },
  },
  plugins: [tailwindcss,require('tailwind-gradient-mask-image')]
}