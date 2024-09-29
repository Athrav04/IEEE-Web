import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./components/NavBar";
import Home from './components/Home';
import './App.css'
import { Router } from 'express';

function App() {
  return(
  <>
    <NavBar/>
    <Home/>
  </>
  )
  }
export default App
