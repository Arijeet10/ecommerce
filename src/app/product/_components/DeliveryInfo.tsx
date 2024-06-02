import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";


const DeliveryInfo=()=>{

    return(
        <>
            <div>
            <div className="px-2 py-4 border rounded-t-md border-[#00000080]">
                <div className="flex items-center gap-4">
                  <div>
                    <TbTruckDelivery className="w-10 h-10" />
                  </div>
                  <div>
                    <div>Free Delivery</div>
                    <div className="underline">
                      Enter your postal code for Delivery Availability
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 py-4 border-b border-x rounded-b-md border-[#00000080]">
                <div className="flex items-center gap-4">
                  <div>
                    <TfiReload className="w-10 h-10" />
                  </div>
                  <div>
                    <div>Return Delivery</div>
                    <div>
                      Free 30 Days Delivery Returns.{" "}
                      <span className="underline">Details</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default DeliveryInfo;