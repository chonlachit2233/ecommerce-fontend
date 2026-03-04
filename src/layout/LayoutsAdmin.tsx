import { Outlet } from "react-router-dom"


const LayoutsAdmin = () => {
  return (
    <div>
      <h1>Sindbar</h1>
      <h1>Header</h1>
      <hr />
      <Outlet/>
    </div>
  )
}

export default LayoutsAdmin