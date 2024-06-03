"use client";

import { CheckoutFormTypes } from "@/types/types";
import { SetStateAction } from "react";

const PaymentOptions = ({formData,setFormData}:{formData:CheckoutFormTypes,setFormData:React.Dispatch<SetStateAction<CheckoutFormTypes>>}) => {
  return (
    <>
      <div  className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <input type="radio" name="payment" className="accent-[#000000]" onChange={()=>setFormData(prev=>({...prev,paymentOption:"bank"}))} />
            </div>
            <div>Bank</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <img src="/bikash.svg" className="object-contain" />
            </div>
            <div>
              <img src="/visa.svg" className="object-contain" />
            </div>
            <div>
              <img src="/mastercard.svg" className="object-contain" />
            </div>
            <div>
              <img src="/bengali.svg" className="object-contain" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <input type="radio" name="payment" className="accent-[#000000]" onChange={()=>setFormData(prev=>({...prev,paymentOption:"cod"}))} />
          </div>
          <div>Cash on Delivery</div>
        </div>
      </div>
    </>
  );
};
export default PaymentOptions;
