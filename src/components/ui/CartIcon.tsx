import { IoCartOutline } from "react-icons/io5";

const CartIcon = ({count}:{count:number}) => {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <IoCartOutline className="w-7 h-7" />
        <div className={`${count==0?"hidden":"absolute"} w-4 h-4 top-0 right-0 text-xs bg-red text-[#FAFAFA] rounded-full font-bold flex items-center justify-center`}>
            <div>
            {count}
            </div>
        </div>
      </div>
    </>
  );
};
export default CartIcon;
