import Image from "next/image";
const test2 = () => {
  return (
    <div className="grid h-screen border-8 border-red-500">
      <div className="relative w-32 h-32 border-4 border-blue-500 place-self-center">
        <Image
          className="origin-top-left rotate-0"
          layout="fill"
          alt="blue"
          src="/hosterr/Blue Shape.svg"
          width="32"
          height="32"
        />
        <Image
          className="origin-top-left rotate-6"
          layout="fill"
          alt="blue"
          src="/hosterr/Pink Shape.svg"
          width="32"
          height="32"
        />
        <Image
          className="origin-top-left rotate-12 "
          layout="fill"
          alt="blue"
          src="/hosterr/Purple Shape.svg"
          width="32"
          height="32"
        />
      </div>
    </div>
  );
};

export default test2;
