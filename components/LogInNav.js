import Link from "next/link";
import Logo from "@/components/Logo";
import { MenuIcon } from "@heroicons/react/solid";
const LoggedInNav = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Logo />
        <div className="hidden lg:inline-block">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </div>
      <div className="flex space-x-4 items-centers">
        <div className="hidden lg:inline-block">JohnDoe</div>
        <div className="hidden lg:inline-block">
          <Link href="/individualCampground">
            <a>Logout</a>
          </Link>
        </div>
        <MenuIcon className="p-1 bg-gray-100 rounded w-7 h-7 lg:hidden" />
      </div>
    </div>
  );
};

export default LoggedInNav;
