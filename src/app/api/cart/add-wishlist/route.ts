import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
// import { getDataFromToken } from "@/utils/getDataFromToken";
import { ProductTypes } from "@/types/types";
import { getToken } from "next-auth/jwt";
import jwt from "jsonwebtoken"

export async function GET(req: NextRequest) {
  try {
    
    const nextAuthTokenData = await getToken({ req });
    let email;
    if (nextAuthTokenData?.email) {
      email = nextAuthTokenData.email;
    } else {
      const token = await req.cookies.get("token")?.value;
      if (!token) {
        return NextResponse.json(
          { message: "User not signed in" },
          { status: 404 }
        );
      }
      try {
        const decodedToken = await jwt.verify(token, process.env.TOKEN_SECRET!);
        email = (decodedToken as jwt.JwtPayload).email;
      } catch (error) {
        return NextResponse.json({ message: "Invalid Token" }, { status: 404 });
      }
    }

    if (!email) {
      return NextResponse.json(
        { message: "Sign in to shift wishlist items to cart" },
        { status: 404 }
      );
    }
    const user = await prisma.ecommerceUser.findUnique({
      where: { email: email as string },
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
        email: email as string,
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
    console.log("Add to Cart error:",error)
    return NextResponse.json(
      { message: "Add to Cart Error:", error },
      { status: 500 }
    );
  }
}
