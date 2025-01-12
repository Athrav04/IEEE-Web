import React from 'react'
import { IoIosAdd } from 'react-icons/io'
import { IoPersonAdd } from 'react-icons/io5'
import { MdOutlineArticle } from 'react-icons/md'
import { Outlet } from 'react-router-dom'
import { ActiveState } from '../../pages/Dashboard'
import DashboardCommittee from './DashboardCommittee'
import DashboardEvents from './DashboardEvents'

const DashboardContent = ({activePage}:{activePage:ActiveState}) => {
  return (
    <div className='px-12 pt-10 w-full'>

      {activePage.Home &&

      <div className='w-full h-full'>
         <div className='w-full text-4xl font-bold text-white flex gap-4'>
       <h1>
          Welcome Back ,
        </h1>
        <h2>
          Atharva {/* User name */}
        </h2>
      </div>

      <div className='w-full mt-7 border-b border-[#34383B] border-opacity-75'></div>

      <div className='w-full flex gap-7 mt-7'>
        <span className='border border-[#34383B] px-5 py-5 border-opacity-55 rounded-lg flex flex-col items-start justify-center w-60 hover:bg-[#121314] hover:cursor-pointer'>
          <IoIosAdd className='text-4xl text-[#848585] font-semibold text-start'/>
          <h1 className='text-xl mt-3 font-montserrat text-white text-start'>New Event </h1>
        </span>

        <span className='border border-[#34383B] px-5 py-5 border-opacity-55 rounded-lg flex flex-col items-start justify-center w-60 hover:bg-[#121314] hover:cursor-pointer'>
          <IoPersonAdd className='text-2xl text-[#848585] font-semibold text-start'/>
          <h1 className='text-xl mt-5 font-montserrat text-white text-start'>Add Member </h1>
        </span>

        <span className='border border-[#34383B] px-5 py-5 border-opacity-55 rounded-lg flex flex-col items-start justify-center w-60 hover:bg-[#121314] hover:cursor-pointer'>
          <MdOutlineArticle className='text-2xl text-[#848585] font-semibold text-start'/>
          <h1 className='text-xl mt-5 font-montserrat text-white text-start'>NewsLetter </h1>
        </span>
      </div>
      </div>
      }


      {activePage.Events && 
      <div className='h-full w-full'>
          <Outlet/>
      </div>}

      {activePage.Committee && 
      <div className='h-full w-full'>
          <Outlet/>
      </div>}
     
       
    </div>
  )
}

export default DashboardContent