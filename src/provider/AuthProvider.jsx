import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/fierbase";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
//   console.log(user);

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubcrip = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubcrip();
    };
  }, []);

  const usersignOuts = () => {
    return signOut(auth);
  }

  const authData = {
    user,
    creatUser,
    loginUser,
    usersignOuts
  };
  return (
    <div>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
