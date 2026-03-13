import axios from "axios"
import type { ProductForm } from "../types/product"

export const createusercart = async(token: string, data: {cart: ProductForm[]} ) =>{
    return axios.post('http://localhost:5005/api/addusercart', data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}