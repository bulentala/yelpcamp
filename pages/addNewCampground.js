import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Banner from "@/components/Banner";
import LoggedInNav from "@/components/LoggedInNav";

const AddNewComment = () => {
  return (
    <div>
      <Banner />
      <div className="container max-w-3xl px-6 pb-16 mx-auto mt-16">
        <LoggedInNav />
        <div className="max-w-xl py-32 mx-auto space-y-6">
          <p className="text-4xl font-bold">Add New Campground</p>
          <p className="text-sm text-gray-500">Campground Name</p>
          <input
            className="w-full p-3 rounded"
            type="text"
            placeholder=" Seven Sisters Waterfall"
          />
          <p className="text-sm text-gray-500">Price</p>
          <input
            className="w-full p-3 rounded"
            type="text"
            placeholder="$ 149"
          />
          <p className="text-sm text-gray-500">Image</p>
          <input
            className="w-full p-3 rounded"
            type="text"
            placeholder="www.thepinoytraveller.com/2018/01/mt-ulap-diy-dayhike.html"
          />
          <p className="text-sm text-gray-500">Description</p>
          <textarea
            placeholder="The Seven Sisters is the 39th tallest waterfall in Norway.
 The 410-metre tall waterfall consist of seven separate streams. and the
 tallest of the seven has a free fall that mesasures 250 metres. The
 waterfall is located along the Geirangerflorden in Stranda Municipality in
 More og Romsdal county. Norway "
            Add
            Campground
            className="w-full h-56 p-6 rounded"
          ></textarea>
          <div>
            <Button>Add Campground</Button>
          </div>
        </div>
        <Logo />
      </div>
    </div>
  );
};

export default AddNewComment;
