import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./components/NavBar";
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return(
  <>
  <div>
      <div className='relative'>
        <div className='fixed top-0 z-10'>
          <NavBar/>
        </div>
        <Home />
      </div>
  </div>
  <Footer/>
  </>
  )
  }
export default App
