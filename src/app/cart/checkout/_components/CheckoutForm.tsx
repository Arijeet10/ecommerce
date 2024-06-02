"use client";

import { useContext } from "react";
import Button from "../../../../components/ui/Button";
import CheckoutFormInput from "./CheckoutFormInput";
import { CartContext } from "@/context/CartContextProvider";
import CheckoutProductsDetails from "@/app/cart/checkout/_components/CheckoutProductsDetails";
import TotalCartProductsAmount from "../../../../components/TotalCartProductsAmount";
import ApplyCoupon from "../../_components/ApplyCoupon";
import PaymentOptions from "@/app/cart/checkout/_components/PaymentOptions";

const CheckoutForm = () => {


  const { cartItems } = useContext(CartContext);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className=" ">
          <CheckoutFormInput />
        </div>
        <div className="  flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            {cartItems.map((item, i) => {
              return <CheckoutProductsDetails key={i} product={item} />;
            })}
          </div>
          <div>
            <TotalCartProductsAmount />
          </div>
          <div>
            <PaymentOptions />
          </div>
          <div className="flex items-center gap-4">
            <div>
              <input type="radio" className="accent-[#000000]" />
            </div>
            <div>Cash on Delivery</div>
          </div>
          <div>
            <ApplyCoupon />
          </div>
          <div className="flex justify-start">
            <div className="max-w-[200px]">
              <Button text="Place Order" color="#DB4444" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
