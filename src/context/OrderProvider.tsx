"use client";

import { OrderTypes } from "@/types/types";
import { ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface OrderContextTypes{
    order:OrderTypes;
    setOrder:React.Dispatch<SetStateAction<OrderTypes>>
}

export const OrderContext=createContext<OrderContextTypes>({
    order:{
        orderData:{},
        orderId:0
    },
    setOrder:()=>{}
})

const OrderContextProvider=({children}:{children:ReactNode})=>{

    const [order,setOrder]=useState({
        orderData:{},
        orderId:0
    })

    useEffect(() => {
      console.log(order)
    }, [order])
    

    return(
        <OrderContext.Provider value={{order,setOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider;