import NavBar from "../components/NavBar/NavBar";
import CountDown from "../components/Events/CountDown";
import Upcoming from "../components/Events/Upcoming";
import { MdKeyboardArrowRight } from "react-icons/md";
import Gallery from "../components/Events/Gallery";
import Footer from "../components/Footer";

 

function Events() {
    return(
        <div className="h-screen w-full overflow-x-hidden">
            <div className="fixed z-50">
                <NavBar />
            </div>

            <div className="h-screen w-full flex flex-col justify-center items-center relative bg-gradient-to-t from-[#08090a] via-[#141516] to-[#08090a]">
                <h1 className="text-6xl primary-text -mt-96 font-montserrat bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#4C565C] bg-clip-text text-transparent ">Join Us At</h1>
                <div className="absolute w-full h-2/3 top-1/3 flex justify-center items-center overflow-hidden">
                    <div className=" flex justify-center items-center eventCard ">
                        <div className="h-[100%] w-[calc(100%-2px)] border-transparent flex flex-col top-[0.5px] border-[0.5px] absolute justify-start items-center bg-[#08090a] rounded-t-3xl z-10">
                             <h1 className="text-6xl primary-text mt-10 font-Genome  flex bg-[url('/outerSpace.jpg')] object-contain bg-clip-text text-transparent"><span>Python</span> &nbsp;<span className="bg-[url('/outerSpace.jpg')] object-contain bg-clip-text text-transparent">Odyssey</span></h1>
                                <p className="text-3xl secondary-text mt-5 font-montserrat">On 12 January 2024 at 14:30 IST</p>
                                    <div className="w-full flex justify-center items-center gap-6 mt-5 font-roboto">
                                        <button className=' text-center bg-[#E6E6E6] hover:bg-white rounded-lg text-black px-5 leading-8 text-lg'>Register Now</button> 
                                        <button className="flex items-center  group text-lg p-2 "><span className="bg-gradient-to-r from-white via-white to-[#898989] bg-clip-text text-transparent">Set Reminder</span><MdKeyboardArrowRight className='text-lg ml-1 text-white group-hover:translate-x-[3px] transition ease-in duration-200'/></button>
                                    </div>
                                     <span className="flex justify-center items-end pb-24 h-full w-full  ">
                                        <CountDown/>
                                    </span>
                        </div>
                    </div>
                </div>
               
            </div>

            <div className="h-4/5 w-full">
                <div className="translate-x-48 translate-y-28 relative">
                    <h1 className=" font-montserrat primary-text text-3xl">Event Calendar</h1>

                    <div className="mt-5 w-full flex flex-col gap-4">
                        <Upcoming time="14:30" date="Today"/>
                        <Upcoming time="13:00" date="21 Oct"/>
                        <Upcoming time="15:00" date="12 Jan"/>
                    </div>
                </div>
                
            </div>

            <div className="h-screen w-full ml-48 flex flex-col mt-10">
                <h1 className="font-montserrat text-5xl primary-text text-start">Gallery</h1> 
                <div className="grid grid-cols-4 grid-rows-3 h-full w-4/5 gap-4 mt-5 content-center">
                    <Gallery/>
                    <Gallery/>
                    <Gallery/>
                    <Gallery/>
                    <Gallery/>
                    <Gallery/>
                    <Gallery/>
                    <Gallery/>
                    <Gallery/>
                </div>
            </div>

            <div className=" relative h-[25vh] w-full  flex items-center justify-evenly mt-28">
                <div className="absolute -bottom-12 -left-12 bg-blue-600 w-44 h-44 filter blur-3xl opacity-65 rounded-full animate-blob"></div>
                <h1 className="primary-text text-5xl font-montserrat flex flex-col font-semibold items-start">Get Notified about <span>Our upcoming events</span> </h1>
                <div className="flex items-center gap-4"><input className="h-12 w-72 primary-text border-[#484849] border-[0.5px] bg-[#232326] rounded-md placeholder:ternary-text p-2  focus:outline-none placeholder:text-lg placeholder:font-light" placeholder="Enter your email "></input>
                    <button className="text-lg font-roboto rounded-md bg-gradient-to-tr from-[#6A89CC] to-[#2D3C56] primary-text py-2 px-3">Subscribe</button>
                </div>
            </div>



        </div>

        
    );
}

export default Events;