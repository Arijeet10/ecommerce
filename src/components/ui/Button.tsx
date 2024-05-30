const Button = ({
  text,
  color,
  borderColor,
  textColor,
}: {
  text: string;
  color: string;
  borderColor?: string;
  textColor?: string;
}) => {
  return (
    <>
      <button
        className={`px-6 py-3 w-full rounded-md ${
          color == "#DB4444" && "bg-red"
        } ${color == "#00ff66" && "bg-green"} border ${
          borderColor
            ? `border-[${borderColor}]`
            : `${
                (color == "#DB4444" && "border-red") ||
                (color == "#00ff66" && "border-green")
              }`
        } transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${
          textColor ? `text-[${textColor}]` : "text-[#FAFAFA]"
        }   flex items-center justify-center`}
      >
        <div className="font-medium text-nowrap">{text}</div>
      </button>
    </>
  );
};

export default Button;
