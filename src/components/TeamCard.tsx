import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { Team } from '../pages/Committee'


type TeamCardProps = {
  name:string,
  team:Team,
  role:string,
  image:string,
  instagram?:string,
}

const TeamCard = (props:TeamCardProps) => {
  return (
    <div className='h-64 w-64 mt-5'>
        <img src='/man.jpg' className='rounded-lg object-cover h-56 w-full opacity-85'></img>
          <h1 className='text-white font-icona mt-2'>{props.name}</h1>
          <h2 className='secondary-text font-light font-roboto leading-none'>{props.role}</h2>
          <div className='flex gap-2 ternary-text text-sm mt-1 leading-none'><FaInstagram className='hover:text-white'/><FaLinkedin className='hover:text-white'/><MdMailOutline className='hover:text-white'/></div>
    </div>
    // <div className={`h-64 w-64  relative inset-0`}> 
    //         <img src='/man.jpg' className='w-full h-full object-cover rounded-lg'></img>
    //         <div className='absolute flex flex-col items-center justify-center w-full px-2 py-2 bottom-0 mb-1'>
    //         <div className='bg-white/30 rounded-lg pb-2 px-2 backdrop-blur-sm w-full h-16'>
    //         <h1 className=' font-icona mt-2 text-center'>Darshith Shetty</h1>
    //         <h2 className='secondary-text font-light font-roboto text-center leading-none'>Event Joint Head</h2>
    //         <div className='flex gap-2 ternary-text text-sm mt-1 justify-center items-center leading-none'><FaInstagram className='hover:text-black'/><FaLinkedin className='hover:text-black'/><MdMailOutline className='hover:text-black'/></div>
    //         </div>
    //         </div>
           
    // </div>
  )
} 

export default TeamCard