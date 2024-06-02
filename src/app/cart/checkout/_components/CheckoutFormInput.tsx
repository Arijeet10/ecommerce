"use client";

import { useState } from "react";

const CheckoutFormInput = () => {

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    companyName:"",
    streetAddress:"",
    apartment:"",
    city:"",
    phoneNumber:""
  })

  return (
    <>
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex flex-col gap-8 text-grey">
          <div className="flex flex-col gap-2">
            <div>
              First Name<span className="text-[#E07575]">*</span>
            </div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
                value={formData.name}
                onChange={(e)=>setFormData({...formData,name:e.target.value})}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Company Name</div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
                value={formData.companyName}
                onChange={(e)=>setFormData({...formData,companyName:e.target.value})}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              Steet Address<span className="text-[#E07575]">*</span>
            </div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
                value={formData.streetAddress}
                onChange={(e)=>setFormData({...formData,streetAddress:e.target.value})}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Apartment, floor, etc. (optional)</div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
                value={formData.apartment}
                onChange={(e)=>setFormData({...formData,apartment:e.target.value})}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              Town/City<span className="text-[#E07575]">*</span>
            </div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
                value={formData.city}
                onChange={(e)=>setFormData({...formData,city:e.target.value})}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              Phone Number<span className="text-[#E07575]">*</span>
            </div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
                value={formData.phoneNumber}
                onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              Email Address<span className="text-[#E07575]">*</span>
            </div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
                value={formData.email}
                onChange={(e)=>setFormData({...formData,email:e.target.value})}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <input type="checkbox" className="accent-red" />
        </div>
        <div>Save this information for faster check-out next time</div>
      </div>
      </div>
    </>
  );
};

export default CheckoutFormInput;
