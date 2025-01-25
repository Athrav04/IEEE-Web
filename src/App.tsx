import NavBar from "./components/NavBar/NavBar";
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';
import NavBarMob from './components/NavBar/NavBarMob';
import { useState } from "react";

function App(props: { src: string }) {
  const [showNavBar,setShowNavBar] = useState(false);

  const handleShowNavBar = ()=>{
    setShowNavBar((prev)=>!prev)
  }


  const src = props.src;
  return(
  <>
  <div>
        <Home src={src}/>
      </div>

  <Footer fb="https://www.facebook.com/viitieee/" ig="https://www.instagram.com/ieeeviit/" x="https://twitter.com/viit_ieee" linkedIn="https://www.linkedin.com/company/ieee-viit-student-branch/"/>
  </>
  )
  }
export default App
