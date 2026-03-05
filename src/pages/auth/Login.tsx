import { useState, type ChangeEvent } from "react"
import useStore from "../../store/ecom-store"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"



const Login = () => {

  const actionlogin = useStore((state)=> state.actionlogin)
  const user = useStore((state)=> state.user)
  console.log('User is Zustand', user)
  const navigate = useNavigate()

   
  const [form, setform] = useState({
    email: "",
    password: ""
  })

  const handleOnchang = (e: ChangeEvent<HTMLInputElement>) =>{
     setform({
      ...form,
      [e.target.name]: e.target.value
     })
  }

  const handleOnsubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(form)
    try{
    const res = await actionlogin(form)
     console.log(res)
     const role = res.data.payload.role
     toast.success('Welcome to back')
     navigatelogin(role)
     console.log(role)
    }catch(err: any){
      const errmsg = err.response?.data?.message 
      toast.error(errmsg)
      console.log(err)
    }

   
  }

  const navigatelogin = (role: string )=>{
      if(role === 'admin'){
        navigate('/admin')
      }else{
        navigate('/user')
      }
  }
  
  return (
    <div>
      Login
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
        <button className="bg-blue-300 rounded-md mx-3">Login</button>
      </form>
      </div>
  )
}

export default Login