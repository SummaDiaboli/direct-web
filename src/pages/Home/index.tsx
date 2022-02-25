import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="bg-[#383B3F] min-h-screen">
      <Header />

      {/* Banner */}
      <div className="bg-[#1D1F25] flex flex-col text-white mt-3 px-48 py-5 space-y-6 shadow-md">
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
          <button className="bg-white text-center py-4 px-10 rounded-md small-caps text-2xl">
            <div className="text-black">Get Started</div>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col text-white mt-6 space-y-10">
        <div className="flex flex-col items-center">
          <div className="text-3xl small-caps">Why Direct?</div>
          <hr className="w-2/6 mt-5 h-5" />
        </div>

        <div className="px-48 w-3/5">
          <div className="small-caps font-bold">The Promise of Security</div>
          <div className="text-justify">
            Direct offers password security for its users by not offering them
            passwords at all. We assure security by removing the big point of
            failure in the form of passwords.
          </div>
        </div>

        <div className="px-48 w-3/5">
          <div className="small-caps font-bold">The Promise of Anonymity</div>
          <div className="text-justify">
            Direct promises its users the ability to remain anonymous online.
            The ability to use the internet at your leisure without worrying
            about your identity being used for nefarious purposes is one we take
            very seriously
          </div>
        </div>

        <div className="px-48 w-3/5">
          <div className="small-caps font-bold">
            The Promise of Seamless Authentication
          </div>
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio non
            tincidunt vitae varius faucibus. Vivamus viverra urna, suspendisse
            libero eget fames velit sit nec.
          </div>
        </div>

        <div className="px-48 w-3/5">
          <div className="small-caps font-bold">
            The Promise of Intangibility
          </div>
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio non
            tincidunt vitae varius faucibus. Vivamus viverra urna, suspendisse
            libero eget fames velit sit nec.
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-3xl small-caps">How does it work?</div>
          <hr className="w-2/6 mt-5 h-5" />
        </div>

        <div className="px-48 w-3/5">
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            accumsan massa nibh viverra ligula laoreet nisl aliquet sapien. Sit
            semper dictumst metus, morbi iaculis ut id. Non nibh gravida nunc
            vivamus justo, feugiat. Quam donec sociis molestie euismod.
            Adipiscing lacus elementum, vestibulum, quisque sollicitudin purus
            ultricies interdum. Malesuada pretium arcu eget ornare ut arcu.
            Faucibus mauris elit hendrerit dui. Sodales eget habitant est at
            nisi senectus lacus convallis pretium. In est nisl at curabitur
            sapien, ultricies integer aenean. Eu nunc eget posuere morbi quis.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
