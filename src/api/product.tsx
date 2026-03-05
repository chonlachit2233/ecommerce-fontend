import axios from "axios"
import type { ProductForm } from "../types/product"


export const Createproduct = (token: string, form: ProductForm)=>{
    return axios.post('http://localhost:5005/api/product', form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const Listproduct = (token: string, count: number) =>{
    return axios.get('http://localhost:5005/api/product/'+count,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}