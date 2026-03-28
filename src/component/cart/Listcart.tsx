import { List } from 'lucide-react';
import useStore from '../../store/ecom-store';
import { Link, useNavigate } from 'react-router-dom';
import { createusercart } from '../../api/user';
import { toast } from 'react-toastify';





const Listcart = () => {

    const navigate = useNavigate()
    const token = useStore((state) => state.token)
    const cart = useStore((state) => state.cart)
    const getcarttotal = useStore((state) => state.actiongettotalprice)
    const user = useStore((state) => state.user)
    console.log({ cart })



    const handleSavecart = async () => {
        if (!token) {
            return
        }
        await createusercart(token, { cart: cart })
            .then((res) => {
                console.log(res)
                toast.success(res.data)
                navigate('/checkout')
            })
            .catch((err) => {
                console.log(err.response)
                toast.warning(err.response.data.message)
            })
    }


    return (
        <div>


            <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4 transition-colors duration-200">
                <div className="max-w-7xl mx-auto">



                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm transition-colors duration-200">
                            <div className='mb-8 flex justify-between items-center'>
                                <div className='flex items-center  gap-4 '>
                                    <List className='w6 h-6' />
                                    <p className='text-2xl font-bold'>รายการสินค้า</p>
                                </div>
                                <div>
                                    <p>{cart.length} Items</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between border-b mb-4 pb-4 ">
                                    <div className="col-span-5 text-gray-500 dark:text-gray-400 transition-colors duration-200">
                                        Product Details
                                    </div>

                                    <div className="col-span-4 text-gray-500 dark:text-gray-400  transition-colors duration-200">
                                        Total
                                    </div>
                                </div>
                            </div>

                            {/* images */}
                            <div >
                                {
                                    cart.map((itemp, index) =>

                                        <div key={index} className="flex gap-4 border-b pb-4 mb-4">
                                            {/* cart */}
                                            {
                                                itemp.images && itemp.images.length > 0
                                                    ? <img src={itemp.images[0].url}
                                                        className='w-20 h-20'
                                                    />
                                                    : <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex-shrink-0 transition-colors duration-200 flex items-center justify-center">

                                                        No img

                                                    </div>
                                            }



                                            <div className="flex-1">
                                                <h3 className="text-gray-900 dark:text-white mb-1 transition-colors duration-200">
                                                    {itemp.title}
                                                </h3>
                                                <p className="text-gray-500 dark:text-gray-400 transition-colors duration-200">
                                                    {itemp.description}
                                                </p>
                                                <p className="text-gray-900 dark:text-white mt-2 transition-colors duration-200">
                                                    ${itemp.price}
                                                </p>
                                            </div>
                                            <div className="flex items-center">

                                                $ {itemp.price * itemp.count}

                                            </div>


                                        </div>
                                    )
                                }

                            </div>


                        </div>
                        <div className="lg:col-span-1">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm transition-colors duration-200">
                                <h3 className="text-gray-900 dark:text-white mb-8 transition-colors duration-200 text-2xl font-bold">
                                    ยอดรวม
                                </h3>
                                <div
                                    className="space-y-6 mb-8"
                                    role="region"
                                    aria-label="Order summary"
                                >
                                    <div className="flex justify-between text-gray-900 dark:text-white transition-colors duration-200">
                                        <span>{cart.length} Items</span>
                                        <span>${getcarttotal()}</span>
                                    </div>

                                    <div className='flex flex-col gap-2'>

                                        {
                                            user
                                                ? <Link to=''> <button
                                                    onClick={handleSavecart}
                                                    type="button"
                                                    className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                                                >
                                                    สั่งซื้อ
                                                </button>
                                                </Link>


                                                : <Link to='/login'>
                                                    <button
                                                        type="button"
                                                        className="w-full bg-red-900 dark:bg-white text-white dark:text-red-900 py-3 rounded-lg hover:bg-red-800 dark:hover:bg-red-100 transition-colors duration-200"
                                                    >
                                                        Login
                                                    </button>
                                                </Link>
                                        }




                                        <Link to='/shop'>
                                            <button
                                                type="button"
                                                className="w-full bg-gray-400 py-3 rounded-lg text-white hover:bg-slate-500 duration-200"
                                            >
                                                แก้ไขการการ
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </section>



        </div>



    )
}

export default Listcart