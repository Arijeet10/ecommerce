"use client";

import { ProductTypes } from "@/types/types";
import { getApiData } from "@/utils/request";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductDetails from "../_components/ProductDetails";
import ProductCard from "@/components/ProductCard";
import LoadingProductData from "../_components/LoadingProductData";
import LoadingProducts from "@/components/ui/LoadingProducts";

const Product = () => {
  const { id } = useParams();
  //console.log(id);

  const [productData, setProductData] = useState<ProductTypes>({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {
      count: 0,
      rate: 0,
    },
    title: "",
  });

  const [productDataLoading, setProductDataLoading] = useState(true);
  const [relatedProductsLoading, setRelatedProductsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<ProductTypes[]>([]);

  const fetchRelatedProductsData = async (relatedProductCategory: string) => {
    const url = `${process.env.NEXT_PUBLIC_FAKE_STORE_API}/category/${relatedProductCategory}`;
    //console.log(url);
    try {
      const data = await getApiData(url);
      setRelatedProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setProductDataLoading(false);
    }
  };

  const fetchProductData = async () => {
    try {
      const data = await getApiData(
        `${process.env.NEXT_PUBLIC_FAKE_STORE_API}/${id}`
      );
      //console.log(data);
      setProductData(data);
      await fetchRelatedProductsData(data.category);
    } catch (error) {
      console.log(error);
    } finally {
      setRelatedProductsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div className="px-4 py-4 flex flex-col gap-10">
        <div>
          {productDataLoading ? (
            <LoadingProductData />
          ) : (
            <ProductDetails productData={productData} />
          )}
        </div>
        <div className="flex flex-col gap-16">
          <div>
            <div className="flex items-center gap-4">
              <div className="w-5 h-10 sm:w-6 sm:h-12 md:w-8 md:h-16 lg:w-10 lg:h-20 bg-[#DB4444] rounded-lg" />
              <div className="text-[#DB4444] font-semibold text-sm sm:text-base">
                Related Items
              </div>
            </div>
          </div>
          {relatedProductsLoading ? (
            <LoadingProducts />
          ) : (
            <div className="grid grid-flow-col gap-2 overflow-scroll hide-default-scrollbar">
              {relatedProducts &&
                relatedProducts.map((product, index) => {
                  return <ProductCard key={index} product={product} />;
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
