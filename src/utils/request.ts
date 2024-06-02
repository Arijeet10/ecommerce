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
      }
    } catch (error) {
      console.log(error);
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
      }
    } catch (error) {
      console.log(error);
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
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };


export const addWishlistToCartApiCall=async()=>{
  try {
    const res=await fetch("/api/cart/add-wishlist")
    const response=await res.json()
    if(res.ok){
      console.log(response.message)
      return response.message
    }
  } catch (error) {
    console.log(error)
  }
}