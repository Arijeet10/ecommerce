"use client";

import { CartProductTypes, ProductTypes } from "@/types/types";
import { ReactNode, SetStateAction, createContext, useState } from "react";

interface CartContextTypes{
    cartItems:CartProductTypes[];
    setCartItems:React.Dispatch<SetStateAction<CartProductTypes[]>>

}

export const CartContext=createContext<CartContextTypes>({
    cartItems:[],
    setCartItems:()=>{}
})

const CartContextProvider=({children}:{children:ReactNode})=>{

    const [cartItems,setCartItems]=useState<CartProductTypes[]>([])


    return(
        <CartContext.Provider value={{cartItems,setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;