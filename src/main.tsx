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
import { ErrorPage, Home, About, Committee, UserPage, Login } from './components/config.ts'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement:<ErrorPage />
  },
  {
    path:'/About',
    element:<About />,
    errorElement:<ErrorPage />
  },
  {
    path:'/Committee',
    element:<Committee />,
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
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider fallbackElement={<ErrorPage/>} router={router}/>
  </StrictMode>,
)
