"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { CartContext } from "@/context/CartContextProvider";
import { CartProductTypes, ProductTypes } from "@/types/types";
import CartIcon from "./ui/CartIcon";
import WishlistIcon from "./ui/WishlistIcon";
import { WishlistContext } from "@/context/WishlistContextProvider";

const Navbar = () => {
  const router = useRouter();

  const [sidebar, setSidebar] = useState(false);
  const {cartItems}=useContext(CartContext);
  const {wishlistItems}=useContext(WishlistContext);

  return (
    <>
      <nav className="px-4 py-4 border-b relative  sm:flex sm:items-center sm:justify-between text-sm sm:text-xs md:text-sm lg:text-base">
        <section className=" flex items-center justify-between gap-2 sm:gap-4 md:gap-10 lg:gap-32 text-[#363738FF]">
          <div className="font-bold text-lg sm:text-sm md:text-lg lg:text-2xl">
            Ecommerce App
          </div>
          {/* Mobile View */}
          <div className="block sm:hidden">
            {!sidebar && (
              <RxHamburgerMenu
                onClick={() => setSidebar(true)}
                className="w-5 h-5"
              />
            )}
          </div>
          {sidebar && (
            <div className="sm:hidden p-4  fixed z-50 top-0 right-0 w-[50vw] h-full bg-[#FAFAFA]  ">
              <section className=" flex items-center justify-end">
                <CgClose
                  onClick={() => setSidebar(false)}
                  className="w-6 h-6"
                />
              </section>
              <section>
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
                <div>Signup</div>
              </section>
              <section>
                <div>Search</div>
                <div>Wishlist</div>
                <div>Cart</div>
              </section>
            </div>
          )}

          {/* Desktop View */}

          {/* Navigation Section */}
          <nav className="hidden sm:flex items-center gap-8  font-medium">
            <button
              onClick={() => router.push("/")}
              className="border-b border-transparent hover:border-slate-500"
            >
              Home
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="border-b border-transparent hover:border-slate-500"
            >
              Contact
            </button>
            <button
              onClick={() => router.push("/about")}
              className="border-b border-transparent hover:border-slate-500"
            >
              About
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="border-b border-transparent hover:border-slate-500"
            >
              Sign Up
            </button>
          </nav>
        </section>
        <section className="hidden sm:flex items-center justify-end gap-4">
          <div className="flex items-center justify-between rounded-md p-2 bg-[#F5F5F5] ">
            <input
              type="text"
              placeholder=""
              className="text-[#7D8184FF] w-full focus:outline-none bg-transparent"
            />
            <FiSearch className="w-7 h-7" />
          </div>
          <div className="flex items-center gap-4">
            <div onClick={()=>router.push("/wishlist")} className="flex items-center justify-center cursor-pointer">
              <WishlistIcon count={wishlistItems?.length} />
            </div>
            <div onClick={()=>router.push("/cart")} className="cursor-pointer">
              <CartIcon count={cartItems?.length} />
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
