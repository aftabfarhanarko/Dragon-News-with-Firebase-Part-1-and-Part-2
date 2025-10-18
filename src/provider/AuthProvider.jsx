import React from 'react';
import { AuthContext } from './AuthContex';

const AuthProvider = ({children}) => {
    const authData = {
        name:"Khadi",
        email:"Khadi@badi.com",
    }
    return (
        <div>
            <AuthContext.Provider value={authData}>
              {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;