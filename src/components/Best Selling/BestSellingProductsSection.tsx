import Button from "../ui/Button";
import Divider from "../ui/Divider";
import SectionHeading from "../ui/SectionHeading";
import BestSellingProducts from "./BestSellingProducts";

const BestSellingProductsSection = () => {
  return (
    <>
      <div className="flex flex-col gap-16">
        {/* Header */}
        <div className="flex justify-between">
          <div>
            <SectionHeading
              sectionCategory="This Month"
              headingTitle="Best Selling Products"
            />
          </div>
          <div>
            <Button text="View All" color="#DB4444" />
          </div>
        </div>
        {/* Main */}
        <div>
            <BestSellingProducts />
        </div>
        {/* Footer */}
        <Divider />
      </div>
    </>
  );
};

export default BestSellingProductsSection;
