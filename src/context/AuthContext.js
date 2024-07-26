import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token:localStorage.getItem("token") ,
        isAuthenticated: false,
        loading: true,
        agent: null,
    });

    // useEffect(() => {
    //     const loadAgent = async () => {
    //         if (auth.token) {
    //             try {
    //                 const res = await axios.get('/api/agents/me', {
    //                     headers: {
    //                         'Authorization': `Bearer ${auth.token}`
    //                     }
    //                 });
    //                 setAuth(prevAuth => ({
    //                     ...prevAuth,
    //                     isAuthenticated: true,
    //                     loading: false,
    //                     agent: res.data,
    //                 }));
    //             } catch (err) {
    //                 localStorage.removeItem('token');
    //                 setAuth({
    //                     token: null,
    //                     isAuthenticated: false,
    //                     loading: false,
    //                     agent: null,
    //                 });
    //             }
    //         } else {
    //             setAuth(prevAuth => ({
    //                 ...prevAuth,
    //                 loading: false,
    //             }));
    //         }
    //     };
    //     loadAgent();
    // }, [auth.token, setAuth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
