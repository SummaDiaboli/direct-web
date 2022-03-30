import React, { createContext, useState } from "react";
import { getCookie } from "react-use-cookie";

type User = {
    isAuthenticated: boolean;
    data: any;
    updateUserData: (user: any) => void;
};

const AuthContext = createContext<User>({
    isAuthenticated: false,
    data: {},
    updateUserData: () => {
        return;
    },
});

export default AuthContext;
