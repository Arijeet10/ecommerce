"use client";

import { useContext } from "react";
import Divider from "./ui/Divider";
import { CartContext } from "@/context/CartContextProvider";
import { UserContext } from "@/context/UserContextProvider";
import { useSession } from "next-auth/react";

const TotalCartProductsAmount = () => {

  
  // const { status } = useSession();
  const { userData } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  let subTotalAmt;
  if (userData.email!=="") {
    subTotalAmt =
      (userData.cart?.length > 0 &&
        userData.cart.reduce((acc, next) => {
          return acc + next.product.price * next.productCount;
        }, 0)) ||
      0;
  } else {
    subTotalAmt =
      (cartItems?.length > 0 &&
        cartItems.reduce((acc, next) => {
          return acc + next.product.price * next.productCount;
        }, 0)) ||
      0;
  }

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
