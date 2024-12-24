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
        animatedGradient:{
          '0%':{backgroundPosition:'0% 50%'},
          '100%':{backgroundPosition:'100% 50%'}
        
        },
        animateText:{
          '0%':{transform:'translateY(2px)'},
          '50%':{transform:'translateY(-5px)'},
          '100%':{transform:'translateY(2px)'}
        }
      },
      backgroundImage:{
          'cardGradient':"linear-gradient(45deg,#2F7FDA,#2575D0,#86B4EA,#FFFFFF,#FFFFFF)",
          'EventGradient':"linear-gradient(45deg,#08090a,#0a0a0a,#FFFFFF,#FFFFFF)",
      },
      animation:{
        animatedUnderline : 'animateUnderline 8s linear ',
        reverse:'reverse 5s linear',
        animateText:'animateText 2s ease-in-out infinite',
        gradient:'animatedGradient 3s linear infinite'
      },
      backgroundSize: {
        'auto':'auto',
        'cover':'cover',
        'contain':'contain',
        '200%':'200%'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        icona: ["icona","icona-italic"],
        roboto: ["Roboto"],
        poppins: ["Poppins"],
        oswald: ["Oswald"],
        Barber: ["barber1"],
        Barber2: ["barber2"],
        Barber3: ["barber3"],
        Barber4: ["barber4"],
      },
    },
  },
  plugins: [tailwindcss,require('tailwind-gradient-mask-image')]
}