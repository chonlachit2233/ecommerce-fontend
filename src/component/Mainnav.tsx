import { Link } from "react-router-dom"
import useStore from "../store/ecom-store"
import { ShoppingCart } from 'lucide-react';


const Mainnav = () => {

    const carts = useStore((state) => state.cart)




    return (
        <nav className="bg-gray-800 text-white mx-auto px-4">
            <div className="flex justify-between h-16">
                <div className="flex items-center gap-4">
                    <Link to='/' className="text-2xl font-bold">Logo</Link>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/cart' className="relative py-4">
                        <ShoppingCart />
                        {
                            carts.length > 0
                            && (<span className="absolute top-2 -right-6 bg-red-500 text-white  px-2 text-xs rounded-full">

                                {carts.length}

                            </span>)


                        }

                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Mainnav