"use client";

import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { SlClose } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { signOut } from "next-auth/react";
import { SetStateAction } from "react";
import { useRouter } from "next/navigation";

const ProfileDropdownOptions = ({closeProfileDropdown}:{closeProfileDropdown:React.Dispatch<SetStateAction<void>>}) => {

  const router=useRouter()

  return (
    <>
      <div className="max-w-[250px] max-h-[300px] w-[35vw] h-[40vh] absolute z-50 right-0 top-full bg-gradient-to-b from-[#b3b4b5] via-[#ba70e2] to-[#000000] text-[#FAFAFA] flex items-center justify-center rounded-md">
        <div className="flex flex-col gap-4">
          <button onClick={()=>{router.push("/profile");closeProfileDropdown();}} className="flex items-center justify-start gap-2">
            <div>
              <FiUser className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </div>
            <div>Manage My Account</div>
          </button>
          <div className="flex items-center justify-start gap-2">
            <div>
              <FiShoppingBag className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </div>
            <div>My Orders</div>
          </div>
          <div className="flex items-center justify-start gap-2">
            <div>
              <SlClose className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </div>
            <div>My Cancellations</div>
          </div>
          <div className="flex items-center justify-start gap-2">
            <div>
              <FaRegStar className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </div>
            <div>My Reviews</div>
          </div>
          <button onClick={()=>{signOut();closeProfileDropdown()}} className="flex items-center justify-start gap-2">
            <div>
              <SlLogout className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </div>
            <div>Logout</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdownOptions;
