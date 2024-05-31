import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <>
      <div className="px-1 sm:px-2 md:px-4 py-6 bg-[#000000] text-[#FAFAFA] flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 md:gap-3 lg:gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <div className="text-sm sm:text-base md:text-lg  font-bold">Exclusive</div>
                  <div className="font-medium sm:text-sm md:text-base text-xs">Subscribe</div>
                </div>
                <div className="sm:text-sm md:text-base text-xs">Get 10% off your first order</div>
              </div>
              <div className="p-2 border rounded-sm flex items-center sm:text-sm md:text-base text-xs">
                <div className="w-full">
                    <input 
                        type="text"
                        placeholder="Enter your email"
                        className="w-full focus:outline-none bg-transparent"
                    />
                </div>
                <div className="">
                    <VscSend />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:text-sm md:text-base text-xs">
              <div className="text-sm sm:text-base md:text-lg  font-bold">Support</div>
              <div className="sm:text-sm md:text-base text-xs">
                <div className="">
                  Electronics Complex, Bidhannagar Kolkata, Kolkata - 700 091
                </div>
                <div>exclusive@gmail.com</div>
                <div>+91854-85818-9791</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:text-sm md:text-base text-xs">
              <div className="text-sm sm:text-base md:text-lg  font-bold">Account</div>
              <div>
                <div>My Account</div>
                <div>Login/Register</div>
                <div>Cart</div>
                <div>Wishlist</div>
                <div>Shop</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:text-sm md:text-base text-xs">
              <div className="text-sm sm:text-base md:text-lg  font-bold">Quick Link</div>
              <div>
                <div>Privacy Policy</div>
                <div>Terms of Use</div>
                <div>FAQ</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 sm:text-sm md:text-base text-xs">
                <div className="text-sm sm:text-base md:text-lg  font-bold">
                  <div>Download App</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[#7D8184]">
                    Save $3 with App New User Only
                  </div>
                  <div className="flex justify-between gap-2 ">
                    <div>
                      <img src="/qrcode.svg" alt="" className="" />
                    </div>
                    <div>
                      <div>
                        <img src="/playstore.svg" alt="" className="" />
                      </div>
                      <div>
                        <img src="/appstore.svg" alt="" className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-start">
                <div className="flex items-center gap-2">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="text-[#7D8184] text-sm">
            © Copyright Arijeet Sarkar 2024. All right reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
