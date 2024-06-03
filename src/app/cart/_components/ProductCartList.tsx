import { CartProductTypes } from "@/types/types";
import ProductQuantityCounter from "@/components/ui/ProductQuantityCounter";

const ProductCartList = ({
  productData,
}: {
  productData: CartProductTypes;
}) => {
  return (
    <>
      <div className="py-2 grid grid-cols-4 gap-2 text-xs sm:text-base">
        <div className=" flex items-center justify-center ">
          <div className="w-full flex items-center gap-1">
            <div className="w-full sm:w-[30%] flex items-center justify-center">
              <img
                src={productData?.product.image}
                alt=""
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="hidden sm:block w-[70%] text-ellipsis overflow-hidden text-nowrap text-xs sm:text-base">
              {productData?.product.title}
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <div>{productData?.product.price}</div>
        </div>
        <div className=" flex items-center justify-center">
          <div className="">
            <ProductQuantityCounter productData={productData} />
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <div>{productData?.product.price * productData?.productCount}</div>
        </div>
      </div>
    </>
  );
};

export default ProductCartList;
