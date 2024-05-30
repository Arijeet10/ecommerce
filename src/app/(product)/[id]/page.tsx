"use client";

import DeliveryInfo from "@/components/DeliveryInfo";
import Button from "@/components/ui/Button";
import ColorCircles from "@/components/ui/ColorCircles";
import Divider from "@/components/ui/Divider";
import IncreaseDecreaseProductBuyCountButton from "@/components/ui/IncreaseDecreaseProductBuyCountButton";
import Ratings from "@/components/ui/Ratings";
import { ProductTypes } from "@/types/types";
import { getApiData } from "@/utils/request";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";

const randomColors = [
  "#FF5733", 
  "#33FF57", 
  "#3357FF",
  "#FF33A1", 
  "#FFD700", 
  "#00FF00", 
  "#FF00FF", 
  "#00FFFF", 
  "#FFA500",
  "#800080"  
];
const Product = () => {
  const { id } = useParams();
  //console.log(id);

  const [productData, setProductData] = useState<ProductTypes>({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {
      count: 0,
      rate: 0,
    },
    title: "",
  });

  const fetchProductData = async () => {
    try {
      const data = await getApiData(
        `${process.env.NEXT_PUBLIC_FAKE_STORE_API}/${id}`
      );
      //console.log(data);
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div className="p-4 w-full grid sm:grid-cols-12 ">
        <div className=" sm:col-span-6 md:col-span-7 lg:col-span-8  flex justify-between sm:justify-start sm:gap-4 md:gap-8 lg:gap-20 ">
          <div className="flex flex-col gap-2">
            <div className="max-h-[25%] w-[10vw] h-full p-2 rounded-md border  shadow-md flex items-center justify-center">
              <img src={`${productData?.image}`} alt="" className="" />
            </div>
            <div className="max-h-[25%] w-[10vw] h-full p-2 rounded-md border  shadow-md flex items-center justify-center">
              <img src={`${productData?.image}`} alt="" className="" />
            </div>
            <div className="max-h-[25%] w-[10vw] h-full p-2 rounded-md border  shadow-md flex items-center justify-center">
              <img src={`${productData?.image}`} alt="" className="" />
            </div>
            <div className="max-h-[25%] w-[10vw] h-full p-2 rounded-md border  shadow-md flex items-center justify-center">
              <img src={`${productData?.image}`} alt="" className="" />
            </div>
          </div>
          <div className="max-w-[500px] w-full p-2 rounded-md border shadow-md flex items-center justify-center">
            <img
              src={`${productData?.image}`}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className=" sm:col-span-6 md:col-span-5  lg:col-span-4 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="text-2xl">{productData?.title}</div>
            <div className="flex items-center">
              <Ratings rating={productData?.rating?.rate} />
              <div className="text-[#7D8184]">
                ({productData?.rating?.count} Reviews)
              </div>
            </div>
            <div className="text-2xl">${productData?.price}</div>
            <div className="text-xs">{productData?.description}</div>
          </div>
          <Divider />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div>Colors:</div>
                <div className="flex items-center gap-2">
                  {randomColors.map((color,i)=>{
                    return(<ColorCircles key={i} color={color} />
                  )
                  })}
                </div>
              </div>
              <div>
                <div>Size:</div>
                <div></div>
              </div>
              <div className=" flex gap-4">
                <div className="w-[100px]">
                  <IncreaseDecreaseProductBuyCountButton product={productData} />
                </div>
                <div>
                  <Button text="Buy Now" color="#DB4444" />
                </div>
                <div className="px-3 py-3 border rounded-md flex items-center justify-center">
                  <FiHeart className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div>
              <DeliveryInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
