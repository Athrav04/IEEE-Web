import React, { useState } from 'react'

import { RiHome6Fill } from 'react-icons/ri'
import { BsProjectorFill } from 'react-icons/bs'
import { BsPeopleFill } from 'react-icons/bs'
import { IoPersonCircle } from 'react-icons/io5'

const LeftSidebar = () => {
  const [active,setActive] = useState({Home:true,Events:false,Committee:false})
  return (
    <div className='h-screen sticky primary-text p-5 w-80 top-0 left-0 main-bg'>
      <div className=' mt-5 flex items-center border-b border-[#34383B] pb-5'>
        <IoPersonCircle className='text-4xl mr-2'/>
        <div>
          <p className='font-montserrat'>Atharva Khandagale</p>
          <p className='secondary-text font-light'>Web Head</p>
        </div>
      </div>
       <div className='mt-8'>
        <div className={`flex items-center my-5 py-2 px-2 rounded-md${active.Home == true ? ' bg-[#1A1C1F] text-white':''}`} onClick={()=>setActive({Home:true,Events:false,Committee:false})}>
            <RiHome6Fill className={`text-xl  ${active.Home == true ? 'primary-text':'text-[#495057]'}`}/> <p className='ml-3 text-xl hover:cursor-pointer font-light hover:text-white'>Home</p>
        </div>
        <div className={`flex items-center my-5 py-2 px-2 rounded-md${active.Events == true ? ' bg-[#1A1C1F] text-white':''}`}onClick={()=>setActive({Home:false,Events:true,Committee:false})}>
            <BsProjectorFill className={`text-xl ${active.Events == true ? 'primary-text':'text-[#495057]'}`}/>  <p className='ml-3 text-xl hover:cursor-pointer font-light hover:text-white'>Events</p>
        </div>
        <div className={`flex items-center my-5 py-2 px-2 rounded-md${active.Committee == true ? ' bg-[#1A1C1F] text-white':''}`}onClick={()=>setActive({Home:false,Events:false,Committee:true})}>
             <BsPeopleFill className={`text-xl ${active.Committee == true ? 'primary-text':'text-[#495057]'}`}/><p className='ml-3 text-xl hover:cursor-pointer font-light hover:text-white'>Committee</p>
        </div>
    </div>
    </div>
  )
}

export default LeftSidebar