import React from 'react'
import ReactDOM from 'react-dom/client'

//import { RouterProvider, createBrowserRouter } from 'react-router-dom'
//import Home from './pages/home.tsx'
//import Dashboard from './pages/dashbord.tsx'
//import Faq from './pages/faq.tsx'
//import Login from './components/Indexlogin.tsx'
//import App from './App.tsx'
//import RegisterUsers from './pages/registerUsers.tsx'
//import Plans from './pages/plans.tsx'
//import { Doctors } from './components/Plans/doctors.tsx'
//import { Contractors } from './components/Plans/contractors.tsx'
//import Login from './pages/login.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/Users',
        element:<RegisterUsers/>
      },
      {
        path: '/plans',
        element:<Plans/>,
        children:[
          {
            path:"/plans/doctors",
            element:<Doctors/>
          },
          {
            path:"/plans/contractors",
            element:<Contractors/>
          }
        ]
        
      },
      {
        path: '/faq',
        element: <Faq />
      },
      
    ]
  },

  {
    path: '/login',
    element:<Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)