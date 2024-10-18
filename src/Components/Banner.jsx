import React from 'react'
import { FaBell } from "react-icons/fa";
import BannerImg from "../assets/banner.png"

const Banner = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex justify-between">
                    <div className="lg:w-[50%] w-full py-[80px]">
                        <div className="flex  pb-[50px]">
                            <h3 className=" flex items-center font-sans font-medium lg:text-[18px] text-[16px] lg:gap-4 gap-2 px-6 py-2 border-2 border-[#262626] rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out"><FaBell />Startup Business</h3>
                        </div>
                        <h2 className="font-sans font-bold lg:text-[54px] text-[24px] text-[#262626] lg:pb-[20px]">Empowering startups to fuel their business growth</h2>
                        <p className="font-sans font-medium lg:text-[18px] text-[14px] text-[#262626] lg:pb-[40px] pb-[30px]">Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,<p className="break-normal">velit</p> nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                        <div className="">
                            <button className="font-sans font-medium lg:text-[18px] text-[16px] text-[#262626] border-2 border-[#EA580C] lg:px-[50px] px-[40px] lg:py-4 py-2 hover:bg-[#EA580C] hover:text-[white] rounded duration-300 ease-in-out">Get started now </button>
                        </div>
                    </div>
                    <div className="lg:w-[50%] w-full lg:pl-[200px]">
                        <img src={BannerImg} alt="banner" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner