import { Outlet } from "react-router-dom"


const LayoutsUser = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <hr />
      <Outlet/>
    </div>
  )
}

export default LayoutsUser