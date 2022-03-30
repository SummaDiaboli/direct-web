import Home from "../pages/Home";
import { Route, Routes as BrowserRoutes } from "react-router-dom";
import Routes from "../utils/routes";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import MagicPage from "../pages/SignUp/MagicPage";
import QRPage from "../pages/Login/QRPage";
import Profile from "../pages/Profile";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { getCookie } from "react-use-cookie";

const App = () => {
    // const userCookie = getCookie("user");
    const [userCookie, setUserCookie] = useState(getCookie("user"));
    const [userData, setUserData] = useState(
        userCookie ? JSON.parse(userCookie) : null
    );

    useEffect(() => {
        setUserCookie(getCookie("user"));
        setUserData(userCookie ? JSON.parse(userCookie) : null);
    }, [userCookie, userData]);

    // const userData = userCookie ? JSON.parse(userCookie) : null;
    // console.log(userData);
    // console.log(JSON.parse(userData))

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: userData ? true : false,
                data: userData ? userData : {},
                updateUserData: (user) => setUserData(user),
            }}
        >
            <BrowserRoutes>
                <Route path={Routes.HOME} element={<Home />} />
                <Route path={Routes.SIGNUP} element={<SignUp />} />
                <Route path={Routes.LOGIN} element={<Login />} />
                <Route path={Routes.MAGICPAGE} element={<MagicPage />} />
                <Route path={Routes.QRPAGE} element={<QRPage />} />
                <Route path={Routes.PROFILE} element={<Profile />} />
            </BrowserRoutes>
        </AuthContext.Provider>
    );
};

export default App;
