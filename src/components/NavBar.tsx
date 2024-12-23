import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Events from "./Events";
import React from "react";

function NavBar(){
    const [navBg, setNavBg ] = useState(false);

    
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

    window.addEventListener('scroll', changeToTransparent);

    return(
        <>
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
                </div>
            </div>
        </>
    )
}


export default NavBar;