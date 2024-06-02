import { achievements, members, services } from "@/utils/constants";
import AchievementCard from "./_components/AchievementCard";
import MemberCard from "./_components/MemberCard";
import ServiceCard from "../../components/ServiceCard";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="px-4 py-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10 sm:gap-0">
            <div className="max-w-[100%] sm:max-w-[50%] flex flex-col gap-4 sm:gap-10 ">
              <div className="font-semibold text-2xl md:text-4xl lg:text-6xl">
                Our Story
              </div>
              <div className="flex flex-col gap-6 text-sm lg:text-base">
                <div>
                  Launced in 2023, Exclusive is South Asia's premier online
                  shopping makterplace with an active presense in India.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.
                </div>
                <div>
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </div>
              </div>
            </div>
            <div className="max-w-[100%] sm:max-w-[50%] w-[700px]">
              <Image
                src="/customers.svg"
                alt=""
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {achievements.map((data, index) => {
              return <AchievementCard key={index} index={index} data={data} />;
            })}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {members.map((data, index) => {
              return <MemberCard key={index} member={data} />;
            })}
          </div>
          <div className="py-10 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
            {services.map((data, index) => {
              return <ServiceCard key={index} index={index} service={data} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
