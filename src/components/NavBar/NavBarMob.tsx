import { useState } from 'react'

import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom'

const NavBarMob = ({handleShowNavBar}:{handleShowNavBar:()=>void}) => {
    const [showModal,setShowModal] = useState(false);
    const handleModal = ()=>{
        setShowModal(!showModal);
    }
  return (
    <div className='w-full h-full backdrop-blur-2xl pt-10' onClick={handleShowNavBar}>
        <div className='h-full w-full flex flex-col justify-start items-center gap-4 ' onClick={(e)=>e.stopPropagation()}>
        <NavLink to={'/about'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold text-2xl ":"navBar-Item hover:text-white text-2xl"}} onClick={handleShowNavBar}>About </NavLink>
                        <NavLink to={'/committee'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold text-2xl":"navBar-Item  hover:text-white text-2xl"}} onClick={handleShowNavBar}>Committee </NavLink>
                        <NavLink to={'/events'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold text-2xl":"navBar-Item  hover:text-white text-2xl"}} onClick={handleShowNavBar}>Events </NavLink>
                        <span  className={" text-white navBar-Item hover:text-white hover:cursor-pointer relative text-2xl flex items-center gap-1"} onMouseEnter={handleModal} onMouseLeave={handleModal} onClick={handleModal}>Chapter {showModal?<RiArrowDropUpLine />:<RiArrowDropDownLine/>}
                       
                            </span>
                            {showModal && 
                            <div className="flex flex-col justify-center items-center  text-nowrap   ">
                                <NavLink to={'/Chapter/sensor-tech'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold text-xl":"navBar-Item hover:text-white text-xl"}} >Sensor-Tech</NavLink>
                                <NavLink to={'/Chapter/computerSociety'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold text-xl":"navBar-Item hover:text-white text-xl"}}>Computer Society</NavLink>
                            </div>}
        </div>
    </div>
  )
}

export default NavBarMob