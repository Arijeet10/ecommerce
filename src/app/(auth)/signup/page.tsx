import Image from "next/image";
import SignupForm from "./_components/SignupForm";

const Signup = () => {
  return (
    <>
    <div className="py-4 pr-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <div className="w-full sm:w-[50vw] md:w-[60vw] lg:w-auto">
          <Image src="/ecommerce-banner.svg" alt="" width={100} height={100} className="h-full w-full" />
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
