import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthChanged } from 'firebase/auth';
import { auth } from '../configs/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    variant: 'danger',
    msg: 'Enter a strong password',
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const [APIData, setAPIData]=useState();
  const [restoCloudData, setRestoCloudData] = useState();

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        alert,
        setAlert,
        user,
        setUser,
        APIData,
        setAPIData,
        restoCloudData,
        setRestoCloudData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const AppState = () => {
  return useContext(AppContext);
};
