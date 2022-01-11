import Link from "next/link";
import { FireIcon } from "@heroicons/react/solid";
const Logo = () => {
  return (
    <Link href="/">
      <a>
        <div className="flex items-center">
          <FireIcon className="w-5 h-5 text-red-600" />
          <p className="font-semibold">YelpCamp</p>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
