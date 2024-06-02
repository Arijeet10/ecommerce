"use client";

import { useRef } from "react";
import CategoryCard from "./CategoryCard";
import Divider from "../../../../components/ui/Divider";
import NavigationButtons from "../../../../components/ui/NavigationButtons";
import SectionHeading from "../../../../components/ui/SectionHeading";

const categoriesArray=['Phones','Computers','SmartWatch','Camera','HeadPhones','Gaming',"Men's clothing","Women's clothing","jewellery","Electronics"]

const CategoriesSection=()=>{

    const categoriesRef=useRef<HTMLDivElement>(null)

    const handleLeftButtonClick=()=>{
        categoriesRef.current?.scrollBy({ left: -100, behavior: 'smooth' })

    }

    const handleRightButtonClick=()=>{
        categoriesRef.current?.scrollBy({ left: 100, behavior: 'smooth' })
    }

    return(
        <>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col sm:flex-row justify-between ">
                    <div>
                        <SectionHeading sectionCategory="Categories" headingTitle="Browse By Category" />
                    </div>
                    <div className="sm:flex sm:items-end">
                        <NavigationButtons handleLeftButtonClick={handleLeftButtonClick} handleRightButtonClick={handleRightButtonClick} />
                    </div>
                </div>
                <div ref={categoriesRef} className="grid grid-flow-col gap-2 overflow-scroll hide-default-scrollbar">
                    {categoriesArray.map((category,index)=>{
                        return(
                            <CategoryCard key={index} category={category} />
                        )
                    })}
                </div>
                <Divider />
            </div>
        </>
    )
}

export default CategoriesSection;