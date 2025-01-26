import { useState } from "react";

import { NavLink, useNavigate} from "react-router-dom";

function NavBar({handleShowNavBar,showMobile}:{handleShowNavBar:()=>void,showMobile:boolean}){

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



    window.addEventListener('scroll', changeToTransparent);
    return(
        <>
            <div className={`w-screen md:w-screen h-auto z-20 text-white flex justify-between ${showMobile || navBg ? 'backdrop-blur-2xl':'bg-transparent'}  px-3 py-4`}>
                <img className='object-contain h-14 p-2 md:h-20 lg:h-22 lg:pl-4 hover:cursor-pointer' src='public\IEEE_white_logo.webp' alt='ieee-logo' onClick={()=>navigate('/')}/>
                    <div className={`hidden md:flex justify-center items-center h-12`}>
                        <NavLink to={'/about'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold ":"navBar-Item hover:text-white"}}>About </NavLink>
                        <NavLink to={'/committee'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item  hover:text-white"}}>Committee </NavLink>
                        <NavLink to={'/events'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold":"navBar-Item  hover:text-white"}}>Events </NavLink>
                        {/* <span  className={" text-white navBar-Item hover:text-white hover:cursor-pointer relative"} onMouseEnter={handleModal} onMouseLeave={handleModal} onClick={handleModal}>Chapter 
                        {showModal && 
                            <div className="flex flex-col justify-center items-start backdrop-filter backdrop-brightness-75 backdrop-blur-md absolute top-[100%] left-0 text-sm text-nowrap rounded-md pl-0 p-1 ">
                                <NavLink to={'/Chapter/sensor-tech'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold ":"navBar-Item hover:text-white"}} >Sensor-Tech</NavLink>
                                <NavLink to={'/Chapter/computerSociety'} className={(e)=>{return e.isActive ? " text-white navBar-Item font-semibold ":"navBar-Item hover:text-white"}}>Computer Society</NavLink>
                            </div>}
                            </span> */}
                    </div>
                <div className="hidden md:block w-24 mr-3">
                <button onClick={()=>{return redirect()}} className=" border-[#0070BB] mt-2 bg-none border-[1px] px-3 py-[6px] rounded-lg hover:bg-[#0040FF] text-md text-nowrap">Join IEEE</button>
                </div> 
                <div className="flex md:hidden justify-center items-center ">
                            <div className="h-14 w-7 relative mr-4 flex items-center justify-center" onClick={handleShowNavBar}>
                                <span className={`w-full h-[2px] bg-white rounded-md absolute origin-center transform duration-500  ${showMobile ? '-rotate-45 ':'translate-y-2'}`}></span>
                                <span className={` h-[2px] bg-white rounded-md absolute transform duration-500 ${showMobile ? 'w-0':'w-full'}` }></span>
                                <span className={`w-full h-[2px] bg-white rounded-md absolute origin-center transform duration-500 ${showMobile ? 'rotate-45 ':'-translate-y-2'}` } ></span>
                            </div>
                </div>
            </div>
        </>
    )
}


export default NavBar;