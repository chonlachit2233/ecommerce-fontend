import { NavLink } from "react-router-dom"
import { Gauge } from 'lucide-react';


const Sindbar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 flex flex-col h-screen">
            <div className="bg-gray-900 h-20 flex items-center justify-center text-2xl font-bold">
                Admin Panel
            </div>


            <nav className="px-4 py-2 flex-1 space-y-2">
                <NavLink
                    to={'/admin'}
                    end
                    className={({ isActive }) => isActive
                        ? 'bg-gray-900 flex px-4 py-2 rounded-md items-center'
                        : 'text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white flex items-center'
                    }

                >
                       <Gauge className="mr-2"/>
                    Dashbord
                </NavLink>
                <NavLink
                    to={'category'}
                    end
                    className={({ isActive }) => isActive
                        ? 'bg-gray-900 flex px-4 py-2 rounded-md items-center'
                        : 'text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white  flex items-center'
                    }

                >
                    Category
                </NavLink>
                <NavLink
                    to={'product'}
                    end
                    className={({ isActive }) => isActive
                        ? 'bg-gray-900 flex px-4 py-2 rounded-md items-center'
                        : 'text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white  flex items-center'
                    }

                >
                    Product
                </NavLink>
                <NavLink
                    to={'manage'}
                    end
                    className={({ isActive }) => isActive
                        ? 'bg-gray-900 flex px-4 py-2 rounded-md items-center'
                        : 'text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white  flex items-center'
                    }

                >
                    Manage
                </NavLink>

            </nav>

            <div>
                Footer
            </div>
        </div>
    )
}

export default Sindbar