"use client";

import { useContext } from "react";
import Divider from "./ui/Divider";
import { CartContext } from "@/context/CartContextProvider";

const TotalCartProductsAmount = () => {

  
  const { cartItems } = useContext(CartContext);

  const subTotalAmt =
    (cartItems?.length > 0 &&
      cartItems.reduce((acc, next) => {
        return acc + next.product.price * next.productCount;
      }, 0)) ||
    0;

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>Subtotal:</div>
            <div>${subTotalAmt.toFixed(2)}</div>
          </div>
          <div>
            <Divider />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>Shipping:</div>
            <div>Free</div>
          </div>
          <div>
            <Divider />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>Total:</div>
            <div>${subTotalAmt.toFixed(2)}</div>
          </div>
          <div>
            <Divider />
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalCartProductsAmount;
