import { Outlet } from "react-router-dom"
import Mainnav from "../component/Mainnav"


const layoutsUser = () => {
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

export default layoutsUser