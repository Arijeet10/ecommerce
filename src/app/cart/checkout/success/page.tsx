// "use client";

import Button from "@/components/ui/Button";
import Link from "next/link";


const CheckoutSuccess = () => {

//   let data;

//   if (window && window.sessionStorage) {
//     // do your stuff with sessionStorage
//     data=sessionStorage.getItem('orders')
// }

//   const {orderData,orderID}=JSON.parse(data||"")
//   console.log("Orders:",orderData)
//   console.log("Order ID:",orderID)

  

  return (
    <>
      {/* <Toaster /> */}
      <div className="px-4 py-4 w-full h-[100vh] flex items-center justify-center">
        <div className="flex flex-col gap-8">
          {/* <div className="font-semibold">Order ID: <span className="text-[#3030303] font-medium">{orderID}</span></div>
          <div className=" max-h-[30vh] flex flex-col gap-2 overflow-scroll hide-default-scrollbar">
            {orderData.length>0 && orderData.map((item:any,i:number)=>{
              return(
                <div key={i} className=" flex items-center gap-6">
                <div className="w-10 h-10">
                  <img 
                    src={item.price_data.product_data.images}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="max-w-[250px] overflow-hidden text-ellipsis text-nowrap">x{item.quantity} {item.price_data.product_data.name}</div>
                  <div>${item.price_data.unit_amount/100}</div>
                </div>
              </div>
              )
            })}
          </div> */}
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
