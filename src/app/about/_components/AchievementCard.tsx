"use client";

import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { useState } from "react";


const AchievementCard=({data,index}:{data:{counts:string,desc:string},index:number})=>{

    const [isHovered,setIsHovered]=useState(false)

    return(
        <>
            <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className="p-4 w-full h-[40vh] rounded-md border border-grey hover:border-red hover:bg-red hover:text-[#FAFAFA] flex items-center justify-center">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center">
                    <div className={`rounded-full border-8 ${isHovered ? 'border-[rgba(255,255,255,0.5)]':'border-grey'}  flex items-center justify-center`}>
                        <div className="p-2 rounded-full bg-[#000000] text-[#FAFAFA]">
                            <IoHomeOutline className={`w-10 h-10 ${index!==0 && 'hidden'}`} />
                            <HiOutlineCurrencyDollar className={`w-10 h-10 ${index!==1 && 'hidden'}`} />
                            <FaPeopleGroup className={`w-10 h-10 ${index!==2 && 'hidden'}`} />
                            <FaSackDollar className={`w-10 h-10 ${index!==3 && 'hidden'}`} />
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl">{data.counts}</div>
                        <div className=" text-base sm:text-sm lg:text-base">{data.desc}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AchievementCard;