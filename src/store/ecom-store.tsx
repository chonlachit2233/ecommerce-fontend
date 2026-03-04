import axios from "axios"
import { create } from "zustand"
import type { LoginForm } from "../types/auth"
import type { BearState } from "../types/store"
import { persist } from "zustand/middleware"

const useStore = create<BearState>()(persist((set) => ({
    user: null,
    token: null,

    actionlogin: async (form: LoginForm) => {
        const res = await axios.post(
            "http://localhost:5005/api/login", form)

        set({
            user: res.data.payload,
            token: res.data.token,
        })

        return res
    },
}),
    { name: "ecom1" }
)
)

export default useStore