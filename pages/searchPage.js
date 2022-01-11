import Image from "next/image";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Banner from "@/components/Banner";
import LogInNav from "@/components/LogInNav";

const featuredCamps = [
  {
    id: 1,
    pic: "/assets/camps/mountUlap.png",
    title: "Mount Ulap",
    description:
      "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    price: "$104.97",
  },

  {
    id: 2,
    pic: "/assets/camps/calagusIslands.jpg",
    title: "Calaguas islands",
    description:
      "Aparadise of islands that can rival the white sand beauty of Boracay.",
    price: "$215.50",
  },

  {
    id: 3,
    pic: "/assets/camps/onayBeach.jpg",
    title: "Onay Beach",
    description:
      "This is one of the best beach camping sites, beautiful and pristine.",
    price: "$99.97",
  },

  {
    id: 4,
    pic: "/assets/camps/sevenSistersWaterfall.jpg",
    title: "Seven Sisters Waterfall",
    description: "The Seven Sisters is the 39th tallest waterfall in Norway.",
    price: "$310.00",
  },

  {
    id: 5,
    pic: "/assets/camps/latikRiverside.jpg  ",
    title: "Latik Riverside",
    description:
      "Philippines is one of the most dazzling countries in all of Asia.",
    price: "$267.50",
  },

  {
    id: 6,
    pic: "/assets/camps/buloySprings.jpg",
    title: "Buloy Springs",
    description:
      "This is one of the best beach camping, beautiful and pristine.",
    price: "$127.97",
  },
];
const SearchPage = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <div className="px-12 py-8">
          <LogInNav />
        </div>
        <div className="grid p-12 mx-4 lg:grid-cols-2 bg-orange-50 rouded">
          <div className="space-y-2 ">
            <p className="text-4xl">Welcom to YelpCamp!</p>
            <p>
              View our hand-picked campgrounds from all over the world, or add
              your own.
            </p>
            <div className="flex max-w-lg ">
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded"
                placeholder="Search for camps"
              />
              <Button className="ml-2">Search</Button>
            </div>
            <p className="text-gray-500 underline">
              Or add your own campground
            </p>
          </div>
        </div>
        <div className="grid gap-4 mx-4 my-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCamps.map((camp) => {
            return (
              <div key={camp.id} className="p-4 border border-gray-200 rounded">
                <div>
                  <div className="relative aspect-2 ">
                    <Image alt={camp.title} layout="fill" src={camp.pic} />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <p className="text-lg font-bold">{camp.title}</p>
                    <p className="font-semibold ">{camp.price}</p>
                  </div>
                  <p className="py-2">{camp.description}</p>
                  <div className="px-2 py-1 text-center border border-gray-200 rounded">
                    View Campground
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-12 pb-8">
          <Logo />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
