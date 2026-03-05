import axios from "axios";


export const currentuser = async(token: string)=> await axios.post('http://localhost:5005/api/currentuser',{},{
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const cerrentadmin = async(token: string) => await axios.post('http://localhost:5005/api/currentadmin', {},{
    headers: {
        Authorization: `Bearer ${token}`
    }
})