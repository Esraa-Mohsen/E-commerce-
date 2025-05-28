import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from "../node_modules/react-router-dom"
import Layout from './Component/Layout/Layout'
import Product from './Component/Product/Product';
import Cart from './Component/Cart/Cart';
import Brands from './Component/Brands/Brands';
import Categories from './Component/Categories/Categories';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import NotFound from './Component/NotFound/NotFound';
import Home from './Component/Home/Home'
import Register from './Component/Register/Register'
import UserContextProvider, { UserContext } from './Context/userContext'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import { QueryClient , QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from './Context/CartContext/CartContext'
import { Toaster } from 'react-hot-toast';

// import { Toaster } from './../node_modules/react-hot-toast/src/components/toaster';






 


let query = new QueryClient() 


let x = createBrowserRouter([ 
{
  path:"/" ,
  element:< Layout/> ,
  children: [
    {index:true , element:  <ProtectedRoute> <Home/>  </ProtectedRoute> },
    {path:"product"      , element:  <ProtectedRoute>  <Product/>    </ProtectedRoute>},
      {path:"cart"      , element: <ProtectedRoute>  <Cart/>  </ProtectedRoute>  },
        {path:"brands"      , element: <ProtectedRoute>  <Brands/>   </ProtectedRoute> },
            {path:"ProductDetails/:id"      , element: <ProtectedRoute>  <ProductDetails/>   </ProtectedRoute> },
          {path:"categories"      , element:  <ProtectedRoute> <Categories/>  </ProtectedRoute>},
            {path:"login"      , element:<Login/>},
              {path:"register"      , element:<Register/>},
              {path:"signup"      , element:<Signup/>},
                {path:"*"      , element:<NotFound/>},
             
  ]








}






])

function App() {
 
return(
  <>
  
  



  

  
  
   <UserContextProvider >
    <QueryClientProvider client={query}>
      <CartContextProvider>
    <RouterProvider router={x} />;
  <Toaster></Toaster>
      </CartContextProvider>
 
   <ReactQueryDevtools/>
     </QueryClientProvider>
    </UserContextProvider>
  
  
  
  
  </>
)

 
}

export default App
