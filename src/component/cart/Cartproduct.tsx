import { ShoppingCart } from 'lucide-react';
import type { ProductForm } from '../../types/product';

type Props = {
    itemp: ProductForm
}
const Cartproduct = ({ itemp }: Props) => {

    console.log(itemp)
    return (
        <div className="border rounded-md shadow-md p-2 w-48">


            <div >

                {
                    itemp.images && itemp.images.length > 0
                        ? <img src={itemp.images[0].url} className='rounded-md shadow-md w-full h-24 object-cover hover:scale-110 hover:duration-200'/>
                        : <div className="w-full h-24 bg-gray-100 rounded-md text-center flex items-center justify-center shadow-md">
                            No Image
                        </div>
                }
            </div>

            <div className="py-2">
                <p className="text-xl">{itemp.title}</p>
                <p className="text-sm text-gray-500">{itemp.description}</p>
            </div>

            <div className='flex justify-between items-center'>
                <span className='text-sm font-bold'>{itemp.price}</span>
                <button className='bg-blue-500 rounded-md p-2 hover:bg-blue-600 '><ShoppingCart /></button>
            </div>
        </div>
    )
}

export default Cartproduct