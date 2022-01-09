import { XIcon, MenuIcon } from "@heroicons/react/solid";
import Logo from "../components/Logo";
const AddNewCampground = () => {
  return (
    <>
      <div className="flex items-center justify-center h-12 px-4 text-sm text-white bg-gray-900 ">
        <p>
          This project was made by{" "}
          <span className="text-teal-500 underline">Colt Steele</span> and
          designed by <span className="text-teal-500 underline">Coldewell</span>
        </p>
        <XIcon className="w-4 h-4 ml-4" />
      </div>
      <div className="max-w-4xl px-3 mx-auto space-y-4">
        <div className="flex justify-between py-6">
          <div className="flex items-center">
            <Logo />
            <div className="hidden ml-4 lg:inline-block">Home</div>
          </div>
          <div className="items-center hidden lg:flex ">
            <div>JhonDoe</div>
            <div className="ml-4">Logout</div>
          </div>
          <div className="p-1 bg-gray-100 rounded lg:hidden">
            <MenuIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="max-w-xl px-3 mx-auto space-y-4">
          <p className="text-4xl font-semibold">Add New Campground</p>

          <p>Campground Name</p>
          <input
            className="w-full h-10 pl-4 text-sm rounded"
            placeholder="Seven Sisters Waterfall"
            type="text"
          />
          <p>Price</p>
          <input
            className="w-full h-10 pl-4 text-sm rounded"
            placeholder="$ 149"
            type="text"
          />
          <p>Image</p>
          <input
            className="w-full h-10 pl-4 text-sm rounded"
            placeholder="www.thepinoytraveller.com/2018/01/mt-ulap-diy-dayhike.html"
            type="text"
          />
          <p>Description</p>
          <textarea
            className="w-full h-56 p-4 text-sm rounded "
            placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consist of seven separate streams. and the tallest of the seven has a free fall that mesasures 250 metres. The waterfall is located along the Geirangerflorden in Stranda Municipality in More og Romsdal county. Norway  "
            type="text"
          />
          <button className="w-full px-4 py-4 text-white bg-gray-900 rounded">
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
