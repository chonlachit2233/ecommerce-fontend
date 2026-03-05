import { useEffect, useState, type ReactElement } from "react"
import useStore from "../store/ecom-store"
import { currentuser } from "../api/auth"
import Loaddingreduct from "./Loaddingreduct"


type Props = {
    element: ReactElement
}

const Cerrentuser = ({element}: Props) => {
    
    const [ok, setok] = useState(false)
    const token = useStore((state)=> state.token)
    const user = useStore((state)=> state.user)
    
    useEffect(()=>{
      if(token && user){
        currentuser(token)
        .then(()=> setok(true))
        .catch(()=> setok(false))
      }
    },[])
    
    return ok ? element: <Loaddingreduct/>
}

export default Cerrentuser