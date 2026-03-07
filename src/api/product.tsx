import axios from "axios"
import type { ProductForm } from "../types/product"



export const Createproduct = (token: string, form: ProductForm) => {
    return axios.post('http://localhost:5005/api/product', form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const Listproduct = (token: string, count: number) => {
    return axios.get('http://localhost:5005/api/product/' + count, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const UploadFiles = (token: string, image: string) => {

    // console.log('form api fontend ', form)
    // console.log(form)
    return axios.post('http://localhost:5005/api/images', {
        image
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
export const RemoveFiles = (token: string, public_id: string) => {

    // console.log('form api fontend ', form)
    // console.log(form)
    return axios.post('http://localhost:5005/api/removeimages', {
        public_id
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

