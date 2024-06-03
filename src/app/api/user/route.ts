import { NextRequest,NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
// import { getDataFromToken } from "@/utils/getDataFromToken";
import { getToken } from "next-auth/jwt";
import jwt from "jsonwebtoken";


export async function GET(req:NextRequest){
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
                const email=(decodedToken as jwt.JwtPayload).email
            } catch (error) {
                return NextResponse.json({message:"Invalid Token"},{status:404})
            }
        }
        if(!email){
            return NextResponse.json({message:"User not Signed in"},{status:404})
        }
        const user=await prisma.ecommerceUser.findUnique({where:{email:email as string}})
        console.log("User:",user)
        if(!user){
            return NextResponse.json({message:"User Account doesn't exist"},{status:404})
        }
        return NextResponse.json({message:"User Data fetched successfully",user},{status:201})
    } catch (error) {
        console.log("User Data Fetch Error:",error)
        return NextResponse.json({message:"User Data Fetch Error:",error},{status:500})
    }
}
