// "use client";

import Button from "@/components/ui/Button";
// import { createOrdersApiCall } from "@/utils/request";
import Link from "next/link";
// import { useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";

const CheckoutSuccess = () => {
  // const handleShipment = async () => {
  //   try {
  //     const res = await createOrdersApiCall();
  //     console.log(res.newOrder);
  //     toast.success(res.message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   handleShipment();
  // }, []);

  return (
    <>
      {/* <Toaster /> */}
      <div className="px-4 py-4 w-full h-[100vh] flex items-center justify-center">
        <div className="flex flex-col gap-8">
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
