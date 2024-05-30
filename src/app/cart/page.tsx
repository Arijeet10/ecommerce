"use client";

import CartTotal from "@/components/CartTotal";
import ProductCartList from "@/components/ProductCartList";
import Button from "@/components/ui/Button";
import { CartContext } from "@/context/CartContextProvider";
import { useContext } from "react";

const Cart = () => {


  const { cartItems } = useContext(CartContext);

  const subTotalAmt=cartItems.length>0 && cartItems.reduce((acc,next)=>{
    return acc+(next.product.price*next.productCount)
  },0) || 0

   

  return (
    <>
    <div className="px-4 py-4">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <div className="border shadow-sm flex flex-col gap-10">
            <div className="py-2 grid grid-cols-4 gap-2">
              <div className=" flex items-center justify-center">
                <div>Product</div>
              </div>
              <div className=" flex items-center justify-center">
                <div>
                  Price
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <div>
                  Quantity
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <div>
                  Subtotal
                </div>
              </div>
            </div>
            <div className="h-[50vh] overflow-scroll hide-default-scrollbar flex flex-col gap-10">
              {cartItems.length>0 ?
                cartItems.map((item, i) => {
                  return (
                    <ProductCartList key={i} productData={item} />
                  );
                }):(
                  <div className=" flex items-center justify-center">
                    <div className="text-2xl">No Products in Cart 🥲</div>
                  </div>
                )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Button color="#FAFAFA" text="Return To Shop" borderColor="#000000" textColor="#000000" />
            </div>
            <div>
            <Button color="#FAFAFA" text="Update Cart" borderColor="#000000" textColor="#000000" />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="px-3 py-3 border border-[#000000] rounded-md">
              <input 
                type="text"
                placeholder="Coupon Code"
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
            <div>
                <Button text="Apply Coupon" color="#DB4444" />
            </div>
          </div>
          <div className="w-[40vw]">
            <CartTotal subTotalAmt={subTotalAmt} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cart;
