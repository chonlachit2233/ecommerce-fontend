import { useEffect } from "react"
import Cartproduct from "../component/cart/Cartproduct"
import useStore from "../store/ecom-store"


const Shop = () => {
   
  const getproduct = useStore((state)=> state.getproducts)
  const products = useStore((state)=> state.products)



  useEffect(()=>{
   getproduct(20)
  },[])

  return (
    <div className="flex">

      {/* Search Bar */}

      <div className="w-1/4 p-4 bg-gray-100 h-screen">
        Searchbar
      </div>

      {/* product */}

      <div className=" p-4 w-1/2 h-screen overflow-y-auto">
        <p className="text-2xl font-bold mb-4">สินค้าทั้งหมด</p>
        <div className="flex flex-wrap gap-6 py-4">
          {/* product cart */}
          {
            products.map((itemp, index)=>
              <Cartproduct key={index} itemp={itemp}/>
            )
          }
          
            

           {/* product cart */}

        </div>
      </div>



      {/* Cart */}

      <div className="w-1/4 p-4 bg-gray-100 h-screen overflow-y-auto">
        Cart
      </div>

    </div>

  )
}

export default Shop