"use client";

import ApplyCoupon from "./_components/ApplyCoupon";
import CartTotal from "./_components/CartTotal";
import ProductCartList from "@/components/ProductCartList";
import Button from "@/components/ui/Button";
import { CartContext } from "@/context/CartContextProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import { UserContext } from "@/context/UserContextProvider";

const Cart = () => {
  const router = useRouter();

  const { status } = useSession();

  const { userData } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="px-4 py-4">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <div className="border shadow-sm flex flex-col gap-10">
              <div className="py-2 grid grid-cols-4 gap-2">
                <div className=" flex items-center justify-center">
                  <div>Product</div>
                </div>
                <div className=" flex items-center justify-center">
                  <div>Price</div>
                </div>
                <div className=" flex items-center justify-center">
                  <div>Quantity</div>
                </div>
                <div className=" flex items-center justify-center">
                  <div>Subtotal</div>
                </div>
              </div>
              <div className="h-[50vh] overflow-scroll hide-default-scrollbar flex flex-col gap-10">
                {status == "authenticated" ? (
                  userData.cart.length > 0 ? (
                    userData.cart.map((item, i) => {
                      return <ProductCartList key={i} productData={item} />;
                    })
                  ) : (
                    <div className=" flex items-center justify-center">
                      <div className="text-2xl">No Products in Cart 🥲</div>
                    </div>
                  )
                ) : cartItems.length > 0 ? (
                  cartItems.map((item, i) => {
                    return <ProductCartList key={i} productData={item} />;
                  })
                ) : (
                  <div className=" flex items-center justify-center">
                    <div className="text-2xl">No Products in Cart 🥲</div>
                  </div>
                )}
                
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div onClick={() => router.push("/")}>
                <Button
                  color="#FAFAFA"
                  text="Return To Shop"
                  borderColor="#000000"
                  textColor="#000000"
                />
              </div>
              <div onClick={() => router.push("/wishlist")}>
                <Button
                  color="#FAFAFA"
                  text="Update Cart"
                  borderColor="#000000"
                  textColor="#000000"
                />
              </div>
            </div>
          </div>
          <div
            className={`flex items-start justify-between ${
              status=="authenticated"?userData.cart.length==0&&"hidden":
              cartItems.length == 0 && "hidden"
            }`}
          >
            <div>
              <ApplyCoupon />
            </div>
            <div className="w-[30vw]">
              <CartTotal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
