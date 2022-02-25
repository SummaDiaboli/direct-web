import Logo from "../assets/images/Icon_Logo.svg";

const Header = () => {
  return (
    <div>
      <header className="flex flex-row justify-between bg-[#12141C] h-20 items-center px-48 shadow-md">
        <img src={Logo} className="h-12" />
        <nav className="flex flex-row space-x-4 text-white items-center small-caps">
          <a>Home</a>
          <a>Why Direct?</a>
          <a>How Does It Work?</a>
          <a>Download</a>

          <button className="bg-white border rounded-md text-black px-4 py-2 hover:bg-[#12141C] hover:text-white hover:border hover:border-white">
            <div className="small-caps">Sign Up</div>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
