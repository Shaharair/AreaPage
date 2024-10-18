import React from 'react'
import { FaBaseballBall } from "react-icons/fa";

const Group = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex justify-between py-[50px]">
                    <div className="lg:w-[31%] w-full bg-[#FAD0BC] justify-center py-5 pl-5">
                        <div className="flex items-center lg:gap-8 gap-4 font-sans font-bold lg:text-[150px] text-[100px]">
                            <FaBaseballBall />
                            <div className="">
                                <h3 className="font-sans font-bold lg:text-[30px] text-[18px]">Immediate Deployment</h3>
                                <p className=" font-sans font-bokld lg:text-[18px] text-[14px] text-[#71717A] lg:pr-[100px]">Et vero eos et accusamus et iusto odio dignissimos</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[31%] w-full bg-[#FAD0BC] justify-center py-5 pl-5 mt-[20px] lg:mt-0">
                        <div className="flex items-center gap-8 font-sans font-bold lg:text-[150px] text-[100px]">
                            <FaBaseballBall />
                            <div className="">
                                <h3 className="font-sans font-bold lg:text-[30px] text-[18px]">Immediate Deployment</h3>
                                <p className=" font-sans font-bokld lg:text-[18px] text-[14px] text-[#71717A] lg:pr-[100px]">Et vero eos et accusamus et iusto odio dignissimos</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[31%] w-full bg-[#FAD0BC] justify-center py-5 pl-5 mt-[20px] lg:mt-0">
                        <div className="flex items-center gap-8 font-sans font-bold lg:text-[150px] text-[100px]">
                            <FaBaseballBall />
                            <div className="">
                                <h3 className="font-sans font-bold lg:text-[30px] text-[18px]">Immediate Deployment</h3>
                                <p className=" font-sans font-bokld lg:text-[18px] text-[14px] text-[#71717A] lg:pr-[100px]">Et vero eos et accusamus et iusto odio dignissimos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Group