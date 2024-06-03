"use client";

import { ProductTypes } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";


const HeroProduct = ({ product,activeProduct }:{product:ProductTypes,activeProduct:number}) => {
  
  const router=useRouter()


  return (
    <>
      <div  className={` w-full h-full inset-0 z-10 px-2 sm:px-4 md:px-6 lg:px-8 py-4  bg-[#000000] text-[#FAFAFA] flex items-center justify-between ${activeProduct==product.id?'absolute':'hidden'}`}>
        <div className="w-full h-full flex flex-col gap-2 justify-center">
          <div className="text-xs sm:text-sm">{product.category}</div>
          <div className="text-base sm:text-xl md:text-3xl lg:text-4xl">{product.title}</div>
          <div className="flex items-center gap-1">
            <div onClick={()=>router.push(`/product/${product.id}`)} className="underline cursor-pointer text-lg">Shop Now</div>
            <FaArrowRight />
          </div>
        </div>
        <div className="relative w-full h-full ">
          <Image src={`${product.image}`} alt="" width={500} height={500} className="  w-full h-full object-contain bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-[#000000]" />
        </div>
      </div>
    </>
  );
};

export default HeroProduct;
