import Image from "next/image";

const Test3 = () => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div className="p-4 text-center md:text-left md:flex lg:block">
        <Image
          alt=""
          src="https://dummyimage.com/520x333"
          width="520"
          height="333"
        />
        <div className="pl-4 lg:pl-0">
          <p className="text-[23px] font-serif text-[#475F45]">
            Plants Around Us
          </p>
          <p className="text-[16px] text-[#414840]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit...
          </p>
          <p className="text-[#414840] text-[16px] italic">December 23, 2021</p>
        </div>
      </div>
      <div>
        <div className="p-4 text-center border-b border-gray-200 md:text-left md:flex">
          <Image
            alt=""
            src="https://dummyimage.com/236x151"
            width="236"
            height="151"
          />
          <div className="pl-4 ">
            <p className="text-[23px] font-serif text-[#475F45]">
              Lush Gardens
            </p>
            <p className="text-[20px] text-[#414840]">
              Lorem ipsum dolor sit amet, consectetur donec adipiscing elit.
              Tincidunt facilisis nunc lorem
            </p>
            <p className="text-[#414840] text-[16px] italic">
              December 16, 2021
            </p>
          </div>
        </div>
        <div className="p-4 text-center border-b border-gray-200 md:text-left md:flex">
          <Image
            alt=""
            src="https://dummyimage.com/236x151"
            width="236"
            height="151"
          />
          <div className="pl-4 ">
            <p className="text-[23px] font-serif text-[#475F45]">
              Lush Gardens
            </p>
            <p className="text-[20px] text-[#414840]">
              Lorem ipsum dolor sit amet, consectetur donec adipiscing elit.
              Tincidunt facilisis nunc lorem
            </p>
            <p className="text-[#414840] text-[16px] italic">
              December 16, 2021
            </p>
          </div>
        </div>
        <div className="p-4 text-center border-b border-gray-200 md:text-left md:flex">
          <Image
            alt=""
            src="https://dummyimage.com/236x151"
            width="236"
            height="151"
          />
          <div className="pl-4 ">
            <p className="text-[23px] font-serif text-[#475F45]">
              Lush Gardens
            </p>
            <p className="text-[20px] text-[#414840]">
              Lorem ipsum dolor sit amet, consectetur donec adipiscing elit.
              Tincidunt facilisis nunc lorem
            </p>
            <p className="text-[#414840] text-[16px] italic">
              December 16, 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test3;
