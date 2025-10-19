import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider 
} from "firebase/auth";
import { auth } from "../firebase/fierbase";


const googleprovider = new GoogleAuthProvider();
const gitHubprovider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const creatUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLoging = () => {
    return signInWithPopup(auth, googleprovider);
  }
  const githubLoging = () => {
    return signInWithPopup(auth,  gitHubprovider);
  }

  useEffect(() => {
    const unsubcrip = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });

    return () => {
      unsubcrip();
    };
  }, []);

  const usersignOuts = () => {
    return signOut(auth);
  };
  const ubdeatUserProfile = (profile) => {
    
     
    return updateProfile(auth.currentUser,profile)
  }

  const authData = {
    user,
    creatUser,
    loginUser,
    usersignOuts,
    loding,
    setLoding,
    ubdeatUserProfile,
    setUser,
    googleLoging,
    githubLoging
  };
  return (
    <div>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
