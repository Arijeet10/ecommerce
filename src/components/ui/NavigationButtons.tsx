"use client";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const NavigationButtons = ({handleLeftButtonClick,handleRightButtonClick}:{handleLeftButtonClick:()=>void,handleRightButtonClick:()=>void}) => {



  return (
    <>
      <div className="flex items-center justify-between sm:gap-2">
        <div onClick={()=>handleLeftButtonClick()}  className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#DB4444] hover:text-[#F5F5F5]">
          <FaArrowLeft className="w-5 h-5 " />
        </div>
        <div onClick={()=>handleRightButtonClick()} className=" w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#DB4444] hover:text-[#F5F5F5]">
          <FaArrowRight className="w-5 h-5 " />
        </div>
      </div>
    </>
  );
};

export default NavigationButtons;
