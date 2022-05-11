import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Routes from "../../utils/routes";
import Logo from "../../assets/images/Icon_Logo.svg";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import axios from "axios";
import ActiveWebsites from "./ActiveWebsites";
import History from "./History";
import ProfileTab from "./ProfileTab";
import AuthContext from "../../contexts/AuthContext";
import moment from "moment";

const Profile = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [accountCreated, setAccountCreated] = useState("");
    const [tokenDuration, setTokenDuration] = useState("");
    const auth = useContext(AuthContext);
    const id = auth.data?.id;

    const [activeWebsites, setActiveWebsites] = useState([]);
    const [history, setHistory] = useState([]);

    const fetchUserDetails = () => {
        axios
            .get(`https://directsecure.herokuapp.com/api/users/${id}`)
            .then((res) => {
                // setResponse(`${JSON.stringify(res.data)}`)
                // console.log(res);
                if (res.data) {
                    setUsername(res.data.username);
                    setEmail(res.data.email);
                    setAccountCreated(
                        moment(res.data.created).format("DD MMMM YYYY")
                    );
                    setTokenDuration(res.data.tokenDuration);
                } else {
                    // setAccountCreated('')
                    // setTokenDuration(7)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchActiveWebsites = () => {
        axios
            .get(`https://directsecure.herokuapp.com/api/authed-websites/${id}`)
            .then((res) => {
                if (res.status !== 200) {
                    // setIsError(true)
                } else {
                    // console.log(res.data);
                    const responseData = res.data;
                    setActiveWebsites(responseData.websites);
                }
                // setisHistoryLoading(false)
                // console.log(activeWebsites);
            })
            .catch((err) => console.log(err));
    };

    const fetchHistory = () => {
        axios
            .get(`https://directsecure.herokuapp.com/api/authed-websites/${id}`)
            .then((res) => {
                if (res.status !== 200) {
                    // setIsError(true)
                } else {
                    // console.log(res.data);
                    const responseData = res.data;
                    setHistory(responseData.websites);
                }
                console.log(history);
            });
    };

    useEffect(() => {
        fetchUserDetails();
        fetchActiveWebsites();
        fetchHistory();
    }, []);

    return (
        <div className="bg-[#383B3F] min-h-screen">
            <Header />

            <div className="grid grid-cols-2">
                <div className="p-10 ml-20">
                    <ProfileTab
                        username={username}
                        id={id}
                        created={accountCreated}
                        tokenDuration={tokenDuration}
                        email={email}
                    />
                    <ActiveWebsites websites={activeWebsites} />
                </div>
                <div className="p-10 mr-20">
                    <History websites={history} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
