"use client";

import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import { CartContext } from "@/context/CartContextProvider";
import { UserContext } from "@/context/UserContextProvider";
import { WishlistContext } from "@/context/WishlistContextProvider";
import { CartProductTypes } from "@/types/types";
import { addWishlistToCartApiCall } from "@/utils/request";
import { useSession } from "next-auth/react";
import { useContext } from "react";

const Wishlist = () => {

  // const {status}=useSession()
  const {userData,fetchUserData}=useContext(UserContext)
  const { wishlistItems , setWishlistItems} = useContext(WishlistContext);
  const { setCartItems } = useContext(CartContext);

  const handleAddToCart = async() => {
    if(userData.email!==""){
      if(userData.wishlist.length>0){
        await addWishlistToCartApiCall()
        fetchUserData()
      }else{
        alert("Firstly wishlist something! 😒")
      }
    }else{
      if(wishlistItems.length>0){
        const itemsToAddToCart:CartProductTypes[]=wishlistItems.map(item=>{
          return {product:item,productCount:1}
      })
      setCartItems(prev=>[...prev,...itemsToAddToCart]);
      setWishlistItems([])
      }else{
        alert("Firstly wishlist something! 😒")
      }
    }
  };



  return (
    <>
      <div className={`px-4 py-4 ${userData.email!==""?userData.wishlist.length==0 && "h-[100vh]":wishlistItems.length==0 && 'h-[100vh]'} flex flex-col gap-20`}>
        <div className="flex flex-col gap-16">
          <div className="flex items-center justify-between">
            <div className="text-lg">
              Wishlist <span>({userData.email!==""?userData.wishlist.length:wishlistItems.length})</span>
            </div>
            <div onClick={() => handleAddToCart()}>
              <Button
                text="Move All to Bag"
                color="#FAFAFA"
                borderColor="#000000"
                textColor="#000000"
              />
            </div>
          </div>
          <div className="w-full grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {userData.email!==""?(
              userData.wishlist.map((item,i)=>{
                return <ProductCard key={i} product={item} />
              })
            ):(
              wishlistItems.map((item, i) => {
                return <ProductCard key={i} product={item} />;
              })
            )}
          </div>
        </div>
        <div>
          Just For You Section
        </div>
      </div>
    </>
  );
};

export default Wishlist;
