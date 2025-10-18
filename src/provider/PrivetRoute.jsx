import React, { useContext } from 'react';
import { AuthContext } from './AuthContex';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const navegit = Navigate();

    if(user && user.email){
        return children;
    }else if(!user){
       return navegit('/auth/login')
    }

    return (
        <div>
            
        </div>
    );
};

export default PrivetRoute;