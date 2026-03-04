import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"


const Register = () => {
   const [form,setform] = useState({
    email: "",
    password: "",
    confirmpassword: ""
   })

   const handleOnchang = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setform({
      ...form,
      [e.target.name]:e.target.value
    })
   }

   const handleOnsubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault()
     console.log(form)
     if(form.password !== form.confirmpassword){
      return toast.warning('Password Do Not Match!')
     }
     try{
      const res = await axios.post('http://localhost:5005/api/register', form)
      console.log(res)
      toast.success(res.data)
     }catch(err: any){
      const errmg = err.response?.data?.message 
      toast.error(errmg)
      console.log(err.response)

     }

   }

  return (
    <div>
      Register
      <form onSubmit={handleOnsubmit}>
        email
        <input className="border"
        onChange={handleOnchang}
          name="email"
          type="email"
        />
        password
        <input className="border"
         onChange={handleOnchang}
          name="password"
          type="password"
        />
        confirmpassword
        <input className="border"
         onChange={handleOnchang}
          name="confirmpassword"
          type="password"
        />
        <button className="bg-green-700 text-white rounded-md mx-3">Register</button>
      </form>
    </div>
  )
}

export default Register