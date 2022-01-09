import Button from "@/components/Button";
import Banner from "@/components/Banner";
import LoggedInNav from "@/components/LoggedInNav";
const Test = () => {
  return (
    <div>
      <LoggedInNav />
      <Banner />
      <br />
      <Button className="w-max">Add Campground</Button>
    </div>
  );
};

export default Test;
