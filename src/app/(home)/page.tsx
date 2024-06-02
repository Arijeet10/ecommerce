

import HeroSection from "@/app/(home)/_components/HeroSection/HeroSection";
import CategoriesSideMenus from "@/app/(home)/_components/Categories/CategoriesSideMenus";
import FlashSales from "@/app/(home)/_components/Flash Sales/FlashSales";
import CategoriesSection from "@/app/(home)/_components/Categories/CategoriesSection";
import BestSellingProductsSection from "@/app/(home)/_components/Best Selling/BestSellingProductsSection";
import ProductBanner from "./_components/ProductBanner";
import { services } from "@/utils/constants";
import ServiceCard from "@/components/ServiceCard";

const Home = () => {


  return (
    <>
      <div className="px-4">
        <div className="py-4 w-full sm:flex sm:gap-2">
          <div className=" hidden sm:block w-[20vw] ">
            <CategoriesSideMenus />
          </div>
          <div className="w-full">
            <HeroSection />
          </div>
        </div>
        <div className="py-4">
          <FlashSales />
        </div>
        <div className="py-4">
          <CategoriesSection />
        </div>
        <div className="py-4">
          <BestSellingProductsSection />
        </div>
        <div className="py-4">
          <ProductBanner />
        </div>
        <div className="py-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          {services.map((data, index) => {
            return <ServiceCard key={index} index={index} service={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;