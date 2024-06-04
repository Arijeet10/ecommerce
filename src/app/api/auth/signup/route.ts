import prisma from "../../../../../prisma/client";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req:NextRequest){
    try {
        
        const {fullname,email,password}=await req.json()
        //console.log("Request Data:",fullname,email,password)

        if(!fullname||!email||!password){
            return NextResponse.json({message:"No data provided"},{status:404})
        }

        const existingUser=await prisma.ecommerceUser.findUnique({where:{email:email}})

        if(existingUser){
            return NextResponse.json({message:"Account exists with the email id. Please Login!"},{status:404})
        }

        const hashedPassword=await bcrypt.hash(password,10)

        const newUser=await prisma.ecommerceUser.create({
            data:{
                email,
                password:hashedPassword,
                fullname
            }
        })

        //console.log("New User:",newUser)

        return NextResponse.json({message:"Account Created successfully"},{status:201})

    
    } catch (error) {
        console.log("Signup Error:",error)
        return NextResponse.json({message:"Sign up error:",error},{status:500})
    }
}