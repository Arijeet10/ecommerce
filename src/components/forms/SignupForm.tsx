"use client";

import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import { FcGoogle } from "react-icons/fc";


const SignupForm = () => {

    const router=useRouter()

  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="font-medium text-3xl">Create an account</div>
          <div>Enter your details below</div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 text-[#7D8184]">
            <div className="py-2 w-full border-b border-[#7D8184]">
              <input
                type="text"
                placeholder="Name"
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
            <div className="py-2 w-full border-b border-[#7D8184]">
              <input
                type="text"
                placeholder="Email or Phone number"
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
            <div className="py-2 w-full border-b border-[#7D8184]">
              <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full">
                <Button text="Create Account" color="#DB4444" />
            </div>
            <div className="flex flex-col gap-8">
                <div className="px-6 py-3 rounded-md border border-[#000000] hover:bg-[#000000] hover:text-[#FAFAFA] flex items-center justify-center gap-2">
                    <div>
                        <FcGoogle />
                    </div>
                    <div>Sign up with Google</div>
                </div>
                <div className="flex items-center gap-2">
                    <div>Already have an account?</div>
                    <button onClick={()=>router.push("/login")} className="border-b border-[#000000]">Log in</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
