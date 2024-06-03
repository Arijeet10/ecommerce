"use client";

import { CheckoutFormTypes } from "@/types/types";
import { SetStateAction, useState } from "react";

interface ErrorMessageProps {
  name: string;
  email: string;
  streetAddress: string;
  city: string;
  phoneNumber: string;
}

const CheckoutFormInput = ({
  formData,
  setFormData,
  errorMessage,
  setErrorMessage,
}: {
  formData: CheckoutFormTypes;
  setFormData: React.Dispatch<SetStateAction<CheckoutFormTypes>>;
  errorMessage: ErrorMessageProps;
  setErrorMessage: React.Dispatch<SetStateAction<ErrorMessageProps>>;
}) => {



  //validate name
  const validateName = () => {
    if (!formData.name) {
      setErrorMessage((prev) => ({ ...prev, name: "Name required!" }));
    } else {
      setErrorMessage((prev) => ({ ...prev, name: "" }));
    }
  };

  //validate email
  const validateEmail = () => {
    if (formData.email) {
      //check email format
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailFormat = regex.test(formData.email);
      if (emailFormat) {
        setErrorMessage((prev) => ({ ...prev, email: "" }));
      } else {
        setErrorMessage((prev) => ({ ...prev, email: "Invalid Email" }));
      }
    } else {
      setErrorMessage((prev) => ({ ...prev, email: "Email Required!" }));
    }
  };

  //validate phone number
  const validatePhoneNumber=()=>{
    if(formData.phoneNumber.length==10){
      const regex=/^\d+$/
      const phoneNumberFormat=regex.test(formData.phoneNumber)
      if(phoneNumberFormat){
        setErrorMessage(prev=>({...prev,phoneNumber:""}))
      }else{
        setErrorMessage(prev=>({...prev,phoneNumber:"Please Only Enter Numbers!"}))
      }
    }else{
      setErrorMessage(prev=>({...prev,phoneNumber:"Invalid Phone Number! Enter 10 digits number only!"}))
    }
  }




  return (
    <>
      <div
        className="flex flex-col gap-6"
      >
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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  onBlur={()=>validateName()}
                />
              </div>
              <div className="text-red text-sm">
                {errorMessage.name}
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
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, streetAddress: e.target.value })
                  }
                />
              </div>
              <div className="text-red text-sm">
                {errorMessage.streetAddress}
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
                  onChange={(e) =>
                    setFormData({ ...formData, apartment: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>
              <div>
                {errorMessage.city}
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
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  onBlur={()=>validatePhoneNumber()}
                />
              </div>
              <div className="text-red text-sm">
                {errorMessage.phoneNumber}
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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  onBlur={()=>validateEmail()}
                />
              </div>
              <div className="text-red text-sm">
                {errorMessage.email}
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
