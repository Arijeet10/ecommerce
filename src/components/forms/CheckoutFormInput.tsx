"use client";

const CheckoutFormInput = () => {
  return (
    <>
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex flex-col gap-8 text-grey">
          <div className="flex flex-col gap-2">
            <div>
              First Name<span className="text-[#E07575]">*</span>
            </div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Company Name</div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              Steet Address<span className="text-[#E07575]">*</span>
            </div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Apartment, floor, etc. (optional)</div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              Town/City<span className="text-[#E07575]">*</span>
            </div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              Phone Number<span className="text-[#E07575]">*</span>
            </div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              Email Address<span className="text-[#E07575]">*</span>
            </div>
            <div className="p-2 bg-[#F5F5F5]">
              <input
                type="text"
                placeholder=""
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <input type="checkbox" className="accent-red" />
        </div>
        <div>Save this information for faster check-out next time</div>
      </div>
      </div>
    </>
  );
};

export default CheckoutFormInput;
