import { useState, type ChangeEvent } from "react"
import type { ProductForm } from "../../types/product"
import { toast } from "react-toastify"
import Resize from 'react-image-file-resizer'
import { UploadFiles } from "../../api/product"
import useStore from "../../store/ecom-store"

type UploadfileProps = {
    form: ProductForm
    setform: React.Dispatch<React.SetStateAction<ProductForm>>
}

const Uploadfile = ({ form, setform }: UploadfileProps) => {

    const token = useStore((state) => state.token)
    const [isloadding, setIsloading] = useState(false)
    const handleOnchang = (e: ChangeEvent<HTMLInputElement>) => {

        const files = e.target.files
        if (files) {
            setIsloading(true)
            let allfiles = form.images // empty array
            for (let i = 0; i < files.length; i++) {
                console.log(files[i])

                if (!token) {
                    return toast.error('No token')
                }


                const file = files[i]
                if (!file.type.startsWith('image/')) {
                    toast.error(`File ${file.name} Not Image`)
                    continue
                }
                //image Resize
                Resize.imageFileResizer(
                    files[i],
                    720,
                    720,
                    "JPEG",
                    100,
                    0,
                    (data: any) => {
                        // endpont backend
                        // console.log(data)
                        UploadFiles(token, data )
                            .then((res)=>{
                               console.log(res)
                                allfiles.push(res.data)
                               setform({
                                 ...form,
                                 images: allfiles
                               })
                               toast.success('Upload image Success!!!')
                            })
                            .catch((err)=>{
                            console.log(err.response)
                            })

                    },
                    "base64"
                )

            }
        }


    }


    return (
        <div>
            <input
                onChange={handleOnchang}
                type="file"
                name="images"
                multiple
            />
        </div>
    )
}

export default Uploadfile