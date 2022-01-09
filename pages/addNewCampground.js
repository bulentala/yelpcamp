import { XIcon, MenuIcon } from "@heroicons/react/solid";
import Logo from "../components/Logo";
const AddNewCampground = () => {
  return (
    <>
      <div className=" justify-center flex h-12 px-4 items-center bg-gray-900 text-white text-sm">
        <p>
          This project was made by{" "}
          <span className="text-teal-500 underline">Colt Steele</span> and
          designed by <span className="text-teal-500 underline">Coldewell</span>
        </p>
        <XIcon className="h-4 w-4 ml-4" />
      </div>
      <div className="space-y-4 px-3 max-w-4xl mx-auto">
        <div className="flex justify-between py-6">
          <div className="flex items-center">
            <Logo />
            <div className="hidden lg:inline-block  ml-4">Home</div>
          </div>
          <div className="lg:flex items-center hidden  ">
            <div>JhonDoe</div>
            <div className="ml-4">Logout</div>
          </div>
          <div className="p-1 bg-gray-100 rounded lg:hidden">
            <MenuIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="space-y-4 px-3 max-w-xl mx-auto">
          <p className="text-4xl font-semibold">Add New Campground</p>

          <p>Campground Name</p>
          <input
            className="w-full rounded h-10 pl-4 text-sm"
            placeholder="Seven Sisters Waterfall"
            type="text"
          />
          <p>Price</p>
          <input
            className="w-full rounded h-10 pl-4 text-sm"
            placeholder="$ 149"
            type="text"
          />
          <p>Image</p>
          <input
            className="w-full rounded h-10 pl-4 text-sm"
            placeholder="www.thepinoytraveller.com/2018/01/mt-ulap-diy-dayhike.html"
            type="text"
          />
          <p>Description</p>
          <textarea
            className="w-full rounded h-56 p-4 text-sm  "
            placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consist of seven separate streams. and the tallest of the seven has a free fall that mesasures 250 metres. The waterfall is located along the Geirangerflorden in Stranda Municipality in More og Romsdal county. Norway  "
            type="text"
          />
          <button className="bg-gray-900 text-white px-4 py-4 rounded w-full">
            Add Campground
          </button>
        </div>
        <div className="py-8">
          <Logo />
        </div>
      </div>
    </>
  );
};

export default AddNewCampground;
