import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layouts from '../layout/layouts'
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Cart from "../pages/Cart"
import History from "../pages/History"
import Checkout from "../pages/Checkout"
import Register from "../pages/auth/Register"
import Login from "../pages/auth/Login"


const Approuter = () => {
    
    const router = createBrowserRouter([
         {path: '/', 
          element: <Layouts/>,
          children: [
            {index: true, element: <Home/>},
            {path: 'shop', element: <Shop/>},
            {path: 'cart', element: <Cart/>},
            {path: 'history', element: <History/>},
            {path: 'checkout', element: <Checkout/>},
            {path: 'register', element: <Register/>},
            {path: 'login', element: <Login/>},
            
          ]
        
        },
        
    ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default Approuter