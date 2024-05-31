import SignupForm from "@/components/forms/SignupForm";

const Signup = () => {
  return (
    <>
    <div className="py-4 pr-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <div className="w-full sm:w-[50vw] md:w-[60vw] lg:w-auto">
          <img src="/ecommerce-banner.svg" alt="" className="" />
        </div>
        <div className="flex justify-start px-4">
            <SignupForm />
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
