import Button from "@/components/Button";
import Banner from "@/components/Banner";
import LogInNav from "@/components/LogInNav";
import Logo from "@/components/Logo";

const AddNewCampground = () => {
  return (
    <>
      <Banner />
      <div className="container px-6 mx-auto space-y-6 ">
        <div className="pt-8">
          <LogInNav />
        </div>
        <div className="max-w-lg space-y-6 md:mx-auto">
          <p className="text-4xl font-bold">Add New Campground</p>
          <div className="md:max-w-lg">
            <p className="text-gray-500">Campground Name</p>
            <input
              placeholder="Seven Sisters Waterfall"
              type="text"
              className="w-full p-3 border border-gray-200 rounded"
            />
          </div>
          <div className="md:max-w-lg">
            <p className="text-gray-500">Price</p>
            <input
              placeholder="$149"
              type="text"
              className="w-full p-3 border border-gray-200 rounded"
            />
          </div>
          <div className="md:max-w-lg">
            <p className="text-gray-500">Image</p>
            <input
              placeholder="www.thepynotraveller.com/2018/01/mt-ulap-diy-dayhike.html"
              type="text"
              className="w-full p-3 border border-gray-200 rounded"
            />
          </div>
          <div className="md:max-w-lg">
            <p className="text-gray-500">Description</p>
            <textarea
              placeholder="The Seven Sisters is the 39th tallest waterfall in Norway.
          The 410-metre tall waterfall consist of seven separate streams, and the
          tallest of seven has a free fall that measures 250 metres. The waterfall
          is located along the Geirangerfjordan in Stranda Municipality in møre og
          Romsdal Country, Norway."
              name=""
              id=""
              cols="10"
              rows="5"
              className="w-full p-3 border border-gray-200 rounded"
            />
          </div>
          <Button>Add campground</Button>
        </div>
        <div className="pb-8">
          <Logo />
        </div>
      </div>
    </>
  );
};

export default AddNewCampground;
