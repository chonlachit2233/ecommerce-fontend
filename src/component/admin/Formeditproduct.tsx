import { useEffect, useState, type ChangeEvent } from "react"
import type { ProductForm } from "../../types/product"
import useStore from "../../store/ecom-store"
import {  readproduct, updateproduct } from "../../api/product"
import { toast } from "react-toastify"
import Uploadfile from "./Uploadfile"
import { useNavigate, useParams } from "react-router-dom"



const Formeditproduct = () => {

    const initialForm: ProductForm = {
        id: 0,
        title: "นมสดน้ำผึ้ง",
        description: "หวานน้อย",
        price: 45,
        quantity: 20,
        categoryId: '',
        images: [],
        updatedAt: ''

    }

    const [form, setform] = useState<ProductForm>(initialForm)
    const categoryis = useStore((state) => state.categoryis)
    const token = useStore((state) => state.token)
    const getcategoryis = useStore((state) => state.getcategory)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            return
        }
        getcategoryis()
        fetchproduct(token, Number(id))

    }, [])


    const fetchproduct = async (token: string, id: number) => {
        try {
            const res = await readproduct(token, id)
            console.log('res form backend',res)
            setform(res.data.readproduct)
        } catch (err) {

        }
    }

    console.log(form)

    const handleonchang = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form)
        if (!token) {
            return toast.error('No Token')
        }

        try {
            const res = await updateproduct(token, Number(id), form)
            console.log(res)
            toast.success(`อัปเดตข้อมมูลสินค้า ${res.data.updateproduct.title} สำเร็จ`)
            navigate('/admin/product')

        } catch (err: any) {
            console.log(err.response)
        }
    }



    return (
        <div className="bg-white container mx-auto p-6 space-y-2 shadow-md">
            <h1>เพิ่มสินค้า</h1>
            <form onSubmit={onsubmit}>
                <input className="border block mb-2 "
                    name="title"
                    value={form.title}
                    onChange={handleonchang}
                    placeholder="title"
                />

                <input className="border block mb-2 "
                    name="description"
                    onChange={handleonchang}
                    value={form.description}
                    placeholder="description"
                />

                <input className="border block mb-2 "
                    name="price"
                    onChange={handleonchang}
                    value={form.price}
                    placeholder="price"
                />

                <input className="border block mb-2 "
                    name="quantity"
                    onChange={handleonchang}
                    value={form.quantity}
                    placeholder="quantity"
                />

                <select className="border "
                    name="categoryId"
                    onChange={handleonchang}
                    value={form.categoryId}

                >
                    <option value="" disabled>Pleace Selete</option>
                    {
                        categoryis.map((itemp, index) =>
                            <option key={index} value={itemp.id}>{itemp.name}</option>
                        )
                    }


                </select>
                <br />
                <br />
                {/* Uploadfine */}
                <Uploadfile form={form} setform={setform} />



                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 mt-4 ">แก้ไขสินค้า</button>

                <hr className="mt-2" />


            </form>
            <br />

        </div>
    )
}

export default Formeditproduct