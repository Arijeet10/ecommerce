"use client";

import { UserDataTypes } from "@/types/types";
// import { useSession } from "next-auth/react";
import { ReactNode, createContext, useEffect, useState } from "react";

interface UserContextProps{
    userData:UserDataTypes;
    fetchUserData:()=>Promise<void>;
}

export const UserContext=createContext<UserContextProps>({
    userData:{
        id:"",
        email:"",
        fullname:"",
        password:"", 
        wishlist:[],
        cart:[],
        orders:[]
    },
    fetchUserData:()=>Promise.resolve()
})

const UserContextProvider=({children}:{children:ReactNode})=>{
    
    // const {status}=useSession()


    const [userData,setUserData]=useState<UserDataTypes>({
        id:"",
        email:"",
        fullname:"",
        password:"", 
        wishlist:[],
        cart:[],
        orders:[]
    })

    const fetchUserData=async()=>{
        try {
            const res=await fetch("/api/user")
            const response=await res.json()
            if(res.ok){
                setUserData(response.user)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUserData()

    }, [])
    

    return(
        <UserContext.Provider value={{userData,fetchUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;