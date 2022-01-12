import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
import { imageConfigDefault } from "next/dist/server/image-config";

const Index = () => {
  return (
    <>
      {/* nav */}
      <section className="flex items-center justify-between">
        <div className="flex items-center">
          <div>LOGO</div>
          <div>
            <p className="text-[23px]">MIST GARDENS</p>
            <p className="text-[15px] italic">Museum & Botanical GArden</p>
          </div>
        </div>
        <MenuIcon className="w-5 h-5" />
      </section>
      {/* nav END */}
      <section className="text-center">
        <p className="font-serif text-[57px]">A Beautiful Adventure Awaits</p>
        <p className="text-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
          impedit. Consequatur!
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-full px-3 py-3 border border-green-700 text-[18px]">
            BUY TICKETS
          </div>
          <div className="w-full px-3 py-3 border border-green-700 text-[18px]">
            LEARN MORE
          </div>
        </div>
        <div>
          <Image
            className="rounded-t-full"
            alt=""
            src="https://dummyimage.com/478x660"
            width="478"
            height="660"
          />
        </div>
      </section>
      {/* HERO END */}
      {/* DISCOVER START */}
      <section>
        <Image
          className=""
          alt=""
          src="https://dummyimage.com/534x354"
          width="534"
          height="354"
        />
        <Image
          className=""
          alt=""
          src="https://dummyimage.com/1040x409"
          width="1040"
          height="409"
        />
        <p className="text-[45px] font-serif ">Discover yourself with nature</p>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing elit.
          Tincidunt facilisis nunc
        </p>
        <div className="text-[18px]">Learn More</div>
      </section>
      {/* DISCOVER END */}
      {/* NEWS START */}
      <section>
        <p className="text-[45px] font-serif ">News & Updates</p>
        <p className="text-[14px] ">View all posts</p>
        <Image
          className=""
          alt=""
          src="https://dummyimage.com/520x333"
          width="520"
          height="333"
        />
        <p className="text-[23px] font-serif ">Plants Around Us</p>
        <p className="text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit...
        </p>
        <p className="text-[16px] italic"></p>
        <Image
          className=""
          alt=""
          src="https://dummyimage.com/236x151"
          width="236"
          height="151"
        />
        <p className="text-[23px] font-serif">Lush Gardens</p>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet, consectetur donec adipiscing elit.
          Tincidunt facilisis nunc lorem{" "}
        </p>
        <p className="text-[16px] italic">December 16, 2021</p>
        <Image
          className=""
          alt=""
          src="https://dummyimage.com/236x151"
          width="236"
          height="151"
        />
        <p className="text-[23px] font-serif">Exotic Nature</p>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet, consectetur donec adipiscing elit.
          Tincidunt facilisis nunc lorem{" "}
        </p>
        <p className="text-[16px] italic">November 11, 2021</p>
        <Image
          className=""
          alt=""
          src="https://dummyimage.com/236x151"
          width="236"
          height="151"
        />
        <p className="text-[23px] font-serif">It Starts with Soil</p>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet, consectetur donec adipiscing elit.
          Tincidunt facilisis nunc lorem
        </p>
        <p className="text-[16px] italic">November 3, 2021</p>
      </section>
      {/* NEWS END */}
    </>
  );
};

export default Index;
