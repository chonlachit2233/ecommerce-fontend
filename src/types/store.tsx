import type { LoginForm } from "./auth"

import type { Category } from "./category"
import type { ProductForm } from "./product"

export interface BearState {
    user: any | null
    token: string | null
    categoryis: Category[]
    products: ProductForm[]
    cart: ProductForm[]

    actionlogin: (form: LoginForm) => Promise<any>
    getcategory: () => Promise<any>
    getproducts: (count: number) => Promise<any>
    actionsearchfilters: (arg: Record<string, unknown>) => Promise<any>
    actionAddtocart: (itemp: ProductForm ) => void
    actionupdatequaintity: (productId: number, newQuantity: number) => void
    actionremoveproduct: (itemp: number)=>void
    actiongettotalprice:(()=> number)

}