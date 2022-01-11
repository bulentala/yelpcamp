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
          <p className="text-4xl font-bold">Add New Comment</p>
          <div className="md:max-w-lg">
            <p className="text-gray-500">Description</p>
            <textarea
              placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
              name=""
              id=""
              cols="10"
              rows="5"
              className="w-full p-3 border border-gray-200 rounded"
            />
          </div>
          <Button>Post Comment</Button>
        </div>
        <div className="pb-8">
          <Logo />
        </div>
      </div>
    </>
  );
};

export default AddNewCampground;
