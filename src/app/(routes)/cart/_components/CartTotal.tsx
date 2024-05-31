"use client";

import { useRouter } from "next/navigation";
import Button from "../../../../components/ui/Button";
import { useContext } from "react";
import { CartContext } from "@/context/CartContextProvider";
import TotalCartProductsAmount from "@/components/TotalCartProductsAmount";

const CartTotal = () => {

  
  const router = useRouter();

  const { cartItems } = useContext(CartContext);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      router.push("/checkout");
    } else {
      alert("Add items to cart for checkout! 😡");
    }
  };

  return (
    <>
      <div className="p-4 border border-[#000000] rounded-md flex flex-col gap-4">
        <div className="font-medium text-xl">Cart Total</div>
        <TotalCartProductsAmount />
        <div className="flex items-center justify-center">
          <div onClick={() => handleCheckout()} className="max-w-[200px]">
            <Button text="Process to Checkout" color="#DB4444" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
