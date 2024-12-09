import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
// import ErrorPage from './components/ErrorPage.tsx';
// import Home from './components/Home.tsx';
// import Committee from './components/Committee.tsx';
// import UserPage from './components/UserPage.tsx';
// import About from './components/About.tsx';
import { ErrorPage, About, Committee, UserPage, Login, Events } from './components/config.ts'

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
    path:'/events',
    element:<Events />,
    errorElement:<ErrorPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider fallbackElement={<ErrorPage/>} router={router}/>
  </StrictMode>,
)
