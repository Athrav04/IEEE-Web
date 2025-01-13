import NavBar from "./components/NavBar/NavBar";
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';
import NavBarMob from './components/NavBar/NavBarMob';
import { useState } from "react";

function App(props: { src: string }) {


  const src = props.src;
  return(
  <>
  <div>
      <div className='relative overflow-x-hidden'>
        <div className='fixed top-0 z-10'>
          <NavBar></NavBar>
        </div>
        <Home src={src}/>
      </div>
  </div>
  <Footer fb="https://www.facebook.com/viitieee/" ig="https://www.instagram.com/ieeeviit/" x="https://twitter.com/viit_ieee" linkedIn="https://www.linkedin.com/company/ieee-viit-student-branch/"/>
  </>
  )
  }
export default App
