import axios from "axios"



export const Createcategory = async (token: string, form:{name: string}) =>{
    return axios.post('http://localhost:5005/api/category', form,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export const Listcategory = async (token: string) =>{
    return axios.get('http://localhost:5005/api/category',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export const Removecategory = async(token: string ,id: Number) =>{
    return axios.delete('http://localhost:5005/api/category/'+id,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}