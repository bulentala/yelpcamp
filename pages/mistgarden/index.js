import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
import { imageConfigDefault } from "next/dist/server/image-config";

const Index = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* nav */}
      <section className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="mr-3">
            <svg
              className=" w-14 h-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 59 59"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.5 59C45.792 59 59 45.792 59 29.5S45.792 0 29.5 0 0 13.208 0 29.5c0 8.433 3.539 16.04 9.212 21.416.73-.457 1.456-.92 2.176-1.389l.255-1.452a38.4 38.4 0 0 1 .168-.9c.05-.253.106-.514.165-.784l.025-.113a65.2 65.2 0 0 0 .706-3.667h-.088c-2.329.043-4.464-.586-5.698-1.974a4.321 4.321 0 0 1-1.08-2.374c-.125-1.014.07-2.21.648-3.593l.09-.257.393.086c1.503.292 3.427.681 4.737 2.381.603.781 1.077 1.843 1.313 3.31.022-.225.041-.45.059-.676.1-1.332.125-2.66.016-3.91-2.534-1-4.567-3.964-5.158-7.2-.228-1.251-.249-2.545.012-3.756.396-1.847 1.407-3.507 3.122-4.623l.18-.127.282.238c2.227 1.817 3.345 4.393 3.648 7.18.286 2.65-.174 5.491-1.117 8.052l-.148.382c.185 1.218.256 2.51.244 3.81-.022 2.477-.325 4.976-.705 7.014a18.32 18.32 0 0 1-.191.919c-.077.32-.16.623-.243.908l-.018.058c5.016-3.36 9.735-6.982 13.98-10.885-.011-.158-.03-.466-.033-.886a7.54 7.54 0 0 1 .017-.665c.018-.213.05-.44.084-.677v-.003a30.567 30.567 0 0 0 .253-2.337 11.867 11.867 0 0 1-3.697-4.052 9.335 9.335 0 0 1-.902-2.278c-.193-.803-.257-1.57-.155-2.244.192-1.296.868-2.278 2.145-2.598.907-.347 1.873-.01 2.715.795.846.809 1.561 2.108 1.941 3.6.533 2.104.372 4.576-.971 6.6.036.315.064.63.084.942.036.52.053 1.026.041 1.498a9.13 9.13 0 0 1-.056.928c2.753-2.644 5.286-5.413 7.549-8.312a21.012 21.012 0 0 0 1.552-2.255l-.198-.377c-1.07-1.982-1.709-4.572-1.677-7.006.015-1.095.165-2.158.46-3.112.306-.983.75-1.859 1.357-2.538.95-1.067 2.243-1.698 3.916-1.584 1.065-.022 1.8.608 2.227 1.645.605 1.468.545 3.819-.093 6.119-.788 2.834-2.477 5.543-4.748 6.554a21.242 21.242 0 0 1-1.975 3.177 72.17 72.17 0 0 1-1.317 1.721c.252-.117.513-.23.782-.341.43-.177.877-.342 1.338-.489.857-1.672 2.365-3.155 4.045-4.12a9.407 9.407 0 0 1 2.366-.973c.827-.208 1.628-.279 2.338-.174 1.317.195 2.341.887 2.693 2.225.369.955.363 1.747.116 2.394-.395 1.043-1.458 1.732-2.837 2.115-2.671.745-6.542.326-8.457-.455h-.001l-.242.12c-.837.424-1.586.925-2.25 1.37h-.001c-.213.142-.417.278-.613.405-.35.226-.675.411-.954.57l-.014.008c-.482.273-.82.445-.944.506-3.126 3.558-6.636 6.926-10.431 10.108.117-.016.24-.032.368-.046.206-.023.423-.044.649-.066.774-.074 1.65-.158 2.542-.365.265-.062.53-.13.796-.207l.103-.223c1.216-2.742 3.387-4.287 5.832-4.985a11.992 11.992 0 0 1 3.07-.443c1.598-.025 3.166.243 4.525.616l.373.086-.167.453c-1.132 3.264-3.193 4.896-5.417 5.6-2.68.847-5.623.317-7.557-.41-.706.358-1.437.642-2.15.868-.582.185-1.145.333-1.677.434-.406.079-.79.144-1.141.165a8.106 8.106 0 0 1-1.778-.136 134.927 134.927 0 0 1-10.114 7.392A29.38 29.38 0 0 0 29.5 59ZM13.47 33.701c.661-2.044.984-4.228.822-6.303-.193-2.47-1.069-4.786-2.892-6.514-1.269 1.056-1.92 2.484-2.175 4.006a9.69 9.69 0 0 0 .032 3.277c.448 2.544 1.799 4.966 3.661 6.08a9.833 9.833 0 0 0-.638-2.173.25.25 0 0 1 .45-.217c.299.564.543 1.184.74 1.844Zm14.113-4.018c.17.36.311.754.428 1.171.6-1.42.651-3 .369-4.405-.32-1.593-1.054-2.976-1.958-3.653-.477-.358-.995-.519-1.514-.354-.711.326-1.037.924-1.142 1.653-.093.653.032 1.403.285 2.208.2.633.488 1.29.848 1.943.608 1.108 1.426 2.204 2.418 3.09a7.05 7.05 0 0 0-.219-1.471.261.261 0 0 1 .152-.333.26.26 0 0 1 .333.151Zm2.049 12.453a9.155 9.155 0 0 1-.8.617c1.691.55 3.926.873 6.02.289 1.93-.541 3.729-1.86 4.876-4.476a17.088 17.088 0 0 0-4.717-.043c-1.102.143-2.2.39-3.214.84-1.317.587-2.499 1.488-3.364 2.843a8.18 8.18 0 0 0 .89-.486.26.26 0 0 1 .309.416Zm10.064-12.472c1.854.51 4.465.744 6.42.302 1.778-.404 2.995-1.394 2.342-3.392-.348-.758-.977-1.111-1.732-1.225-.688-.105-1.478.028-2.31.297-.664.213-1.345.524-2.013.91-1.07.616-2.098 1.425-2.88 2.377.532-.089 1.07-.142 1.607-.148a.258.258 0 1 1 .043.515c-.5.08-.995.205-1.477.364Zm.86-8.598a61.32 61.32 0 0 1-.836 2.206c1.301-1.125 2.276-2.938 2.866-4.781.662-2.07.84-4.202.348-5.56-.276-.754-.76-1.255-1.524-1.272-1.127.08-1.973.545-2.622 1.23-.638.673-1.047 1.587-1.309 2.624-.215.853-.318 1.787-.33 2.753-.023 2.012.359 4.152 1.132 5.89l.04-.015.04-.016c.475-.976.92-2.05 1.427-3.347a.41.41 0 1 1 .767.288ZM7.242 35.231c-.273 1.106-.277 2.038-.122 2.828.133.674.405 1.234.805 1.692.914 1.048 2.426 1.586 4.131 1.707-.034-1.87-.442-3.152-1.069-4.048-.988-1.415-2.485-1.866-3.745-2.179Z"
                className="fill-[#343D33] "
              />
            </svg>
          </div>
          <div>
            <p className="text-[23px] text-[#343D33]">MIST GARDENS</p>
            <p className="text-[15px] italic text-[#333333]">
              Museum & Botanical GArden
            </p>
          </div>
        </div>
        <MenuIcon className="w-5 h-5" />
      </section>
      {/* nav END */}
      <section className="grid p-4 space-y-6 text-center lg:text-left lg:grid-cols-2">
        <div className="space-y-6 place-self-center">
          <p className="font-serif text-6xl text-[#343D33]">
            A Beautiful Adventure Awaits
          </p>
          <p className="text-[25px] text-[#414840] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
            impedit. Consequatur!
          </p>
          <div className="flex items-center justify-center space-x-4 lg:justify-start">
            <div className="w-full md:w-max px-5 py-3 bg-[#475F45] text-white text-[18px] border border-[#475F45]">
              BUY TICKETS
            </div>
            <div className="w-full md:w-max  px-5 py-3 text-[18px] border border-[#475F45] text-[#475F45]">
              LEARN MORE
            </div>
          </div>
        </div>
        <div className="place-self-center">
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
      <section className="bg-[#343D33] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 p-12">
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
        <div className="col-start-2 row-start-1 space-y-4 ">
          <p className="font-serif text-4xl text-white ">
            Discover yourself with nature
          </p>
          <p className="text-[20px] text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing
            elit. Tincidunt facilisis nunc
          </p>
          <div className="text-[18px] mx-auto md:mx-0 text-white px-3 py-3 border border-white w-max">
            Learn More
          </div>
        </div>
      </section>
      {/* DISCOVER END */}
      {/* NEWS START */}
      <section className="p-4">
        <div className="text-center">
          <p className="text-[45px] font-serif text-[#343D33]">
            News & Updates
          </p>
          <p className="text-[14px] text-[#475F45]">View all posts</p>
        </div>
        <div className="lg:grid lg:grid-cols-2">
          <div className="p-6 text-center md:flex lg:flex-col md:text-left">
            <div className="relative aspect-2">
              <Image
                className="absolute object-cover "
                alt=""
                src="https://dummyimage.com/520x333"
                width="520"
                height="333"
              />
            </div>

            <div className="px-6">
              <p className="text-[23px] font-serif text-[#475F45]">
                Plants Around Us
              </p>
              <p className="text-[16px] text-[#414840]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-[#414840] text-[16px] italic">
                December 23, 2021
              </p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="p-6 border-b border-gray-200 md:flex">
              <div className="relative aspect2">
                <Image
                  className="absolute object-cover"
                  alt=""
                  src="https://dummyimage.com/236x151"
                  width="236"
                  height="151"
                />
              </div>

              <div className="px-6">
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
            <div className="p-6 border-b border-gray-200 md:flex">
              <div className="relative aspect2">
                <Image
                  className="absolute object-cover"
                  alt=""
                  src="https://dummyimage.com/236x151"
                  width="236"
                  height="151"
                />
              </div>
              <div className="px-6">
                <p className="text-[23px] font-serif text-[#475F45]">
                  Exotic Nature
                </p>
                <p className="text-[20px] text-[#414840]">
                  Lorem ipsum dolor sit amet, consectetur donec adipiscing elit.
                  Tincidunt facilisis nunc lorem
                </p>
                <p className="text-[#414840] text-[16px] italic">
                  November 11, 2021
                </p>
              </div>
            </div>
            <div className="p-6 border-b border-gray-200 md:flex">
              <div className="relative aspect2">
                <Image
                  className="absolute object-cover"
                  alt=""
                  src="https://dummyimage.com/236x151"
                  width="236"
                  height="151"
                />
              </div>

              <div className="px-6">
                <p className="text-[23px] font-serif text-[#475F45]">
                  It Starts with Soil
                </p>
                <p className="text-[20px] text-[#414840]">
                  Lorem ipsum dolor sit amet, consectetur donec adipiscing elit.
                  Tincidunt facilisis nunc lorem
                </p>
                <p className="text-[#414840] text-[16px] italic">
                  November 3, 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* NEWS END */}
      {/* Footer Start */}
      <section className="bg-[#414840] p-4 grid grid-rows-3 md:grid-cols-3 md:grid-rows-1">
        <div className="p-4 ">
          <div className="flex items-center justify-center mb-6 md:justify-start">
            <svg
              className="w-14 h-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 59 59"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.5 59C45.792 59 59 45.792 59 29.5S45.792 0 29.5 0 0 13.208 0 29.5c0 8.433 3.539 16.04 9.212 21.416.73-.457 1.456-.92 2.176-1.389l.255-1.452a38.4 38.4 0 0 1 .168-.9c.05-.253.106-.514.165-.784l.025-.113a65.2 65.2 0 0 0 .706-3.667h-.088c-2.329.043-4.464-.586-5.698-1.974a4.321 4.321 0 0 1-1.08-2.374c-.125-1.014.07-2.21.648-3.593l.09-.257.393.086c1.503.292 3.427.681 4.737 2.381.603.781 1.077 1.843 1.313 3.31.022-.225.041-.45.059-.676.1-1.332.125-2.66.016-3.91-2.534-1-4.567-3.964-5.158-7.2-.228-1.251-.249-2.545.012-3.756.396-1.847 1.407-3.507 3.122-4.623l.18-.127.282.238c2.227 1.817 3.345 4.393 3.648 7.18.286 2.65-.174 5.491-1.117 8.052l-.148.382c.185 1.218.256 2.51.244 3.81-.022 2.477-.325 4.976-.705 7.014a18.32 18.32 0 0 1-.191.919c-.077.32-.16.623-.243.908l-.018.058c5.016-3.36 9.735-6.982 13.98-10.885-.011-.158-.03-.466-.033-.886a7.54 7.54 0 0 1 .017-.665c.018-.213.05-.44.084-.677v-.003a30.567 30.567 0 0 0 .253-2.337 11.867 11.867 0 0 1-3.697-4.052 9.335 9.335 0 0 1-.902-2.278c-.193-.803-.257-1.57-.155-2.244.192-1.296.868-2.278 2.145-2.598.907-.347 1.873-.01 2.715.795.846.809 1.561 2.108 1.941 3.6.533 2.104.372 4.576-.971 6.6.036.315.064.63.084.942.036.52.053 1.026.041 1.498a9.13 9.13 0 0 1-.056.928c2.753-2.644 5.286-5.413 7.549-8.312a21.012 21.012 0 0 0 1.552-2.255l-.198-.377c-1.07-1.982-1.709-4.572-1.677-7.006.015-1.095.165-2.158.46-3.112.306-.983.75-1.859 1.357-2.538.95-1.067 2.243-1.698 3.916-1.584 1.065-.022 1.8.608 2.227 1.645.605 1.468.545 3.819-.093 6.119-.788 2.834-2.477 5.543-4.748 6.554a21.242 21.242 0 0 1-1.975 3.177 72.17 72.17 0 0 1-1.317 1.721c.252-.117.513-.23.782-.341.43-.177.877-.342 1.338-.489.857-1.672 2.365-3.155 4.045-4.12a9.407 9.407 0 0 1 2.366-.973c.827-.208 1.628-.279 2.338-.174 1.317.195 2.341.887 2.693 2.225.369.955.363 1.747.116 2.394-.395 1.043-1.458 1.732-2.837 2.115-2.671.745-6.542.326-8.457-.455h-.001l-.242.12c-.837.424-1.586.925-2.25 1.37h-.001c-.213.142-.417.278-.613.405-.35.226-.675.411-.954.57l-.014.008c-.482.273-.82.445-.944.506-3.126 3.558-6.636 6.926-10.431 10.108.117-.016.24-.032.368-.046.206-.023.423-.044.649-.066.774-.074 1.65-.158 2.542-.365.265-.062.53-.13.796-.207l.103-.223c1.216-2.742 3.387-4.287 5.832-4.985a11.992 11.992 0 0 1 3.07-.443c1.598-.025 3.166.243 4.525.616l.373.086-.167.453c-1.132 3.264-3.193 4.896-5.417 5.6-2.68.847-5.623.317-7.557-.41-.706.358-1.437.642-2.15.868-.582.185-1.145.333-1.677.434-.406.079-.79.144-1.141.165a8.106 8.106 0 0 1-1.778-.136 134.927 134.927 0 0 1-10.114 7.392A29.38 29.38 0 0 0 29.5 59ZM13.47 33.701c.661-2.044.984-4.228.822-6.303-.193-2.47-1.069-4.786-2.892-6.514-1.269 1.056-1.92 2.484-2.175 4.006a9.69 9.69 0 0 0 .032 3.277c.448 2.544 1.799 4.966 3.661 6.08a9.833 9.833 0 0 0-.638-2.173.25.25 0 0 1 .45-.217c.299.564.543 1.184.74 1.844Zm14.113-4.018c.17.36.311.754.428 1.171.6-1.42.651-3 .369-4.405-.32-1.593-1.054-2.976-1.958-3.653-.477-.358-.995-.519-1.514-.354-.711.326-1.037.924-1.142 1.653-.093.653.032 1.403.285 2.208.2.633.488 1.29.848 1.943.608 1.108 1.426 2.204 2.418 3.09a7.05 7.05 0 0 0-.219-1.471.261.261 0 0 1 .152-.333.26.26 0 0 1 .333.151Zm2.049 12.453a9.155 9.155 0 0 1-.8.617c1.691.55 3.926.873 6.02.289 1.93-.541 3.729-1.86 4.876-4.476a17.088 17.088 0 0 0-4.717-.043c-1.102.143-2.2.39-3.214.84-1.317.587-2.499 1.488-3.364 2.843a8.18 8.18 0 0 0 .89-.486.26.26 0 0 1 .309.416Zm10.064-12.472c1.854.51 4.465.744 6.42.302 1.778-.404 2.995-1.394 2.342-3.392-.348-.758-.977-1.111-1.732-1.225-.688-.105-1.478.028-2.31.297-.664.213-1.345.524-2.013.91-1.07.616-2.098 1.425-2.88 2.377.532-.089 1.07-.142 1.607-.148a.258.258 0 1 1 .043.515c-.5.08-.995.205-1.477.364Zm.86-8.598a61.32 61.32 0 0 1-.836 2.206c1.301-1.125 2.276-2.938 2.866-4.781.662-2.07.84-4.202.348-5.56-.276-.754-.76-1.255-1.524-1.272-1.127.08-1.973.545-2.622 1.23-.638.673-1.047 1.587-1.309 2.624-.215.853-.318 1.787-.33 2.753-.023 2.012.359 4.152 1.132 5.89l.04-.015.04-.016c.475-.976.92-2.05 1.427-3.347a.41.41 0 1 1 .767.288ZM7.242 35.231c-.273 1.106-.277 2.038-.122 2.828.133.674.405 1.234.805 1.692.914 1.048 2.426 1.586 4.131 1.707-.034-1.87-.442-3.152-1.069-4.048-.988-1.415-2.485-1.866-3.745-2.179Z"
                className="fill-white"
              />
            </svg>
            <div className="ml-2">
              <p className="text-[18px] text-white">MIST GARDENS</p>
              <p className="text-[12px] italic text-white">
                Museum & Botanical Garden
              </p>
            </div>
          </div>
          <p className="text-[16px] text-white text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <div className="flex justify-center p-4 text-center md:text-left">
          <div className="place-self-center">
            <p className=" text-white text-[16px] font-serif ">Sitemap</p>
            <p className=" text-white text-[14px]">Home</p>
            <p className=" text-white text-[14px]">Visit</p>
            <p className=" text-white text-[14px]">Exhibitions</p>
            <p className=" text-white text-[14px]">Programs & Events</p>
            <p className=" text-white text-[14px]">Store</p>
            <p className=" text-white text-[14px]">Membership</p>
          </div>
        </div>
        <div className="flex justify-center p-4 text-center ">
          <div>
            <p className=" text-white text-[16px] font-serif ">Connect</p>
            <div className="flex pt-4 space-x-4 justify-self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x={2} y={9} width={4} height={12} />
                <circle cx={4} cy={4} r={2} />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* Footer END */}
      <section className="bg-[#343D33]">
        <p className="text-center text-white text-[14px] p-4">
          © 2021 Mist Gardens. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default Index;
