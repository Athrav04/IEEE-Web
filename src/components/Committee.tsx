import React, { useState } from 'react'
import Cards from './Cards'
import Footer from './Footer'
import NavBar from './NavBar'
import NavBarMob from './NavBarMob'


const Committee = (props: { src: string}) => {
  const src = props.src;

  const [long, setLong] = useState(false);

  const changeNavBar = () => {
    if(window.innerWidth >= 768){
      setLong(true);
    }else{
      setLong(false);
    }
  };

  window.addEventListener('navigate', changeNavBar);

  const [element, setElement ] = useState(false);

  const changeElement = ()=>{
      if(true){
          setElement(true);
      }else{
          setElement(false);
      }
  }

  window.addEventListener('hover', changeElement);
  
  return (
    <div>
      <div>
      <div className='relative'>
        <div className='fixed top-0 z-10'>
        {(long)? <NavBar/> : <NavBarMob/> }
        </div>
        <div className='relative bg-sky-200'>
          <div className='absolute inset-0 place-self-center content-center'>
            <p className='font-montserrat font-black text-center text-black text-sm md:text-2xl lg:text-3xl'>Welcome to 
              <span className='font-montserrat font-black text-center text-purple-500 text-sm md:text-2xl lg:text-3xl'> IEEE-VIIT </span> 
            Student Branch</p>
            <p className='font-mono text-center text-xs md:text-sm lg:text-base'>Advancing Technology for Humanity</p>
          </div>
          <img className="object-fill h-44 lg:h-64 w-full" src={src} alt='committee-bg' />
          <div className="bg-teal-200 w-40 md:w-64 m-1 text-center place-self-center text-sm md:text-base text-indigo-900">Committee</div>
          <div className='bg-gray-300 w-auto'>
            <p className='p-2 text-xs md:text-sm text-center'>IEEE-VIIT 2024-25</p>
          </div>
        </div>
        <div className="grid mx-10 md:grid-cols-2 md:mx-12 lg:grid-cols-3 lg:mx-24 ">
          <Cards profile='\man.jpg'/>
          <Cards profile='\man.jpg'/>
          <Cards profile='\man.jpg'/>
          <Cards profile='\man.jpg'/>
          <Cards profile='\man.jpg'/>
          <Cards profile='\man.jpg'/>
          <Cards profile='\man.jpg'/>
          <Cards profile='\man.jpg'/>
          <Cards profile='\man.jpg'/>
          <Cards profile='\man.jpg'/>
          <Cards profile='\man.jpg'/>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Committee