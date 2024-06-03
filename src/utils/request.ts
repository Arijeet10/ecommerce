//API Requests

import { ProductTypes } from "@/types/types"

export const getApiData=async(url:string)=>{
    try {
        const res=await fetch(url)
        const response=await res.json()
        if(res.ok){
            return response
        }
    } catch (error) {
        console.log(error)
    }
}

export const addToCartApiCall = async (product:ProductTypes) => {
    try {
      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(product),
      });
      const response = await res.json();
      if (res.ok) {
        console.log(response.message);
        return response.message;
      }else{
        return response.message;
      }
    } catch (error) {
      console.log(error);
      const message="Unable to add to cart"
      return message;
    }
  };

export const removeFromCartApiCall = async (product:ProductTypes) => {
    try {
      const res = await fetch("/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(product),
      });
      const response = await res.json();
      if (res.ok) {
        console.log(response.message);
        return response.message;
      }else{
        return response.message;
      }
    } catch (error) {
      console.log(error);
      const message="Unable to remove from cart"
      return message;
    }
  };

export const wishlistUpdateApiCall = async (product:ProductTypes) => {
    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(product),
      });
      const response = await res.json();
      if (res.ok) {
        console.log(response.message)
        return response.message
      }else{
        return response.message
      }
    } catch (error) {
      console.log(error);
      const message="Unable to update your wishlist"
      return message;
    }
  };

export const addWishlistToCartApiCall=async()=>{
  try {
    const res=await fetch("/api/cart/add-wishlist")
    const response=await res.json()
    if(res.ok){
      console.log(response.message)
      return response.message
    }else{
      return response.message
    }
  } catch (error) {
    console.log(error)
    const message="Unable to add items to wishlist"
    return message;
  }
}

export const emptyCartApiCall=async()=>{
  try {
    const res=await fetch("/api/cart/empty")
    const response=await res.json()
    if(res.ok){
      console.log(response)
      return response.message
    }else{
      return response.message
    }
  } catch (error) {
    console.log(error)
    const message="Unable to empty cart"
    return message;
  }
}


export const createOrdersApiCall=async()=>{
  try {
    const res=await fetch("/api/orders")
    const response=await res.json()
    if(res.ok){
      console.log(response)
      return response
    }else{
      return response.message
    }
  } catch (error) {
    console.log(error)
    const message="Unable to create orders"
    return message;
  }
}