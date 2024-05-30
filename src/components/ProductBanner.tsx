import Button from "./ui/Button";

const ProductBanner = () => {
  return (
    <>
      <div className="p-4  flex justify-between bg-[#000000] text-[#FAFAFA]">
        <div className="flex flex-col justify-center gap-4">
          <div className="text-[#00FF66] font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Category</div>
          <div className="font-semibold text-lg sm:text-xl md:text-3xl lg:text-5xl">Enhance Your Music Experience</div>
          <div className=" flex items-center gap-1 sm:gap-4">
            <div className="max-w-[80px] max-h-[80px]  p-[1vw] w-[10vw] h-[10vw] sm:w-[10vw] sm:h-[10vw] rounded-full bg-[#FFFFFF] text-[#000000] flex flex-col items-center justify-center">
                <div className="font-semibold">23</div>
                <div>Hours</div>
            </div>
            <div className="max-w-[80px] max-h-[80px] p-[1vw] w-[10vw] h-[10vw] sm:w-[10vw] sm:h-[10vw] rounded-full bg-[#FFFFFF] text-[#000000] flex flex-col items-center justify-center">
                <div className="font-semibold">05</div>
                <div>Days</div>
            </div>
            <div className="max-w-[80px] max-h-[80px] p-[1vw] w-[10vw] h-[10vw] sm:w-[10vw] sm:h-[10vw] rounded-full bg-[#FFFFFF] text-[#000000] flex flex-col items-center justify-center">
                <div className="font-semibold">59</div>
                <div>Minutes</div>
            </div>
            <div className="max-w-[80px] max-h-[80px] p-[1vw] w-[10vw] h-[10vw] sm:w-[10vw] sm:h-[10vw] rounded-full bg-[#FFFFFF] text-[#000000] flex flex-col items-center justify-center">
                <div className="font-semibold">35</div>
                <div>Seconds</div>
            </div>
          </div>
          <div className="flex justify-start max-w-[200px]">
            <Button text="Buy Now!" color="#00ff66" />
          </div>
        </div>
        <div className="relative">
            <div>
          <img src="/jbl-boombox.svg" alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBanner;
