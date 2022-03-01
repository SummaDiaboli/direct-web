import Header from "../../components/Header";
import Logo from "../../assets/images/Icon_Logo.svg";
import Footer from "../../components/Footer";
import Routes from "../../utils/routes";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="bg-[#383B3F] min-h-screen">
            <Header />

            <div className="flex flex-row justify-center mt-12">
                <div className="flex flex-col items-center bg-white w-1/4 min-h-[30.5rem] py-10 rounded-md">
                    <img src={Logo} className="h-20" />
                    <div className="small-caps text-2xl">Sign Up</div>

                    <div className="flex flex-col space-y-6 mt-8">
                        <div className="flex flex-col space-y-1">
                            <label
                                className="small-caps text-md"
                                htmlFor="username"
                            >
                                Username:
                            </label>
                            <input
                                autoFocus
                                type={"text"}
                                className="h-10 w-[18rem] border-black border rounded-md focus:outline-none px-2"
                                id="username"
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                            />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label
                                className="small-caps text-md"
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <input
                                type={"text"}
                                className="h-10 w-[18rem] border-black border rounded-md focus:outline-none px-2"
                                id="email"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-10 items-center space-y-2">
                        <Link to={`${Routes.SIGNUP}/${username}`}>
                            <button className="bg-[#6384C5] py-3 w-[18rem] rounded-lg hover:shadow-lg group">
                                <span className="text-white text-lg small-caps">
                                    Create Account
                                </span>
                            </button>
                        </Link>

                        <Link
                            to={Routes.LOGIN}
                            className="group flex flex-col items-center space-y-1"
                        >
                            <span className="small-caps text-sm group-hover:text-[#6384C5]">
                                I already have an account
                            </span>
                            <div className="h-[0.1rem] w-[10.8rem] rounded-lg bg-black group-hover:bg-[#6384C5]" />
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SignUp;
