import NavBar from "./components/NavBar";
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';
import NavBarMob from './components/NavBarMob';
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
  <Footer/>
  </>
  )
  }
export default App
