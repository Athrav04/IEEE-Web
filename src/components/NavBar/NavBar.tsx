import { useState } from "react";
import { NavLink, Navigate , redirect, useNavigate} from "react-router-dom";

function NavBar(){
    const [showModal,setShowModal] = useState(false);
    const [navBg, setNavBg ] = useState(false);
    let navigate = useNavigate();
    const changeToTransparent = ()=>{
        if(window.scrollY >= 14){
            setNavBg(true);
        }else{
            setNavBg(false);
        }
    }

    const redirect = ()=>{
        window.open(`${window.location.origin}/join`,'_blank')
    }

    const handleModal = ()=>{
        setShowModal(!showModal);
    }


    window.addEventListener('scroll', changeToTransparent);
    return(
        <>
            <div className={`w-screen md:w-screen z-20 text-white flex justify-between ${navBg?"backdrop-blur-sm":"bg-transparent"} px-3 pt-4`}>
                <img className='object-contain h-14 p-2 md:h-20 lg:h-22 lg:pl-4 hover:cursor-pointer' src='public\IEEE_white_logo.webp' alt='ieee-logo' onClick={()=>navigate('/')}/>
                    <div className={`hidden md:flex justify-center items-center h-12`}>
                        <NavLink to={'/about'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold ":"navBar-Item hover:text-white"}}>About </NavLink>
                        <NavLink to={'/committee'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item  hover:text-white"}}>Committee </NavLink>
                        <NavLink to={'/events'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item  hover:text-white"}}>Events </NavLink>
                        <span  className={" text-white navBar-Item hover:text-white hover:cursor-pointer relative"} onMouseEnter={handleModal} onMouseLeave={handleModal} onClick={handleModal}>Chapter 
                        {showModal && 
                            <div className="flex flex-col justify-center items-start backdrop-filter backdrop-brightness-75 backdrop-blur-md absolute top-[100%] text-sm text-nowrap rounded-md p-1 ">
                                <NavLink to={'/Chapter/sensor-tech'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold ":"navBar-Item hover:text-white"}} >Sensor-Tech</NavLink>
                                <NavLink to={'/Chapter/computerSociety'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold ":"navBar-Item hover:text-white"}}>Computer Society</NavLink>
                            </div>}
                            </span>
                    </div>
                <div className="hidden md:block w-24 mr-3">
                <button onClick={()=>{return redirect()}} className=" border-[#0070BB] mt-2 bg-none border-[1px] px-3 py-[6px] rounded-lg hover:bg-[#0040FF] text-md text-nowrap">Join IEEE</button>
                </div> 
                <div className="flex md:hidden">
                    Right side component
                </div>
            </div>
        </>
    )
}


export default NavBar;