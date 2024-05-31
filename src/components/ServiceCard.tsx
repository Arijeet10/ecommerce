import { TbTruckDelivery } from "react-icons/tb";
import { TbHeadset } from "react-icons/tb";
import { BsShieldCheck } from "react-icons/bs";

const ServiceCard = ({
  service,
  index,
}: {
  service: { title: string; desc: string };
  index: number;
}) => {
  return (
    <>
      <div className="w-full h-[30vh]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <div
              className={`rounded-full border-8 border-grey  flex items-center justify-center`}
            >
              <div className="p-2 rounded-full bg-[#000000] text-[#FAFAFA]">
                <TbTruckDelivery
                  className={`w-10 h-10 ${index !== 0 && "hidden"}`}
                />
                <TbHeadset className={`w-10 h-10 ${index !== 1 && "hidden"}`} />
                <BsShieldCheck
                  className={`w-10 h-10 ${index !== 2 && "hidden"}`}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">{service.title}</div>
            <div className="text-xs lg:text-sm">{service.desc}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
