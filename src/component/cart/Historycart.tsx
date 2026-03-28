import React, { useState, useEffect } from "react"
import { getorder } from "../../api/user"
import useStore from "../../store/ecom-store"


type productItemp = {
    product: {
        id: number
        title: string
        description: string
        sold: number
        price: number


    }
    count: number


}

type Order = {
    id: number
    products: productItemp[]
    date: string
    status: string
    carTotal: number
    orderstatus: string
    updatedAt: string


}







const Historycart = () => {

    const [orders, setorder] = useState<Order[]>([])
    const token = useStore((state) => state.token)

    console.log(token)



    useEffect(() => {
        if (!token) {
            return
        }
        helgetOrder(token)
    }, [])


    const helgetOrder = (token: string) => {
        getorder(token)
            .then((res) => {
                console.log(res)
                setorder(res.data.order)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }




    return (
        <div className="space-y-3">
            <h1 className="text-2xl font-bold">ประวัติการสั่งซื้อ</h1>

            {/* คลุม  */}
            <div>
                {/* card loop order */}
                {
                    orders?.map((itemp, index) => {
                        console.log(itemp)
                        return (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">

                                {/* header */}
                                <div className="flex justify-between">
                                    <div className="space-y-2">
                                        <p className="text-sm ">Order date</p>
                                        <p className="font-bold">{itemp.updatedAt}</p>
                                    </div>
                                    <div>
                                        {itemp.orderstatus}
                                    </div>
                                </div>

                                {/* table */}

                                <div>
                                    <table className="border w-full">
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th>สินค้า</th>
                                                <th>ราคา</th>
                                                <th>จำนวน</th>
                                                <th>รวม</th>
                                            </tr>

                                        </thead>


                                        <tbody>


                                            {
                                                itemp.products?.map((product, index) => {
                                                    console.log(product)
                                                    return (
                                                        <tr key={index}>
                                                            <td className="p-3">{product.product.title}</td>
                                                            <td className="p-3">{product.product.price}</td>
                                                            <td className="p-3">{product.count}</td>
                                                            <td className="p-3">{product.count * product.product.price}</td>
                                                        </tr>
                                                    )
                                                })
                                            }




                                        </tbody>

                                    </table>
                                </div>

                                {/* Total */}

                                <div>
                                    <div className="text-right">
                                        <p>ราคาสุทธิ </p>
                                        <p>{itemp.carTotal}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Historycart