import { CartProductTypes } from "@/types/types";
import { getDataFromToken } from "@/utils/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req:NextRequest){

    const stripe=new Stripe(process.env.STRIPE_SECRET_KEY!)

    try {
        const data=await getDataFromToken(req)
        console.log("Token:",data)
        if(!data){
            return NextResponse.json({message:"Sign in to perform checkout"},{status:404})
        }

        const userData=await req.json()
        console.log("Checkout Payload:",userData)
        if(!userData){
            return NextResponse.json({message:"No data provided for checkout"},{status:404})
        }

        const {email,cart}=userData

        const items=await cart.map((item:CartProductTypes)=>({
            quantity:item.productCount,
            price_data:{
                currency:"usd",
                unit_amount:item.product.price*100,
                product_data:{
                    name:item.product.title,
                    description:item.product.description,
                    images:[item.product.image],
                },
            },
        }))

        console.log("Items Created for checkout")

        const session=await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            line_items:items,
            mode:'payment',
            success_url:`${process.env.NEXTAUTH_URL}/cart/checkout/success`,
            cancel_url:`${process.env.NEXTAUTH_URL}/checkout`,
            metadata:{
                email,
            }
        })

        console.log("Checkout initiated!")
        return NextResponse.json({message:"Stripe Connection is active!",id:session.id},{status:201})
    } catch (error) {
        console.log("Checout error:",error)
        return NextResponse.json({message:"Checkout Error:",error},{status:500})
    }
}