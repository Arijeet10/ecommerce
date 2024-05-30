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
                <img key={index} src="/fullstar.svg" alt="" className="" />
              );
            } else if (index === fullStars && hasHalfStar) {
              // show half star
              return (
                <img key={index} src="/halfstar.svg" alt="" className="" />
              );
            } else {
              // show empty star
              return (
                <img key={index} src="/emptystar.svg" alt="" className="" />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Ratings;
