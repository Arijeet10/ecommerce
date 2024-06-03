"use client";

import { useContext, useState } from "react";
import Button from "../../../../components/ui/Button";
import CheckoutFormInput from "./CheckoutFormInput";
import { CartContext } from "@/context/CartContextProvider";
import CheckoutProductsDetails from "@/app/cart/checkout/_components/CheckoutProductsDetails";
import TotalCartProductsAmount from "../../../../components/TotalCartProductsAmount";
import ApplyCoupon from "../../_components/ApplyCoupon";
import PaymentOptions from "@/app/cart/checkout/_components/PaymentOptions";

const CheckoutForm = () => {


  const { cartItems } = useContext(CartContext);
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    companyName:"",
    streetAddress:"",
    apartment:"",
    city:"",
    phoneNumber:"",
    paymentOption:""
  })

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    streetAddress: "",
    city: "",
    phoneNumber: "",
  });

  const handlePlaceOrder=()=>{
    // if(!formData.name||!formData.email||!formData.streetAddress||!formData.city||!formData.phoneNumber){
    //   alert("Please fill up required fields before placing order")
    // }else{
    //   console.log("Billing Details",formData)
    // }

    console.log("Billing Details",formData)

    
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className=" ">
          <CheckoutFormInput errorMessage={errorMessage} setErrorMessage={setErrorMessage} formData={formData} setFormData={setFormData} />
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
            <PaymentOptions formData={formData} setFormData={setFormData} />
          </div>

          <div>
            <ApplyCoupon />
          </div>
          <div className="flex justify-start">
            <div onClick={()=>handlePlaceOrder()} className="max-w-[200px]">
              <Button text="Place Order" color="#DB4444" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
