import axios from "axios";

export const payments = async (token: string) => await axios.post('http://localhost:5005/api/user/create-checkout-session', {}, {
    headers: {
        Authorization: `Bearer ${token}` 
    }
})