"use client"

// import { useSession } from "next-auth/react";
import EditProfileForm from "./_components/EditProfileForm";
import { useContext } from "react";
import { UserContext } from "@/context/UserContextProvider";


const Profile=()=>{

    //const {data}=useSession()
    const {userData}=useContext(UserContext)

    return(
        <>
            <div className="px-4 py-4">
                <div className="flex items-center justify-between">
                    <div>Breadcrumb</div>
                    <div className="text-base sm:text-sm md:text-lg lg:text-2xl">
                        Welcome! <span className="text-red">{userData.fullname}</span>
                    </div>
                </div>
                <div className="flex text-sm sm:text-base">
                    <div className="w-[30%]">
                        <div>
                            <div className="font-medium">Manage My Account</div>
                            <div className="text-grey p-2">
                                <div className="text-red">My Profile</div>
                                <div>Address Book</div>
                                <div>Payment Options</div>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium">My Orders</div>
                            <div className="text-grey p-2">
                                <div>My Returns</div>
                                <div>My Cancellations</div>
                            </div>
                        </div>
                        <div className="font-medium">
                            My Wishlist
                        </div>
                    </div>
                    <div className="w-full">
                        <EditProfileForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;