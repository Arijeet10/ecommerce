import { getToken } from "next-auth/jwt"
import { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

export const getDataFromToken=async(req:NextRequest)=>{
    try {
        const data=await getToken({req})
        if(data){
            console.log("Token obtained from next-auth:", data);
            return data
        }else{
            const token=req.cookies.get('token')?.value || ""
            console.log("Token from cookies:", token);
            if(token){
                const userData= jwt.verify(token,process.env.TOKEN_SECRET!) as jwt.JwtPayload
                console.log("User data from verified token:", userData);
                return userData
            }
        }

    } catch (error) {
        console.log("Unable to get token data:",error)
    }
    return null;
}