import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const MemberCard = ({
  member,
}: {
  member: { name: string; position: string; photo: string };
}) => {
  return (
    <>
      <div className="w-full h-[70vh]  flex flex-col gap-8">
        <div className="h-[70%] rounded-md bg-[#F5F5F5] flex items-center justify-center">
          <Image
            src={member.photo}
            alt=""
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-[30%] flex justify-start items-end">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="font-medium text-base sm:text-lg md:text-2xl lg:text-3xl">
                {member.name}
              </div>
              <div className="text-xs sm:text-base">{member.position}</div>
            </div>
            <div className="flex items-center gap-4">
              <CiTwitter />
              <FaInstagram />
              <RiLinkedinLine />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
