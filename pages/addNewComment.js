import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Banner from "@/components/Banner";
import LoggedInNav from "@/components/LoggedInNav";

const AddNewComment = () => {
  return (
    <div>
      <Banner />

      <div className="container max-w-3xl px-6 mx-auto mt-16">
        <LoggedInNav />
        <div className="max-w-xl py-32 mx-auto space-y-6">
          <p className="text-4xl font-bold">Add New Comment</p>
          <p className="text-sm text-gray-500">Description</p>
          <textarea
            placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
            className="w-full h-32 p-6 rounded"
          ></textarea>
          <div>
            <Button>Post Comment</Button>
          </div>
        </div>
        <Logo />
      </div>
    </div>
  );
};

export default AddNewComment;
