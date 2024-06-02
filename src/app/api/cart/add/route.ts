import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getDataFromToken } from "@/utils/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const data = await getDataFromToken(req);
    //console.log("Token Data",data)
    if (!data) {
      return NextResponse.json(
        { message: "Sign in to add products to cart" },
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
    //console.log("Product",product)
    if(!product || !product.id){
        return NextResponse.json({message:"Invalid Product Data"},{status:404})
    }
    //console.log("User",user)
    const existingCartIndex = user.cart.findIndex(
      (item) => item?.product.id === product.id
    );
    const newCart = (() => {
      if (existingCartIndex >= 0) {
        const updatedItems = [...user.cart];
        const updatedProduct = { ...updatedItems[existingCartIndex] };
        updatedProduct.productCount += 1;
        updatedItems[existingCartIndex] = updatedProduct;
        return updatedProduct;
      } else {
        const newProduct = { product: product, productCount: 1 };
        return [...user.cart, newProduct];
      }
    })();
    //console.log("New Cart",newCart)

    await prisma.ecommerceUser.update({
      where: {
        email: data?.email as string,
      },
      data: {
        cart: newCart,
      },
    });

    console.log(newCart)

    return NextResponse.json(
      { message: "Product Added to Cart!", newCart },
      { status: 201 }
    );
  } catch (error) {
    //console.error("Add to Cart Error:", error);
    return NextResponse.json(
      { message: "Add to Cart Error:", error },
      { status: 500 }
    );
  }
}
