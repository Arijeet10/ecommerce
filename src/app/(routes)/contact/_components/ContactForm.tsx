"use client";

import Button from "@/components/ui/Button";


const ContactForm = () => {
  return (
    <>
      <div className="p-4 shadow-md rounded-md flex flex-col gap-8 text-grey">
        <div className="flex items-center justify-between gap-4 ">
          <div className="p-2 w-full rounded-md bg-[#F5F5F5]">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full focus:outline-none bg-transparent"
            />
          </div>
          <div className="p-2 w-full rounded-md bg-[#F5F5F5]">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full focus:outline-none bg-transparent"
            />
          </div>
          <div className="p-2 w-full rounded-md bg-[#F5F5F5]">
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="p-2 rounded-md bg-[#F5F5F5]">
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full focus:outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center justify-end">
          <div>
            <Button text="Send Message" color="#DB4444" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
