import { getToken } from "next-auth/jwt"
import { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

export const getDataFromToken=async(req:NextRequest)=>{
    try {
        const data=await getToken({req})
        if(data){
            return data
        }else{
            const token=req.cookies.get('token')?.value || ""
            if(token){
                const userData=await jwt.verify(token,process.env.TOKEN_SECRET!) as jwt.JwtPayload
                return userData
            }
        }

    } catch (error) {
        console.log("Unable to get token data:",error)
    }
}