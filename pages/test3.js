import Image from "next/image";

const Test3 = () => {
  return (
    <div className="max-w-5xl p-12 border-8 border-red-500 ">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <Image
          alt=""
          src="https://dummyimage.com/534x354"
          width="534"
          height="354"
        />

        <div className="col-span-2">
          <Image
            alt=""
            src="https://dummyimage.com/1040x409"
            width="1040"
            height="409"
          />
        </div>
        <div className="col-start-2 row-start-1 place-self-center">
          <p className="text-[45px] font-serif ">
            Discover yourself with nature
          </p>
          <p className="text-[20px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing
            elit. Tincidunt facilisis nunc
          </p>
          <div className="text-[18px] border border-gray-500 w-max px-4 py-3  ">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test3;
