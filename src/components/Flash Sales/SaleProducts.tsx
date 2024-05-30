"use client"

import { RefObject, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { getApiData } from "@/utils/request";
import { ProductTypes } from "@/types/types";

const discount=10

const SaleProducts=({saleProductsRef}:{saleProductsRef:RefObject<HTMLDivElement>})=>{


    const [saleProducts,setSaleProducts]=useState<ProductTypes[]>([{
        category:"",
        description:"",
        id:0, 
        image:"",
        price:0,
        rating: {
            count:0,
            rate:0,
        },
        title:""
    }])

    //console.log(saleProducts)

    const fetchSaleProducts = async () => {
        try {
          const data = await getApiData(`${process.env.NEXT_PUBLIC_FAKE_STORE_API}/category/jewelery`);
          //console.log(data);
          setSaleProducts(data);
          setSaleProducts(prev=>[...prev,...data])
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchSaleProducts();
      }, []);
    

    return(
        <>
        <div ref={saleProductsRef} className="w-full grid grid-flow-col gap-2 overflow-scroll hide-default-scrollbar">
            {saleProducts && saleProducts.map((product,index)=>{
                return(
                    <ProductCard product={product} key={index} discount={discount*(index+1)} />
                )
            })}
        </div>
        </>
    )
}

export default SaleProducts;