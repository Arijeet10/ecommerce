"use client";

import { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { CartContext } from "@/context/CartContextProvider";
import CartIcon from "./ui/CartIcon";
import WishlistIcon from "./ui/WishlistIcon";
import { WishlistContext } from "@/context/WishlistContextProvider";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FiUser } from "react-icons/fi";
import Image from "next/image";
import ProfileDropdownOptions from "./ProfileDropdownOptions";
import { UserContext } from "@/context/UserContextProvider";
import Search from "./Search";

const Navbar = () => {
  const { data, status } = useSession();

  const [sidebar, setSidebar] = useState(false);
  const { userData,fetchUserData } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);

  const [profileDropdown, setProfileDropdown] = useState(false);

  const closeProfileDropdown = () => {
    setProfileDropdown(false);
  };

  const handleProfileDropdown = () => {
    if (status == "authenticated") {
      setProfileDropdown(!profileDropdown);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [])
  

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
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/signup">Signup</Link>
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
            <Link
              href="/"
              className="border-b border-transparent hover:border-slate-500"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="border-b border-transparent hover:border-slate-500"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="border-b border-transparent hover:border-slate-500"
            >
              About
            </Link>
            <Link
              href="/signup"
              className={`border-b border-transparent hover:border-slate-500 ${
                status == "authenticated" ? "hidden" : "block"
              }`}
            >
              Sign Up
            </Link>
          </nav>
        </section>
        <section className="hidden sm:relative sm:flex items-center justify-end gap-4">
          <div>
            <Search />
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/wishlist"
              className="flex items-center justify-center cursor-pointer"
            >
              <WishlistIcon
                count={
                  status == "authenticated"
                    ? userData.wishlist.length
                    : wishlistItems?.length
                }
              />
            </Link>
            <Link href="/cart" className="cursor-pointer">
              <CartIcon
                count={
                  status == "authenticated"
                    ? userData.cart.length
                    : cartItems?.length
                }
              />
            </Link>
            {status == "authenticated" && (
              <div onClick={() => handleProfileDropdown()}>
                {data?.user?.image ? (
                  <Image
                    src={data.user.image}
                    alt=""
                    width={100}
                    height={100}
                    className="rounded-full sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  />
                ) : (
                  <div className="bg-red flex items-center justify-center rounded-full text-[#FAFAFA] sm:p-2 lg:p-1">
                    <FiUser className=" sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  </div>
                )}
              </div>
            )}
          </div>
          {status == "authenticated" && profileDropdown && (
            <ProfileDropdownOptions
              closeProfileDropdown={closeProfileDropdown}
            />
          )}
        </section>
      </nav>
    </>
  );
};

export default Navbar;
