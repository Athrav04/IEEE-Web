import { useState } from "react";
import Footer from "./Footer"
import NavBar from "./NavBar/NavBar"
import NavBarMob from "./NavBar/NavBarMob";

function Acheivements() {
      const [long, setLong] = useState(false);
    
      const changeNavBar = () => {
        if(window.innerWidth >= 768){
          setLong(true);
        }else{
          setLong(false);
        }
      };
    
      window.addEventListener('pageshow', changeNavBar);

      
    return(
        <>
            <div className='relative'>
                <div className='fixed top-0 z-10'>
                {(long)? <NavBar/> : <NavBarMob/> }
                </div>
                <div className="absolute inset-0">
                <p className='font-montserrat font-black my-12 text-center text-white text-base md:text-5xl md:my-16 lg:text-6xl lg:my-20'>Acheivements</p>
                <div className="container mx-8 my-12 md:mx-28 md:my-16 lg:mx-54 lg:my-20 w-auto text-sm">
                <div className='container my-4 h-10 p-5 bg-white md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>1</div>
                <div className='container my-4 h-10 p-5 bg-white md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>2</div>
                <div className='container my-4 h-10 p-5 bg-white md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>3</div>
                <div className='container my-4 h-10 p-5 bg-white md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>4</div>
                <div className='container my-4 h-10 p-5 bg-white md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>5</div>
                <div className='container my-4 h-10 p-5 bg-white md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>6</div>
                <div className='container my-4 h-10 p-5 bg-white md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>7</div>
                <div className='container my-4 h-10 p-5 bg-white md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>8</div>
                <div className='container my-4 h-10 p-5 bg-white md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>9</div>
                </div>
                    <Footer/>
                </div>
                <img src='\ieee-bg.jpeg' alt='ieee-bg' />
            </div>
        </>
    )
}

export default Acheivements