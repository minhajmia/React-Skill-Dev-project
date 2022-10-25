import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
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
  const authInfo = { googleSignIn, user, logOut };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
