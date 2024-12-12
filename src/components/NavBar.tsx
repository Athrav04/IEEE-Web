import { useState } from "react";
import { NavLink, Navigate , redirect, useNavigate} from "react-router-dom";

function NavBar(){
    const [navBg, setNavBg ] = useState(false);
    const navigate = useNavigate();

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
            <div className={`w-screen md:w-screen text-white flex justify-between navbar bg-none px-2 py-2 main-bg`}>
                <img className='object-contain h-8 p-2 md:h-14 lg:h-20 lg:p-4 hover:cursor-pointer' src='public\IEEE_white_logo.webp' alt='ieee-logo' onClick={()=>navigate('/')}/>
                    <div className="flex justify-center items-center">
                        <NavLink to={'/about'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold ":"navBar-Item main-text-color hover:text-white"}}>About </NavLink>
                        <NavLink to={'/committee'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item main-text-color hover:text-white"}}>Committee </NavLink>
                        <NavLink to={'/events'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item main-text-color hover:text-white"}}>Events </NavLink>
                        <NavLink to={'/achievements'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item main-text-color hover:text-white"}} >Achievements </NavLink>
                    </div>
                <div className="w-24 ">
                <button onClick={()=>{console.log("clicked");redirect()}} className="mt-4 border-[#0070BB] bg-none border-[1px] px-3 py-2 rounded-lg hover:bg-[#0070BB] text-nowrap">Join IEEE</button>
                </div>
                
            </div>
        </>
    )
}


export default NavBar;