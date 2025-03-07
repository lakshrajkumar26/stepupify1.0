import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About_Us from './components/About_Us.jsx';
import ProductPage from './components/ProductPage.jsx';
import SingleProduct from './components/SingleProduct.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "/", 
        element: <Home /> 
      },
      { 
        path: '/about', 
        element: <About_Us /> 
      },
      { 
        path: '/product', 
        element: <ProductPage /> 
      },
      { 
        path: "/products/:id", 
        element: <SingleProduct />,
        loader: async ({params}) => {
          try {
            const response = await fetch(`http://localhost:5000/products/${params.id}`);
            if (!response.ok) throw new Error('Product not found');
            return response.json();
          } catch (error) {
            throw new Error('Failed to load product');
          }
        },
        errorElement: <ErrorPage />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
