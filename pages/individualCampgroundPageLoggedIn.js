import Button from "@/components/Button";
import Image from "next/image";
import Banner from "@/components/Banner";
import Logo from "@/components/Logo";
import LogInNav from "@/components/LogInNav";
import { ChatIcon } from "@heroicons/react/solid";
const IndividualCampgroundPageLoggedIn = () => {
  return (
    <>
      <Banner />
      <div className=" space-y-8 px-6 min-h-screen container grid grid-rows-[auto_1fr_auto]  mx-auto ">
        <div className="pt-8">
          <LogInNav />
        </div>
        <div className="grid gap-6   lg:grid-cols-[1fr_1fr] lg:grid-rows-2">
          <div className="p-6 space-y-4 border-2 border-gray-200 rounded ">
            <div className="relative aspect-2 ">
              <Image
                className="absolute object-cover rounded"
                layout="fill"
                alt="Mount Ulap"
                src="/assets/mount-ulap.png"
                width="330"
                height="183"
              />
            </div>
            <div className="flex justify-between items-cente">
              <p>Mount Ulap</p>
              <p>$104.99/night</p>
            </div>
            <p>
              Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point
              trail located near Tuba, Benguet, Philippines, that offers the
              chance to see wildlife and is rated as moderate. The trail is
              primarily used for hiking.
            </p>
            <p className="italic">Submitted by Andrew Mike</p>
          </div>
          <div className="p-6 space-y-4 border-2 border-gray-200 rounded ">
            <div className="flex items-center justify-between">
              <p>Adam Jones</p>
              <p>13h ago </p>
            </div>
            <p>
              Honestly one of the best experiences ever. Took us a while to
              figure out how to get there but it was amazing!
            </p>
            <hr />
            <div className="flex items-center justify-between">
              <p>Issac Dylan</p>
              <p>1 day ago</p>
            </div>
            <p>
              Traveling changes you as a person, you gain more perspective, this
              is the perfect spot to do that.
            </p>
            <hr />
            <div className="flex items-center justify-between">
              <p>Hudson Luca</p>
              <p>3 days ago</p>
            </div>
            <div>
              Definitely recommend going there, not to far and not a lot of
              people to ruin the experience
            </div>
            <hr />
            <div className="flex justify-start lg:justify-end">
              <Button className="w-max">
                <span className="flex items-center">
                  <ChatIcon className="w-5 h-5 mr-2" />
                  Leave a Review
                </span>
              </Button>
            </div>
          </div>
          <div className="lg:col-start-1 lg:row-span-2 lg:row-start-1 ">
            <div className="p-6 border-2 border-gray-200 rounded ">
              <div className="relative aspect-1 md:aspect-2">
                <Image
                  layout="fill"
                  alt="map"
                  className="absolute object-cover"
                  src="/assets/Map.png"
                  height="385"
                  width="290"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-8">
          <Logo />
        </div>
      </div>
    </>
  );
};

export default IndividualCampgroundPageLoggedIn;
