import { FireIcon } from "@heroicons/react/solid";
const Logo = () => {
  return (
    <div className="flex items-center">
      <FireIcon className="w-5 h-5 text-red-600" />
      <p className="font-semibold">YelpCamp</p>
    </div>
  );
};

export default Logo;
