"use client";

import { useEffect, useState } from "react";

interface TimeData {
  label: string;
  value: string;
}

const FlashSaleTimer = () => {
  const [saleTimer, setSaleTimer] = useState<TimeData[]>([
    { label: "Days", value: "00" },
    { label: "Hours", value: "00" },
    { label: "Minutes", value: "00" },
    { label: "Seconds", value: "00" },
  ]);

  const flashSaleEndDate: number = new Date("June 30, 2024 23:59:59").getTime();

  const padWithZero = (number: number): string => {
    return number < 10 ? "0" + number : number.toString();
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now: number = new Date().getTime();
      const remainingTime: number = flashSaleEndDate - now;

      if (remainingTime < 0) {
        clearInterval(timerId);
        setSaleTimer([
          { label: "Days", value: "00" },
          { label: "Hours", value: "00" },
          { label: "Minutes", value: "00" },
          { label: "Seconds", value: "00" },
        ]);
      } else {
        const days: number = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes: number = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds: number = Math.floor((remainingTime % (1000 * 60)) / 1000);

        setSaleTimer([
          { label: "Days", value: padWithZero(days) },
          { label: "Hours", value: padWithZero(hours) },
          { label: "Minutes", value: padWithZero(minutes) },
          { label: "Seconds", value: padWithZero(seconds) },
        ]);
      }
    };

    const timerId = setInterval(updateCountdown, 1000);

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="flex items-center gap-2">
        {saleTimer &&
          saleTimer.map((item, i) => {
            return (
              <div key={i} className={`flex items-center gap-2 `}>
                <div className="">
                  <div className="font-medium text-xs sm:text-sm">{item.label}</div>
                  <div className="font-bold text-lg sm:text-2xl">
                    {item.value}
                  </div>
                </div>
                <div className={`${i == saleTimer.length - 1 && "hidden"}`}>
                  <div className="flex flex-col gap-2">
                    <div className="bg-[#E07575] rounded-full w-1 h-1" />
                    <div className="bg-[#E07575] rounded-full w-1 h-1" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FlashSaleTimer;
