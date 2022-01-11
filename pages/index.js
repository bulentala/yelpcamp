import Link from "next/link";
import AirbnbLogo from "@/components/AirbnbLogo";
import BookingLogo from "@/components/BookingLogo";
import PlumGuideLogo from "@/components/PlumGuideLogo";
import Button from "@/components/Button";
import Image from "next/image";
import Logo from "@/components/Logo";
import { CheckCircleIcon } from "@heroicons/react/solid";
const Index = () => {
  return (
    <div
      className=" bg-orange-50 grid  grid-rows-[auto_auto_1fr] grid-cols-1 min-h-screen
lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_1fr]
"
    >
      <div className="p-6">
        <Logo />
      </div>
      <div className="relative lg:row-span-2 aspect-1 md:aspect-2 lg:hidden">
        <Image
          layout="fill"
          alt="hro"
          className="absolute object-cover "
          src="/assets/hero-2.jpg"
          width="768"
          height="375"
        />
      </div>
      <div className="relative hidden lg:inline-block lg:row-span-2">
        <Image
          layout="fill"
          alt="hro"
          className="absolute object-cover "
          src="/assets/hero.jpg"
          width="661"
          height="900"
        />
      </div>
      <div className="self-center p-6 space-y-4">
        <p className="text-4xl font-bold ">Explore the best camps on Earth.</p>
        <p className="text-xl leading-relaxed">
          YelpCamp is a curated list of the best camping spots on Earth.
          Unfiltered and unbiased reviews.
        </p>
        <div className="flex items-center">
          <CheckCircleIcon className="w-6 h-6 text-green-600" />
          <p className="ml-2 text-lg">Add your own camp suggestions. </p>
        </div>
        <div className="flex items-center">
          <CheckCircleIcon className="w-6 h-6 text-green-600" />
          <p className="ml-2 text-lg">Leave reviews and experiences. </p>
        </div>
        <div className="flex items-center">
          <CheckCircleIcon className="w-6 h-6 text-green-600" />
          <p className="ml-2 text-lg">See locations for all camps. </p>
        </div>
        <Link href="/individualCampground">
          <a className="inline-block">
            <Button className="w-max">View Campgrounds </Button>
          </a>
        </Link>
        <p className="text-gray-500">Partnered with:</p>
        <div className="flex items-center ">
          <AirbnbLogo />
          <BookingLogo />
          <PlumGuideLogo />
        </div>
      </div>
    </div>
  );
};

export default Index;
