import { StrictMode , PropsWithChildren } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
<<<<<<< HEAD
// import ErrorPage from './components/ErrorPage.tsx';
// import Home from './components/Home.tsx';
// import Committee from './components/Committee.tsx';
// import UserPage from './components/UserPage.tsx';
// import About from './components/About.tsx';
import { ErrorPage, About, Committee, UserPage, Login, Acheivements } from './components/config.ts';
import PdfViewer from './components/PdfViewer.tsx';
=======
import { ErrorPage, About, Committee, UserPage, Login, Events } from './components/config.ts'
import Dashboard from './pages/Dashboard.tsx';
import { ReactLenis, useLenis } from 'lenis/react'

function Lenis({children}:PropsWithChildren) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}
>>>>>>> 7fa6ab47f14f5c655b7a1e8ed1b4539b32e6c2a7

const router = createBrowserRouter([
  {
    path:'/',
    element: <App src={'\ieee-bg.jpeg'}/>,
    errorElement:<ErrorPage />
  },
  {
    path:'/about',
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
    path:'/acheivements',
    errorElement:<ErrorPage />
  },
  {
<<<<<<< HEAD
    path:'/join',
    element:<PdfViewer pdf='\IEEE Membership Step by Step Representation.pdf'/>,
=======
    path:'/AdminDashboard',
    element:<Dashboard/>,
>>>>>>> 7fa6ab47f14f5c655b7a1e8ed1b4539b32e6c2a7
    errorElement:<ErrorPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Lenis>
    <RouterProvider fallbackElement={<ErrorPage/>} router={router}/>
    </Lenis>
  </StrictMode>,
)
