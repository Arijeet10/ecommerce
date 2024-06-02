import Image from "next/image";

const Ratings = ({ rating }: { rating: number }) => {
 
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <>
      <div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((_, index) => {
            if (index < fullStars) {
              // show full star
              return (
                <Image key={index} src="/fullstar.svg" alt="" width={20} height={20} className="" />
              );
            } else if (index === fullStars && hasHalfStar) {
              // show half star
              return (
                <Image key={index} src="/halfstar.svg" alt="" width={20} height={20} className="" />
              );
            } else {
              // show empty star
              return (
                <Image key={index} src="/emptystar.svg" alt="" width={20} height={20} className="" />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Ratings;
