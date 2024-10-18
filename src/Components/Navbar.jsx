import React, { useState } from 'react'
import logoImg from "../assets/logo.png"
import { FaCloudArrowDown, FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {

    let [show, setShow] = useState(false)

    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto lg:pb-[100px]">
                <div className="flex justify-between items-center">
                    <div className="">
                        <img src={logoImg} alt="logo" />
                    </div>
                    <div className="">
                        <ul className={`lg:flex gap-10 items-center absolute lg:static top-0 left-0 duration-700 ease-in-out pt-[50px] lg:pt-0 ${show == true ? "bg-[gray] w-[250px] h-[300px] mt-[80px]" : "left-[-250px]"}`}>
                            <li className="font-sans font-semibold lg:text-[24px] text-center lg:text-sta text-[16px] text-[#222] hover:text-[red]">Home</li>
                            <li className="font-sans font-semibold lg:text-[24px] text-center lg:text-sta text-[16px] text-[#222] hover:text-[red] py-[10px] lg:py-0">About</li>
                            <li className="font-sans font-semibold lg:text-[24px] text-center lg:text-sta text-[16px] text-[#222] hover:text-[red]">Service</li>
                            <li className="font-sans font-semibold lg:text-[24px] text-center lg:text-sta text-[16px] text-[#222] hover:text-[red] py-[10px] lg:py-0">Contact</li>
                            <div className="mx-[35px]">
                                <button className="font-sans flex items-center lg:gap-4 gap-2 font-semibold lg:text-[24px] text-[16px] text-[#222] lg:px-[50px] px-[40px] lg:py-4 py-3 border-2 border-[#EA580C] rounded duration-500 ease-in-out hover:bg-[#EA580C] hover:text-[white]"><FaCloudArrowDown />Download</button>
                            </div>
                        </ul>
                        <div onClick={() => setShow(!show)} className="lg:hidden text-[24px]">
                            {show == true ? <RxCross2 /> : <FaBars />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar