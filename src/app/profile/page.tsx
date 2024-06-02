"use client"

import { useSession } from "next-auth/react";
import EditProfileForm from "./_components/EditProfileForm";


const Profile=()=>{

    const {data}=useSession()

    return(
        <>
            <div className="px-4 py-4">
                <div className="flex items-center justify-between">
                    <div>Breadcrumb</div>
                    <div className="text-lg sm:text-base md:text-lg lg:text-2xl">
                        Welcome! <span className="text-red">{data?.user?.name}</span>
                    </div>
                </div>
                <div className="flex">
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