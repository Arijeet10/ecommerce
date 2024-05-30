"use client";

import { ProductTypes } from "@/types/types";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";


const HeroProduct = ({ product,activeProduct }:{product:ProductTypes,activeProduct:number}) => {
  
  const router=useRouter()


  return (
    <>
      <div onClick={()=>router.push(`${product.id}`)} className={` w-full h-full inset-0 z-10 p-4  bg-[#000000] text-[#FAFAFA] flex items-center justify-between ${activeProduct==product.id?'absolute':'hidden'}`}>
        <div className="w-full h-full flex flex-col gap-2 justify-center">
          <div className="text-xs sm:text-sm">{product.category}</div>
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl">{product.title}</div>
          <div className="flex items-center gap-1">
            <div className="underline">Shop Now</div>
            <FaArrowRight />
          </div>
        </div>
        <div className="relative w-full h-full ">
          <img src={`${product.image}`} alt="" className="  w-full h-full object-contain bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-[#000000]" />
        </div>
        
      </div>

    </>
  );
};

export default HeroProduct;
