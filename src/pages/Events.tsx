import NavBar from "../components/NavBar/NavBar";
import CountDown from "../components/Events/CountDown";
import Upcoming from "../components/Events/Upcoming";
import { MdKeyboardArrowRight } from "react-icons/md";
import Gallery from "../components/Events/Gallery";
import Footer from "../components/Footer";
import GraphBg from "../components/GraphBg";
import Gradient from "../components/Events/Gradient";

 

function Events() {
    return(
        <div className="h-screen w-full overflow-x-hidden relative">
            <GraphBg/>
            <div className="absolute flex justify-center items-center h-full w-full radial-bg-gradient"/>

            <div className="fixed z-50">
                <NavBar />
            </div>

            <div className="h-screen w-full flex flex-col justify-center items-center relative">
                <h1 className="text-6xl primary-text -mt-96 font-montserrat bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#4C565C] bg-clip-text text-transparent ">Join Us At</h1>
                <div className="absolute w-full h-2/3 top-1/3 flex justify-center items-center overflow-hidden">
                    <div className=" flex justify-center items-center eventCard ">
                        <div className="h-full w-[calc(100%-2px)] border-transparent border-b flex flex-col top-[0.5px] border-[0.5px] absolute justify-start items-center bg-[#08090a] rounded-t-3xl z-10">
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
            
            <h1 className="font-montserrat text-3xl primary-text text-center ml-48 w-full">Event Gallery</h1> 
                
            <div className="h-[110vh] w-full  mt-10 relative max-w-full">
                <div className="absolute top-0 left-0 border-red-700 b">
                    <Gallery imgUrl="/temp.jpg" delay="0"/>
                    <Gallery imgUrl="/temp.jpg" delay="1200"/>
                    <Gallery imgUrl="/temp.jpg" delay="500"/>
                </div>
                <div className="absolute top-0 left-[2064px]">
                    <Gallery imgUrl="/temp.jpg" delay="0"/>
                    <Gallery imgUrl="/temp.jpg" delay="1200"/>
                    <Gallery imgUrl="/temp.jpg" delay="500"/>
                </div>
                
            </div>

            <div className=" relative h-[100vh] w-full  flex flex-col items-center justify-center mt-28">
                <GraphBg/>

                <div className="flex flex-col items-center justify-center text-center">
                <h1 className="primary-text text-5xl font-montserrat flex flex-col font-semibold items-start z-10 place-self-center">Get Notified about </h1>
                <span className="primary-text text-5xl font-montserrat flex flex-col font-semibold items-start z-10 place-self-center">Our upcoming events</span> 

                <div className="flex items-center gap-4 ml-10 z-10 mt-5"><input className="h-12 w-72 primary-text border-[#484849] border-[0.5px] bg-[#232326] rounded-md placeholder:ternary-text p-2  focus:outline-none placeholder:text-lg placeholder:font-thin" placeholder="Enter your email "></input>
                    <button className="text-lg font-roboto rounded-md bg-white/95 text-black py-2 px-3 opacity-95 hover:opacity-100 transform ease-in duration-100">Subscribe</button>
                </div>
                </div>
            </div>

            <Footer/>



        </div>

        
    );
}

export default Events;