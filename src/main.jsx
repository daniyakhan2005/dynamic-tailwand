import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Product from './pages/Product.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Home from './pages/Home.jsx'

const router  = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>

      },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'register',
      element:<Register/>
    },
    {
      path:'product',
      element:<Product/>
    },
    {
      path:'products',
      element:<SingleProduct/>
    }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>


)
