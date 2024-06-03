import {NextResponse,NextRequest} from "next/server";
import prisma from "../../../../../prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req:NextRequest){
    try {
        const {email,password}=await req.json()
        if(!email&&!password){
            return NextResponse.json({message:"Login Credentials not found"},{status:404})
        }
        const existingUser=await prisma.ecommerceUser.findUnique({where:{email:email}})
        if(!existingUser){
            return NextResponse.json({message:"Account Doesn't exist! Please Sign up first"},{status:404})
        }
        const verifyPassword=await bcrypt.compareSync(password,existingUser.password)
        if(!verifyPassword){
            return NextResponse.json({message:"Incorrect Password"},{status:404})
        }

        const tokenData={
            email:existingUser.email
        }

        const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1d'})
        const cookieOptions={
            httpOnly:true,
            secure:true
        }
        const response=NextResponse.json({message:"Login Successful",token},{status:201})
        response.cookies.set('token',token,cookieOptions)
        return response;

    } catch (error) {
        return NextResponse.json({message:"Login Error:",error},{status:500})
    }
}
