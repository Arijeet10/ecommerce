"use client";

import { useContext, useState } from "react";
import Button from "../../../../components/ui/Button";
import CheckoutFormInput from "./CheckoutFormInput";
import { CartContext } from "@/context/CartContextProvider";
import CheckoutProductsDetails from "@/app/cart/checkout/_components/CheckoutProductsDetails";
import TotalCartProductsAmount from "../../../../components/TotalCartProductsAmount";
import ApplyCoupon from "../../_components/ApplyCoupon";
import PaymentOptions from "@/app/cart/checkout/_components/PaymentOptions";
import { loadStripe } from "@stripe/stripe-js";
import { UserContext } from "@/context/UserContextProvider";
import { OrderContext } from "@/context/OrderProvider";
import { createOrdersApiCall } from "@/utils/request";
import toast from "react-hot-toast";

const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const CheckoutForm = () => {

  const {order,setOrder}=useContext(OrderContext);
  const {userData}=useContext(UserContext);
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

  const handleStripeCheckout=async()=>{
    try {
      const stripe=await stripePromise;
      const res=await fetch("/api/checkout",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
      })

      const response=await res.json()
      if(res.ok){
        console.log(response)
        setOrder({orderData:userData.cart,orderId:response.id})
        stripe?.redirectToCheckout({sessionId:response.id})
        const orderResponse=await createOrdersApiCall()
        const orderDetails=await orderResponse.json()
        if(orderResponse.ok){
          toast.success(orderDetails.message)
        }else{
          toast.error(orderDetails)
        }
      }else{
        throw new Error("Failed to perform Stripe Payment")
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handlePlaceOrder=()=>{
    // if(!formData.name||!formData.email||!formData.streetAddress||!formData.city||!formData.phoneNumber){
    //   alert("Please fill up required fields before placing order")
    // }else{
    //   console.log("Billing Details",formData)
    // }

    if(formData.paymentOption=="bank"){
      handleStripeCheckout()
    }else{
      console.log("Billing Details",formData)
    }

    
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className={`${formData.paymentOption=="bank"?"hidden":"block"}`}>
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
