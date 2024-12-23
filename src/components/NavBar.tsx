import { useState } from "react";
<<<<<<< HEAD
import { NavLink, useNavigate } from "react-router-dom";
import Events from "./Events";
import React from "react";
=======
import { NavLink, Navigate , redirect, useNavigate} from "react-router-dom";
>>>>>>> 7fa6ab47f14f5c655b7a1e8ed1b4539b32e6c2a7

function NavBar(){
    const [navBg, setNavBg ] = useState(false);
    const navigate = useNavigate();

    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `join`; 
        navigate(path);
    }

    const changeToTransparent = ()=>{
        if(window.scrollY >= 14){
            setNavBg(true);
        }else{
            setNavBg(false);
        }
    }

    const redirect = ()=>{
        window.open("https://www.ieee.org/membership/join/index.html",'_blank')
    }



    window.addEventListener('scroll', changeToTransparent);
//md:{ w-screen flex items-center justify-center list-none space-x-4 mx-3 text-xs } lg:text-sm xl:text-base flex lg:space-x-6
    return(
        <>
<<<<<<< HEAD
            <div className={`w-96 md:w-screen text-white flex navbar ${navBg? "bg-black" : "backdrop-blur-sm bg-white/5"}`}>
                <img className='object-contain h-8 p-2 md:h-14 lg:h-20 lg:p-4' src='\IEEE_white_logo.webp' alt='ieee-logo' />
                <div className="md:{ w-screen flex items-center justify-end list-none space-x-4 mx-3 text-xs } lg:text-sm xl:text-base flex lg:space-x-6">
                    <li className="hover:underline decoration-sky-500 underline-offset-8">
                        <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="/">Home</NavLink>
                    </li>
                    <li className="hover:underline decoration-sky-500 underline-offset-8">
                        <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="/about">About</NavLink>
                    </li>
                    <li className="hover:underline decoration-sky-500 underline-offset-8">
                        <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="/committee">Committee</NavLink>
                    </li>
                    <li className="hover:underline decoration-sky-500 underline-offset-8">
                        <Events src="/ieee-bg.jpeg"/>
                    </li>
                    <li className="hover:underline decoration-sky-500 underline-offset-8">
                        <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="/acheivements">Acheivements</NavLink>
                    </li>
                    <li className="hover:underline decoration-sky-500 underline-offset-8">
                        <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="https://ieeepunesection.org/">Chapter</NavLink>
                    </li>
                    <li className="hover:underline decoration-sky-500 underline-offset-8">
                        <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="/contact">CONTACT</NavLink>
                    </li>
                    <button onClick={()=>{return routeChange()}} className='bg-gradient-to-r from-sky-300 to-sky-500 text-white text-sm w-24 md:h-7 h-6 rounded-full'>Join IEEE</button>
=======
            <div className={`w-screen md:w-screen z-20 text-white flex justify-between ${navBg?"backdrop-blur-sm":"bg-transparent"} px-3 pt-4`}>
                <img className='object-contain h-14 p-2 md:h-20 lg:h-22 lg:pl-4 hover:cursor-pointer' src='public\IEEE_white_logo.webp' alt='ieee-logo' onClick={()=>navigate('/')}/>
                    <div className={`hidden md:flex justify-center items-center h-12`}>
                        <NavLink to={'/about'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold ":"navBar-Item hover:text-white"}}>About </NavLink>
                        <NavLink to={'/committee'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item  hover:text-white"}}>Committee </NavLink>
                        <NavLink to={'/events'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item  hover:text-white"}}>Events </NavLink>
                        <NavLink to={'/achievements'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item hover:text-white"}} >Achievements </NavLink>
                    </div>
                <div className="hidden md:block w-24 mr-3">
                <button onClick={()=>{redirect()}} className=" border-[#0070BB] mt-2 bg-none border-[1px] px-3 py-[6px] rounded-lg hover:bg-[#0070BB] text-md text-nowrap">Join IEEE</button>
                </div> 
                <div className="flex md:hidden">
                    Right side component
>>>>>>> 7fa6ab47f14f5c655b7a1e8ed1b4539b32e6c2a7
                </div>
            </div>
        </>
    )
}


export default NavBar;