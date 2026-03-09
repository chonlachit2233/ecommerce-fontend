import { useState, type ChangeEvent } from "react"
import type { ProductForm } from "../../types/product"
import { toast } from "react-toastify"
import Resize from 'react-image-file-resizer'
import { RemoveFiles, UploadFiles } from "../../api/product"
import useStore from "../../store/ecom-store"
import { Loader } from 'lucide-react';

type UploadfileProps = {
    form: ProductForm
    setform: React.Dispatch<React.SetStateAction<ProductForm>>
}

//  upload และจัดการรูปภาพของสินค้า
const Uploadfile = ({ form, setform }: UploadfileProps) => {

    const token = useStore((state) => state.token)

    // state สำหรับแสดง loading ตอนกำลัง upload
    const [isloadding, setIsloading] = useState(false)

    // ฟังก์ชันทำงานตอน user เลือกไฟล์
    const handleOnchang = (e: ChangeEvent<HTMLInputElement>) => {

        setIsloading(true)
        const files = e.target.files
        if (files) {
            setIsloading(true)

            // เก็บรูปเดิมจาก form
            let allfiles = form.images // empty array

            // loop ทุกไฟล์ที่ user เลือก
            for (let i = 0; i < files.length; i++) {
                console.log(files[i])

                if (!token) {
                    return toast.error('No token')
                }


                const file = files[i]


                // ตรวจสอบว่าไฟล์เป็นรูปหรือไม่
                if (!file.type.startsWith('image/')) {
                    toast.error(`File ${file.name} Not Image`)
                    continue
                }

                // resize รูปก่อน upload เพื่อลดขนาดไฟล์
                Resize.imageFileResizer(
                    files[i],
                    720,
                    720,
                    "JPEG",
                    100,
                    0,
                    (data: any) => {

                        // console.log(data)

                        // ส่งรูปไป backend
                        UploadFiles(token, data)
                            .then((res) => {
                                console.log(res)


                                // เพิ่มรูปใหม่เข้า array
                                allfiles.push(res.data)

                                // update state form
                                setform({
                                    ...form,
                                    images: allfiles
                                })
                                setIsloading(false)
                                toast.success('Upload image Success!!!')
                            })
                            .catch((err) => {
                                setIsloading(false)
                                console.log(err.response)
                            })

                    },
                    "base64"
                )

            }
        }


    }

    console.log(form)


    // ฟังก์ชันลบรูป
    const handleDelete = (public_id: string) => {
        const images = form.images



        if (!token) {
            return toast.error('No ToKen Uploadfile')
        }

         // เรียก API ลบรูป
        RemoveFiles(token, public_id)
            .then((res) => {
                
                 // filter รูปที่ไม่ถูกลบออก
                const filterimages = images.filter((itemp) => {
                    console.log(itemp)
                    return itemp.public_id !== public_id
                })
                console.log('filter image', filterimages)
                

                 // update form
                setform({
                    ...form,
                    images: filterimages
                })

                toast.error(res.data)
            })
            .catch((err) => {

                console.log(err)
            })

    }

    return (
        <div>

            <div className="flex mx-4 gap-4 my-4">

                {
                    isloadding && <Loader className="w-16 h-16 animate-spin" />
                }


                {
                    form.images.map((itemp, index) =>
                        <div className="relative" key={index}>
                            <img
                                className="w24 h-24 hover:scale-105"
                                src={itemp.url} />
                            <span
                                onClick={() => handleDelete(itemp.public_id)}
                                className="absolute top-0 right-0 bg-red-500 p-1 rounded-md">X</span>
                        </div>
                    )
                }
            </div>

            <div>
                <input
                    onChange={handleOnchang}
                    type="file"
                    name="images"
                    multiple
                />
            </div>
        </div>
    )
}

export default Uploadfile