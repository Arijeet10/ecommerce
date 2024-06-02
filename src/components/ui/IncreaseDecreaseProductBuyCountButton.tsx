"use client";

import { CartContext } from "@/context/CartContextProvider";
import { ProductTypes } from "@/types/types";
import { useContext } from "react";
import { IoAdd } from "react-icons/io5";
import { GoDash } from "react-icons/go";
import { useSession } from "next-auth/react";
import { UserContext } from "@/context/UserContextProvider";
import { addToCartApiCall, removeFromCartApiCall } from "@/utils/request";

const IncreaseDecreaseProductBuyCountButton = ({
  product,
}: {
  product: ProductTypes;
}) => {
  const { status } = useSession();

  const { userData,fetchUserData } = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleDecreaseProductCount = async() => {
    if (status == "authenticated") {
      await removeFromCartApiCall(product);
      fetchUserData();
    } else {
      setCartItems((prevItems) => {
        const existingProductIndex = prevItems.findIndex(
          (item) => item.product.id === product.id
        );
        if (existingProductIndex >= 0) {
          const updatedItems = [...prevItems];
          const updatedProduct = { ...updatedItems[existingProductIndex] };
          if (updatedProduct.productCount > 1) {
            updatedProduct.productCount = updatedProduct.productCount - 1;
            updatedItems[existingProductIndex] = updatedProduct;
          } else {
            updatedItems.splice(existingProductIndex, 1);
          }
          return updatedItems;
        } else {
          return prevItems;
        }
      });
    }
  };

  const handleIncreaseProductCount = async() => {
    if (status == "authenticated") {
      await addToCartApiCall(product);
      fetchUserData();
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

  return (
    <>
      <div>
        <div className="grid grid-cols-12">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDecreaseProductCount();
            }}
            className="py-3 col-span-3 border rounded-l-md hover:bg-[#DB4444] hover:border-[#DB4444] flex items-center justify-center"
          >
            <GoDash />
          </button>
          <div className="py-3 col-span-6 border-y flex items-center justify-center">
            <div className="font-medium">
              {status == "authenticated"
                ? userData.cart.find((item) => item.product.id === product.id)
                    ?.productCount ?? 0
                : cartItems.find((item) => item.product.id === product.id)
                    ?.productCount ?? 0}
              {/* {
                cartItems.find((item) => item.product.id === product.id)
                ?.productCount ?? 0
              } */}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleIncreaseProductCount();
            }}
            className="py-3 col-span-3 border rounded-r-md hover:bg-[#DB4444] hover:border-[#DB4444] flex items-center justify-center"
          >
            <IoAdd />
          </button>
        </div>
      </div>
    </>
  );
};

export default IncreaseDecreaseProductBuyCountButton;
