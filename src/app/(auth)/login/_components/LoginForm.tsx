"use client"

import Button from "@/components/ui/Button";
import { UserContext } from "@/context/UserContextProvider";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const LoginForm = () => {

  const router=useRouter()

  const {fetchUserData}=useContext(UserContext)

  const [formData,setFormData]=useState({
    email:"",
    password:""
  })

  const [errorMessage,setErrorMessage]=useState({
    email:"",
    password:""
  })

    //validate email
    const validateEmail = () => {
      if (formData.email) {
        //check email format
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailFormat = regex.test(formData.email);
        if (emailFormat) {
          setErrorMessage(prev=>({...prev,email:""}));
        } else {
          setErrorMessage(prev=>({...prev,email:"Invalid Email"}));
        }
      } else {
        setErrorMessage(prev=>({...prev,email:"Email Required!"}));
      }
    };
  
      //validate password
      const validatePassword = () => {
        if(!formData.password){
            setErrorMessage(prev=>({...prev,password:"Password Required!"}));
        }else if(formData.password.length > 7){
            setErrorMessage(prev=>({...prev,password:""}))
        }else{
            setErrorMessage(prev=>({...prev,password:"Invalid Password"}))
        }
      };

      const handleSubmit=async()=>{
        if(errorMessage.email&&errorMessage.password){
          alert("Invalid Inputs!")
        }else{
          try {
            const res=await fetch("/api/auth/login",{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              credentials:"same-origin",
              body:JSON.stringify(formData)
            })
            const response=await res.json()
            console.log(response)
            if(res.ok){
              await fetchUserData()
              toast.success(response.message)
              router.push("/")
            }else{
              toast.error(response.message)
              // alert("Login Error")
            }
          } catch (error) {
            console.log(error)
            toast.error("Oops something went wrong!")
          }
        }
      }

  return (
    <>
      <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="font-medium text-3xl">Log in to Exclusive</div>
            <div>Enter your details below</div>
          </div>
          <div className="text-[#7D8184] flex flex-col gap-10">
            <div className="py-2 w-full border-b border-[#7D8184]">
              <input
                type="text"
                placeholder="Email or Phone number"
                className="w-full focus:outline-none bg-transparent"
                value={formData.email}
                onChange={(e)=>setFormData({...formData,email:e.target.value})}
                onBlur={()=>validateEmail()}
              />
            </div>
            <div className="py-2 w-full border-b border-[#7D8184]">
              <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none bg-transparent"
                value={formData.password}
                onChange={(e)=>setFormData({...formData,password:e.target.value})}
                onBlur={()=>validatePassword()}
              />
            </div>
            <div className="flex flex-col gap-1 text-red text-sm">
              <div>{errorMessage.email}</div>
              <div>{errorMessage.password}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
            <div onClick={()=>{validateEmail();validatePassword();handleSubmit();}}>
                <Button text="Log In" color="#DB4444" />
            </div>
            <div className="text-[#DB4444]">
                Forget Password?
            </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
