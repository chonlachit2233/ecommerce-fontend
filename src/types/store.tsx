import type { LoginForm } from "./auth"
import type { Category } from "./category"
import type { ProductForm } from "./product"

export interface BearState {
    user: any | null
    token: string | null
    categoryis: Category[]
    products: ProductForm[]
    actionlogin: (form: LoginForm) => Promise<any>
    getcategory: (token:string) => Promise<any>
    getproducts: (token: string, count: number) => Promise<any>
}