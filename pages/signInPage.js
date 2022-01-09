import Button from "@/components/Button";
import User from "@/components/User";
import BackNav from "@/components/BackNav";
const SignInPage = () => {
  return (
    <div className="grid grid-rows-[1fr_auto] lg:grid-cols-2 lg:h-screen">
      <div className="max-w-3xl px-6 py-6 mx-auto space-y-6">
        <BackNav />
        <div className="max-w-xl mx-auto space-y-6">
          <p className="text-4xl font-bold">
            Start exploring camps from all around the world.
          </p>
          <p className="text-sm text-gray-500">Username</p>
          <input
            className="w-full p-3 rounded"
            type="text"
            placeholder="JohnDoe_91"
          />
          <p className="text-sm text-gray-500">Password</p>
          <input
            className="w-full p-3 rounded"
            type="text"
            placeholder="Enter Your Password"
          />
          <Button>Login</Button>
          <p>
            Not a user yet ?{" "}
            <span className="font-bold text-teal-500 underline">
              Create an account
            </span>
          </p>
        </div>
      </div>
      <div className="p-6 space-y-6 bg-gray-100">
        <p className="text-xl font-semibold">
          Yelpcamp has honestly saved me hours of research time, and the camps
          on here are definitely well picked and added.
        </p>
        <div className="flex items-center">
          <User className="w-12 h-12" />
          <div className="ml-4 text-sm">
            <p className="font-semibold">May Andrews</p>
            <p>Professional Hiker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
