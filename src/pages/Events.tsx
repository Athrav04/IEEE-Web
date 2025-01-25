import NavBar from "../components/NavBar/NavBar";
import CountDown from "../components/Events/CountDown";
import Upcoming from "../components/Events/Upcoming";
import { MdKeyboardArrowRight } from "react-icons/md";
import Gallery from "../components/Events/Gallery";
import Footer from "../components/Footer";
import GraphBg from "../components/GraphBg";
import EventsHome from "../components/Events/EventsHome";


 

function Events() {
    
  
    return(
        <div className="h-full w-full overflow-x-hidden realtive">
            <EventsHome/>

        </div>
    

        
    );
}

export default Events;