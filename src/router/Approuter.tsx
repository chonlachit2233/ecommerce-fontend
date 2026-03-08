import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layouts from '../layout/Layouts'
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Cart from "../pages/Cart"
import History from "../pages/History"
import Checkout from "../pages/Checkout"
import Register from "../pages/auth/Register"
import Login from "../pages/auth/Login"
import LayoutsAdmin from "../layout/LayoutsAdmin"
import Dashbord from "../pages/admin/Dashbord"
import Category from "../pages/admin/Category"
import Product from "../pages/admin/Product"
import Manage from "../pages/admin/Manage"
import LayoutsUser from "../layout/LayoutsUser"
import Homeuser from "../pages/user/Homeuser"
import Cerrentuser from "./Cerrentuser"
import Cerrentadmin from "./Cerrentadmin"
import Editproduct from "../pages/admin/Editproduct"



const Approuter = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layouts />,
      children: [
        { index: true, element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'cart', element: <Cart /> },
        { path: 'history', element: <History /> },
        { path: 'checkout', element: <Checkout /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },

      ]

    },

    {
      path: '/admin',
      element: <Cerrentadmin element={<LayoutsAdmin/> }/>,
      children: [
        { index: true, element: <Dashbord /> },
        {path: 'category', element: <Category/>},
        {path: 'product', element: <Product/>},
        {path: 'product/:id', element: <Editproduct/>},
        {path: 'manage', element:<Manage/>}
      ]
    },

    {path: '/user' ,
      element: <Cerrentuser element={<LayoutsUser/>}/>,
      children: [
      {path: 'homeuser', element: <Homeuser/>}

      ]
      
    }


  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Approuter