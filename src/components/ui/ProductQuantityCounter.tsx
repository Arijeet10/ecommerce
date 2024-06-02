"use client";

import { CartContext } from "@/context/CartContextProvider";
import { UserContext } from "@/context/UserContextProvider";
import { CartProductTypes } from "@/types/types";
import { addToCartApiCall, removeFromCartApiCall } from "@/utils/request";
import { useSession } from "next-auth/react";
import { useCallback, useContext } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const ProductQuantityCounter = ({
  productData,
}: {
  productData: CartProductTypes;
}) => {

  const {status}=useSession()
  const {userData,fetchUserData}=useContext(UserContext)
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleProductCountDecrease = async() => {
    if(status=="authenticated"){
      await removeFromCartApiCall(productData.product)
      fetchUserData();
    }else{
      setCartItems((prevItems) => {
        const existingProductIndex = prevItems.findIndex(
          (item) => item.product.id === productData.product.id
        );
        if (existingProductIndex >= 0) {
          const updatedItems = [...prevItems];
          const updatedProduct = {...updatedItems[existingProductIndex]};
          if (updatedProduct.productCount > 1) {
            updatedProduct.productCount = updatedProduct.productCount - 1;
            updatedItems[existingProductIndex] = updatedProduct;
          } else {
            updatedItems.splice(existingProductIndex, 1);
          }
          return updatedItems;
        }else{
          return prevItems;
        }
      });
    }

  };

  const handleProductCountIncrease = async() => {
    if(status=="authenticated"){
      await addToCartApiCall(productData.product)
      fetchUserData()
    }else{
      setCartItems((prevItems) => {
        const existingProductIndex = prevItems.findIndex(
          (item) => item.product.id === productData.product.id
        );
  
        if (existingProductIndex >= 0) {
          const updatedItems = [...prevItems];
          const updatedProduct = { ...updatedItems[existingProductIndex] };
          updatedProduct.productCount += 1;
          updatedItems[existingProductIndex] = updatedProduct;
          return updatedItems;
        } else {
          const newProduct = { product: productData.product, productCount: 1 };
          return [...prevItems, newProduct];
        }
      });
    }
  };

  return (
    <>
      <div className="p-2 border rounded-md border-grey flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div>{productData?.productCount}</div>
          <div className="flex flex-col">
            <div onClick={(e) => {e.stopPropagation();handleProductCountIncrease();}}>
              <FaAngleUp />
            </div>
            <div onClick={(e) => {e.stopPropagation();handleProductCountDecrease();}}>
              <FaAngleDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductQuantityCounter;
