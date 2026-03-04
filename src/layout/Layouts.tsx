import { Outlet } from "react-router-dom"


const layouts = () => {
  return (
    <div>
        <h1>Home page</h1>
        <hr />
        <Outlet/>
    </div>
  )
}

export default layouts