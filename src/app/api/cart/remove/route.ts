import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getDataFromToken } from "@/utils/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const data = await getDataFromToken(req);
    if (!data) {
      return NextResponse.json(
        { message: "Sign in to remove products to cart" },
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

    const existingCartIndex = user.cart.findIndex(
      (item) => item?.product.id === product.id
    );
    const newCart = (() => {
      if (existingCartIndex >= 0) {
        const updatedItems = [...user.cart];
        const updatedProduct = { ...updatedItems[existingCartIndex] };
        if (updatedProduct.productCount > 1) {
          updatedProduct.productCount = updatedProduct.productCount - 1;
          updatedItems[existingCartIndex] = updatedProduct;
        } else {
          updatedItems.splice(existingCartIndex, 1);
        }
        return updatedItems;
      }else{
        return user.cart;
      }
    })();

    await prisma.ecommerceUser.update({
      where: {
        email: data?.email as string,
      },
      data: {
        cart: newCart,
      },
    });

    return NextResponse.json(
      { message: "Product Removed from Cart!", newCart },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Remove from Cart Error:", error },
      { status: 500 }
    );
  }
}
