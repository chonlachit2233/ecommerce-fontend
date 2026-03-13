import { Trash2 } from 'lucide-react';
import useStore from '../../store/ecom-store';
import { Link } from 'react-router-dom';

const CartCard = () => {

    const cart = useStore((state) => state.cart)
    const actionupdatequantity = useStore((state) => state.actionupdatequaintity)
    const actionremoveproduct = useStore((state) => state.actionremoveproduct)
    const gettotalprice = useStore((state) => state.actiongettotalprice)
    console.log(cart)




    return (
        <div>
            <h1 className="text-xl font-bold">ตระกร้าสินค้า</h1>
            {/* Border */}

            <div className="border p-2">
                {/* Card */}
                {
                    cart.map((itemp, index) =>
                        <div key={index} className="bg-white p-2 rounded-md shadow-md mb-2">
                            {/* Row 1 */}
                            <div className="flex justify-between mb-2" >
                                {/* Left */}
                                <div className="flex gap-2 items-center">


                                    {
                                        itemp.images && itemp.images.length > 0
                                            ? <img src={itemp.images[0].url}
                                                className='w-16 h-16 rounded-md'
                                            />
                                            : <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center text-center">
                                                No Image
                                            </div>
                                    }

                                    <div >
                                        <p className="font-bold">{itemp.title}</p>
                                        <p className="text-sm">{itemp.description}</p>
                                    </div>

                                </div>

                                <div
                                    onClick={() => actionremoveproduct(itemp.id)}
                                    className='text-red-600 p-2 hover:text-red-400'>
                                    {/* Right */}
                                    <button><Trash2 /></button>
                                </div>
                            </div>

                            {/* row 2 */}
                            <div className="flex justify-between  ">
                                {/* Left */}
                                <div className="border rounded-sm px-2 py-1">
                                    <button
                                        onClick={() => actionupdatequantity(itemp.id, itemp.count - 1)}
                                        className="px-2 py-1 bg-gray-200 rounded-sm hover:bg-gray-400">-</button>
                                    <span className="px-4">{itemp.count}</span>
                                    <button
                                        onClick={() => actionupdatequantity(itemp.id, itemp.count + 1)}
                                        className="px-2 py-1 bg-gray-200 rounded-sm hover:bg-gray-400">+</button>
                                </div>
                                {/* Right */}
                                <div className="font-bold text-blue-500">
                                    {itemp.price * itemp.count}฿
                                </div>
                            </div>

                        </div>
                    )
                }

                {/* Total */}
                <div className='flex justify-between px-2 py-2'>
                    <span>รวม:</span>
                    <span>{gettotalprice()}</span>
                </div>
                {/* Button */}
                <div>

                    <Link 
                    to = "/cart">
                        <button

                            className='mt-2 bg-green-500 text-white w-full py-2 shadow-md rounded-md hover:bg-green-700'>ดำเนินการชำระเงิน</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default CartCard