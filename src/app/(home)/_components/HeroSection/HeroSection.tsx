"use client";

import {getApiData} from "@/utils/request"
import { useEffect, useState } from "react";
import HeroProduct from "./HeroProduct";
import LoadingHeroSection from "./LoadingHeroSection";

const HeroSection = () => {


  const [heroProducts, setHeroProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(1);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    const interval=setInterval(()=>{
        setActiveProduct(prevActiveProduct=>prevActiveProduct>4?1:prevActiveProduct+1)
    },3000)

    return ()=>clearInterval(interval)
  }, [])
  

  const fetchHeroProducts = async () => {
    try {
      setLoading(true)
      const data = await getApiData(`${process.env.NEXT_PUBLIC_FAKE_STORE_API}?limit=5`);
      //console.log(data);
      setHeroProducts(data);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchHeroProducts();
  }, []);

  if(loading){
    return <LoadingHeroSection />
  }

  return (
    <>
      <div>
        <div className="relative h-[50vh] flex flex-col gap-[2rem]">
          <>
            {heroProducts &&
              heroProducts.map((product, index) => {
                return (
                  <HeroProduct
                    key={index}
                    product={product}
                    activeProduct={activeProduct}
                  />
                );
              })}
          </>
          <div className="absolute left-2/4 translate-x-[-50%] bottom-2 z-20 flex items-center gap-2">
            {heroProducts &&
              heroProducts.map((product, index) => {
                return (
                  <div key={index} className=" bg-slate-500 rounded-full">
                    <div
                      onClick={() => setActiveProduct(index + 1)}
                      className={`w-5 h-5 border ${
                        activeProduct == index + 1
                          ? "border-slate-200 bg-red"
                          : "border-transparent "
                      } hover:border-slate-200 hover:bg-red-700 rounded-full`}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
