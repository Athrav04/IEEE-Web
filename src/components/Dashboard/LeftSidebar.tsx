import React, { useState } from 'react'

import { RiHome6Fill } from 'react-icons/ri'
import { BsProjectorFill } from 'react-icons/bs'
import { BsPeopleFill } from 'react-icons/bs'
import { IoPersonCircle } from 'react-icons/io5'
import { NavLink, useNavigate } from 'react-router-dom'
import { ActiveState } from '../../pages/Dashboard'


const LeftSidebar = ({active,setActive}:{active:ActiveState,setActive:React.Dispatch<React.SetStateAction<ActiveState>>}) => {
  const navigate = useNavigate();
  return (
    <div className='h-screen sticky primary-text p-5 w-80 top-0 left-0 bg-[#1D1D1D]'>
      <div className=' mt-5 flex items-center border-b border-opacity-75 border-[#34383B] pb-5'>
        <IoPersonCircle className='text-4xl mr-2'/>
        <div>
          <p className='font-montserrat font-semibold'>Atharva Khandagale</p>
          <p className='secondary-text font-light'>Web Head</p>
        </div>
      </div>
       <div className='mt-8'>
        <NavLink to={'/adminDashboard'} className={`flex items-center my-5 py-2 px-2 rounded-md secondary-text ${active.Home == true ? ' bg-[#343434] text-white transition ease-in duration-300':' hover:bg-[#343434] transiton ease-in duration-200'}`} onClick={()=>{setActive({Home:true,Events:false,Committee:false});navigate('/adminDashboard')}}>
            <RiHome6Fill className={`text-xl  ${active.Home ? 'primary-text':'text-gray-300 text-opacity-55'}`}/> <p className='ml-3 text-xl hover:cursor-pointer font-light hover:text-white'>Home</p>
        </NavLink >
        <NavLink to={'/adminDashboard/events'} className={`flex items-center my-5 py-2 px-2 rounded-md secondary-text  ${active.Events == true ? ' bg-[#343434] text-white transition ease-in duration-300':'hover:bg-[#343434] transiton ease-in duration-200'}`}onClick={()=>{setActive({Home:false,Events:true,Committee:false});navigate('/adminDashboard/events')}}>
            <BsProjectorFill className={`text-xl ${active.Events == true ? 'primary-text':'text-gray-300 text-opacity-55'}`}/>  <p className='ml-3 text-xl hover:cursor-pointer font-light hover:text-white'>Events</p>
        </NavLink >
        <NavLink to={'/adminDashboard/committee'} className={`flex items-center my-5 py-2 px-2 rounded-md secondary-text ${active.Committee == true ? ' bg-[#343434] text-white transition ease-in duration-300':'hover:bg-[#343434] transiton ease-in duration-200'}`}onClick={()=>{setActive({Home:false,Events:false,Committee:true});navigate('/adminDashboard/committee')}}>
             <BsPeopleFill className={`text-xl ${active.Committee == true ? 'primary-text':'text-gray-300 text-opacity-55'}`}/><p className='ml-3 text-xl hover:cursor-pointer font-light hover:text-white'>Committee</p>
        </NavLink>
    </div>
    </div>
  )
}

export default LeftSidebar