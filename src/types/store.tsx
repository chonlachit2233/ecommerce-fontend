import type { LoginForm } from "./auth"

export interface BearState {
    user: any | null
    token: string | null
    actionlogin: (form: LoginForm) => Promise<any>
}