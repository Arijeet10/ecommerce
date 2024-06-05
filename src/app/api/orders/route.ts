import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
// import { getDataFromToken } from "@/utils/getDataFromToken";
import { getToken } from "next-auth/jwt";
import jwt from "jsonwebtoken"

export async function POST(req: NextRequest) {
  try {
    const nextAuthTokenData=await getToken({req})
    let email;
    if(nextAuthTokenData?.email){
        email=nextAuthTokenData.email
    }else{
        const token=await req.cookies.get("token")?.value
        if(!token){
            return NextResponse.json({message:"User not signed in"},{status:404})
        }
        try {
            const decodedToken=await jwt.verify(token,process.env.TOKEN_SECRET!)
            email=(decodedToken as jwt.JwtPayload).email
        } catch (error) {
            return NextResponse.json({message:"Invalid Token"},{status:404})
        }
    }
    if (!email) {
      return NextResponse.json(
        { message: "Sign in to empty your cart" },
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

    const orderID=await req.json()

    if(!orderID){
      return NextResponse.json({message:"No order id found"},{status:404})
    }

    const newOrder={orderID:orderID,orderData:user.cart,orderDate:new Date()}
    const updatedOrders=[...(user.orders),newOrder]

    await prisma.ecommerceUser.update({
      where: {
        email: email as string,
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
