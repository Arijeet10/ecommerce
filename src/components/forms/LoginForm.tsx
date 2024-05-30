import Button from "../ui/Button";

const LoginForm = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
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
        </div>
        <div className="flex items-center justify-between">
            <div>
                <Button text="Log In" color="#DB4444" />
            </div>
            <div className="text-[#DB4444]">
                Forget Password?
            </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
