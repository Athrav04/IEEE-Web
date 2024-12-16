import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./components/NavBar";
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import NavBarMob from './components/NavBarMob';

function App(props: { src: string }) {

  const [long, setLong] = useState(false);

  const changeNavBar = () => {
    if(window.innerWidth >= 768){
      setLong(true);
    }else{
      setLong(false);
    }
  };

  window.addEventListener('navigate' , changeNavBar);

  const src = props.src;
  return(
  <>
  <div>
      <div className='relative'>
        <div className='fixed top-0 z-10'>
          {(long)? <NavBar/> : <NavBarMob/> }
        </div>
        <Home video={src}/>
      </div>
  </div>
  <Footer/>
  </>
  )
  }
export default App
