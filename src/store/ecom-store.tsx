import axios from "axios"
import { create } from "zustand"
import type { LoginForm } from "../types/auth"
import type { BearState } from "../types/store"
import { persist } from "zustand/middleware"
import { Listcategory } from "../api/category"
import { Listproduct } from "../api/product"

const useStore = create<BearState>()(persist((set) => ({
    user: null,
    token: null,
    categoryis: [],
    products: [],

    actionlogin: async (form: LoginForm) => {
        const res = await axios.post(
            "http://localhost:5005/api/login", form)

        set({
            user: res.data.payload,
            token: res.data.token,
        })

        return res
    },
    getcategory: async(token:string) =>{
        const res = await Listcategory(token)
        console.log(res)
    set({
        categoryis: res.data.categorylist
    })
    },
    getproducts: async(token: string, count: number) =>{
        const res = await Listproduct(token, count)
        console.log(res)
        set({
            products: res.data.listproduct
        })
    }

   
}),
    { name: "ecom" }
)
)

export default useStore