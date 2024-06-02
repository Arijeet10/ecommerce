"use client";

import FlashSaleTimer from "../../../../components/ui/FlashSaleTimer";
import SectionHeading from "../../../../components/ui/SectionHeading";
import NavigationButtons from "../../../../components/ui/NavigationButtons";
import SaleProducts from "./SaleProducts";
import Button from "../../../../components/ui/Button";
import { useRef } from "react";
import Divider from "../../../../components/ui/Divider";

const FlashSales = () => {
  const saleProductsRef = useRef<HTMLDivElement>(null);

  const handleLeftButtonClick = () => {
    saleProductsRef.current?.scrollBy({ left: -100, behavior: "smooth" });
  };

  const handleRightButtonClick = () => {
    saleProductsRef.current?.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col sm:flex-row justify-between gap-0 sm:gap-6 md:gap-16">
            <SectionHeading
              sectionCategory="Today's"
              headingTitle="Flash Sales"
            />
            <div className="flex items-end">
              <FlashSaleTimer />
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="sm:flex sm:items-end">
            <NavigationButtons
              handleLeftButtonClick={handleLeftButtonClick}
              handleRightButtonClick={handleRightButtonClick}
            />
          </div>
        </div>
        {/* Main */}
        <div className="">
          <SaleProducts saleProductsRef={saleProductsRef} />
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-[200px]">
            <Button text="View All Products" color="#DB4444" />
          </div>
        </div>
        {/* Footer */}
        <Divider />
      </div>
    </>
  );
};

export default FlashSales;
