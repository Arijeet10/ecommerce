import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getDataFromToken } from "@/utils/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const data = await getDataFromToken(req);
    if (!data) {
      return NextResponse.json(
        { message: "Sign in to update your wishlists" },
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

    const product = await req.json();

    if(!product || !product.id){
        return NextResponse.json({message:"Invalid Product Data"},{status:404})
    }

    const newWishlist=(()=>{
        if(user.wishlist.find(item=>item.id==product.id)){
            const updatedWishlist=[...user.wishlist]
            const productIndexInWishlist=updatedWishlist.findIndex(item=>item.id==product.id)
            updatedWishlist.splice(productIndexInWishlist,1)
            return updatedWishlist
        }else{
            return [...user.wishlist,product]
        }
    })();


    await prisma.ecommerceUser.update({
      where: {
        email: data?.email as string,
      },
      data: {
        wishlist: newWishlist,
      },
    });

    return NextResponse.json(
      { message: "Wishlist Updated!", newWishlist },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "Wishlist Error:", error },
      { status: 500 }
    );
  }
}
