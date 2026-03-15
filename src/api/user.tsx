import axios from "axios"
import type { ProductForm } from "../types/product"
import type { itempaddress } from "../types/auth"


export const createusercart = async(token: string, data: {cart: ProductForm[]} ) =>{
    return axios.post('http://localhost:5005/api/addusercart', data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export const listusercart = async(token: string) =>{
    return axios.get('http://localhost:5005/api/getusercart', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const saveaddress = async(token: string, address: itempaddress) =>{
    return axios.post('http://localhost:5005/api/adduseraddress',address,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}