"use client";

import { ProductTypes } from "@/types/types";
import DeliveryInfo from "@/app/product/_components/DeliveryInfo";
import Button from "@/components/ui/Button";
import ColorCircles from "@/components/ui/ColorCircles";
import Divider from "@/components/ui/Divider";
import IncreaseDecreaseProductBuyCountButton from "@/components/ui/IncreaseDecreaseProductBuyCountButton";
import Ratings from "@/components/ui/Ratings";
import { FiHeart } from "react-icons/fi";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "@/context/UserContextProvider";
import { CartContext } from "@/context/CartContextProvider";
import { addToCartApiCall } from "@/utils/request";
import { useRouter } from "next/navigation";


const randomColors = [
    "#FF5733", 
    "#33FF57", 
    "#3357FF",
    "#FF33A1", 
    "#FFD700", 
    "#00FF00", 
  ];

const ProductDetails=({productData}:{productData:ProductTypes})=>{

  const router=useRouter()
  const {userData,fetchUserData}=useContext(UserContext)
  const {setCartItems}=useContext(CartContext)

  const handleBuyNow=async()=>{
    if (userData.email!=="") {
      await addToCartApiCall(productData);
      fetchUserData()
      router.push("/cart")
    } else {
      setCartItems((prevItems) => {
        const existingProductIndex = prevItems.findIndex(
          (item) => item.product.id === productData.id
        );

        if (existingProductIndex >= 0) {
          const updatedItems = [...prevItems];
          const updatedProduct = { ...updatedItems[existingProductIndex] };
          updatedProduct.productCount += 1;
          updatedItems[existingProductIndex] = updatedProduct;
          return updatedItems;
        } else {
          const newProduct = { product: productData, productCount: 1 };
          return [...prevItems, newProduct];
        }
      });
    }
  }

    return(
        <>
      <div className=" w-full grid sm:grid-cols-12 max-w-[90%] sm:max-w-auto ">
        <div className="sm:col-span-6 md:col-span-7 lg:col-span-8  flex justify-between sm:justify-start sm:gap-4 md:gap-8 lg:gap-20 ">
          <div className="flex flex-col gap-2">
            <div className="max-h-[25%] w-[10vw] h-full p-2 rounded-md border  shadow-md flex items-center justify-center">
              <Image src={`${productData?.image}`} alt="" className="" width={100} height={100} />
            </div>
            <div className="max-h-[25%] w-[10vw] h-full p-2 rounded-md border  shadow-md flex items-center justify-center">
              <Image src={`${productData?.image}`} alt="" className="" width={100} height={100} />
            </div>
            <div className="max-h-[25%] w-[10vw] h-full p-2 rounded-md border  shadow-md flex items-center justify-center">
              <Image src={`${productData?.image}`} alt="" className="" width={100} height={100} />
            </div>
            <div className="max-h-[25%] w-[10vw] h-full p-2 rounded-md border  shadow-md flex items-center justify-center">
              <Image src={`${productData?.image}`} alt="" className="" width={100} height={100} />
            </div>
          </div>
          <div className="sm:max-w-[500px] w-full p-2 rounded-md border shadow-md flex items-center justify-center">
            <Image
              src={`${productData?.image}`}
              alt=""
              width={1000} height={1000}
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
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
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
                <div onClick={()=>handleBuyNow()}>
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
    )
}

export default ProductDetails;