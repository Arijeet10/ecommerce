import { GiClothes } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiHeadphones } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { CgAppleWatch } from "react-icons/cg";
import { GiNecklaceDisplay } from "react-icons/gi";
import { CiCamera } from "react-icons/ci";
import { GiSmartphone } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

const categoriesArray = [
  "Phones",
  "Computers",
  "SmartWatch",
  "Camera",
  "HeadPhones",
  "Gaming",
  "Men's clothing",
  "Women's clothing",
  "jewellery",
  "Electronics",
];

const CategoryCard = ({ category }: { category: string }) => {
  return (
    <>
      <div className="max-w-[90%] w-[100vw] sm:w-[40vw] md:w-[25vw] lg:w-[20vw] h-[30vh] border border-[#0000004D] rounded-md hover:bg-[#DB4444] hover:text-[#FAFAFA] flex flex-col gap-2 items-center justify-center">
        <div>
          {category == "Phones" && <GiSmartphone className="h-10 w-10" />}
          {category == "Computers" && <HiOutlineDesktopComputer className="h-10 w-10" />}
          {category == "Camera" && <CiCamera className="h-10 w-10" />}
          {category == "SmartWatch" && <CgAppleWatch className="h-10 w-10" />}
          {category == "HeadPhones" && <CiHeadphones className="h-10 w-10" />}
          {category == "Gaming" && <SiYoutubegaming className="h-10 w-10" />}
          {category == "Men's clothing" && <GiClothes className="h-10 w-10" />}
          {category == "Women's clothing" && <GiClothes className="h-10 w-10" />}
          {category == "jewellery" && <GiNecklaceDisplay className="h-10 w-10" />}
          {category == "Electronics" && <FcElectronics className="h-10 w-10" />}
        </div>
        <div>{category}</div>
      </div>
    </>
  );
};

export default CategoryCard;
