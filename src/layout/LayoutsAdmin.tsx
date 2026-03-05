import { Outlet } from "react-router-dom"
import Sindbar from "../component/admin/Sindbar"
import Header from "../component/admin/Header"


const LayoutsAdmin = () => {
  return (
    <div className="flex h-screen ">
      <Sindbar />
      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default LayoutsAdmin