"use client";

import { FiHeart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Ratings from "./ui/Ratings";
import { useContext, useState } from "react";
import { ProductTypes } from "@/types/types";
import { useRouter } from "next/navigation";
import { WishlistContext } from "@/context/WishlistContextProvider";
import { CartContext } from "@/context/CartContextProvider";
import IncreaseDecreaseProductBuyCountButton from "./ui/IncreaseDecreaseProductBuyCountButton";
import Image from "next/image";
import { UserContext } from "@/context/UserContextProvider";
import { useSession } from "next-auth/react";
import { addToCartApiCall, wishlistUpdateApiCall } from "@/utils/request";

const ProductCard = ({
  product,
  discount,
}: {
  product: ProductTypes;
  discount?: number;
}) => {
  const { userData,fetchUserData } = useContext(UserContext);
  const { status } = useSession();
  const { wishlistItems, setWishlistItems } = useContext(WishlistContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();


  const handleAddToCartClick =async () => {
    if (status == "authenticated") {
      await addToCartApiCall(product);
      fetchUserData()
    } else {
      setCartItems((prevItems) => {
        const existingProductIndex = prevItems.findIndex(
          (item) => item.product.id === product.id
        );

        if (existingProductIndex >= 0) {
          const updatedItems = [...prevItems];
          const updatedProduct = { ...updatedItems[existingProductIndex] };
          updatedProduct.productCount += 1;
          updatedItems[existingProductIndex] = updatedProduct;
          return updatedItems;
        } else {
          const newProduct = { product: product, productCount: 1 };
          return [...prevItems, newProduct];
        }
      });
    }
  };

  const handleWishlistClick = async() => {
    if (status == "authenticated") {
      await wishlistUpdateApiCall(product);
      fetchUserData();
    } else {
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
    }
  };

  return (
    <>
      <div className="max-w-[90%] sm:max-w-auto w-[100vw] sm:w-[40vw] md:w-[25vw]  lg:w-[20vw] h-[50vh] bg-[#F5F5F5] shadow-md rounded-md">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" relative rounded-md w-full h-[70%]"
        >
          <div
            onClick={() => router.push(`/product/${product.id}`)}
            className="w-full h-full rounded-md cursor-pointer"
          >
            <Image
              src={`${product.image}`}
              alt=""
              width={100}
              height={100}
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
              {status == "authenticated" ? (
                userData.wishlist.find(
                  (wishlistItem) => wishlistItem.id == product.id
                ) ? (
                  <>
                    <FaHeart className="w-5 h-5 text-[#DB4444]" />
                  </>
                ) : (
                  <>
                    <FiHeart className="w-5 h-5 " />
                  </>
                )
              ) : wishlistItems.find(
                  (wishlistItem) => wishlistItem.id == product.id
                ) ? (
                <>
                  <FaHeart className="w-5 h-5 text-[#DB4444]" />
                </>
              ) : (
                <>
                  <FiHeart className="w-5 h-5 " />
                </>
              )}

              {/* {
              userData.wishlist.find(
                (wishlistItem) => wishlistItem.id == product.id
              ) ? (
                <>
                  <FaHeart className="w-5 h-5 text-[#DB4444]" />
                </>
              ) : (
                <>
                  <FiHeart className="w-5 h-5 " />
                </>
              )
              } */}

              {/* {
              wishlistItems.find(
                (wishlistItem) => wishlistItem.id == product.id
              ) ? (
                <>
                  <FaHeart className="w-5 h-5 text-[#DB4444]" />
                </>
              ) : (
                <>
                  <FiHeart className="w-5 h-5 " />
                </>
              )
              } */}
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] flex items-center justify-center">
              <FiEye className="w-5 h-5" />
            </div>
          </div>
          {status=="authenticated"?(
            userData.cart.find(item=>item.product.id==product.id)?(
              <div className="absolute bottom-0 w-full bg-[#F5F5F5]  rounded-md">
                <IncreaseDecreaseProductBuyCountButton product={product} />
              </div>
            ):(
              <div
              onClick={() => handleAddToCartClick()}
              className={`w-full p-2 ${
                isHovered ? "absolute" : "hidden"
              }  bottom-0 bg-[#000000] text-[#FFFFFF] rounded-b-md`}
            >
              <button className="w-full">Add to Cart</button>
            </div>
            )
          ):(
            cartItems.find((item) => item.product.id == product.id) ? (
              <div className="absolute bottom-0 w-full bg-[#F5F5F5]  rounded-md">
                <IncreaseDecreaseProductBuyCountButton product={product} />
              </div>
            ) : (
              <div
                onClick={() => handleAddToCartClick()}
                className={`w-full p-2 ${
                  isHovered ? "absolute" : "hidden"
                }  bottom-0 bg-[#000000] text-[#FFFFFF] rounded-b-md`}
              >
                <button className="w-full">Add to Cart</button>
              </div>
            )
          )}
        </div>
        <div className="w-full h-[30%] flex items-end justify-start">
          <div className="p-2">
            <div
              onClick={() => router.push(`/product/${product.id}`)}
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
