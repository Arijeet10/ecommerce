import { CartProductTypes } from "@/types/types";
import Divider from "@/components/ui/Divider";

const CheckoutProductsDetails = ({
  product,
}: {
  product: CartProductTypes;
}) => {
  return (
    <>
      <div className=" flex items-center gap-6">
        <div className="w-10 h-10">
          <img 
            src={product.product.image}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="max-w-[250px] overflow-hidden text-ellipsis text-nowrap">{product.product.title}</div>
          <div>${product.product.price}</div>
        </div>
      </div>
    </>
  );
};

export default CheckoutProductsDetails;
