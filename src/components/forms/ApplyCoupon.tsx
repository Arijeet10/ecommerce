import Button from "../ui/Button";


const ApplyCoupon=()=>{

    return(
        <>
                  <div className="flex items-center gap-4">
            <div className="px-3 py-3 border border-[#000000] rounded-md">
              <input 
                type="text"
                placeholder="Coupon Code"
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
            <div>
                <Button text="Apply Coupon" color="#DB4444" />
            </div>
          </div>
        </>
    )
}

export default ApplyCoupon;