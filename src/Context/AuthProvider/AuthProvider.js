import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // google singIn
  const googleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // github singIn
  const githubSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // user management
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("use state", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // logOut
  const logOut = () => {
    return signOut(auth);
  };
  // register
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update user;
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const authInfo = {
    googleSignIn,
    user,
    logOut,
    register,
    githubSignIn,
    login,
    updateUserProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
