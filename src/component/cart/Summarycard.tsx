import { useEffect, useState } from "react"
import useStore from "../../store/ecom-store"
import { listusercart, saveaddress } from "../../api/user"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

type Cartitem = {
    product: {
        categoryId: number,
        title: string,
        price: number
    }
    count: number
}

const Summarycard = () => {


    const token = useStore((state) => state.token)
    const [products, setproducts] = useState<Cartitem[]>([])
    const [carttotal, setcarttotal] = useState(0)
    const [addressd, setaddress] = useState('')
    const [addressSave, setaddressSave] = useState(false)
    const navigate = useNavigate()




    useEffect(() => {
        if (!token) {
            return
        }
        handlegetusercart(token)
    }, [])

    const handlegetusercart = (token: string) => {
        listusercart(token)
            .then((res) => {
                //    console.log(res)
                setproducts(res.data.products)
                setcarttotal(res.data.cartTotal)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const hadlesaveaddress = () => {
        if (!token) {
            return
        }

        console.log(addressd)
        if (!addressd) {
            return toast.warning('Please fill Address')
        }
        saveaddress(token, { address: addressd })
            .then((res) => {
                console.log(res)
                toast.success(res.data.message)
                setaddressSave(true)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const handlepayment = () => {
     if(!addressSave){
       return toast.warning('กรูณากรอกที่อยู่ด้วย')
     }
      navigate('/user/payment')
    }

    console.log(products)



    return (
        <div className="py-12 px-4 min-h-screen bg-gray-50 ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ">


                    {/* Left */}

                    <div className="bg-white p-6 sm:p-8 shadow-md rounded-2xl border ">


                        <div className="space-y-4">
                            <h1 className="font-bold text-xl">ที่อยู่การจัดส่ง</h1>
                            <textarea
                                required
                                onChange={(e) => setaddress(e.target.value)}
                                placeholder="กรุณากรอกที่อยู่จักส่ง"
                                className="border px-2 w-full" />

                            <button
                                onClick={hadlesaveaddress}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md hover:scale-105 hover:duration-200">Save Adress</button>
                        </div>

                    </div>


                    {/* Right */}
                    <div className="lg: col-span-1">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border ">
                            <div className="space-y-4">
                                <h1 className="font-bold text-xl">คำสั่งซื้อของคุณ</h1>

                                {/* items list  */}

                                {
                                    products.map((itemp, index) =>
                                        <div key={index} className="border-b pb-4 ">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="font-bold"> {itemp.product.title}</p>
                                                    <p className="text-sm">จำนวน: {itemp.count} x {itemp.product.price}</p>
                                                </div>

                                                <div>
                                                    <p className="text-red-500 font-bold ">${itemp.count * itemp.product.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }



                                <div className="border-b pb-4">
                                    <div>
                                        <div className="flex justify-between">
                                            <p>ค่าจัดส่ง:</p>
                                            <p>$0.00</p>
                                        </div>

                                        <div className="flex justify-between">
                                            <p>ค่าส่วนลด:</p>
                                            <p>$0.00</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b pb-4">
                                    <div>
                                        <div className="flex justify-between">
                                            <p>ยอดรวมสุทธิ:</p>
                                            <p className="text-red-500 font-bold text-xl"> ${carttotal}</p>
                                        </div>
                                    </div>
                                </div>

                                <div >
                                    <div>
                                        <div>
                                            <button
                                             onClick={handlepayment}
                                                // disabled ={!addressSave}
                                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 hover:scale-105 hover:duration-200 w-full shadow-md">ดำเนินการชำระเงิน </button>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Summarycard