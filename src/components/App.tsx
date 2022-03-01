import Home from "../pages/Home";
import { Route, Routes as BrowserRoutes } from "react-router-dom";
import Routes from "../utils/routes";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import MagicPage from "../pages/SignUp/MagicPage";

const App = () => {
    return (
        <BrowserRoutes>
            <Route path={Routes.HOME} element={<Home />} />
            <Route path={Routes.SIGNUP} element={<SignUp />} />
            <Route path={Routes.LOGIN} element={<Login />} />
            <Route path={Routes.MAGICPAGE} element={<MagicPage />} />
        </BrowserRoutes>
    );
};

export default App;
