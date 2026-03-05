import React, { useEffect, useState, type ChangeEvent } from "react"
import { Createcategory, Removecategory } from "../../api/category"
import useStore from "../../store/ecom-store"
import { toast } from "react-toastify"



const Formcategory = () => {

    const [name, setneme] = useState('')
    const token = useStore((state) => state.token)
    const categoryiss = useStore((state)=> state.categoryis)
    const getcategory = useStore((state)=> state.getcategory)


    useEffect(() => {
        if (!token) {
            return
        }
        getcategory(token)
    }, [])
   

    const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!name) {
            return toast.warning('Please fill ')
        }
        if (!token) {
            return toast.error('No Token')

        }
        try {
            const res = await Createcategory(token, { name })
            console.log(res)
            toast.success(`Create Category ${name} success`)
            getcategory(token)
        } catch (err) {
            console.log(err)
        }
    }

    const handleonremove = async (id: Number) => {
        console.log(id)
        if (!token) {
            return toast.error('No Token')
        }
        try {
            const res = await Removecategory(token, id)
            console.log(res)
            toast.success(`Remove Category ${name} Success`)
            getcategory(token)
        } catch (err) {
            console.log(err)
        }
    }


    return (

        <div className="bg-white mx-auto p-6 container shadow-md space-y-2 ">

            <h1 className="font-bold ">หมวดหมู่สินค้า</h1>
            <form onSubmit={handlesubmit}>
                <input className="border"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setneme(e.target.value)}
                    type="text"
                />
                <button className="mx-2 bg-blue-400 rounded-md">Add Category</button>
            </form>
            <hr />
            <ul className="list-none">
                {
                    categoryiss.map((itemp, index) =>
                        <li key={index} className="flex justify-between my-4">
                            {(itemp.name)}
                            <button
                                onClick={() => handleonremove(itemp.id)}
                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">ลบ</button>

                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Formcategory