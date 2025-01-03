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
        blob:{
          '0%':{transform:'translate(0px,0px) scale(1)'},
          '33%':{transform:'translate(30px,-50px) scale(1.1)'},
          '66%':{transform:'translate(-20px,20px) scale(0.9)'},
          '100%':{transform:'translate(0px,0px) scale(1)'}
        },
        animateText:{
          '0%':{transform:'translateY(2px)'},
          '50%':{transform:'translateY(-5px)'},
          '100%':{transform:'translateY(2px)'}
        },
        conicSpin:{
          '100%':{transform:'rotate(-360deg)'}
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
        gradient:'animatedGradient 3s linear infinite',
        conic:'conicSpin 10s linear infinite',
        blob:'blob 25s infinite'
      },
      backgroundSize: {
        'auto':'auto',
        'cover':'cover',
        'contain':'contain',
        '200%':'200%'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        icona: ["icona"],
        roboto: ["Roboto"],
        poppins: ["Poppins"],
        oswald: ["Oswald"],
        Genome: ["Genome"],
      },
    },
  },
  plugins: [tailwindcss,require('tailwind-gradient-mask-image')]
}