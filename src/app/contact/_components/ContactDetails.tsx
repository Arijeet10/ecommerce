import Divider from "@/components/ui/Divider";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const ContactDetails = () => {
  return (
    <>
      <div className="p-4 shadow-md rounded-md flex flex-col gap-8 text-sm">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-start">
            <div className="flex items-center gap-4">
              <div className="p-1 rounded-full bg-[#DB4444] text-[#FAFAFA] flex items-center justify-center">
                <div>
                  <IoCallOutline className="w-7 h-7" />
                </div>
              </div>
              <div className="text-base font-medium">Call to us</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>We are available 24/7, 7 days a week.</div>
            <div>Phone: +9198xxxxxxxx</div>
          </div>
        </div>
        <div>
          <Divider />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-4">
              <div className="p-1 rounded-full bg-[#DB4444] text-[#FAFAFA] flex items-center justify-center">
                <div>
                  <CiMail className="w-7 h-7" />
                </div>
              </div>
              <div className="text-base font-medium">Write To Us</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              Fill out our form and we will contact you within 24 hours.
            </div>
            <div>Emails: customer@exclusive.com</div>
            <div>Emails: support@exclusive.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
