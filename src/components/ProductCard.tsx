"use client";

import { FiHeart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import Ratings from "./ui/Ratings";
import { useContext, useState } from "react";
import { ProductTypes } from "@/types/types";
import { useRouter } from "next/navigation";
import { WishlistContext } from "@/context/WishlistContextProvider";

const ProductCard = ({
  product,
  discount,
}: {
  product: ProductTypes;
  discount?: number;
}) => {

  const { wishlistItems, setWishlistItems } = useContext(WishlistContext);

  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();


  const handleWishlistClick = () => {
    if (wishlistItems.includes(product)) {
      setWishlistItems((prev) => {
        const updatedWishlist = [...prev];
        const productIndexInWishlist = updatedWishlist.findIndex(
          (item) => item.id == product.id
        );
        updatedWishlist.splice(productIndexInWishlist, 1);
        return updatedWishlist;
      });
    } else {
      setWishlistItems((prev) => [...prev, product]);
    }
  };

  return (
    <>
      <div className="max-w-[90%] w-[100vw] sm:w-[40vw] md:w-[25vw]  lg:w-[20vw] h-[50vh] bg-[#F5F5F5] shadow-sm rounded-md">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" relative rounded-md w-full h-[70%]"
        >
          <div
            onClick={() => router.push(`/${product.id}`)}
            className="w-full h-full rounded-md cursor-pointer"
          >
            <img
              src={`${product.image}`}
              alt=""
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div
            className={`${
              discount ? "absolute" : "hidden"
            } top-2 left-2 px-4 py-1 rounded-md bg-[#DB4444] hover:bg-[#000000] text-[#FAFAFA]`}
          >
            <div>{discount}%</div>
          </div>
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <div
              onClick={() => handleWishlistClick()}
              className="w-8 h-8 rounded-full bg-[#FFFFFF] flex items-center justify-center cursor-pointer"
            >
              {wishlistItems.includes(product) ? (
                <>
                  <FaHeart className="w-5 h-5 text-[#DB4444]" />
                </>
              ) : (
                <>
                  <FiHeart className="w-5 h-5 " />
                </>
              )}
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] flex items-center justify-center">
              <FiEye className="w-5 h-5" />
            </div>
          </div>
          <div
            className={`w-full p-2 ${
              isHovered ? "absolute" : "hidden"
            }  bottom-0 bg-[#000000] text-[#FFFFFF] rounded-b-md`}
          >
            <button className="w-full">Add to Cart</button>
          </div>
        </div>
        <div className="w-full h-[30%] flex items-end justify-start">
          <div className="p-2">
            <div
              onClick={() => router.push(`/${product.id}`)}
              className="w-[16vw] overflow-hidden text-ellipsis text-nowrap font-medium cursor-pointer"
            >
              {product.title}
            </div>
            <div className="text-[#DB4444] font-medium">${product.price}</div>
            <div className="flex items-center">
              <Ratings rating={product.rating?.rate} />
              <div className="text-[#7D8184] font-semibold">
                ({product.rating?.count})
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
