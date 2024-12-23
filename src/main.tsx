import { StrictMode , PropsWithChildren } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import { ErrorPage, About, Committee, UserPage, Login, Events } from './components/config.ts'
import Dashboard from './pages/Dashboard.tsx';
import { ReactLenis, useLenis } from 'lenis/react'
import PdfViewer from './components/PdfViewer.tsx';

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
    path:'/join',
    element:<PdfViewer pdf='\IEEE Membership Step by Step Representation.pdf'/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/AdminDashboard',
    element:<Dashboard/>,
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
