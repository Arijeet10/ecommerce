import { FiHeart } from "react-icons/fi";

const WishlistIcon = ({count}:{count:number}) => {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <FiHeart className="w-7 h-7 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        <div className={`${count==0?"hidden":"absolute"}  w-3 h-3 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 top-0 right-0 text-[1vw] md:text-xs bg-red text-[#FAFAFA] rounded-full font-bold flex items-center justify-center`}>
            <div>
            {count}
            </div>
        </div>
      </div>
    </>
  );
};
export default WishlistIcon;
