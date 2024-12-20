import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import { ErrorPage, About, Committee, UserPage, Login, Events } from './components/config.ts'
import Dashboard from './pages/Dashboard.tsx';

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
    path:'/AdminDashboard',
    element:<Dashboard/>,
    errorElement:<ErrorPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider fallbackElement={<ErrorPage/>} router={router}/>
  </StrictMode>,
)
