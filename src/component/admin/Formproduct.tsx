import { useEffect, useState, type ChangeEvent } from "react"
import type { ProductForm } from "../../types/product"
import useStore from "../../store/ecom-store"
import { Createproduct, deleteproduct, } from "../../api/product"
import { toast } from "react-toastify"
import Uploadfile from "./Uploadfile"
import { Link } from "react-router-dom"
import { SquarePen } from 'lucide-react';
import { Trash2 } from 'lucide-react';


const Formproduct = () => {

  const initialForm: ProductForm = {

    id: 0,
    title: "",
    description: "",
    price: 0,
    count: 0,
    quantity: 0,
    categoryId: '',
    images: [],
    updatedAt: ''

  }

  const [form, setform] = useState<ProductForm>(initialForm)
  const categoryis = useStore((state) => state.categoryis)
  const token = useStore((state) => state.token)
  const products = useStore((state) => state.products)
  const getproduct = useStore((state) => state.getproducts)
  const getcategoryis = useStore((state) => state.getcategory)

  useEffect(() => {
    if (!token) {
      return
    }
    getcategoryis()
    getproduct( 10)
  }, [])

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
      const res = await Createproduct(token, form)
      console.log(res)
      setform(initialForm)
      getproduct( 10)
      toast.success(`เพิ่มข้อมมูลสินค้า ${res.data.createproduct.title} สำเร็จ`)
      getproduct( 10)
    } catch (err) {
      console.log(err)
    }
  }

  const handledelete = async (id: number) => {
    if (!token) {
      return toast.error('No Token handle delete')
    }
    if (window.confirm('คุณแน่ใจที่จะลบไหม')) {
      try {
        const res = await deleteproduct(token, id)
        console.log(res)
        toast.success('Deleted สินค้าเรียบร้อยแล้ว')
        getproduct( 10)
      } catch (err: any) {
        console.log(err.response)
      }
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



        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 mt-4 hover:scale-105">เพิ่มสินค้า</button>

        <hr className="mt-2" />


      </form>
      <br />
      <table className="table w-full border ">
        <thead>
          <tr className="">
            <th scope="col">No.</th>
            <th scope="col">รูปภาพ</th>
            <th scope="col">ชื่อสินค้า</th>
            <th scope="col">รายละเอียดสินค้า</th>
            <th scope="col">ราคาสินค้า</th>
            <th scope="col">จำนวนสินค้า</th>
            <th scope="col">จำนวนสินค้าที่ขายได้</th>
            <th scope="col">วันที่อัปเดต</th>
          </tr>

        </thead>
        <tbody>
          {
            products.map((itemp, index) => {
              return (
                <tr key={index}>
                  <th scope="row ">{index + 1}</th>
                  <td className="border p-3">

                    {
                      itemp.images.length > 0
                        ? <img
                          className="w-24 h-24 rounded-lg shadow-md"
                          src={itemp.images[0].url} />
                        : <div
                          className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center shadow-md"
                        >No Image</div>
                    }

                  </td>
                  <td className="border p-3">{itemp.title}</td>
                  <td className="border p-3">{itemp.description}</td>
                  <td className="border p-3">{itemp.price}</td>
                  <td className="border p-3">{itemp.quantity}</td>
                  <td className="border p-3">{itemp.categoryId}</td>
                  <td className="border p-3">{itemp.updatedAt}</td>
                  <td className="border p-3 ">
                    <button className="bg-yellow-400 border p-3 shadow-md hover:scale-105"><Link to={'/admin/product/' + itemp.id}>    <SquarePen /></Link></button>
                    <button
                      onClick={() => handledelete(itemp.id)}
                      className="bg-red-400 border p-3 shadow-md hover:scale-105">    <Trash2 /></button>

                  </td>

                </tr>

              )
            })
          }


        </tbody>
      </table>
    </div>
  )
}

export default Formproduct