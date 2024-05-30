import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="px-[1rem] py-[1rem] bg-[#000000] text-[#FAFAFAFF] text-[calc(0.7rem+0.1vw)] flex items-center justify-end ">
        <div className="flex items-center justify-center gap-2 sm:gap-20 md:gap-36 lg:gap-96">
          <div className=" sm:flex sm:items-center sm:gap-2">
            <div>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </div>
            <div className=" underline cursor-pointer font-semibold">
              ShopNow
            </div>
          </div>

          <div className="flex items-center">
            <div>English</div>
            <div>
              <FaChevronDown />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
