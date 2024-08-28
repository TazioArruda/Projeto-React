import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login/Login'


import Dashboard from './pages/dashBoard/Dashbord.tsx'
import Predicoes from './pages/predicoes/Predicoes.tsx'
import DetalhesPredicoes from './components/DetailsPredicoes/DetalhesPredicoes.tsx'
import Produtos from './pages/produtos/Produtos.tsx'

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
        path: '/predicoes',
        element:<Predicoes/>,
        
      }, 
      {
        path: '/outra-pagina',
        element: <DetalhesPredicoes/>,
      },
      {
        path: '/produtos', // Adicione a rota para Produtos
        element: <Produtos />,
      }
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