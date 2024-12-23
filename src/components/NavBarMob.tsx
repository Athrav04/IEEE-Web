import { useState } from "react";
import { NavLink } from "react-router-dom";
import Events from "../pages/Events";

function NavBarMob() {
    const [navBg, setNavBg ] = useState(false);

    const changeToTransparent = ()=>{
        if(window.scrollY >= 14){
            setNavBg(true);
        }else{
            setNavBg(false);
        }
    }

    window.addEventListener('scroll', changeToTransparent);

    const [view, setOpen ] = useState(false);

    const open = ()=>{
        if(view == false){
            setOpen(true);
        }else{
            setOpen(false);
        }
    }

    window.addEventListener('onClick', open);

    return(
        <>
        <div className={`w-screen text-white flex justify-between navbar ${navBg||view? "bg-black" : "backdrop-blur-sm bg-white/5"}`}>
        <img className='object-contain h-8 p-2 md:h-14 lg:h-18 lg:p-2' src='\IEEE_white_logo.webp' alt='ieee-logo' />
        <img className="object-contain h-8 p-2" onClick={open} src="\menu.png" alt="menu" />
        </div>
        <ul className={`list-none text-xs bg-black p-6 ${view? "visible": "collapse"}`}>
            <li className="hover:underline decoration-sky-500 py-2 underline-offset-8">
                <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="/">Home</NavLink>
            </li>
            <li className="hover:underline decoration-sky-500 py-2 underline-offset-8">
                <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="/about">About</NavLink>
            </li>
            <li className="hover:underline decoration-sky-500 py-2 underline-offset-8">
                <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="/committee">Committee</NavLink>
            </li>
            <li className={`hover:underline decoration-sky-500 py-2 underline-offset-8 text-white`}>
                <Events src="/ieee-bg.jpeg"/>
            </li>
            <li className="hover:underline decoration-sky-500 py-2 underline-offset-8">
                <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="/acheivements">Acheivements</NavLink>
            </li>
            <li className="hover:underline decoration-sky-500 py-2 underline-offset-8">
                <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="https://ieeepunesection.org/">Chapter</NavLink>
            </li>
            <li className="hover:underline decoration-sky-500 py-2 underline-offset-8">
                <NavLink className={(e)=>{return e.isActive? "text-sky-500":"text-white"}} to="/contact">CONTACT</NavLink>
            </li>
            <button className='bg-gradient-to-r from-sky-300 to-sky-500 text-white my-2 text-sm w-24 h-6 rounded-full'>Join IEEE</button>
        </ul>
        </>
    )
}

export default NavBarMob