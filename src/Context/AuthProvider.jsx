import { useEffect, useState } from "react";
import { AuthContext } from "../Utils/AuthContext";
import auth from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth).finally(() => {
      setLoading(false);
    });
  };

  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const githubAuth = () => {
    const provider = new GithubAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email;
      const loggedUser = { email: userEmail };

      setUser(currentUser);
      setLoading(false);
      // if current user exist issue a token
      if (currentUser) {
        axios.post("https://car-doctor-server-murex-gamma.vercel.app/login", loggedUser, {
          withCredentials: true,
        });
      } else {
        axios.post(
          "https://car-doctor-server-murex-gamma.vercel.app/logout",
          {},
          {
            withCredentials: true,
          }
        );
      }
    });
    return () => unsubscribe();
  }, []);

  const authProperties = {
    user,
    registerUser,
    loginUser,
    logoutUser,
    loading,
    setLoading,
    googleAuth,
    githubAuth,
  };

  return (
    <AuthContext.Provider value={authProperties}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
