import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"


const Loaddingreduct = () => {

    const [count, setcount] = useState(3)
    const [reduct, setreduct] = useState(false)

    useEffect(() => {
        const Intervel = setInterval(() => {
            setcount((cerrentcount) => {
                if (cerrentcount === 1) {
                      clearInterval
                      setreduct(true)
                }
                return cerrentcount -1
            })
        }, 1000)
        return ()=> clearInterval(Intervel)
    }, [])

    if(reduct){
        return <Navigate to= {'/'}/>
    }




    return (
        <div>No promise, Loadding {count}</div>
    )
}

export default Loaddingreduct