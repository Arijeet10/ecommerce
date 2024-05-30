
"use client";

import { ProductTypes } from "@/types/types";
import { ReactNode, SetStateAction, createContext, useState } from "react";

interface WishlistContextTypes{
    wishlistItems:ProductTypes[];
    setWishlistItems:React.Dispatch<SetStateAction<ProductTypes[]>>

}

export const WishlistContext=createContext<WishlistContextTypes>({
    wishlistItems:[],
    setWishlistItems:()=>{}
})

const WishlistContextProvider=({children}:{children:ReactNode})=>{

    const [wishlistItems,setWishlistItems]=useState<ProductTypes[]>([])


    return(
        <WishlistContext.Provider value={{wishlistItems,setWishlistItems}}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistContextProvider;