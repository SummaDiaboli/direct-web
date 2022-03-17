import Header from "../../components/Header";
import Logo from "../../assets/images/Icon_Logo.svg";
import Footer from "../../components/Footer";
import Routes from "../../utils/routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

type Response = {
    id: string;
    message: string;
};

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const navigator = useNavigate();
    const id = "21223";

    const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const signUp = () => {
        axios
            .post("http://127.0.0.1:8080/api/users", {
                username,
                email,
                "website": "Direct Security Official"
            })
            .then((res: AxiosResponse<Response, Response>) => {
                if (res.status === 201) {
                    navigator(`${Routes.SIGNUP}/${res.data.id}`);
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="bg-[#383B3F] min-h-screen">
            <Header />

            <div className="flex flex-row justify-center mt-12">
                <div className="flex flex-col items-center bg-white w-1/3 min-h-[30.5rem] py-10 rounded-md">
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
                                onChange={(event) => changeUsername(event)}
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
                                onChange={(event) => changeEmail(event)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-10 items-center space-y-2">
                        {/* <Link to={`${Routes.SIGNUP}/${id}`}> */}
                        <button
                            onClick={signUp}
                            className="bg-[#6384C5] py-3 w-[18rem] rounded-lg hover:shadow-lg group"
                        >
                            <span className="text-white text-lg small-caps">
                                Create Account
                            </span>
                        </button>
                        {/* </Link> */}

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
