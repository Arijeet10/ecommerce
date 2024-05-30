import { CartProductTypes } from "@/types/types";
import ProductQuantityCounter from "./ui/ProductQuantityCounter";

const ProductCartList = ({
  productData,
}: {
  productData: CartProductTypes;
}) => {
  return (
    <>
      <div className="py-2  grid grid-cols-4 gap-2">
        <div className=" flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <img src={productData?.product.image} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="max-w-[200px] text-ellipsis overflow-hidden text-nowrap">
            {productData?.product.title}
          </div>
        </div>
        </div>
        <div className=" flex items-center justify-center">
          <div>{productData?.product.price}</div>
        </div>
        <div className=" flex items-center justify-center">
          <div className=""><ProductQuantityCounter productData={productData} /></div>
        </div>
        <div className=" flex items-center justify-center">
          <div>{productData?.product.price * productData?.productCount}</div>
        </div>
      </div>
    </>
  );
};

export default ProductCartList;
