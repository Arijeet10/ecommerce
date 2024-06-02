import Link from "next/link";
import Button from "@/components/ui/Button";

const NotFound=()=>{
  return (
    <>
      <div className="px-4 py-4 w-full h-[100vh] flex items-center justify-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
              404 Not Found
            </div>
            <div>Your visited page not found. You may go home page.</div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/">
              <Button text="Back to home page" color="#DB4444" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
