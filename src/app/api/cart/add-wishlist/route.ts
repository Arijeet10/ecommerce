import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getDataFromToken } from "@/utils/getDataFromToken";
import { ProductTypes } from "@/types/types";

export async function GET(req: NextRequest) {
  try {
    const data = await getDataFromToken(req);
    if (!data) {
      return NextResponse.json(
        { message: "Sign in to shift wishlist items to cart" },
        { status: 404 }
      );
    }
    const user = await prisma.ecommerceUser.findUnique({
      where: { email: data?.email as string },
    });
    if (!user) {
      return NextResponse.json(
        { message: "Couldn't find account in database" },
        { status: 404 }
      );
    }

    const newCart=(()=>{
        if(user.wishlist.length>0){
        const itemsToAddToCart=user.wishlist.map((item:ProductTypes)=>{
            return {product:item,productCount:1}
        })
        return [...user.cart,...itemsToAddToCart]
    }})()


    await prisma.ecommerceUser.update({
      where: {
        email: data?.email as string,
      },
      data: {
        cart: newCart,
        wishlist:[]
      },
    });

    return NextResponse.json(
      { message: "Wishlist Items Added to Cart!", newCart },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Add to Cart Error:", error },
      { status: 500 }
    );
  }
}
