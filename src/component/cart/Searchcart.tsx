import React, { useEffect, useState } from "react"
import useStore from "../../store/ecom-store"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const Searchcart = () => {

    const getproduct = useStore((state) => state.getproducts)
    const products = useStore((state) => state.products)
    const actionsearchfilter = useStore((state) => state.actionsearchfilters)
    const getcategory = useStore((state) => state.getcategory)
    const category = useStore((state) => state.categoryis)

    const [text, setText] = useState('')
    const [categoryselete, setcategoryselete] = useState<string[]>([])

    const [price, setprice] = useState([10, 100])
    const [ok, setok] = useState(false)


    // getcategory
    // console.log(category)
    useEffect(() => {
        getcategory()
    }, [])
    // End getcategory



    // search product
    useEffect(() => {
        const delay = setTimeout(() => {


            if (text) {
                actionsearchfilter({ query: text })
            } else {
                getproduct(20)
            }
        }, 300)

        return () => clearTimeout(delay)
    }, [text])
    // End search product



    //check category checkbox
    const oncheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        const incheck = e.target.value // ค่าที่เราเช็ค 
        const inState = [...categoryselete]
        const filecheck = inState.indexOf(incheck) // ถ้าไม่เจอจะ return -1

        if (filecheck === -1) {
            inState.push(incheck)
        } else {
            inState.splice(filecheck, 1)
        }
        setcategoryselete(inState)


        if (inState.length > 0) {
            actionsearchfilter({ category: inState })
        } else {
            getproduct(20)
        }
    }

    // console.log(categoryselete)





    //search price
    useEffect(() => {
        actionsearchfilter({ price })
    }, [ok])

    const handlePrice = (value: number | number[]) => {


        if (Array.isArray(value)) {
            console.log(value)
            setprice(value)
            setTimeout(() => {
                setok(!ok)
            }, 300)
        }

    }

    return (
        <div >
            <h1 className="text-xl font-bold mb-4">ค้นหาสินค้า</h1>
            {/* search by text */}
            <input
                onChange={(e) => setText(e.target.value)}
                placeholder="ค้นหาสินค้า....."
                type="text"
                className="border rounded-md w-full mb-4 px-2"
            />

            <hr />


            {/* search by category */}
            <h1 className="my-2 space-y-2">หมวดหมู่สินค้า</h1>
            <div>
                {
                    category.map((itemp, index) =>

                        <div key={index} className="flex gap-2">
                            <input
                                onChange={oncheck}
                                value={itemp.id}
                                type="checkbox" />
                            <label >{itemp.name}</label>
                        </div>

                    )
                }
            </div>
            <br />
            <hr />

            {/* search by price */}
            <div className="py-2">
                <h1>ค้นหาราคา</h1>
                <div className="py-2">
                    <div className="flex justify-between">
                        <span>Min: {price[0]}</span>
                        <span>Max: {price[1]}</span>
                    </div>
                    <Slider
                        onChange={handlePrice}
                        range
                        min={0}
                        max={100}
                        defaultValue={[10, 100]}
                    />
                </div>
            </div>
        </div>




    )
}

export default Searchcart