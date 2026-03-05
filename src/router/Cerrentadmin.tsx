import { useEffect, useState, type ReactElement } from "react"
import useStore from "../store/ecom-store"
import { cerrentadmin } from "../api/auth"
import Loaddingreduct from "./Loaddingreduct"

type Props = {
  element: ReactElement
}
const Cerrentadmin = ({element}: Props) => {
     const [ok, setok] = useState(false)
     const token = useStore((state)=> state.token)
     const user = useStore((state)=> state.user)

     useEffect(()=>{
     if(token && user){
        cerrentadmin(token)
        .then(()=> setok(true))
        .catch(()=> setok(false))
     }
     },[])




    return ok ? element: <Loaddingreduct/>
}

export default Cerrentadmin