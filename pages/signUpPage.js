import User from "@/components/User";
import Link from "next/link";
import Button from "@/components/Button";
import BackNav from "@/components/BackNav";
const SignInPage = () => {
  return (
    <div className="grid h-screen lg:grid-cols-2 ">
      <div className=" grid grid-rows-[auto_1fr] h-full ">
        <div className="px-6 py-8 lg:px-28">
          <BackNav />
        </div>
        <div className="self-center px-6 space-y-6 lg:px-28">
          <p className="text-4xl font-bold ">
            Start Exploring Camps From All Around the World
          </p>
          <div className="md:max-w-lg">
            <p className="text-gray-500">Username</p>
            <input
              placeholder="johndoe_91"
              type="text"
              className="w-full p-3 border border-gray-200 rounded"
            />
          </div>
          <div className="md:max-w-lg">
            <p className="text-gray-500">Password</p>
            <input
              placeholder="Chose Password"
              type="text"
              className="w-full p-3 border border-gray-200 rounded"
            />
          </div>
          <div className="md:max-w-lg">
            <Button>Create an account</Button>
          </div>
          <p>
            Already a user?{" "}
            <span className="text-teal-600 underline">
              <Link href="#">
                <a>Sign in</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="grid bg-orange-50">
        <div className="px-6 space-y-6 place-self-center lg:px-28">
          <p className="text-xl font-semibold leading-relaxed">
            YelpCamp has honestly saved me hours of research time, and the camps
            on here are definitely well picked and added.
          </p>
          <div className="flex items-center">
            <User className="w-12 h-12" />
            <div className="ml-2">
              <p className="font-semibold">May Andrews</p>
              <p className="text-gray-500">Professional Hiker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
