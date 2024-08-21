import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login/Login'

import RegisterUsers from './pages/register/registerUsers.tsx'
import { Doctors } from './components/Plans/Doctors.tsx'
import { Contractors } from './components/Plans/Contractors.tsx'
import Dashboard from './pages/dashBoard/Dashbord.tsx'
import Predicoes from './pages/predicoes/Predicoes.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/Users',
        element:<RegisterUsers/>
      },
      {
        path: '/predicoes',
        element:<Predicoes/>,
        children:[
          {
            path:"/predicoes/doctors",
            element:<Doctors/>
          },
          {
            path:"/predicoes/contractors",
            element:<Contractors/>
          }
        ]
        
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