import Button from "./ui/Button";
import Divider from "./ui/Divider";

const CartTotal = ({subTotalAmt}:{subTotalAmt?:number}) => {
  return (
    <>
      <div className="p-4 border border-[#000000] rounded-md flex flex-col gap-2">
        <div className="font-medium text-xl">Cart Total</div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div>Subtotal:</div>
              <div>{subTotalAmt}</div>
            </div>
            <div>
              <Divider />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <div>
              <Divider />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div>Total:</div>
              <div>{subTotalAmt}</div>
            </div>
            <div>
              <Divider />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="max-w-[200px]">
          <Button text="Process to Checkout" color="#DB4444" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
