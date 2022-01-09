import Image from "next/image";
import Logo from "../components/Logo";
import { CheckCircleIcon } from "@heroicons/react/solid";
import AirbnbLogo from "@/components/AirbnbLogo";
import BookingLogo from "@/components/BookingLogo";
import PlumGuideLogo from "@/components/PlumGuideLogo";
const Test = () => {
  return (
    <div className=" max-w-7xl mx-auto  grid lg:grid-rows-[auto_1fr] grid-rows-[auto_auto_auto] lg:grid-cols-[1fr_1fr] h-screen relative lg:overflow-hidden ">
      <div className="px-6 py-8 lg:pt-12 lg:px-12 ">
        <Logo />
      </div>
      <div className="row-span-2 ">
        <div className="relative lg:hidden aspect-h-1 aspect-w-1 md:aspect-h-9 md:aspect-w-16">
          <Image
            layout="fill"
            className="object-cover"
            alt="hero"
            src="/assets/hero-2.jpg"
            width="768"
            height="375"
          />
        </div>
        <div className="hidden md:hidden lg:block aspect-h-16 aspect-w-9">
          <Image
            layout="fill"
            className="object-cover "
            alt="hero"
            src="/assets/hero.jpg"
            width="661"
            height="900"
          />
        </div>
      </div>
      <div className="px-6 py-6 space-y-6 lg:px-12 lg:place-self-center">
        <p className="text-5xl">Explore the best camps on Earth.</p>
        <p>
          Yelpcamp is a cruated list of the best camping spots on Earth.
          Unfiltered unbaised rewievs
        </p>
        <div className="flex items-center">
          <CheckCircleIcon className="text-green-700 w-7 h-7" />
          <p className="ml-4">Add your own camp suhherstions</p>
        </div>
        <div className="flex items-center">
          <CheckCircleIcon className="text-green-700 w-7 h-7" />
          <p className="ml-4">Leave rewievs and experiences</p>
        </div>
        <div className="flex items-center">
          <CheckCircleIcon className="text-green-700 w-7 h-7" />
          <p className="ml-4">See locations for all camps</p>
        </div>

        <div className="px-4 py-3 text-white bg-gray-900 rounded w-max">
          View Campgrounds
        </div>
        <div>
          <p>Partnered with:</p>
          <div className="flex items-center justify-center">
            <AirbnbLogo />
            <BookingLogo />
            <PlumGuideLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
