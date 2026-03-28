import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layouts from '../layout/Layouts'
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Cart from "../pages/Cart"
import History from "../pages/user/History"
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
import Payment from "../pages/user/Payment"
import PaymentStatus from "../pages/PaymentStatus"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51TBXuJQkcngcAjiXoCV1jeMq7HmTJFPGEd7mMPxukXiKYAz5M4Ijg3X8Oi1ygtBYq9UzOT1ZlJTAshXXpwJqGd4p00tiA8rZAV');


const Approuter = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layouts />,
      children: [
        { index: true, element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'cart', element: <Cart /> },
        { path: 'checkout', element: <Checkout /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },

      ]

    },

    {
      path: '/admin',
      element: <Cerrentadmin element={<LayoutsAdmin />} />,
      children: [
        { index: true, element: <Dashbord /> },
        { path: 'category', element: <Category /> },
        { path: 'product', element: <Product /> },
        { path: 'product/:id', element: <Editproduct /> },
        { path: 'manage', element: <Manage /> }
      ]
    },

    {
      path: '/user',
      element: <Cerrentuser element={<LayoutsUser />} />,
      children: [
        { index: true, element: <Homeuser /> },
        { path: 'payment', element: <Payment /> },
        { path: 'history', element: <History /> },


      ]

    },

   {
  path: '/',
  element: <LayoutsUser />,
  children: [
    {
      path: 'paymentstatus',
      element: (
        <Elements stripe={stripePromise}>
          <PaymentStatus />
        </Elements>
      )
    }
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