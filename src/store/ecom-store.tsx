import axios from "axios"
import { create } from "zustand"
import type { LoginForm } from "../types/auth"
import type { BearState } from "../types/store"
import { persist } from "zustand/middleware"
import { Listcategory } from "../api/category"
import { Listproduct, SearchFilters } from "../api/product"
import type { ProductForm } from "../types/product"
import _ from 'lodash'

const useStore = create<BearState>()(persist((set, get) => ({
    user: null,
    token: null,
    categoryis: [],
    products: [],
    cart: [],

    actiongettotalprice:()=>{
       return get().cart.reduce((total,item)=>{
        return total + item.price * item.count
       },0)
    },
    actionremoveproduct: (productId)=>{
        // console.log('remove',productId)
        set((state)=>({
            cart: state.cart.filter((itemp)=>
            itemp.id !== productId
            )
        }))
    },
    actionupdatequaintity: (productId, newQuantity) => {
        // console.log('update Clikkk', productId, newQuantity)
        set((state) => ({
            cart: state.cart.map((itemp) =>
                itemp.id === productId
                ? {...itemp, count: Math.max(1,newQuantity)}
                : itemp
        
        )
        }))
    },
    actionAddtocart: (itemp: ProductForm) => {
        const cart = get().cart
        const updateCart = [...cart, { ...itemp, count: 1 }]
        const uniqe = _.unionWith(updateCart, _.isEqual)


        set({ cart: uniqe })


    },
    actionlogin: async (form: LoginForm) => {
        const res = await axios.post(
            "http://localhost:5005/api/login", form)

        set({
            user: res.data.payload,
            token: res.data.token,
        })

        return res
    },
    getcategory: async () => {
        const res = await Listcategory()

        set({
            categoryis: res.data.categorylist
        })
    },
    getproducts: async (count: number) => {
        const res = await Listproduct(count)

        set({
            products: res.data.listproduct
        })
    },
    actionsearchfilters: async (arg: Record<string, unknown>) => {
        const res = await SearchFilters(arg)

        set({
            products: res.data
        })
    },
}),
    { name: "ecom" }
)
)

export default useStore