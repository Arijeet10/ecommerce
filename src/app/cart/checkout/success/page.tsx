"use client";

import Button from "@/components/ui/Button";
import { OrderContext } from "@/context/OrderProvider";
import Link from "next/link";
import { useContext } from "react";


const CheckoutSuccess = () => {


  const {order}=useContext(OrderContext)

  return (
    <>
      {/* <Toaster /> */}
      <div className="px-4 py-4 w-full h-[100vh] flex items-center justify-center">
        <div className="flex flex-col gap-8">
          <div className=" max-h-[60vh] flex flex-col gap-2 overflow-scroll hide-default-scrollbar">
            {order?.orderData && order.orderData.map((item,i)=>{
              return(
                <div key={i} className=" flex items-center gap-6">
                <div className="w-10 h-10">
                  <img 
                    src={item.product.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="max-w-[250px] overflow-hidden text-ellipsis text-nowrap">x{item.productCount} {item.product.title}</div>
                  <div>${item?.product.price * item?.productCount}</div>
                </div>
              </div>
              )
            })}
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
              Products Shipped
            </div>
            <div>
              Your payment is completed and order is successfull. You may go to
              home page.
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/">
              <Button text="Back to home page" color="#DB4444" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutSuccess;
