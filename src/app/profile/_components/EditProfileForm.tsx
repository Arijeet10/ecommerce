import Button from "@/components/ui/Button";



const EditProfileForm = () => {
  return (
    <>
      <div className="p-2 flex flex-col gap-4 shadow-md rounded-md">
        <div className="text-red font-medium text-2xl sm:text-lg md:text-2xl lg:text-3xl">
          Edit Your Profile
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <div>Full Name</div>
            <div className="p-2 rounded-md bg-[#F5F5F5]">
              <input
                type="text"
                placeholder="Name"
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Email</div>
            <div className="p-2 rounded-md bg-[#F5F5F5]">
              <input
                type="text"
                placeholder="Email"
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div>Password Changes</div>
              <div className="p-2 rounded-md bg-[#F5F5F5]">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full focus:outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="p-2 rounded-md bg-[#F5F5F5]">
              <input
                type="password"
                placeholder="New Password"
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
            <div className="p-2 rounded-md bg-[#F5F5F5]">
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-8">
              <div>Cancel</div>
              <div>
                <Button text="Save Changes" color="#DB4444" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfileForm;
