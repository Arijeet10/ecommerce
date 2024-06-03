import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getDataFromToken } from "@/utils/getDataFromToken";

export async function GET(req: NextRequest) {
  try {
    const data = await getDataFromToken(req);
    console.log("Cart Empty Initiated")
    if (!data) {
      return NextResponse.json(
        { message: "Sign in to empty your cart" },
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


    await prisma.ecommerceUser.update({
      where: {
        email: data?.email as string,
      },
      data: {
        cart: [],
      },
    });

    console.log("Emptied Cart!!")

    return NextResponse.json(
      { message: "Cart Emptied!"},
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Empty Cart Error:", error },
      { status: 500 }
    );
  }
}
