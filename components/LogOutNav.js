import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
const LogOutNav = () => {
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
      <div className="flex items-center space-x-4">
        <div className="hidden lg:inline">
          <Link href="/individualCampgroundPageLoggedIn">
            <a>Login</a>
          </Link>
        </div>
        <Button className="hidden w-max lg:inline">Create Account</Button>
        <MenuIcon className="p-1 bg-gray-100 rounded w-7 h-7 lg:hidden" />
      </div>
    </div>
  );
};

export default LogOutNav;
