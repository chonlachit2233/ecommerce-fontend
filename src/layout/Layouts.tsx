import { Outlet } from "react-router-dom"
import Mainnav from "../component/Mainnav"


const layouts = () => {
  return (
    <div>
        <Mainnav/>
        <hr />
        <Outlet/>
    </div>
  )
}

export default layouts