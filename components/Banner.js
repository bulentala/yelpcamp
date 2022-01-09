import { XIcon } from "@heroicons/react/solid";
const Banner = () => {
  return (
    <div className="flex items-center justify-center py-3 text-sm text-white bg-gray-900">
      <p>
        This project was made by{" "}
        <span className="text-teal-500 underline">Colt Steele</span> and
        designed by <span className="text-teal-500 underline">Coldewell</span>
      </p>
      <XIcon className="w-4 h-4 ml-4" />
    </div>
  );
};

export default Banner;
