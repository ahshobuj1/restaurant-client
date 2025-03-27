import {createContext, useEffect, useState} from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {auth} from '../firebase/firebase';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const UserContext = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState([]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        console.log(currentUser);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOutUser,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{{children}}</AuthContext.Provider>
  );
};

export default UserContext;
