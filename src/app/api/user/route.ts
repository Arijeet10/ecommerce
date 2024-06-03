import { NextRequest,NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { getDataFromToken } from "@/utils/getDataFromToken";


export async function GET(req:NextRequest){
    try {
        const data=await getDataFromToken(req)
        console.log("Token Data:",data)
        if(!data?.email){
            return NextResponse.json({message:"User not Signed in"},{status:404})
        }
        const user=await prisma.ecommerceUser.findUnique({where:{email:data.email as string}})
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
