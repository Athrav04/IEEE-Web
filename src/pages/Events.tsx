import { redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import CountDown from "../components/CountDown";

function Events() {
    return(
        <div className="h-screen w-full">
            <div className="fixed w-full">
                <NavBar />
            </div>

            <div className=" h-screen w-full flex justify-center items-center bg-gradient-to-tr from-[#08090a] to-[#131416]">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-7xl font-montserrat primary-text text-center secondary-text">Join us At</h1>
                    <div className="bg-gradient-to-t from-[#08090a] to-[#2f4f9a] blur-xl  w-[75%] absolute h-[500px] top-2/3 rounded-lg -mt-10 opacity-75 hover:opacity-100">
                    </div>
                    <div className="bg-[#08090a] flex justify-center w-[75%] absolute h-[500px] top-2/3 rounded-xl -mt-10">
                        <div className="flex flex-col justify-start items-center ">
                            <h1 className="text-6xl primary-text mt-10 font-icona">Python Odyssey</h1>
                            <span className="text-6xl text-center w-full font-poppins mt-20 ">
                                <CountDown />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Events;