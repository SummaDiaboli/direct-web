import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/Icon_Logo.svg";
import AuthContext from "../contexts/AuthContext";
import Routes from "../utils/routes";
// import Footer from "./Footer";

type User = {
    id: string;
    email: string;
    username: string;
} | null;

const Header = () => {
    const location = useLocation().pathname;
    const [userData, setUserData] = useState<User>(null);
    // const [auth, setAuth] = useState(useContext(AuthContext));
    const auth = useContext(AuthContext);

    // const auth = useContext(AuthContext);
    // const userData: User = auth.data;
    // console.log(userData.email);

    useEffect(() => {
        setUserData(auth.data);
        // first
    }, [userData, auth]);

    const navigationRoutes = [
        { name: "Home", link: Routes.HOME },
        { name: "Why Direct", link: "." },
        { name: "Hows Does It Work", link: "." },
        { name: "Download", link: "." },
    ];

    return (
        <div>
            <header className="flex flex-row justify-between bg-[#12141C] h-20 items-center px-48 shadow-md">
                <Link
                    to={Routes.HOME}
                    className="flex flex-row items-center space-x-2"
                >
                    <img src={Logo} className="h-12" />
                    <div className="flex flex-col items-center space-y-1">
                        <span className="small-caps text-white text-xl">
                            Direct
                        </span>
                        <div className="bg-white h-1 w-16 rounded-md" />
                    </div>
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

                    {auth.isAuthenticated ? (
                        <Link to={`/profile/${userData?.id}`}>
                            <button className="bg-white border rounded-md text-black px-4 py-2 hover:bg-[#12141C] hover:text-white hover:border hover:border-white">
                                <div className="small-caps">
                                    {userData?.username}
                                </div>
                            </button>
                        </Link>
                    ) : (
                        <Link to={Routes.SIGNUP}>
                            <button className="bg-white border rounded-md text-black px-4 py-2 hover:bg-[#12141C] hover:text-white hover:border hover:border-white">
                                <div className="small-caps">Sign Up</div>
                            </button>
                        </Link>
                    )}
                </nav>
            </header>
        </div>
    );
};

export default Header;
