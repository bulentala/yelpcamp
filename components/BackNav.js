import Logo from "@/components/Logo";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

const BackNav = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <div className="flex items-center text-gray-500">
        <ArrowNarrowLeftIcon className="w-5 h-5" />
        <div>Back to Campgrounds</div>
      </div>
    </div>
  );
};

export default BackNav;
