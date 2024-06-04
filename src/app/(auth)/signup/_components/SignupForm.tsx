"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const SignupForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errorMessage,setErrorMessage]=useState({
    fullname:"",
    email:"",
    password:""
  })

  //validate name
  const validateName=()=>{
    if(!formData.fullname){
      setErrorMessage(prev=>({...prev,fullname:"Name required!"}))
    }else{
     setErrorMessage(prev=>({...prev,fullname:""})) 
    }
  }

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

  const handleSubmit = async() => {
    if(errorMessage.fullname&&errorMessage.email&&errorMessage.password){
      alert("Invalid Input!")
    }else{
      try {
        const res=await fetch("/api/auth/signup",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        })
        const response=await res.json();
        console.log(response)
        if(res.ok){
          toast.success(response.message)
          router.push("/login")
        }else{
          toast.error(response.message)
        }
      } catch (error) {
        console.log(error)
        toast.error("Oops something went wrong!")
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="font-medium text-3xl">Create an account</div>
          <div>Enter your details below</div>
        </div>
        <form
          onSubmit={(e) =>e.preventDefault()}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-10 text-[#7D8184]">
            <div className="py-2 w-full border-b border-[#7D8184]">
              <input
                type="text"
                placeholder="Name"
                className="w-full focus:outline-none bg-transparent"
                value={formData.fullname}
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                onBlur={()=>validateName()}
              />
            </div>
            <div className="py-2 w-full border-b border-[#7D8184]">
              <input
                type="text"
                placeholder="Email or Phone number"
                className="w-full focus:outline-none bg-transparent"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onBlur={()=>validateEmail()}
              />
            </div>
            <div className="py-2 w-full border-b border-[#7D8184]">
              <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none bg-transparent"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                onBlur={()=>validatePassword()}
              />
            </div>
            <div className="flex flex-col gap-1 text-red text-sm">
              <div>{errorMessage.fullname}</div>
              <div>{errorMessage.email}</div>
              <div>{errorMessage.password}</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div onClick={()=>{validateName();validateEmail();validatePassword();handleSubmit();}} className="w-full">
              <Button text="Create Account" color="#DB4444" />
            </div>
            <div className="flex flex-col gap-8">
              <div onClick={()=>signIn('google')} className="cursor-pointer px-6 py-3 rounded-md border border-[#000000] hover:bg-[#000000] hover:text-[#FAFAFA] flex items-center justify-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <div>
                  <FcGoogle />
                </div>
                <div>Sign in with Google</div>
              </div>
              <div className="flex items-center gap-2">
                <div>Already have an account?</div>
                <Link href="/login" className="border-b border-[#000000]">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
