import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/Icon_Logo.svg";
import Routes from "../utils/routes";
import Footer from "./Footer";

const Header = () => {
    const location = useLocation().pathname;

    const navigationRoutes = [
        { name: "Home", link: Routes.HOME },
        { name: "Why Direct", link: "." },
        { name: "Hows Does It Work", link: "." },
        { name: "Download", link: "." },
    ];

    return (
        <div>
            <header className="flex flex-row justify-between bg-[#12141C] h-20 items-center px-48 shadow-md">
                <Link to={Routes.HOME}>
                    <img src={Logo} className="h-12" />
                </Link>

                <nav className="flex flex-row space-x-4 text-white items-center small-caps">
                    {navigationRoutes.map((route, index) => (
                        <NavLink
                            to={route.link}
                            key={`route${index}`}
                            className={`cursor-pointer border-4 border-transparent hover:border-b-white ${
                                location === route.link ? "border-b-white" : ""
                            }`}
                        >
                            {route.name}
                        </NavLink>
                    ))}

                    <Link to={Routes.SIGNUP}>
                        <button className="bg-white border rounded-md text-black px-4 py-2 hover:bg-[#12141C] hover:text-white hover:border hover:border-white">
                            <div className="small-caps">Sign Up</div>
                        </button>
                    </Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;
