import { StrictMode , PropsWithChildren } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import { ErrorPage, About, Committee, UserPage, Login, Events } from './components/config.ts'
import Dashboard from './pages/Dashboard.tsx';
import { ReactLenis, useLenis } from 'lenis/react'
import PdfViewer from './components/PdfViewer.tsx';
import DashboardEvents from './components/Dashboard/DashboardEvents.tsx';
import DashboardCommittee from './components/Dashboard/DashboardCommittee.tsx';


function Lenis({children}:PropsWithChildren) {

  const lenis = useLenis(({ scroll }) => {
  })

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}


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
    path:'/AdminDashboard',
    element:<Dashboard/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'events',
        element:<DashboardEvents/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'committee',
        element:<DashboardCommittee/>
      }
    ]
  },
  {
    path:'/events',
    element:<Events />,
    errorElement:<ErrorPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider fallbackElement={<ErrorPage/>} router={router}/>

  </StrictMode>,
)
