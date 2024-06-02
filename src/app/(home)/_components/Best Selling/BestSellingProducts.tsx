"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../../../components/ProductCard";
import { ProductTypes } from "@/types/types";
import { getApiData } from "@/utils/request";
import LoadingProducts from "../../../../components/ui/LoadingProducts";

const BestSellingProducts=()=>{

    const [bestSellingProducts,setBestSellingProducts]=useState<ProductTypes[]>([{
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

    const [loading,setLoading]=useState(true)

    const fetchBestSellingProducts = async () => {
        try {
          const data = await getApiData(`${process.env.NEXT_PUBLIC_FAKE_STORE_API}?sort=desc`);
          //console.log(data);
          setBestSellingProducts(data);
        } catch (error) {
          console.log(error);
        }finally{
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchBestSellingProducts();
      }, []);

      if(loading){
        return(<LoadingProducts />)
      }

    return(
        <>
        <div className="w-full grid grid-flow-col gap-2 overflow-scroll hide-default-scrollbar">
            {bestSellingProducts && bestSellingProducts.map((product,index)=>{
                return(
                    <ProductCard key={index} product={product}  />
                )
            })}
        </div>
        </>
    )
}

export default BestSellingProducts;