

const SectionHeading = ({sectionCategory,headingTitle}:{sectionCategory:string,headingTitle:string}) => {
  return (
    <>
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 sm:w-6 sm:h-12 md:w-8 md:h-16 lg:w-10 lg:h-20 bg-[#DB4444] rounded-lg" />
          <div className="text-[#DB4444] font-semibold text-sm sm:text-base">{sectionCategory}</div>
        </div>
        <div className="text-lg sm:text-xl md:text-3xl font-semibold">{headingTitle}</div>
      </div>
    </>
  );
};

export default SectionHeading;
