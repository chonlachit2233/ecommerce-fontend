import { Outlet } from "react-router-dom"
import Mainnav from "../component/Mainnav"


const layouts = () => {
  return (
    <div>
      <Mainnav />
      <hr />
      <main className="h-full px-4 mt-2 mx-auto">
        <Outlet />

      </main>
    </div>
  )
}

export default layouts