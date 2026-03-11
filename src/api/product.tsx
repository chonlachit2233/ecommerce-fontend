import axios from "axios"
import type { ProductForm } from "../types/product"



export const Createproduct = (token: string, form: ProductForm) => {
    return axios.post('http://localhost:5005/api/product', form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const Listproduct = ( count: number) => {
    return axios.get('http://localhost:5005/api/product/' + count,)
}

export const readproduct = (token: string, id: number) => {
    return axios.get('http://localhost:5005/api/products/' + id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteproduct = (token: string, id: number) => {
    return axios.delete('http://localhost:5005/api/product/' + id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateproduct = (token: string, id: number, form: ProductForm) => {
    return axios.put('http://localhost:5005/api/updateproduct/' + id, form, {
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

export const SearchFilters = ( arg: Record<string, unknown>) => {
    return axios.post('http://localhost:5005/api/search/filters' ,arg)
}

