import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Routes from "../../utils/routes";
import Logo from "../../assets/images/Icon_Logo.svg";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    let id;
    const navigator = useNavigate()

    const changeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const login = () => {
        axios
            .get(`http://127.0.0.1:8080/api/login/${username}`)
            .then((res) => {
                console.log(res);
                id = res.data.id
                navigator(`${Routes.LOGIN}/${id}`)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="bg-[#383B3F] min-h-screen">
            <Header />

            <div className="flex flex-row justify-center mt-12">
                <div className="flex flex-col items-center bg-white w-1/3 min-h-[30.5rem] py-10 rounded-md">
                    <img src={Logo} className="h-20" />
                    <div className="small-caps text-2xl">Login</div>

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
                    </div>

                    <div className="flex flex-col mt-10 items-center space-y-2">
                        {/* <Link to={`${Routes.LOGIN}/${id}`}> */}
                        <button
                            className="bg-[#6384C5] py-3 w-[18rem] rounded-lg hover:shadow-lg group"
                            onClick={login}
                        >
                            <span className="text-white text-lg small-caps">
                                Log In
                            </span>
                        </button>
                        {/* </Link> */}

                        <Link
                            to={Routes.SIGNUP}
                            className="group flex flex-col items-center space-y-1"
                        >
                            <span className="small-caps text-sm group-hover:text-[#6384C5]">
                                I don't have an account
                            </span>
                            <div className="h-[0.1rem] w-[10.8rem] rounded-lg bg-black group-hover:bg-[#6384C5]" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <Footer />
            </div>
        </div>
    );
};

export default Login;
