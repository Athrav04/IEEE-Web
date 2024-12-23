import { useState } from "react";
import { NavLink, Navigate , redirect, useNavigate} from "react-router-dom";

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

    const redirect = ()=>{
        window.open("https://www.ieee.org/membership/join/index.html",'_blank')
    }



    window.addEventListener('scroll', changeToTransparent);
//md:{ w-screen flex items-center justify-center list-none space-x-4 mx-3 text-xs } lg:text-sm xl:text-base flex lg:space-x-6
    return(
        <>
            <div className={`w-screen md:w-screen z-20 text-white flex justify-between ${navBg?"backdrop-blur-sm":"bg-transparent"} px-3 pt-4`}>
                <img className='object-contain h-14 p-2 md:h-20 lg:h-22 lg:pl-4 hover:cursor-pointer' src='public\IEEE_white_logo.webp' alt='ieee-logo' onClick={()=>navigate('/')}/>
                    <div className={`hidden md:flex justify-center items-center h-12`}>
                        <NavLink to={'/about'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold ":"navBar-Item hover:text-white"}}>About </NavLink>
                        <NavLink to={'/committee'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item  hover:text-white"}}>Committee </NavLink>
                        <NavLink to={'/events'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item  hover:text-white"}}>Events </NavLink>
                        <NavLink to={'/achievements'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item hover:text-white"}} >Achievements </NavLink>
                    </div>
                <div className="hidden md:block w-24 mr-3">
                <button onClick={()=>{return routeChange()}} className=" border-[#0070BB] mt-2 bg-none border-[1px] px-3 py-[6px] rounded-lg hover:bg-[#0070BB] text-md text-nowrap">Join IEEE</button>
                </div> 
                <div className="flex md:hidden">
                    Right side component
                </div>
            </div>
        </>
    )
}


export default NavBar;