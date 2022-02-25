import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="bg-[#383B3F] min-h-screen">
      <Header />

      {/* Banner */}
      <div className="bg-[#1D1F25] flex flex-col text-white mt-3 px-48 py-5 space-y-5 shadow-md">
        <div>Tired of receiving emails about compromised passwords?</div>

        <div className="flex flex-row-reverse">
          Searching for an alternative that doesn't require you to sift through
          your password manager?
        </div>
        <div>In the mood for a seamless security experience?</div>
        <div className="flex flex-row-reverse">
          Worried about websites keeping data about you that they shouldn't?
        </div>

        <div className="flex flex-row justify-center">
          <button className="bg-white text-center py-4 px-10 rounded-md uppercase">
            <div className="text-black">Get Started</div>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col text-white mt-6">
        <div className="flex flex-col items-center">
          <div className="text-3xl uppercase">Why Direct?</div>
          <hr className="w-2/6 mt-5 h-5" />
        </div>

        <div className="px-48">
          <div className="uppercase font-bold">The Promise of Security</div>
          <div>
            Direct offers password security for its users by not offering them
            passwords at all. We assure security by removing the big point of
            failure in the form of passwords.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
