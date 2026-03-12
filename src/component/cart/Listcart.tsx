import { List } from 'lucide-react';
import useStore from '../../store/ecom-store';
import { Link } from 'react-router-dom';
const Listcart = () => {


    const carts = useStore((state) => state.cart)
    const getcarttotal = useStore((state)=> state.actiongettotalprice)
    console.log(carts)





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
                                    <p>{carts.length} Items</p>
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
                                    carts.map((itemp, index) =>

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

                                                $ {itemp.price}

                                            </div>


                                        </div>
                                    )
                                }

                            </div>
                         <Link to = {'/shop'}>
                            <button
                                type="button"
                                className="mt-8 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-2 mx-auto transition-colors duration-200"
                            >
                                แก้ไขรายการ →
                            </button>
                            </Link>

                        </div>
                        <div className="lg:col-span-1">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm transition-colors duration-200">
                                <h3 className="text-gray-900 dark:text-white mb-8 transition-colors duration-200">
                                    Order Summary
                                </h3>
                                <div
                                    className="space-y-6 mb-8"
                                    role="region"
                                    aria-label="Order summary"
                                >
                                    <div className="flex justify-between text-gray-900 dark:text-white transition-colors duration-200">
                                        <span>{carts.length} Items</span>
                                        <span>${getcarttotal()}</span>
                                    </div>
                                    <div>
                                        <label className="text-gray-500 dark:text-gray-400 mb-2 block transition-colors duration-200">
                                            Shipping
                                        </label>
                                        <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 transition-colors duration-200">
                                            <option>Second Delivery - $5.00</option>
                                            <option>Express Delivery - $15.00</option>
                                            <option>Standard Delivery - Free</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-gray-500 dark:text-gray-400 mb-2 block transition-colors duration-200">
                                            Promo Code
                                        </label>
                                        <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-700 transition-colors duration-200">
                                            <option>xxxx - xxxx</option>
                                            <option>SAVE10</option>
                                            <option>SAVE20</option>
                                        </select>
                                    </div>
                                    <button
                                        type="button"
                                        className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        Apply
                                    </button>
                                </div>
                                <div className="border-t border-gray-300 dark:border-gray-700 pt-6 mb-6 transition-colors duration-200">
                                    <div className="flex justify-between text-gray-900 dark:text-white mb-6 transition-colors duration-200">
                                        <span>{carts.length} Items</span>
                                        <span>${getcarttotal()}</span>
                                    </div>
                                    <button
                                        type="button"
                                        className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-4 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
                                    >
                                        Checkout
                                    </button>
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