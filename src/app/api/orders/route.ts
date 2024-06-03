import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getDataFromToken } from "@/utils/getDataFromToken";

export async function GET(req: NextRequest) {
  try {
    const data = await getDataFromToken(req);
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



    const newOrder={orderData:user.cart,orderDate:new Date()}
    const updatedOrders=[...(user.orders),newOrder]

    await prisma.ecommerceUser.update({
      where: {
        email: data?.email as string,
      },
      data: {
        cart: [],
        orders:updatedOrders
      },
    });


    return NextResponse.json(
      { message: "Payment Successful. Items has been shipped!",newOrder},
      { status: 201 }
    );
  } catch (error) {
    console.log("Orders Created Error:",error)
    return NextResponse.json(
      { message: "Orders Error:", error },
      { status: 500 }
    );
  }
}
