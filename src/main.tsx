import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom';
import { ErrorPage, About, Committee, UserPage, Login, Events } from './components/config.ts'
import PdfViewer from './components/PdfViewer.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import NavBarMob from './components/NavBar/NavBarMob.tsx';
import { motion } from 'motion/react';


function Layout(){
  const [showNavBar,setShowNavBar] = useState(false);
  function handleShowNavBar(){
    setShowNavBar((prev)=>!prev)
  }
  
  return (
    <div className='relative'>
    <div className='overflow-x-hidden h-auto absolute left-0 w-full top-0 z-[100]'>
        <NavBar handleShowNavBar={handleShowNavBar} showMobile={showNavBar}/>
        
        </div> 
        {showNavBar &&
          <motion.div
          initial={{ y: '-100%' }} 
          animate={{ y: 0 }}
          exit={{y:'-100%'}}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0 }}
          className={`z-[100] absolute w-full h-full top-16 right-0 transform duration-500 ease-in transition-all ${showNavBar ? 'translate-x-0' : 'translate-x-full'}`}>
             <NavBarMob handleShowNavBar={handleShowNavBar}/> 
          </motion.div>
          }

        <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
            index:true,
            path:'/',
            element: <App src={'\ieee-bg.jpeg'}/>,
            errorElement:<ErrorPage />
          },
          {
            path:'/about',
            index:true,
            element:<About />,
            errorElement:<ErrorPage />
          },
          {
            path:'/committee',
            element:<Committee src={'\committee-bg.jpg'}/>,
            errorElement:<ErrorPage />
          },
          {
            path:'User/:userId',
            element:<UserPage />,
            errorElement:<ErrorPage />
          },
          {
            path:'/Login',
            element:<Login />,
            errorElement:<ErrorPage />
          },
          {
            path:'/Chapter',
            errorElement:<ErrorPage />,
            children:[
              {
                path:'sensor-tech',
                element:<ErrorPage/>
              },
              {
                path:'computerSociety'
              }
            ]
          },
          {
            path:'/join',
            element:<PdfViewer pdf='\IEEE Membership Step by Step Representation.pdf'/>,
            errorElement:<ErrorPage/>
          },
          {
            path:'/events',
            element:<Events />,
            errorElement:<ErrorPage/>
          }
    ]
  }
])



createRoot(document.getElementById('root')!).render(

    <StrictMode>
      <RouterProvider  router={router} />
    </StrictMode>


)
