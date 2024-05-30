"use client";

import ProductCard from "@/components/ProductCard";
import { WishlistContext } from "@/context/WishlistContextProvider";
import { useContext } from "react";

const Wishlist=()=>{

    const {wishlistItems}=useContext(WishlistContext)

    return(
        <>
            <div>
                <div className="grid grid-cols-4 gap-2">
                    {wishlistItems.map((item,i)=>{
                        return(<ProductCard key={i} product={item} />)
                    })}
                </div>
            </div>
        </>
    )
}

export default Wishlist;