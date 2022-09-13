import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState('test')
    return (
        <AuthContext.Provider value={userToken}>
            {children}
        </AuthContext.Provider>
    )
}