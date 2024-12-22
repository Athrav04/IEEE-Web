import React from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

type committee = {
  Domain:{
    Name:string,
    Head:string,
    Joint:string,
    associate:string,
    associate2:string,
  }
}

const Committee = (props: { src: string}) => {
  const src = props.src;
  return (
    <div className='h-screen w-full'>
         <div className='fixed z-10 '><NavBar/></div> 
      <section className='h-screen w-full bg-gradient-to-t from-[#08090a] via-[#141516] to-[#08090a] flex items-center justify-center '>
        <div className=' text-white font-montserrat'>
          <h1 className='text-8xl'>Our <span className=' bg-gradient-to-tr from-[#5899E2] to-[#FFFFFF] bg-clip-text text-transparent'>Committee</span></h1>
          <h2 className='text-center text-7xl'>For 2024-25</h2>
        </div>
      </section>
     
    </div>
  )
}

export default Committee