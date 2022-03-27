import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Routes from "../../utils/routes";
import Logo from "../../assets/images/Icon_Logo.svg";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import axios from "axios";
import ActiveWebsites from "./ActiveWebsites";
import History from "./History";
import ProfileTab from "./ProfileTab";

const Profile = () => {
    return (
        <div className="bg-[#383B3F] min-h-screen">
            <Header />

            <div className="grid grid-cols-2 gap-4">
              <div className="p-10 ml-20">
                <ProfileTab />
                <ActiveWebsites />
              </div>
              <div className="p-10 mr-20"> <History / > </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
