import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About_Us from './components/About_Us.jsx';
import ProductPage from './components/ProductPage.jsx';
import SingleProduct from './components/SingleProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:"/", element:<Home/> },
      {path:'/about',element:<About_Us/>},
      {path:'/products',element:<ProductPage/>},
      {path:"/products/:id", element:<SingleProduct/>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} /> 
  ,
)
