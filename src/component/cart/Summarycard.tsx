

const Summarycard = () => {
    return (
        <div className="py-12 px-4 min-h-screen bg-gray-50 ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ">


                    {/* Left */}
                    
                        <div className="bg-white p-6 sm:p-8 shadow-md rounded-2xl border ">


                            <div className="space-y-4">
                                <h1 className="font-bold text-xl">ที่อยู่การจัดส่ง</h1>
                                <textarea className="border px-2 w-full" />
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md hover:scale-105 hover:duration-200">Save Adress</button>
                            </div>

                        </div>


                        {/* Right */}
                        <div className="lg: col-span-1">
                            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border ">
                                <div className="space-y-4">
                                    <h1 className="font-bold text-xl">คำสั่งซื้อของคุณ</h1>

                                    {/* items list  */}

                                    <div className="border-b pb-4 ">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p>Title: ชาเย็น</p>
                                                <p>จำนวน: 1 x 2900</p>
                                            </div>

                                            <div>
                                                <p className="text-red-500 font-bold ">$200</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-b pb-4">
                                        <div>
                                            <div className="flex justify-between">
                                                <p>ค่าจัดส่ง:</p>
                                                <p>$0.00</p>
                                            </div>

                                            <div className="flex justify-between">
                                                <p>ค่าส่วนลด:</p>
                                                <p>$0.00</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div >
                                        <div>
                                            <div className="flex justify-between">
                                                <p>ยอดรวมสุทธิ:</p>
                                                <p className="text-red-500 font-bold text-xl"> $400</p>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Summarycard